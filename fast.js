// ===========================================================================
// MaturitaBoost · Fast Game (Supabase-only)
// Tables: exams(id,title,year) → snippets(id,content,exam_id) → questions(...)
// ===========================================================================
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://yyzvddiorocquktqlpep.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5enZkZGlvcm9jcXVrdHFscGVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0Njc1NjAsImV4cCI6MjA4NjA0MzU2MH0._Xpv1TDkXCYjA34CPnXzqDOIX84-0KRYpISoqZcid64";

const sb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ---------- Difficulty presets ----------
const DIFFICULTIES = {
    easy:   { label: "🟢 Ľahký",   totalTime: 25.0, zone10: 8.0,  zone5: 16.0, zone2: 21.0 },
    medium: { label: "🟡 Stredný", totalTime: 15.0, zone10: 5.0,  zone5: 10.0, zone2: 13.0 },
    hard:   { label: "🔴 Ťažký",   totalTime: 8.0,  zone10: 2.5,  zone5: 5.0,  zone2: 7.0  },
};

let difficulty = DIFFICULTIES.medium; // default

const MAX_MULT = 5;

// ---------- State ----------
const state = {
    snippets: [],
    seenIds: new Set(),
    current: null,
    ukazkaNumber: 0,
    sessionTotalScore: 0,
    questions: [],
    qIdx: 0,
    score: 0,
    correctCount: 0,
    wrongCount: 0,
    streak: 0,
    bestStreak: 0,
    times: [],
    rafId: null,
    startedAt: 0,
    locked: false,
};

const screens = {
    loading:    document.getElementById("screen-loading"),
    difficulty: document.getElementById("screen-difficulty"),
    reading:    document.getElementById("screen-reading"),
    playing:    document.getElementById("screen-playing"),
    stats:      document.getElementById("screen-stats"),
};

function showScreen(name) {
    Object.entries(screens).forEach(([k, el]) => {
        if (el) el.classList.toggle("active", k === name);
    });
}

// ===========================================================================
// LOAD SNIPPETS
// ===========================================================================
async function loadSnippets() {
    showScreen("loading");

    const { data, error } = await sb
        .from("snippets")
        .select("id, content, exam_id");

    if (error) {
        showError("Chyba pri načítaní ukážok: " + error.message);
        return;
    }
    if (!data || data.length === 0) {
        showError("V databáze nie sú žiadne ukážky.");
        return;
    }

    state.snippets = data;
    console.log("[fast] Loaded " + state.snippets.length + " snippets");
}

async function loadQuestionsForSnippet(snippetId) {
    const { data, error } = await sb
        .from("questions")
        .select("*")
        .eq("snippet_id", snippetId);

    if (error) {
        console.error("[fast] questions fetch error", error);
        return [];
    }

    return (data || [])
        .filter(r => r.question_type === "choice" && r.options && r.correct_answers)
        .map(r => ({
            question: r.question_text,
            choices: r.options,
            correct: Array.isArray(r.correct_answers) ? r.correct_answers[0] : r.correct_answers,
        }));
}

function showError(msg) {
    const el = document.getElementById("screen-loading");
    el.innerHTML = "<div class=\"loader-card\"><p style=\"font-size:18px\">⚠️ " + msg + "</p><a href=\"./index.html\" class=\"btn\" style=\"margin-top:14px\">Späť na mapu</a></div>";
    showScreen("loading");
}

// ===========================================================================
// DIFFICULTY SCREEN
// ===========================================================================
function showDifficultyScreen() {
    showScreen("difficulty");
}

document.querySelectorAll(".diff-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const key = btn.dataset.diff;
        difficulty = DIFFICULTIES[key];

        // update rules panel text
        document.getElementById("rules-time").textContent = difficulty.totalTime;
        document.getElementById("rules-z10").textContent = difficulty.zone10;
        document.getElementById("rules-z5").textContent = difficulty.zone10 + "–" + difficulty.zone5;
        document.getElementById("rules-z2").textContent = difficulty.zone5 + "–" + difficulty.zone2;

        // highlight selected
        document.querySelectorAll(".diff-btn").forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");

        startReading();
    });
});

