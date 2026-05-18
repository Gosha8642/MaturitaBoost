// ===========================================================================
// MaturitaBoost · Fast Game (Supabase-only)
// Tables: exams(id,title,year) → snippets(id,content,exam_id) → questions(...)
// ===========================================================================
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://yyzvddiorocquktqlpep.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5enZkZGlvcm9jcXVrdHFscGVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0Njc1NjAsImV4cCI6MjA4NjA0MzU2MH0._Xpv1TDkXCYjA34CPnXzqDOIX84-0KRYpISoqZcid64";

const sb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ---------- Config ----------
const TOTAL_TIME = 15.0;
const ZONE_10 = 5.0;
const ZONE_5  = 10.0;
const ZONE_2  = 13.0;
const MAX_MULT = 5;

// ---------- State ----------
const state = {
    snippets: [],          // [{ id, content, exam_id }]
    seenIds: new Set(),
    current: null,         // { id, content, questions[] }
    ukazkaNumber: 0,
    sessionTotalScore: 0,
    // per-game
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
    loading: document.getElementById("screen-loading"),
    reading: document.getElementById("screen-reading"),
    playing: document.getElementById("screen-playing"),
    stats:   document.getElementById("screen-stats"),
};

function showScreen(name) {
    Object.entries(screens).forEach(([k, el]) => el.classList.toggle("active", k === name));
}

// ===========================================================================
// LOAD SNIPPETS (all available ukázky from all exams)
// ===========================================================================
async function loadSnippets() {
    showScreen("loading");

    const { data, error } = await sb
        .from("snippets")
        .select("id, content, exam_id");

    if (error) {
        console.error("[fast] snippets fetch error", error);
        showError("Chyba pri načítaní ukážok: " + error.message);
        return;
    }
    if (!data || data.length === 0) {
        showError("V databáze nie sú žiadne ukážky.");
        return;
    }

    state.snippets = data;
    console.log(`[fast] Loaded ${state.snippets.length} snippets`);
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

    // Pre Fast Game potrebujeme len 'choice' otázky
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
    el.innerHTML = `<div class="loader-card"><p style="font-size:18px">⚠️ ${msg}</p><a href="./index.html" class="btn" style="margin-top:14px">Späť na mapu</a></div>`;
    showScreen("loading");
}

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
        // ukážka has no choice questions — skip and try another
        if (state.snippets.length > 1) return startReading();
        showError("Pre dostupné ukážky nie sú žiadne otázky typu 'choice'.");
        return;
    }

    state.current = snippet;
    state.ukazkaNumber += 1;

    document.getElementById("ukazka-number").textContent = state.ukazkaNumber;
    document.getElementById("ukazka-title").textContent = `Ukážka ${state.ukazkaNumber}`;
    document.getElementById("ukazka-text").textContent = snippet.content;

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
        btn.style.animationDelay = `${i * 60}ms`;
        btn.setAttribute("data-testid", `choice-${key}`);
        btn.innerHTML = `<span class="choice-key">${key}</span><span class="choice-text">${escapeHTML(val)}</span>`;
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
        const remaining = Math.max(0, TOTAL_TIME - elapsed);
        const percent = (remaining / TOTAL_TIME) * 100;
        fill.style.width = percent + "%";

        const pts = pointsForTime(elapsed);
        ptsEl.textContent = pts;
        secEl.textContent = remaining.toFixed(1);
        fill.className = "timer-fill zone-color-" + pts;

        if (elapsed >= TOTAL_TIME) { timeoutAnswer(); return; }
        state.rafId = requestAnimationFrame(tick);
    }
    state.rafId = requestAnimationFrame(tick);
}

function stopTimer() {
    if (state.rafId) cancelAnimationFrame(state.rafId);
    state.rafId = null;
}

function pointsForTime(elapsed) {
    if (elapsed < ZONE_10) return 10;
    if (elapsed < ZONE_5)  return 5;
    if (elapsed < ZONE_2)  return 2;
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
        showFloating(`+${got}${mult > 1 ? ` (×${mult})` : ""}`, "correct");
    } else {
        btn.classList.add("wrong");
        const right = document.querySelector(`.choice-btn[data-key="${q.correct}"]`);
        if (right) right.classList.add("reveal-correct");
        state.wrongCount += 1;
        state.streak = 0;
        showFloating("+0 · streak reset", "wrong");
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
    state.times.push(TOTAL_TIME);
    state.wrongCount += 1;
    state.streak = 0;
    const right = document.querySelector(`.choice-btn[data-key="${q.correct}"]`);
    if (right) right.classList.add("reveal-correct");
    showFloating("⏱️ Čas vypršal!", "wrong");
    updateStreakUI();
    setTimeout(nextQuestion, 1000);
}

function nextQuestion() {
    state.qIdx += 1;
    renderQuestion();
}

function updateStreakUI() {
    const el = document.getElementById("hud-streak");
    const mult = document.getElementById("hud-mult");
    const pill = document.getElementById("streak-pill");
    el.textContent = state.streak;
    const nextMult = Math.min(MAX_MULT, state.streak + 1);
    mult.textContent = "×" + nextMult;
    pill.classList.toggle("hot", state.streak >= 2);
    pill.classList.toggle("blazing", state.streak >= 4);
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

    const totalQ = state.questions.length || 1;
    const avgTime = state.times.length ? (state.times.reduce((a, b) => a + b, 0) / state.times.length) : 0;
    const accuracy = Math.round((state.correctCount / totalQ) * 100);

    document.getElementById("stats-score").textContent = state.score;
    document.getElementById("stats-correct").textContent = state.correctCount;
    document.getElementById("stats-wrong").textContent = state.wrongCount;
    document.getElementById("stats-streak").textContent = state.bestStreak;
    document.getElementById("stats-avg-time").textContent = avgTime.toFixed(1);
    document.getElementById("stats-accuracy").textContent = accuracy;
    document.getElementById("stats-total-session").textContent = state.sessionTotalScore;

    showScreen("stats");
    saveScoreToLeaderboard(state.score);
}

async function saveScoreToLeaderboard(delta) {
    try {
        const name = localStorage.getItem("player_name");
        const sessionId = localStorage.getItem("leaderboard_session_id");
        if (!name || !sessionId || !delta || delta <= 0) return;
        await sb.rpc("upsert_score_session", {
            p_session_id: sessionId,
            p_name: name,
            p_delta: delta,
        });
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
document.getElementById("next-ukazka-btn").addEventListener("click", () => startReading());

(async function init() {
    await loadSnippets();
    if (state.snippets.length > 0) await startReading();
})();
