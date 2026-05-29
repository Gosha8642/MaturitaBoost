// ===========================================================================
// MaturitaBoost · Pixel Character System
// ===========================================================================

export const SKINS = [
  // ── FREE ──────────────────────────────────────────────────────────────────
  {
    id: "default",
    name: "Študent",
    desc: "Klasický outfit každého maturanta",
    price: 0, rarity: "free",
    hat: null, outfit: "blue", extras: [],
  },

  // ── COMMON ────────────────────────────────────────────────────────────────
  {
    id: "sporty",
    name: "Športovec",
    desc: "Tréningová súprava, vždy ready",
    price: 30, rarity: "common",
    hat: "cap", outfit: "red", extras: [],
  },
  {
    id: "nerd",
    name: "Nerd",
    desc: "Okuliare +100 k inteligencii",
    price: 40, rarity: "common",
    hat: null, outfit: "green", extras: ["glasses"],
  },
  {
    id: "sailor",
    name: "Námorník",
    desc: "Plávame cez maturitu",
    price: 50, rarity: "common",
    hat: "sailor_hat", outfit: "navy", extras: [],
  },
  {
    id: "farmer",
    name: "Farmár",
    desc: "Zem pod nohami, pero v ruke",
    price: 45, rarity: "common",
    hat: "straw_hat", outfit: "brown", extras: [],
  },

  // ── RARE ──────────────────────────────────────────────────────────────────
  {
    id: "wizard",
    name: "Mág",
    desc: "Tajomný čarodejník vedomostí",
    price: 80, rarity: "rare",
    hat: "wizard", outfit: "purple", extras: ["stars"],
  },
  {
    id: "hacker",
    name: "Hacker",
    desc: "Dark mode activated 💀",
    price: 120, rarity: "rare",
    hat: "cap", outfit: "dark", extras: ["glasses"],
  },
  {
    id: "detective",
    name: "Detektív",
    desc: "Nikdy sa nevzdám záhady",
    price: 100, rarity: "rare",
    hat: "fedora", outfit: "trench", extras: [],
  },
  {
    id: "viking",
    name: "Vikingovia",
    desc: "Dobývame maturitu so cťou",
    price: 110, rarity: "rare",
    hat: "horns", outfit: "viking", extras: ["beard"],
  },
  {
    id: "cowboy",
    name: "Kovboj",
    desc: "Divý západ je naša trieda",
    price: 90, rarity: "rare",
    hat: "cowboy", outfit: "brown", extras: [],
  },
  {
    id: "astronaut",
    name: "Astronaut",
    desc: "Maturita je vesmírna misia",
    price: 130, rarity: "rare",
    hat: "helmet", outfit: "spacesuit", extras: [],
  },

  // ── EPIC ──────────────────────────────────────────────────────────────────
  {
    id: "king",
    name: "Kráľ",
    desc: "Zlatá koruna, zlaté srdce",
    price: 200, rarity: "epic",
    hat: "crown", outfit: "gold", extras: ["cape"],
  },
  {
    id: "ninja",
    name: "Ninja",
    desc: "Rýchly ako vietor, tichý ako test",
    price: 160, rarity: "epic",
    hat: "headband", outfit: "black", extras: ["mask"],
  },
  {
    id: "robot",
    name: "Robot",
    desc: "Procesor namiesto mozgu",
    price: 180, rarity: "epic",
    hat: "antennae", outfit: "metal", extras: ["visor"],
  },
  {
    id: "samurai",
    name: "Samuraj",
    desc: "Česť nad všetko, aj nad maturitu",
    price: 220, rarity: "epic",
    hat: "kabuto", outfit: "crimson", extras: ["mask"],
  },
  {
    id: "pirate",
    name: "Pirát",
    desc: "Lúpim body, nie lode",
    price: 190, rarity: "epic",
    hat: "pirate", outfit: "pirate_coat", extras: ["eyepatch"],
  },

  // ── LEGENDARY ─────────────────────────────────────────────────────────────
  {
    id: "dragon",
    name: "Drak",
    desc: "Ohnivý duch slobody",
    price: 350, rarity: "legendary",
    hat: "dragon_horns", outfit: "dragon", extras: ["wings", "fire"],
  },
  {
    id: "angel",
    name: "Anjel",
    desc: "Požehnaný znalosťami",
    price: 400, rarity: "legendary",
    hat: "halo", outfit: "white", extras: ["wings"],
  },
  {
    id: "phantom",
    name: "Fantóm",
    desc: "Existujem, ale ťa nevidím",
    price: 500, rarity: "legendary",
    hat: null, outfit: "phantom", extras: ["ghost_trail", "mask"],
  },

  // ── SECRET ────────────────────────────────────────────────────────────────
  {
    id: "secret_hacker_god",
    name: "???",
    desc: "Nedostupné",
    price: 0, rarity: "secret",
    hat: "cap", outfit: "matrix", extras: ["glasses", "stars"],
    secret: true,
    unlockHint: "Dosiahni 1000 🪙 celkovo",
  },
  {
    id: "secret_maturant",
    name: "???",
    desc: "Nedostupné",
    price: 0, rarity: "secret",
    hat: "crown", outfit: "rainbow", extras: ["cape", "stars", "fire"],
    secret: true,
    unlockHint: "Buď #1 na rebríčku",
  },
];