// ===========================================================================
// FLOW
// ===========================================================================
async function pickRandomSnippet() {
    let pool = state.snippets.filter(s => !state.seenIds.has(s.id));
    if (pool.length === 0) {
        state.seenIds.clear();
        pool = state.snippets;
    }
    const s = pool[Math.floor(Math.random() * pool.length)];
    state.seenIds.add(s.id);

    showScreen("loading");
    const questions = await loadQuestionsForSnippet(s.id);
    return { ...s, questions };
}

async function startReading() {
    const snippet = await pickRandomSnippet();
    if (!snippet) { showError("Nepodarilo sa načítať ukážku."); return; }
    if (!snippet.questions || snippet.questions.length === 0) {
        if (state.snippets.length > 1) return startReading();
        showError("Pre dostupné ukážky nie sú žiadne otázky typu 'choice'.");
        return;
    }

    state.current = snippet;
    state.ukazkaNumber += 1;

    document.getElementById("ukazka-number").textContent = state.ukazkaNumber;
    document.getElementById("ukazka-title").textContent = "Ukážka " + state.ukazkaNumber;
    document.getElementById("ukazka-text").textContent = snippet.content;

    // sync rules panel with current difficulty
    document.getElementById("rules-time").textContent = difficulty.totalTime;
    document.getElementById("rules-z10").textContent = difficulty.zone10;
    document.getElementById("rules-z5").textContent = difficulty.zone10 + "–" + difficulty.zone5;
    document.getElementById("rules-z2").textContent = difficulty.zone5 + "–" + difficulty.zone2;

    showScreen("reading");
}

function startGame() {
    const all = state.current.questions.slice();
    for (let i = all.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [all[i], all[j]] = [all[j], all[i]];
    }
    state.questions = all;
    state.qIdx = 0;
    state.score = 0;
    state.correctCount = 0;
    state.wrongCount = 0;
    state.streak = 0;
    state.bestStreak = 0;
    state.times = [];

    document.getElementById("hud-q-total").textContent = state.questions.length;
    showScreen("playing");

    // Fill ukážka column with full snippet text
    const hintEl = document.getElementById("ukazka-hint-text");
    if (hintEl && state.current) {
        hintEl.textContent = state.current.content || "";
    }

    renderQuestion();
}

function renderQuestion() {
    if (state.qIdx >= state.questions.length) { endUkazka(); return; }
    state.locked = false;
    const q = state.questions[state.qIdx];

    document.getElementById("hud-q-current").textContent = state.qIdx + 1;
    document.getElementById("hud-score").textContent = state.score;
    updateStreakUI();

    document.getElementById("question-text").textContent = q.question;

    const grid = document.getElementById("choices-grid");
    grid.innerHTML = "";
    Object.entries(q.choices).forEach(([key, val], i) => {
        const btn = document.createElement("button");
        btn.className = "choice-btn";
        btn.type = "button";
        btn.dataset.key = key;
        btn.style.animationDelay = i * 60 + "ms";
        btn.setAttribute("data-testid", "choice-" + key);
        btn.innerHTML = "<span class=\"choice-key\">" + key + "</span><span class=\"choice-text\">" + escapeHTML(val) + "</span>";
        btn.addEventListener("click", () => handleAnswer(key, btn));
        grid.appendChild(btn);
    });

    const card = document.getElementById("question-card");
    card.classList.remove("anim-in"); void card.offsetWidth; card.classList.add("anim-in");

    startTimer();
}

function startTimer() {
    state.startedAt = performance.now();
    const fill = document.getElementById("timer-fill");
    const ptsEl = document.getElementById("timer-points");
    const secEl = document.getElementById("timer-seconds");

    function tick(now) {
        const elapsed = (now - state.startedAt) / 1000;
        const remaining = Math.max(0, difficulty.totalTime - elapsed);
        const percent = (remaining / difficulty.totalTime) * 100;
        fill.style.width = percent + "%";

        const pts = pointsForTime(elapsed);
        ptsEl.textContent = pts;
        secEl.textContent = remaining.toFixed(1);
        fill.className = "timer-fill zone-color-" + pts;

        if (elapsed >= difficulty.totalTime) { timeoutAnswer(); return; }
        state.rafId = requestAnimationFrame(tick);
    }
    state.rafId = requestAnimationFrame(tick);
}

function stopTimer() {
    if (state.rafId) cancelAnimationFrame(state.rafId);
    state.rafId = null;
}

