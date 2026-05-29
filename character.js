// ===========================================================================
// MaturitaBoost · Pixel Character System
// Draws a 16×24 pixel character on a canvas with swappable skins
// Skins are bought with 🪙 coins and saved to localStorage
// ===========================================================================

// ---------- SKIN DEFINITIONS ----------
export const SKINS = [
  {
    id: "default",
    name: "Študent",
    desc: "Klasický outfit",
    price: 0,       // free
    rarity: "free",
    // pixel layers: each layer is { pixels: [[col,row],...], color }
    // base body is always drawn first, then layers on top
    hat:    null,
    outfit: "blue",
    extras: [],
  },
  {
    id: "wizard",
    name: "Mág",
    desc: "Tajomný čarodejník",
    price: 80,
    rarity: "rare",
    hat:    "wizard",
    outfit: "purple",
    extras: ["stars"],
  },
  {
    id: "hacker",
    name: "Hacker",
    desc: "Dark mode activated",
    price: 120,
    rarity: "rare",
    hat:    "cap",
    outfit: "dark",
    extras: ["glasses"],
  },
  {
    id: "king",
    name: "Kráľ",
    desc: "Zlatá koruna, zlaté srdce",
    price: 200,
    rarity: "epic",
    hat:    "crown",
    outfit: "gold",
    extras: ["cape"],
  },
  {
    id: "ninja",
    name: "Ninja",
    desc: "Rýchly ako vítor",
    price: 160,
    rarity: "epic",
    hat:    "headband",
    outfit: "black",
    extras: ["mask"],
  },
];

// ---------- PALETTE ----------
const C = {
  skin:     "#f5c5a3",
  skinDark: "#e0a882",
  hair:     "#3d2b1f",
  eye:      "#1a1a2e",
  white:    "#ffffff",

  // outfits
  blue:   { body: "#3b82f6", dark: "#1d4ed8", light: "#93c5fd" },
  purple: { body: "#7c3aed", dark: "#5b21b6", light: "#c4b5fd" },
  dark:   { body: "#1e293b", dark: "#0f172a", light: "#475569" },
  gold:   { body: "#f59e0b", dark: "#b45309", light: "#fde68a" },
  black:  { body: "#18181b", dark: "#09090b", light: "#3f3f46" },

  // accessories
  wizard_hat: "#6d28d9",
  cap_brim:   "#111827",
  crown:      "#fbbf24",
  headband:   "#dc2626",
  glasses:    "#374151",
  cape_outer: "#7c3aed",
  cape_inner: "#4c1d95",
  star:       "#fde68a",
  mask:       "#1c1917",
};

// ---------- PIXEL GRID (16 wide × 24 tall) ----------
// Each function draws one layer onto a canvas context.
// The grid is scaled by `scale` param (default 2 → 32×48px display)

function drawBase(ctx, s, p) {
  const o = C[p.outfit] || C.blue;

  // head  (cols 5-10, rows 1-6)
  rect(ctx, s, 5,1, 6,6, C.skin);
  // hair top
  rect(ctx, s, 5,1, 6,2, C.hair);
  rect(ctx, s, 5,2, 1,1, C.hair);
  rect(ctx, s, 10,2, 1,1, C.hair);
  // eyes
  pixel(ctx, s, 6, 4, C.eye);
  pixel(ctx, s, 9, 4, C.eye);
  // mouth
  pixel(ctx, s, 7, 6, C.skinDark);
  pixel(ctx, s, 8, 6, C.skinDark);

  // neck
  rect(ctx, s, 7,7, 2,1, C.skin);

  // body (shirt)
  rect(ctx, s, 4,8, 8,6, o.body);
  // shirt detail
  rect(ctx, s, 7,8, 2,2, o.light);
  // collar
  rect(ctx, s, 6,8, 1,1, o.dark);
  rect(ctx, s, 9,8, 1,1, o.dark);

  // arms
  rect(ctx, s, 2,8, 2,5, C.skin);
  rect(ctx, s, 12,8, 2,5, C.skin);
  // sleeves
  rect(ctx, s, 4,8, 1,4, o.body);
  rect(ctx, s, 11,8, 1,4, o.body);

  // hands
  pixel(ctx, s, 2, 13, C.skin);
  pixel(ctx, s, 3, 13, C.skin);
  pixel(ctx, s, 12, 13, C.skin);
  pixel(ctx, s, 13, 13, C.skin);

  // pants
  rect(ctx, s, 4,14, 8,6, o.dark);
  // belt
  rect(ctx, s, 4,14, 8,1, C.hair);
  pixel(ctx, s, 7,14, C.crown || "#fbbf24");

  // legs split
  rect(ctx, s, 4,16, 3,4, o.dark);
  rect(ctx, s, 9,16, 3,4, o.dark);

  // shoes
  rect(ctx, s, 3,20, 4,2, C.hair);
  rect(ctx, s, 9,20, 4,2, C.hair);
}