// ---------- PALETTE ----------
const C = {
  skin:     "#f5c5a3",
  skinDark: "#e0a882",
  hair:     "#3d2b1f",
  eye:      "#1a1a2e",
  white:    "#ffffff",
  black:    "#000000",

  // outfits (body, dark, light)
  blue:        { body: "#3b82f6", dark: "#1d4ed8",  light: "#93c5fd" },
  red:         { body: "#ef4444", dark: "#b91c1c",  light: "#fca5a5" },
  green:       { body: "#22c55e", dark: "#15803d",  light: "#86efac" },
  purple:      { body: "#7c3aed", dark: "#5b21b6",  light: "#c4b5fd" },
  dark:        { body: "#1e293b", dark: "#0f172a",  light: "#475569" },
  gold:        { body: "#f59e0b", dark: "#b45309",  light: "#fde68a" },
  black:       { body: "#18181b", dark: "#09090b",  light: "#3f3f46" },
  navy:        { body: "#1e3a5f", dark: "#0f172a",  light: "#93c5fd" },
  brown:       { body: "#92400e", dark: "#78350f",  light: "#d97706" },
  trench:      { body: "#6b7280", dark: "#374151",  light: "#9ca3af" },
  viking:      { body: "#7f1d1d", dark: "#450a0a",  light: "#fca5a5" },
  spacesuit:   { body: "#e2e8f0", dark: "#94a3b8",  light: "#ffffff" },
  metal:       { body: "#64748b", dark: "#334155",  light: "#cbd5e1" },
  crimson:     { body: "#be123c", dark: "#881337",  light: "#fda4af" },
  pirate_coat: { body: "#1c1917", dark: "#0c0a09",  light: "#44403c" },
  dragon:      { body: "#dc2626", dark: "#7f1d1d",  light: "#fca5a5" },
  white:       { body: "#f8fafc", dark: "#cbd5e1",  light: "#ffffff" },
  phantom:     { body: "#312e81", dark: "#1e1b4b",  light: "#818cf8" },
  matrix:      { body: "#052e16", dark: "#14532d",  light: "#4ade80" },
  rainbow:     { body: "#a855f7", dark: "#7e22ce",  light: "#f0abfc" },

  // accessory colours
  wizard_hat:  "#6d28d9",
  cap_brim:    "#111827",
  crown:       "#fbbf24",
  headband:    "#dc2626",
  glasses:     "#374151",
  cape_outer:  "#7c3aed",
  cape_inner:  "#4c1d95",
  star:        "#fde68a",
  mask:        "#1c1917",
  sailor_brim: "#1e3a5f",
  straw:       "#ca8a04",
  fedora_col:  "#1f2937",
  horn_col:    "#d97706",
  beard_col:   "#7f1d1d",
  cowboy_col:  "#92400e",
  helmet_col:  "#94a3b8",
  antennae_c:  "#6b7280",
  visor_col:   "#38bdf8",
  kabuto_col:  "#be123c",
  pirate_col:  "#1c1917",
  eyepatch_c:  "#000000",
  halo_col:    "#fde68a",
  wing_col:    "#f8fafc",
  dragon_h:    "#dc2626",
  fire_col:    "#f97316",
  ghost_col:   "#a5b4fc",
};