function pointsForTime(elapsed) {
    if (elapsed < difficulty.zone10) return 10;
    if (elapsed < difficulty.zone5)  return 5;
    if (elapsed < difficulty.zone2)  return 2;
    return 0;
}

function handleAnswer(key, btn) {
    if (state.locked) return;
    state.locked = true;
    stopTimer();

    const q = state.questions[state.qIdx];
    const elapsed = (performance.now() - state.startedAt) / 1000;
    state.times.push(elapsed);

    if (String(key) === String(q.correct)) {
        const base = pointsForTime(elapsed);
        const mult = Math.min(MAX_MULT, state.streak + 1);
        const got = base * mult;
        state.score += got;
        state.correctCount += 1;
        state.streak += 1;
        if (state.streak > state.bestStreak) state.bestStreak = state.streak;

        btn.classList.add("correct");
        showFloating("+" + got + (mult > 1 ? " (×" + mult + ")" : ""), "correct");
        triggerStreakFlash(state.streak);
    } else {
        btn.classList.add("wrong");
        const right = document.querySelector(".choice-btn[data-key=\"" + q.correct + "\"]");
        if (right) right.classList.add("reveal-correct");
        state.wrongCount += 1;
        state.streak = 0;
        showFloating("+0 · streak reset", "wrong");
        triggerStreakFlash(0);
    }
    updateStreakUI();
    document.getElementById("hud-score").textContent = state.score;
    setTimeout(nextQuestion, 900);
}

function timeoutAnswer() {
    if (state.locked) return;
    state.locked = true;
    stopTimer();

    const q = state.questions[state.qIdx];
    state.times.push(difficulty.totalTime);
    state.wrongCount += 1;
    state.streak = 0;
    const right = document.querySelector(".choice-btn[data-key=\"" + q.correct + "\"]");
    if (right) right.classList.add("reveal-correct");
    showFloating("⏱️ Čas vypršal!", "wrong");
    updateStreakUI();
    triggerStreakFlash(0);
    setTimeout(nextQuestion, 1000);
}

function nextQuestion() {
    state.qIdx += 1;
    renderQuestion();
}

// ===========================================================================
// STREAK FLASH — full-screen edge glow + floating badge
// ===========================================================================

const STREAK_LABELS = ["", "🔥 Streak!", "🔥🔥 x2!", "💥 x3!", "⚡ x4!!", "🌋 x5!!!"];

function streakClass(n) {
    if (n >= 5) return "streak-5";
    if (n >= 4) return "streak-4";
    if (n >= 3) return "streak-3";
    if (n >= 2) return "streak-2";
    return "streak-1";
}

function triggerStreakFlash(streak) {
    updateStreakBg(streak);
    if (streak > 0) spawnStreakBadge(streak);
}

function updateStreakBg(streak) {
    const body = document.body;
    body.classList.remove("streak-bg-1","streak-bg-2","streak-bg-3","streak-bg-4","streak-bg-5");
    if (streak >= 1) body.classList.add("streak-bg-" + Math.min(streak, 5));
    // Start/stop fire animation
    if (streak >= 3) startFire(streak);
    else stopFire();
}

// ===========================================================================
// FIRE CANVAS
// ===========================================================================
let fireAnim = null;
let fireIntensity = 0; // 0..1 target
let fireIntensityCur = 0;