function drawWizardHat(ctx, s) {
  // tall cone hat
  rect(ctx, s, 6,1, 4,1, C.wizard_hat);   // brim
  rect(ctx, s, 4,0, 8,1, C.wizard_hat);   // wide brim
  rect(ctx, s, 6,-3, 4,4, C.wizard_hat);  // cone
  pixel(ctx, s, 7, -4, C.wizard_hat);
  pixel(ctx, s, 8, -4, C.wizard_hat);
  // star on hat
  pixel(ctx, s, 7, -2, C.star);
}

function drawCap(ctx, s) {
  rect(ctx, s, 4,1, 8,2, C.cap_brim);
  rect(ctx, s, 3,2, 1,1, C.cap_brim);    // brim peak
  rect(ctx, s, 2,3, 1,1, C.cap_brim);
}

function drawCrown(ctx, s) {
  rect(ctx, s, 4,1, 8,2, C.crown);
  // crown points
  pixel(ctx, s, 4, 0, C.crown);
  pixel(ctx, s, 7, -1, C.crown);
  pixel(ctx, s, 11, 0, C.crown);
  // gems
  pixel(ctx, s, 6, 1, "#ef4444");
  pixel(ctx, s, 9, 1, "#3b82f6");
}

function drawHeadband(ctx, s) {
  rect(ctx, s, 4,3, 8,1, C.headband);
  // knot
  pixel(ctx, s, 11, 2, C.headband);
  pixel(ctx, s, 11, 4, C.headband);
}

function drawGlasses(ctx, s) {
  // left lens
  rect(ctx, s, 5,4, 3,2, "rgba(0,200,255,0.3)");
  // right lens
  rect(ctx, s, 8,4, 3,2, "rgba(0,200,255,0.3)");
  // frames
  pixel(ctx, s, 5, 4, C.glasses);
  pixel(ctx, s, 7, 4, C.glasses);
  pixel(ctx, s, 5, 5, C.glasses);
  pixel(ctx, s, 7, 5, C.glasses);
  pixel(ctx, s, 8, 4, C.glasses);
  pixel(ctx, s, 10, 4, C.glasses);
  pixel(ctx, s, 8, 5, C.glasses);
  pixel(ctx, s, 10, 5, C.glasses);
  // bridge
  pixel(ctx, s, 7, 4, C.glasses);
  pixel(ctx, s, 8, 4, C.glasses);
  // arms
  pixel(ctx, s, 4, 4, C.glasses);
  pixel(ctx, s, 11, 4, C.glasses);
}

function drawMask(ctx, s) {
  rect(ctx, s, 5,5, 6,2, C.mask);
  pixel(ctx, s, 6, 4, C.mask);
  pixel(ctx, s, 7, 4, C.mask);
  pixel(ctx, s, 8, 4, C.mask);
  pixel(ctx, s, 9, 4, C.mask);
  // eye slits
  pixel(ctx, s, 6, 5, "#dc2626");
  pixel(ctx, s, 9, 5, "#dc2626");
}

function drawCape(ctx, s) {
  // cape behind body
  rect(ctx, s, 2,9, 2,8, C.cape_outer);
  rect(ctx, s, 12,9, 2,8, C.cape_outer);
  rect(ctx, s, 3,8, 1,1, C.cape_inner);
  rect(ctx, s, 12,8, 1,1, C.cape_inner);
  // bottom sweep
  rect(ctx, s, 1,15, 2,3, C.cape_outer);
  rect(ctx, s, 13,15, 2,3, C.cape_outer);
}

function drawStars(ctx, s) {
  // floating sparkles
  pixel(ctx, s, 1, 6, C.star);
  pixel(ctx, s, 14, 8, C.star);
  pixel(ctx, s, 0, 12, C.star);
  pixel(ctx, s, 15, 13, C.star);
}

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

// ---------- MAIN DRAW FUNCTION ----------
// offset: vertical pixel offset so we have room for hats above head
const ROW_OFFSET = 5; // 5 extra rows on top for hats

export function drawCharacter(canvas, skinId, scale = 2) {
  const skin = SKINS.find(s => s.id === skinId) || SKINS[0];
  const s = scale;
  const W = 16 * s;
  const H = (24 + ROW_OFFSET) * s;

  canvas.width  = W;
  canvas.height = H;

  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, W, H);

  // Translate down by ROW_OFFSET so hats have space above
  ctx.save();
  ctx.translate(0, ROW_OFFSET * s);
  ctx.imageSmoothingEnabled = false;

  // 1. Cape behind body (so it renders under arms)
  if (skin.extras.includes("cape")) drawCape(ctx, s);

  // 2. Base body
  drawBase(ctx, s, skin);

  // 3. Hat
  if (skin.hat === "wizard")   drawWizardHat(ctx, s);
  if (skin.hat === "cap")      drawCap(ctx, s);
  if (skin.hat === "crown")    drawCrown(ctx, s);
  if (skin.hat === "headband") drawHeadband(ctx, s);

  // 4. Face extras
  if (skin.extras.includes("glasses")) drawGlasses(ctx, s);
  if (skin.extras.includes("mask"))    drawMask(ctx, s);

  // 5. Floating effects
  if (skin.extras.includes("stars")) drawStars(ctx, s);

  ctx.restore();
}