// ---------- PRIMITIVES ----------
function pixel(ctx, s, col, row, color) {
  if (!color) return;
  ctx.fillStyle = color;
  ctx.fillRect(col * s, row * s, s, s);
}
function rect(ctx, s, col, row, w, h, color) {
  if (!color) return;
  ctx.fillStyle = color;
  ctx.fillRect(col * s, row * s, w * s, h * s);
}

// ---------- BASE BODY ----------
function drawBase(ctx, s, skin) {
  const o = C[skin.outfit] || C.blue;

  // head
  rect(ctx, s, 5,1, 6,6, C.skin);
  rect(ctx, s, 5,1, 6,2, C.hair);
  rect(ctx, s, 5,2, 1,1, C.hair);
  rect(ctx, s, 10,2, 1,1, C.hair);
  pixel(ctx, s, 6, 4, C.eye);
  pixel(ctx, s, 9, 4, C.eye);
  pixel(ctx, s, 7, 6, C.skinDark);
  pixel(ctx, s, 8, 6, C.skinDark);

  // neck
  rect(ctx, s, 7,7, 2,1, C.skin);

  // body
  rect(ctx, s, 4,8, 8,6, o.body);
  rect(ctx, s, 7,8, 2,2, o.light);
  rect(ctx, s, 6,8, 1,1, o.dark);
  rect(ctx, s, 9,8, 1,1, o.dark);

  // arms
  rect(ctx, s, 2,8, 2,5, C.skin);
  rect(ctx, s, 12,8, 2,5, C.skin);
  rect(ctx, s, 4,8, 1,4, o.body);
  rect(ctx, s, 11,8, 1,4, o.body);
  pixel(ctx, s, 2, 13, C.skin); pixel(ctx, s, 3, 13, C.skin);
  pixel(ctx, s, 12, 13, C.skin); pixel(ctx, s, 13, 13, C.skin);

  // pants
  rect(ctx, s, 4,14, 8,6, o.dark);
  rect(ctx, s, 4,14, 8,1, C.hair);
  pixel(ctx, s, 7,14, "#fbbf24");
  rect(ctx, s, 4,16, 3,4, o.dark);
  rect(ctx, s, 9,16, 3,4, o.dark);

  // shoes
  rect(ctx, s, 3,20, 4,2, C.hair);
  rect(ctx, s, 9,20, 4,2, C.hair);
}