function startFire(streak) {
    const targets = { 3: 0.38, 4: 0.68, 5: 1.0 };
    fireIntensity = targets[Math.min(streak, 5)] ?? 1.0;

    const canvas = document.getElementById("streak-fire-canvas");
    if (!canvas) return;

    // If already running, just update intensity
    if (fireAnim) return;

    function resize() {
        canvas.width  = window.innerWidth;
        canvas.height = Math.floor(window.innerHeight * 0.40);
    }
    resize();

    const ctx = canvas.getContext("2d");

    // Doom-style fire palette: transparent → deep red → orange → yellow
    const palette = [];
    for (let i = 0; i < 256; i++) {
        let r, g, b, a;
        if (i < 20)       { r=0;   g=0;  b=0;  a=0; }
        else if (i < 80)  { r=Math.floor((i-20)*4); g=0;  b=0; a=Math.floor((i-20)*3); }
        else if (i < 140) { r=240; g=Math.floor((i-80)*3); b=0; a=180+Math.floor((i-80)*1.2); }
        else if (i < 200) { r=255; g=140+Math.floor((i-140)*1.9); b=0; a=220; }
        else              { r=255; g=220; b=Math.floor((i-200)*5); a=230; }
        palette.push([Math.min(r,255), Math.min(g,255), Math.min(b,255), Math.min(a,255)]);
    }

    const SCALE = 4;
    let W = canvas.width, H = canvas.height;
    let COLS = Math.ceil(W / SCALE);
    let ROWS = Math.ceil(H / SCALE) + 2;
    let fire = new Uint8Array(COLS * ROWS);
    let imgData = ctx.createImageData(W, H);

    function seedBottom() {
        const t = fireIntensityCur;
        const base = (ROWS - 1) * COLS;
        for (let x = 0; x < COLS; x++) {
            fire[base + x] = Math.random() < t
                ? Math.floor(160 + Math.random() * 95 * t)
                : Math.floor(Math.random() * 30);
        }
    }

    function spreadFire() {
        for (let y = 0; y < ROWS - 1; y++) {
            for (let x = 0; x < COLS; x++) {
                const below = (y + 1) * COLS + x;
                const decay = Math.floor(Math.random() * 3);
                const drift = Math.floor(Math.random() * 3) - 1;
                const dst = y * COLS + x + drift;
                if (dst >= y * COLS && dst < (y + 1) * COLS) {
                    fire[dst] = Math.max(0, fire[below] - decay);
                } else {
                    fire[y * COLS + x] = Math.max(0, fire[below] - decay);
                }
            }
        }
    }

    function render() {
        fireIntensityCur += (fireIntensity - fireIntensityCur) * 0.05;

        // Re-check canvas size
        const newW = window.innerWidth;
        const newH = Math.floor(window.innerHeight * 0.40);
        if (newW !== W || newH !== H) {
            canvas.width = newW; canvas.height = newH;
            W = newW; H = newH;
            COLS = Math.ceil(W / SCALE); ROWS = Math.ceil(H / SCALE) + 2;
            fire = new Uint8Array(COLS * ROWS);
            imgData = ctx.createImageData(W, H);
        }

        seedBottom();
        spreadFire();

        // Render: row 0 = top of canvas (coolest), last row = bottom (hottest)
        for (let y = 0; y < H; y++) {
            const gridY = Math.floor(y / SCALE);
            // Fade alpha toward top of canvas
            const topFade = y / H;
            for (let x = 0; x < W; x++) {
                const gridX = Math.floor(x / SCALE);
                const heat = fire[gridY * COLS + gridX] ?? 0;
                const [r, g, b, a] = palette[heat] ?? [0,0,0,0];
                const px = (y * W + x) * 4;
                imgData.data[px]   = r;
                imgData.data[px+1] = g;
                imgData.data[px+2] = b;
                imgData.data[px+3] = Math.floor(a * topFade);
            }
        }
        ctx.putImageData(imgData, 0, 0);
        fireAnim = requestAnimationFrame(render);
    }

    fireAnim = requestAnimationFrame(render);
}

function stopFire() {
    if (fireAnim) { cancelAnimationFrame(fireAnim); fireAnim = null; }
    fireIntensityCur = 0;
    const canvas = document.getElementById("streak-fire-canvas");
    if (canvas) {
        if (canvas._resizeHandler) window.removeEventListener("resize", canvas._resizeHandler);
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvas.classList.remove("cinematic");
    }
}

function spawnStreakBadge(streak) {
    const label = STREAK_LABELS[Math.min(streak, 5)] || ("🔥 x" + streak + "!");
    const cls   = "s" + Math.min(streak, 5);

    const badge = document.createElement("div");
    badge.className = "streak-badge-popup " + cls;
    badge.textContent = label;

    // Random position: avoid very edges (10%–80% horizontal, 15%–70% vertical)
    const x = 10 + Math.random() * 70;
    const y = 15 + Math.random() * 55;
    badge.style.left = x + "vw";
    badge.style.top  = y + "vh";

    document.body.appendChild(badge);

    // Remove after animation
    setTimeout(() => badge.remove(), 1000);
}