// ---------- AVATAR (small circle crop) ----------
export function drawAvatar(canvas, skinId, size = 40) {
  const skin = SKINS.find(s => s.id === skinId) || SKINS[0];
  const o = C[skin.outfit] || C.blue;

  canvas.width  = size;
  canvas.height = size;

  const ctx = canvas.getContext("2d");
  ctx.imageSmoothingEnabled = false;
  ctx.clearRect(0, 0, size, size);

  // Circle clip
  ctx.beginPath();
  ctx.arc(size/2, size/2, size/2, 0, Math.PI*2);
  ctx.clip();

  // Background gradient based on outfit
  const grad = ctx.createLinearGradient(0,0,0,size);
  grad.addColorStop(0, o.light);
  grad.addColorStop(1, o.dark);
  ctx.fillStyle = grad;
  ctx.fillRect(0,0,size,size);

  // Draw character centered, scaled to fit
  const scale = Math.floor(size / 16);
  const offX = Math.floor((size - 16*scale) / 2);
  const offY = Math.floor(size * 0.05); // slight top offset

  ctx.save();
  ctx.translate(offX, offY);

  // tiny face + hat for avatar
  const s = scale;
  // head
  rect(ctx, s, 5,2, 6,5, C.skin);
  rect(ctx, s, 5,2, 6,1, C.hair);
  rect(ctx, s, 5,3, 1,1, C.hair);
  rect(ctx, s, 10,3, 1,1, C.hair);
  pixel(ctx, s, 6, 4, C.eye);
  pixel(ctx, s, 9, 4, C.eye);
  pixel(ctx, s, 7, 6, C.skinDark);
  pixel(ctx, s, 8, 6, C.skinDark);
  // neck + shirt
  rect(ctx, s, 7,7, 2,1, C.skin);
  rect(ctx, s, 4,8, 8,4, o.body);
  rect(ctx, s, 7,8, 2,1, o.light);

  // hat for avatar
  if (skin.hat === "wizard") {
    rect(ctx, s, 4,0, 8,1, C.wizard_hat);
    rect(ctx, s, 5,1, 6,1, C.wizard_hat);
    pixel(ctx, s, 6,-1, C.wizard_hat);
    pixel(ctx, s, 7,-1, C.wizard_hat);
    pixel(ctx, s, 8,-1, C.wizard_hat);
    pixel(ctx, s, 7, 0, C.star);
  }
  if (skin.hat === "cap") {
    rect(ctx, s, 4,2, 8,1, C.cap_brim);
    rect(ctx, s, 2,3, 2,1, C.cap_brim);
  }
  if (skin.hat === "crown") {
    rect(ctx, s, 4,2, 8,1, C.crown);
    pixel(ctx, s, 4, 1, C.crown);
    pixel(ctx, s, 7, 0, C.crown);
    pixel(ctx, s, 11, 1, C.crown);
  }
  if (skin.hat === "headband") {
    rect(ctx, s, 4,3, 8,1, C.headband);
  }
  if (skin.extras.includes("glasses")) {
    rect(ctx, s, 5,4, 2,1, "rgba(0,200,255,0.5)");
    rect(ctx, s, 8,4, 2,1, "rgba(0,200,255,0.5)");
    pixel(ctx, s, 5,4, C.glasses); pixel(ctx, s, 7,4, C.glasses);
    pixel(ctx, s, 8,4, C.glasses); pixel(ctx, s, 10,4, C.glasses);
  }
  if (skin.extras.includes("mask")) {
    rect(ctx, s, 5,5, 6,1, C.mask);
    pixel(ctx, s, 6,5, "#dc2626"); pixel(ctx, s, 9,5, "#dc2626");
  }

  ctx.restore();
}

// ---------- STORAGE ----------
const LS_OWNED   = "mb_owned_skins";
const LS_ACTIVE  = "mb_active_skin";

export function getOwnedSkins() {
  try {
    return JSON.parse(localStorage.getItem(LS_OWNED) || '["default"]');
  } catch { return ["default"]; }
}

export function getActiveSkin() {
  return localStorage.getItem(LS_ACTIVE) || "default";
}

export function setActiveSkin(id) {
  localStorage.setItem(LS_ACTIVE, id);
}

export function buySkin(id, currentCoins) {
  const skin = SKINS.find(s => s.id === id);
  if (!skin) return { ok: false, reason: "Skin not found" };
  const owned = getOwnedSkins();
  if (owned.includes(id)) return { ok: false, reason: "Already owned" };
  if (currentCoins < skin.price) return { ok: false, reason: "Not enough coins" };
  owned.push(id);
  localStorage.setItem(LS_OWNED, JSON.stringify(owned));
  return { ok: true, cost: skin.price };
}

// ---------- RARITY COLORS ----------
export const RARITY_COLORS = {
  free:  { bg: "#374151", text: "#9ca3af", label: "FREE"  },
  rare:  { bg: "#1e3a5f", text: "#60a5fa", label: "RARE"  },
  epic:  { bg: "#3b0764", text: "#c084fc", label: "EPIC"  },
};