// ---------- HATS ----------
function drawWizardHat(ctx, s) {
  rect(ctx, s, 4,0, 8,1, C.wizard_hat);
  rect(ctx, s, 6,1, 4,1, C.wizard_hat);
  rect(ctx, s, 6,-3, 4,4, C.wizard_hat);
  pixel(ctx, s, 7,-4, C.wizard_hat); pixel(ctx, s, 8,-4, C.wizard_hat);
  pixel(ctx, s, 7,-2, C.star);
}
function drawCap(ctx, s) {
  rect(ctx, s, 4,1, 8,2, C.cap_brim);
  rect(ctx, s, 3,2, 1,1, C.cap_brim);
  rect(ctx, s, 2,3, 1,1, C.cap_brim);
}
function drawCrown(ctx, s) {
  rect(ctx, s, 4,1, 8,2, C.crown);
  pixel(ctx, s, 4,0, C.crown); pixel(ctx, s, 7,-1, C.crown); pixel(ctx, s, 11,0, C.crown);
  pixel(ctx, s, 6,1, "#ef4444"); pixel(ctx, s, 9,1, "#3b82f6");
}
function drawHeadband(ctx, s) {
  rect(ctx, s, 4,3, 8,1, C.headband);
  pixel(ctx, s, 11,2, C.headband); pixel(ctx, s, 11,4, C.headband);
}
function drawSailorHat(ctx, s) {
  rect(ctx, s, 4,0, 8,1, C.white); // brim
  rect(ctx, s, 5,1, 6,2, C.sailor_brim); // top blue
  rect(ctx, s, 3,0, 1,1, C.white); rect(ctx, s, 12,0, 1,1, C.white);
  pixel(ctx, s, 7,1, C.white); pixel(ctx, s, 8,1, C.white); // stripe
}
function drawStrawHat(ctx, s) {
  rect(ctx, s, 3,-1, 10,1, C.straw); // wide brim
  rect(ctx, s, 5,0, 6,3, C.straw);   // dome
  rect(ctx, s, 4,0, 1,1, "#a16207"); rect(ctx, s, 11,0, 1,1, "#a16207"); // band
  rect(ctx, s, 5,-1, 6,1, "#a16207"); // hat band stripe
}
function drawFedora(ctx, s) {
  rect(ctx, s, 3,0, 10,1, C.fedora_col); // brim
  rect(ctx, s, 5,1, 6,3, C.fedora_col);  // dome
  rect(ctx, s, 5,2, 6,1, "#374151");     // indent
  rect(ctx, s, 4,1, 1,1, C.fedora_col);
}
function drawHorns(ctx, s) {
  // viking horns on sides
  rect(ctx, s, 2,0, 2,3, C.horn_col);
  rect(ctx, s, 12,0, 2,3, C.horn_col);
  pixel(ctx, s, 2,-1, C.horn_col); pixel(ctx, s, 13,-1, C.horn_col);
  // helmet base
  rect(ctx, s, 4,0, 8,3, "#374151");
  rect(ctx, s, 4,2, 8,1, "#6b7280");
}
function drawCowboy(ctx, s) {
  rect(ctx, s, 3,0, 10,1, C.cowboy_col);
  rect(ctx, s, 5,1, 6,3, C.cowboy_col);
  rect(ctx, s, 3,0, 2,1, C.cowboy_col); rect(ctx, s, 11,0, 2,1, C.cowboy_col);
  pixel(ctx, s, 2,0, C.cowboy_col); pixel(ctx, s, 13,0, C.cowboy_col);
  rect(ctx, s, 5,1, 6,1, "#78350f"); // band
}
function drawHelmet(ctx, s) {
  rect(ctx, s, 4,-1, 8,4, C.helmet_col);
  rect(ctx, s, 3,0, 1,3, C.helmet_col); rect(ctx, s, 12,0, 1,3, C.helmet_col);
  rect(ctx, s, 4,3, 8,1, "#64748b");
  // visor glass
  rect(ctx, s, 5,1, 6,2, "rgba(100,220,255,0.35)");
  rect(ctx, s, 5,1, 6,1, "#38bdf8");
}
function drawAntennae(ctx, s) {
  pixel(ctx, s, 6,-4, C.antennae_c); pixel(ctx, s, 9,-4, C.antennae_c);
  pixel(ctx, s, 6,-3, C.antennae_c); pixel(ctx, s, 9,-3, C.antennae_c);
  pixel(ctx, s, 7,-2, C.antennae_c); pixel(ctx, s, 8,-2, C.antennae_c);
  // antenna balls
  pixel(ctx, s, 6,-5, "#fbbf24"); pixel(ctx, s, 9,-5, "#fbbf24");
  // robot head box
  rect(ctx, s, 4,1, 8,6, "#475569");
  rect(ctx, s, 5,1, 6,1, "#64748b"); // top
  pixel(ctx, s, 4,1, "#334155"); pixel(ctx, s, 11,1, "#334155");
  // robot eyes override
  pixel(ctx, s, 6,4, C.visor_col); pixel(ctx, s, 9,4, C.visor_col);
}
function drawKabuto(ctx, s) {
  rect(ctx, s, 4,0, 8,4, C.kabuto_col);
  rect(ctx, s, 3,1, 1,3, C.kabuto_col); rect(ctx, s, 12,1, 1,3, C.kabuto_col);
  rect(ctx, s, 4,4, 8,1, "#881337"); // cheek guards
  rect(ctx, s, 3,3, 10,1, "#be123c"); // brow plate
  pixel(ctx, s, 7,0, "#fbbf24"); pixel(ctx, s, 8,0, "#fbbf24"); // crest
  pixel(ctx, s, 7,-1, "#fbbf24"); pixel(ctx, s, 8,-1, "#fbbf24");
}
function drawPirateHat(ctx, s) {
  rect(ctx, s, 4,0, 8,4, C.pirate_col);
  rect(ctx, s, 3,0, 10,1, C.pirate_col); // brim
  pixel(ctx, s, 7,1, C.white); pixel(ctx, s, 8,1, C.white); // skull white
  pixel(ctx, s, 7,2, C.white); pixel(ctx, s, 8,2, C.white);
  pixel(ctx, s, 6,2, C.white); pixel(ctx, s, 9,2, C.white); // crossbones
}
function drawDragonHorns(ctx, s) {
  // big swept back horns
  pixel(ctx, s, 4,-3, C.dragon_h); pixel(ctx, s, 3,-4, C.dragon_h); pixel(ctx, s, 2,-3, C.dragon_h);
  pixel(ctx, s, 11,-3, C.dragon_h); pixel(ctx, s, 12,-4, C.dragon_h); pixel(ctx, s, 13,-3, C.dragon_h);
  rect(ctx, s, 4,0, 8,1, C.dragon_h); // spine on head
  pixel(ctx, s, 6,-1, C.dragon_h); pixel(ctx, s, 9,-1, C.dragon_h);
}
function drawHalo(ctx, s) {
  // glowing halo ring above head
  rect(ctx, s, 5,-3, 6,1, C.halo_col);
  pixel(ctx, s, 4,-2, C.halo_col); pixel(ctx, s, 11,-2, C.halo_col);
  pixel(ctx, s, 4,-3, C.halo_col); pixel(ctx, s, 11,-3, C.halo_col);
  // glow dots
  pixel(ctx, s, 6,-4, "rgba(253,230,138,0.6)"); pixel(ctx, s, 9,-4, "rgba(253,230,138,0.6)");
}