function updateStreakUI() {
    const el   = document.getElementById("hud-streak");
    const mult = document.getElementById("hud-mult");
    const pill = document.getElementById("streak-pill");
    el.textContent = state.streak;
    const nextMult = Math.min(MAX_MULT, state.streak + 1);
    mult.textContent = "×" + nextMult;
    pill.classList.toggle("hot",     state.streak >= 2);
    pill.classList.toggle("blazing", state.streak >= 4);

    updateStreakBg(state.streak);
}

function showFloating(text, kind) {
    const el = document.getElementById("floating-feedback");
    el.textContent = text;
    el.className = "floating-feedback show " + kind;
    setTimeout(() => el.classList.remove("show"), 800);
}

// ===========================================================================
// END / STATS
// ===========================================================================
function endUkazka() {
    state.sessionTotalScore += state.score;

    const totalQ   = state.questions.length || 1;
    const avgTime  = state.times.length ? (state.times.reduce((a, b) => a + b, 0) / state.times.length) : 0;
    const accuracy = Math.round((state.correctCount / totalQ) * 100);

    document.getElementById("stats-score").textContent         = state.score;
    document.getElementById("stats-correct").textContent       = state.correctCount;
    document.getElementById("stats-wrong").textContent         = state.wrongCount;
    document.getElementById("stats-streak").textContent        = state.bestStreak;
    document.getElementById("stats-avg-time").textContent      = avgTime.toFixed(1);
    document.getElementById("stats-accuracy").textContent      = accuracy;
    document.getElementById("stats-total-session").textContent = state.sessionTotalScore;

    const hasStreak = state.bestStreak >= 1;
    const panels = [
        document.querySelector(".game-hud"),
        document.querySelector(".timer-wrap"),
        document.getElementById("question-card"),
        document.querySelector(".ukazka-col"),
    ].filter(Boolean);

    function doShowStats() {
        panels.forEach(el => {
            el.classList.remove("game-cinematic-out", "game-fade-out");
            el.style.opacity = "";
        });
        updateStreakBg(0);
        stopFire();
        showScreen("stats");
        saveScoreToLeaderboard(state.score);
    }

    if (hasStreak) {
        // Activate max streak background (stage 5) — that's it
        updateStreakBg(5);

        // Panels fly out with drama
        panels.forEach((el, i) => {
            el.style.animationDelay = (i * 80) + "ms";
            el.classList.add("game-cinematic-out");
        });

        setTimeout(doShowStats, 1400);
    } else {
        // No streak — everything just fades out quietly, ukážka included
        panels.forEach(el => el.classList.add("game-fade-out"));
        setTimeout(doShowStats, 750);
    }
}

async function saveScoreToLeaderboard(score) {
    try {
        const name = localStorage.getItem("player_name");
        if (!name || !score || score <= 0) return;

        // Read existing best fast_score for this player from leaderboard
        const { data: existing } = await sb
            .from("leaderboard")
            .select("fast_score")
            .eq("name", name)
            .order("score", { ascending: false })
            .limit(1)
            .maybeSingle();

        const existingBest = existing?.fast_score ?? 0;

        // Only update if this score beats the previous best
        if (score > existingBest) {
            // Update fast_score on the row with the highest map score for this name
            const { data: topRow } = await sb
                .from("leaderboard")
                .select("id")
                .eq("name", name)
                .order("score", { ascending: false })
                .limit(1)
                .maybeSingle();

            if (topRow) {
                const { error } = await sb
                    .from("leaderboard")
                    .update({ fast_score: score })
                    .eq("id", topRow.id);
                if (error) console.warn("[fast] fast_score update error", error.message);
                else console.log("[fast] New best fast score saved:", score);
            }
        } else {
            console.log("[fast] Score", score, "did not beat best", existingBest, "— not saving");
        }
    } catch (e) {
        console.warn("[fast] save score failed", e?.message || e);
    }
}

// ---------- Utils ----------
function escapeHTML(s) {
    return String(s).replace(/[&<>"']/g, c => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));
}

// ---------- Init ----------
document.getElementById("start-game-btn").addEventListener("click", startGame);
document.getElementById("next-ukazka-btn").addEventListener("click", () => showDifficultyScreen());

(async function init() {
    await loadSnippets();
    if (state.snippets.length > 0) showDifficultyScreen();
})();