// ---------- FACE / BODY EXTRAS ----------
function drawGlasses(ctx, s) {
  rect(ctx, s, 5,4, 3,2, "rgba(0,200,255,0.3)");
  rect(ctx, s, 8,4, 3,2, "rgba(0,200,255,0.3)");
  pixel(ctx, s, 5,4, C.glasses); pixel(ctx, s, 7,4, C.glasses);
  pixel(ctx, s, 5,5, C.glasses); pixel(ctx, s, 7,5, C.glasses);
  pixel(ctx, s, 8,4, C.glasses); pixel(ctx, s, 10,4, C.glasses);
  pixel(ctx, s, 8,5, C.glasses); pixel(ctx, s, 10,5, C.glasses);
  pixel(ctx, s, 4,4, C.glasses); pixel(ctx, s, 11,4, C.glasses);
}
function drawMask(ctx, s) {
  rect(ctx, s, 5,5, 6,2, C.mask);
  pixel(ctx, s, 6,4, C.mask); pixel(ctx, s, 7,4, C.mask);
  pixel(ctx, s, 8,4, C.mask); pixel(ctx, s, 9,4, C.mask);
  pixel(ctx, s, 6,5, "#dc2626"); pixel(ctx, s, 9,5, "#dc2626");
}
function drawVisor(ctx, s) {
  rect(ctx, s, 5,3, 6,3, "rgba(56,189,248,0.25)");
  rect(ctx, s, 5,3, 6,1, C.visor_col);
  pixel(ctx, s, 4,3, C.visor_col); pixel(ctx, s, 11,3, C.visor_col);
}
function drawEyepatch(ctx, s) {
  pixel(ctx, s, 6,4, C.eyepatch_c); pixel(ctx, s, 7,4, C.eyepatch_c);
  pixel(ctx, s, 6,3, "#374151"); // strap up
  pixel(ctx, s, 5,4, "#374151"); // strap side
}
function drawBeard(ctx, s) {
  rect(ctx, s, 5,6, 6,2, C.beard_col);
  rect(ctx, s, 4,7, 1,1, C.beard_col); rect(ctx, s, 11,7, 1,1, C.beard_col);
}
function drawCape(ctx, s) {
  rect(ctx, s, 2,9, 2,8, C.cape_outer);
  rect(ctx, s, 12,9, 2,8, C.cape_outer);
  rect(ctx, s, 3,8, 1,1, C.cape_inner); rect(ctx, s, 12,8, 1,1, C.cape_inner);
  rect(ctx, s, 1,15, 2,3, C.cape_outer); rect(ctx, s, 13,15, 2,3, C.cape_outer);
}
function drawWings(ctx, s, outfit) {
  const wc = (outfit === "dragon") ? C.dragon_h : C.wing_col;
  // left wing
  rect(ctx, s, 0,8, 2,6, wc);
  pixel(ctx, s, 0,7, wc); pixel(ctx, s, 0,14, wc);
  // right wing
  rect(ctx, s, 14,8, 2,6, wc);
  pixel(ctx, s, 15,7, wc); pixel(ctx, s, 15,14, wc);
  // wing detail lines
  pixel(ctx, s, 1,10, "rgba(0,0,0,0.2)"); pixel(ctx, s, 14,10, "rgba(0,0,0,0.2)");
  pixel(ctx, s, 1,12, "rgba(0,0,0,0.2)"); pixel(ctx, s, 14,12, "rgba(0,0,0,0.2)");
}
function drawFire(ctx, s) {
  pixel(ctx, s, 1,18, C.fire_col); pixel(ctx, s, 14,18, C.fire_col);
  pixel(ctx, s, 0,17, "#fbbf24"); pixel(ctx, s, 15,17, "#fbbf24");
  pixel(ctx, s, 1,16, C.fire_col); pixel(ctx, s, 14,16, C.fire_col);
  pixel(ctx, s, 7,22, C.fire_col); pixel(ctx, s, 8,22, C.fire_col);
  pixel(ctx, s, 6,23, "#fbbf24"); pixel(ctx, s, 9,23, "#fbbf24");
}
function drawGhostTrail(ctx, s) {
  const g = "rgba(165,180,252,0.5)";
  rect(ctx, s, 4,19, 8,4, g);
  pixel(ctx, s, 3,20, g); pixel(ctx, s, 12,20, g);
  pixel(ctx, s, 3,22, g); pixel(ctx, s, 12,22, g);
}
function drawStars(ctx, s) {
  pixel(ctx, s, 1,6, C.star);
  pixel(ctx, s, 14,8, C.star);
  pixel(ctx, s, 0,12, C.star);
  pixel(ctx, s, 15,13, C.star);
}

// ---------- MAIN DRAW ----------
const ROW_OFFSET = 6;

export function drawCharacter(canvas, skinId, scale = 2) {
  const skin = SKINS.find(s => s.id === skinId) || SKINS[0];
  const s = scale;
  canvas.width  = 16 * s;
  canvas.height = (24 + ROW_OFFSET) * s;

  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.save();
  ctx.translate(0, ROW_OFFSET * s);
  ctx.imageSmoothingEnabled = false;

  if (skin.extras.includes("ghost_trail")) drawGhostTrail(ctx, s);
  if (skin.extras.includes("cape"))        drawCape(ctx, s);
  if (skin.extras.includes("wings"))       drawWings(ctx, s, skin.outfit);

  drawBase(ctx, s, skin);

  // hats
  if (skin.hat === "wizard")     drawWizardHat(ctx, s);
  if (skin.hat === "cap")        drawCap(ctx, s);
  if (skin.hat === "crown")      drawCrown(ctx, s);
  if (skin.hat === "headband")   drawHeadband(ctx, s);
  if (skin.hat === "sailor_hat") drawSailorHat(ctx, s);
  if (skin.hat === "straw_hat")  drawStrawHat(ctx, s);
  if (skin.hat === "fedora")     drawFedora(ctx, s);
  if (skin.hat === "horns")      drawHorns(ctx, s);
  if (skin.hat === "cowboy")     drawCowboy(ctx, s);
  if (skin.hat === "helmet")     drawHelmet(ctx, s);
  if (skin.hat === "antennae")   drawAntennae(ctx, s);
  if (skin.hat === "kabuto")     drawKabuto(ctx, s);
  if (skin.hat === "pirate")     drawPirateHat(ctx, s);
  if (skin.hat === "dragon_horns") drawDragonHorns(ctx, s);
  if (skin.hat === "halo")       drawHalo(ctx, s);

  // face/body extras
  if (skin.extras.includes("glasses"))  drawGlasses(ctx, s);
  if (skin.extras.includes("mask"))     drawMask(ctx, s);
  if (skin.extras.includes("visor"))    drawVisor(ctx, s);
  if (skin.extras.includes("eyepatch")) drawEyepatch(ctx, s);
  if (skin.extras.includes("beard"))    drawBeard(ctx, s);
  if (skin.extras.includes("fire"))     drawFire(ctx, s);
  if (skin.extras.includes("stars"))    drawStars(ctx, s);

  ctx.restore();
}

// ---------- AVATAR ----------
export function drawAvatar(canvas, skinId, size = 40) {
  const skin = SKINS.find(s => s.id === skinId) || SKINS[0];
  const o = C[skin.outfit] || C.blue;

  canvas.width = size; canvas.height = size;
  const ctx = canvas.getContext("2d");
  ctx.imageSmoothingEnabled = false;
  ctx.clearRect(0, 0, size, size);

  ctx.beginPath();
  ctx.arc(size/2, size/2, size/2, 0, Math.PI*2);
  ctx.clip();

  const grad = ctx.createLinearGradient(0,0,0,size);
  grad.addColorStop(0, o.light);
  grad.addColorStop(1, o.dark);
  ctx.fillStyle = grad;
  ctx.fillRect(0,0,size,size);

  const s = Math.floor(size / 16);
  const offX = Math.floor((size - 16*s) / 2);
  const offY = Math.floor(size * 0.05);
  ctx.save();
  ctx.translate(offX, offY);

  rect(ctx, s, 5,2, 6,5, C.skin);
  rect(ctx, s, 5,2, 6,1, C.hair);
  rect(ctx, s, 5,3, 1,1, C.hair); rect(ctx, s, 10,3, 1,1, C.hair);
  pixel(ctx, s, 6,4, C.eye); pixel(ctx, s, 9,4, C.eye);
  pixel(ctx, s, 7,6, C.skinDark); pixel(ctx, s, 8,6, C.skinDark);
  rect(ctx, s, 7,7, 2,1, C.skin);
  rect(ctx, s, 4,8, 8,4, o.body);
  rect(ctx, s, 7,8, 2,1, o.light);

  if (skin.hat === "wizard") {
    rect(ctx, s, 4,0, 8,1, C.wizard_hat); rect(ctx, s, 5,1, 6,1, C.wizard_hat);
    pixel(ctx, s, 6,-1, C.wizard_hat); pixel(ctx, s, 7,-1, C.wizard_hat); pixel(ctx, s, 8,-1, C.wizard_hat);
    pixel(ctx, s, 7,0, C.star);
  }
  if (skin.hat === "cap")        { rect(ctx, s, 4,2, 8,1, C.cap_brim); rect(ctx, s, 2,3, 2,1, C.cap_brim); }
  if (skin.hat === "crown")      { rect(ctx, s, 4,2, 8,1, C.crown); pixel(ctx, s, 4,1, C.crown); pixel(ctx, s, 7,0, C.crown); pixel(ctx, s, 11,1, C.crown); }
  if (skin.hat === "headband")   { rect(ctx, s, 4,3, 8,1, C.headband); }
  if (skin.hat === "sailor_hat") { rect(ctx, s, 4,1, 8,1, C.white); rect(ctx, s, 5,2, 6,1, C.sailor_brim); }
  if (skin.hat === "straw_hat")  { rect(ctx, s, 3,1, 10,1, C.straw); rect(ctx, s, 5,2, 6,2, C.straw); }
  if (skin.hat === "fedora")     { rect(ctx, s, 3,1, 10,1, C.fedora_col); rect(ctx, s, 5,2, 6,2, C.fedora_col); }
  if (skin.hat === "horns")      { pixel(ctx, s, 2,0, C.horn_col); pixel(ctx, s, 13,0, C.horn_col); rect(ctx, s, 4,1, 8,2, "#374151"); }
  if (skin.hat === "cowboy")     { rect(ctx, s, 3,1, 10,1, C.cowboy_col); rect(ctx, s, 5,2, 6,2, C.cowboy_col); }
  if (skin.hat === "helmet")     { rect(ctx, s, 4,0, 8,3, C.helmet_col); rect(ctx, s, 5,1, 6,1, "rgba(100,220,255,0.5)"); }
  if (skin.hat === "antennae")   { rect(ctx, s, 4,1, 8,5, "#475569"); pixel(ctx, s, 6,-1, "#fbbf24"); pixel(ctx, s, 9,-1, "#fbbf24"); }
  if (skin.hat === "kabuto")     { rect(ctx, s, 4,1, 8,3, C.kabuto_col); pixel(ctx, s, 7,0, "#fbbf24"); pixel(ctx, s, 8,0, "#fbbf24"); }
  if (skin.hat === "pirate")     { rect(ctx, s, 3,0, 10,1, C.pirate_col); rect(ctx, s, 5,1, 6,2, C.pirate_col); pixel(ctx, s, 7,1, C.white); pixel(ctx, s, 8,1, C.white); }
  if (skin.hat === "dragon_horns") { pixel(ctx, s, 4,0, C.dragon_h); pixel(ctx, s, 11,0, C.dragon_h); pixel(ctx, s, 3,-1, C.dragon_h); pixel(ctx, s, 12,-1, C.dragon_h); }
  if (skin.hat === "halo")       { rect(ctx, s, 5,0, 6,1, C.halo_col); pixel(ctx, s, 4,1, C.halo_col); pixel(ctx, s, 11,1, C.halo_col); }

  if (skin.extras.includes("glasses")) {
    rect(ctx, s, 5,4, 2,1, "rgba(0,200,255,0.5)"); rect(ctx, s, 8,4, 2,1, "rgba(0,200,255,0.5)");
    pixel(ctx, s, 5,4, C.glasses); pixel(ctx, s, 7,4, C.glasses);
    pixel(ctx, s, 8,4, C.glasses); pixel(ctx, s, 10,4, C.glasses);
  }
  if (skin.extras.includes("mask"))     { rect(ctx, s, 5,5, 6,1, C.mask); pixel(ctx, s, 6,5, "#dc2626"); pixel(ctx, s, 9,5, "#dc2626"); }
  if (skin.extras.includes("visor"))    { rect(ctx, s, 5,3, 6,1, C.visor_col); }
  if (skin.extras.includes("eyepatch")) { pixel(ctx, s, 6,4, C.eyepatch_c); pixel(ctx, s, 7,4, C.eyepatch_c); }
  if (skin.extras.includes("beard"))    { rect(ctx, s, 5,6, 6,1, C.beard_col); }

  ctx.restore();
}

// ---------- STORAGE ----------
const LS_OWNED  = "mb_owned_skins";
const LS_ACTIVE = "mb_active_skin";

export function getOwnedSkins() {
  try { return JSON.parse(localStorage.getItem(LS_OWNED) || '["default"]'); }
  catch { return ["default"]; }
}
export function getActiveSkin() { return localStorage.getItem(LS_ACTIVE) || "default"; }
export function setActiveSkin(id) { localStorage.setItem(LS_ACTIVE, id); }

export function buySkin(id, currentCoins) {
  const skin = SKINS.find(s => s.id === id);
  if (!skin) return { ok: false, reason: "Skin not found" };
  const owned = getOwnedSkins();
  if (owned.includes(id)) return { ok: false, reason: "Already owned" };
  if (skin.secret) return { ok: false, reason: "Secret skin – unlock differently" };
  if (currentCoins < skin.price) return { ok: false, reason: "Not enough coins" };
  owned.push(id);
  localStorage.setItem(LS_OWNED, JSON.stringify(owned));
  return { ok: true, cost: skin.price };
}

// Called externally to unlock a secret skin (no coin cost)
export function unlockSecretSkin(id) {
  const skin = SKINS.find(s => s.id === id);
  if (!skin || !skin.secret) return false;
  const owned = getOwnedSkins();
  if (owned.includes(id)) return false;
  owned.push(id);
  localStorage.setItem(LS_OWNED, JSON.stringify(owned));
  return true;
}

// ---------- RARITY COLORS ----------
export const RARITY_COLORS = {
  free:      { bg: "#374151",  text: "#9ca3af", label: "FREE"      },
  common:    { bg: "#1c2a1c",  text: "#4ade80", label: "COMMON"    },
  rare:      { bg: "#1e3a5f",  text: "#60a5fa", label: "RARE"      },
  epic:      { bg: "#3b0764",  text: "#c084fc", label: "EPIC"      },
  legendary: { bg: "#431407",  text: "#fb923c", label: "LEGENDARY" },
  secret:    { bg: "#1a1a1a",  text: "#ffffff", label: "???"       },
};
