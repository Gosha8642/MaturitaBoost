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
  {
    id: "free_red",
    name: "Rebel",
    desc: "Červená je farba odvahy",
    price: 0, rarity: "free",
    hat: null, outfit: "red", extras: [],
  },
  {
    id: "free_green",
    name: "Prírodovedec",
    desc: "Zelená myseľ, čistý výsledok",
    price: 0, rarity: "free",
    hat: null, outfit: "green", extras: [],
  },
  {
    id: "free_cap",
    name: "Škôlkár",
    desc: "Šiltovka a dobrá nálada",
    price: 0, rarity: "free",
    hat: "cap", outfit: "navy", extras: [],
  },
  {
    id: "free_purple",
    name: "Snílek",
    desc: "Fialová je farba fantázie",
    price: 0, rarity: "free",
    hat: null, outfit: "purple", extras: [],
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
  {
    id: "chef",
    name: "Šéfkuchár",
    desc: "Varí len tie najlepšie odpovede",
    price: 35, rarity: "common",
    hat: "chef_hat", outfit: "chef_white", extras: [],
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
  {
    id: "demon_lord",
    name: "Démon",
    desc: "Z pekla priamo na maturitu",
    price: 450, rarity: "legendary",
    hat: "demon_horns", outfit: "demon", extras: ["fire", "cape"],
  },
  {
    id: "ice_queen",
    name: "Ľadová kráľovná",
    desc: "Chladná hlava, ľadové nervy",
    price: 480, rarity: "legendary",
    hat: "ice_crown", outfit: "ice", extras: ["stars"],
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
  {
    id: "exclusive_itlab",
    name: "IT Lab Exclusive",
    desc: "Exkluzívny skin pre IT Creativity Lab & IT Valley Košice",
    price: 0, rarity: "secret",
    hat: "cap", outfit: "itlab", extras: ["glasses", "stars", "itlab_bg"],
    secret: true,
    unlockHint: "Zadaj tajný kód",
    exclusive: true,
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
  chef_white:  { body: "#f1f5f9", dark: "#cbd5e1",  light: "#ffffff" },
  demon:       { body: "#7f1d1d", dark: "#450a0a",  light: "#ef4444" },
  ice:         { body: "#bae6fd", dark: "#7dd3fc",  light: "#e0f2fe" },
  itlab:       { body: "#2d1b69", dark: "#1a0f3d",  light: "#7c3aed" },

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
  demon_h:     "#7c0000",
  ice_col:     "#7dd3fc",
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
  rect(ctx, s, 4,0, 8,1, C.white);
  rect(ctx, s, 5,1, 6,2, C.sailor_brim);
  rect(ctx, s, 3,0, 1,1, C.white); rect(ctx, s, 12,0, 1,1, C.white);
  pixel(ctx, s, 7,1, C.white); pixel(ctx, s, 8,1, C.white);
}
function drawStrawHat(ctx, s) {
  rect(ctx, s, 3,-1, 10,1, C.straw);
  rect(ctx, s, 5,0, 6,3, C.straw);
  rect(ctx, s, 4,0, 1,1, "#a16207"); rect(ctx, s, 11,0, 1,1, "#a16207");
  rect(ctx, s, 5,-1, 6,1, "#a16207");
}
function drawFedora(ctx, s) {
  rect(ctx, s, 3,0, 10,1, C.fedora_col);
  rect(ctx, s, 5,1, 6,3, C.fedora_col);
  rect(ctx, s, 5,2, 6,1, "#374151");
  rect(ctx, s, 4,1, 1,1, C.fedora_col);
}
function drawHorns(ctx, s) {
  rect(ctx, s, 2,0, 2,3, C.horn_col);
  rect(ctx, s, 12,0, 2,3, C.horn_col);
  pixel(ctx, s, 2,-1, C.horn_col); pixel(ctx, s, 13,-1, C.horn_col);
  rect(ctx, s, 4,0, 8,3, "#374151");
  rect(ctx, s, 4,2, 8,1, "#6b7280");
}
function drawCowboy(ctx, s) {
  rect(ctx, s, 3,0, 10,1, C.cowboy_col);
  rect(ctx, s, 5,1, 6,3, C.cowboy_col);
  rect(ctx, s, 3,0, 2,1, C.cowboy_col); rect(ctx, s, 11,0, 2,1, C.cowboy_col);
  pixel(ctx, s, 2,0, C.cowboy_col); pixel(ctx, s, 13,0, C.cowboy_col);
  rect(ctx, s, 5,1, 6,1, "#78350f");
}
function drawHelmet(ctx, s) {
  rect(ctx, s, 4,-1, 8,4, C.helmet_col);
  rect(ctx, s, 3,0, 1,3, C.helmet_col); rect(ctx, s, 12,0, 1,3, C.helmet_col);
  rect(ctx, s, 4,3, 8,1, "#64748b");
  rect(ctx, s, 5,1, 6,2, "rgba(100,220,255,0.35)");
  rect(ctx, s, 5,1, 6,1, "#38bdf8");
}
function drawAntennae(ctx, s) {
  pixel(ctx, s, 6,-4, C.antennae_c); pixel(ctx, s, 9,-4, C.antennae_c);
  pixel(ctx, s, 6,-3, C.antennae_c); pixel(ctx, s, 9,-3, C.antennae_c);
  pixel(ctx, s, 7,-2, C.antennae_c); pixel(ctx, s, 8,-2, C.antennae_c);
  pixel(ctx, s, 6,-5, "#fbbf24"); pixel(ctx, s, 9,-5, "#fbbf24");
  rect(ctx, s, 4,1, 8,6, "#475569");
  rect(ctx, s, 5,1, 6,1, "#64748b");
  pixel(ctx, s, 4,1, "#334155"); pixel(ctx, s, 11,1, "#334155");
  pixel(ctx, s, 6,4, C.visor_col); pixel(ctx, s, 9,4, C.visor_col);
}
function drawKabuto(ctx, s) {
  rect(ctx, s, 4,0, 8,4, C.kabuto_col);
  rect(ctx, s, 3,1, 1,3, C.kabuto_col); rect(ctx, s, 12,1, 1,3, C.kabuto_col);
  rect(ctx, s, 4,4, 8,1, "#881337");
  rect(ctx, s, 3,3, 10,1, "#be123c");
  pixel(ctx, s, 7,0, "#fbbf24"); pixel(ctx, s, 8,0, "#fbbf24");
  pixel(ctx, s, 7,-1, "#fbbf24"); pixel(ctx, s, 8,-1, "#fbbf24");
}
function drawPirateHat(ctx, s) {
  rect(ctx, s, 4,0, 8,4, C.pirate_col);
  rect(ctx, s, 3,0, 10,1, C.pirate_col);
  pixel(ctx, s, 7,1, C.white); pixel(ctx, s, 8,1, C.white);
  pixel(ctx, s, 7,2, C.white); pixel(ctx, s, 8,2, C.white);
  pixel(ctx, s, 6,2, C.white); pixel(ctx, s, 9,2, C.white);
}
function drawDragonHorns(ctx, s) {
  pixel(ctx, s, 4,-3, C.dragon_h); pixel(ctx, s, 3,-4, C.dragon_h); pixel(ctx, s, 2,-3, C.dragon_h);
  pixel(ctx, s, 11,-3, C.dragon_h); pixel(ctx, s, 12,-4, C.dragon_h); pixel(ctx, s, 13,-3, C.dragon_h);
  rect(ctx, s, 4,0, 8,1, C.dragon_h);
  pixel(ctx, s, 6,-1, C.dragon_h); pixel(ctx, s, 9,-1, C.dragon_h);
}
function drawHalo(ctx, s) {
  rect(ctx, s, 5,-3, 6,1, C.halo_col);
  pixel(ctx, s, 4,-2, C.halo_col); pixel(ctx, s, 11,-2, C.halo_col);
  pixel(ctx, s, 4,-3, C.halo_col); pixel(ctx, s, 11,-3, C.halo_col);
  pixel(ctx, s, 6,-4, "rgba(253,230,138,0.6)"); pixel(ctx, s, 9,-4, "rgba(253,230,138,0.6)");
}
function drawChefHat(ctx, s) {
  // tall white chef hat
  rect(ctx, s, 5,-4, 6,5, C.white);
  rect(ctx, s, 4,-4, 1,3, C.white); rect(ctx, s, 11,-4, 1,3, C.white);
  rect(ctx, s, 4,0, 8,2, C.white);
  // band
  rect(ctx, s, 4,0, 8,1, "#e2e8f0");
  // puff top detail
  pixel(ctx, s, 5,-5, C.white); pixel(ctx, s, 6,-5, C.white);
  pixel(ctx, s, 9,-5, C.white); pixel(ctx, s, 10,-5, C.white);
}
function drawDemonHorns(ctx, s) {
  // curved demon horns
  pixel(ctx, s, 5,-1, C.demon_h); pixel(ctx, s, 4,-2, C.demon_h); pixel(ctx, s, 4,-3, C.demon_h); pixel(ctx, s, 5,-4, C.demon_h);
  pixel(ctx, s, 10,-1, C.demon_h); pixel(ctx, s, 11,-2, C.demon_h); pixel(ctx, s, 11,-3, C.demon_h); pixel(ctx, s, 10,-4, C.demon_h);
  // inner dark
  pixel(ctx, s, 5,-2, "#450a0a"); pixel(ctx, s, 5,-3, "#450a0a");
  pixel(ctx, s, 10,-2, "#450a0a"); pixel(ctx, s, 10,-3, "#450a0a");
}

// ---------- EXCLUSIVE IT LAB BACKGROUND ----------
const _ITLAB_BG_IMGS = {};
function _loadItlabImg(key, b64, mime) {
  if (_ITLAB_BG_IMGS[key]) return _ITLAB_BG_IMGS[key];
  const img = new Image();
  img.src = `data:${mime};base64,${b64}`;
  _ITLAB_BG_IMGS[key] = img;
  return img;
}
const _LAB_B64 = "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";
const _VALLEY_B64 = "/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAH0AfQDASIAAhEBAxEB/8QAHQABAQACAwEBAQAAAAAAAAAAAAgGBwQFCQMCAf/EAFoQAAEDAwIDAwMJEgoKAQUAAAABAgMEBQYHEQgSIRMxQSJRYQkUFxgyQlaUlRUWIzc4UlVXcXJ1gZGz0dLT1DM0Q2JzgpKTsbIkJlh0doOhtMLDNiVUY8Hh/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AIyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABf/tKtLPs/mfxym/dx7SrSz7P5n8cpv3cCAAX/wC0q0s+z+Z/HKb93Og1B4WdDsExKtyfI8rzKmoKRm6/6ZSq+Ry+5jYnYeU5y9ET/BN1Ah8HIuTqJ9wqHW2KoholkctPHUSpJI1m/ko5zWtRzttt1RqJ6EMo0h08yDU3NKXGbBD5cnl1NS9F7OlhRfKkevmTfoniqoid4GHgv2Lgp0vSJiS5DmLpEanO5tVTNRV8VROwXZPRup+vaVaWfZ/M/jlN+7gQAC//AGlWln2fzP45Tfu49pVpZ9n8z+OU37uBAAL/APaVaWfZ/M/jlN+7mlOLfQPD9I8Ts12xu5X6rnrq51PK24TxPajUjV26IyNi77p4qoE1gAAAAAN+cIGi+L6wVGTR5LX3mkS1MpnQfM+aNnN2iy83Nzxv39wm223j3mK8UGndk0v1SkxawVVwqaJtFDUI+ukY+Tmfvum7GtTbp5gNWgFfcOnDBgOo2j9lzC93fJqevr1qEljo6mBsSdnPJGnKjoXL3MTfdV67gSCC/wD2lWln2fzP45Tfu49pVpZ9n8z+OU37uBAALD4gOFzT/T/SC/ZfZrxk9RX25kLoY6upgdE7nmjjXmRsLVXo9e5U67EeAAAAAOfjyWl1+t7b8tUlqWpjStWlcjZkh5k51YqoqcyN323ReoHABbGo3CDhFDptd79hl7ySvulPQurKFlRUwSQzo1Ofl2ZC1V5moqN2VOqoROAALR0i4RMOv2mNkyHMbxklFda+kSrnipKiCOKJj93MTZ8TlReRW77r379wEXA7XMIrHBlV0gxmWrmssVVIyhlqntdLJCjlRr3K1rU3VE36Im251QAApLhM4dbTqrjd0yTLK270FuiqEpqD1hJHG6Z7U3kcqvY/dqbsRNk7+bzATaCmeK/hws+luIW/KMRrrzXUXrn1vcUr5I5Fi5k+hvarI2bN3RzV336uaTMAAAAGTaVY/R5XqXjeM3GWoio7pcoKSd8DkbI1j3o1VaqoqIuy9N0X7hQnFLw44RpZpi3J8fuuRVVYtwipuSuqIXx8r0eqrsyJq7+SniBKoAAAAADbXCrppYtVtS58ZyGruVLRx2yWrR9BIxknO18bUTd7HJts9fDzdTvOLzR3GdIbtj1JjVdeKtlygmkmW4SxvVqscxE5eSNm3ul79wNEgAAAAAK84cuGLAtR9ILRmF8u+S09fWvqGyR0dTAyJOzmfGmyOhcvc1N+q9dzYftKtLPs/mfxym/dwIABf/tKtLPs/mfxym/dyduLzR3GdIbtj1JjVdeKtlygmkmW4SxvVqscxE5eSNm3ul79wNEgAADenChprpnqpdK/G8suuQW6/Rp29E2iqYWRVMKInO1EfE5edq9e/q1e7yVU7Hiy4eqfSeltl+xequdwsFSvrepfWuY+Wnn6q3dWManI5OidOitXdeqAT0AVbw0cLFrzzAG5ZnNdercyvfzWyCgkjjc6FOnav7SN/Ry+5RNuib9UcmwSkDdmtOM6I4Dn1XilsXNL86hajKuoZdaWNrJ+vNGn+jLvypyoq+fdPAAelgB86qogpaWWqqpo4IIWLJLLI5GtY1E3VyqvREROu4HEyG8WzH7JWXu9VsVFb6KJZqieVdmsanj6fMiJ1VdkTqeaXE1rRc9XMt5ollpMboHubbaJV2VfBZpE7lkcn9lOieKrkvF1rzPqZe3Y3jk8kWI0EvkKm7Vr5U/lXJ9YnvWr98vVURuirLbLhertS2m00c1ZX1crYaeCJvM+R7l2REQDn4Pi17zTKaHGsdonVdxrZOSNidEani9y+9aibqq+CIenGgWlFj0lwqOzW5G1Nxn5ZLlXq3Z9TLt4eZjd1RrfBN171VV6Dhd0St+kuLdvWthqspuEaLcKpvVIk70gjX6xF7198qb9yNRNp5NfLVjVgrb7fK2Kht1FEstRPIuyMan+Kr3IidVVUROqgfPKcjsOK2l12yS70VpoWvbGs9VKkbOZe5u696r16ehTEfZw0h+2Njnx1pAPEnrLddXMvWo+i0mP0TnMtlCq+5b4yv26LI7x8ybIniq6oA9VfZw0h+2Njnx1o9nDSH7Y2OfHWnlUAPVX2cNIftjY58daThx66g4TmGC49SYtlFrvFRBc3SSx0lQkjmN7JybqieG5HIAAAAAALG9TO/j2ef0dB/jUGvPVAPqg5vwVTf8AkbD9TO/j2ef0dB/jUGvPVAPqg5vwVTf+QE+He2rMcvtNBHQWvKr7QUkW/ZwU1wljjZuqquzWuRE3VVX7qnRACt/U+spya+asXulveRXe5wMsT5GRVlbJM1ru3hTmRHKqIuyqm/pU5PqhOT5LYtRcdgsmQ3e2QyWhXvjo62SFrnds9N1Rqoirt4mP+pv/AE4b9/w/J/3EByfVJPpmY1+Bl/PPAnS55nmF0oZaC55Xfa6kl2SSCouMskb9lRU3a5yovVEX8R0IAAAAAAB6PcDee/PjotT2mrm7S5Y49KCZFXdywbbwO+5y7s/5akV8TODex9rPfrFDD2Vvlm9eW9ETZPW8vlNanoavMz+oplHBLnvzl62UVDVzdnbMgaluqN18lsjl3hf93n2bv4I9xvj1RbBvmlhloz2jh3ntE3rStcidVp5V8hy+hsmyJ/SqBKXD7hDtQtXbBjLo1fRy1CTVyp3JTx+XJ18N0TlT0uQu7jNztuCaH19NRSJDcb3/APTKNrOisY5q9q5E8ESNHJuncrmmsfU5MG9a2K96hVkO0tc/5nUDlTr2TFR0rk9Dn8qfdjU1Hx25789usklipJue241GtExEXdq1Cqizu+6io1i/0YE/AADm2G1V18vdDZbZAs9dX1DKanjTvfI9yNan5VQ9OrjNZ9A+HZ3Y9m+LH7YjIkVNvXNU7oiqn8+V26+ZFXzEt+p7ae/NzPa3PK+DmorCzsaRXJ0fVyNVN08/IxVX0K9ineeqL6geubtaNN6CfeOjRLhckav8q5FSFi/carnbfz2+YCh8SuFo164d41r+TkvttdTVrWpv63qm+S5UTztkaj27+CNU8y8nstwxzI7jYLrD2NdbqmSmnZ4I9jlRdvOnTdF8UKi9Tr1A+Z+TXTTqun2p7o1a23o5eiVDG/RGp6XRoi/8r0nx9UP09+ZWX27UOgg2pbw1KSvVqdG1MbfIcv38abf8pfOBKIAAz3h2+nxg34epPzrS0vVCPpAs/DNN/lkIt4dvp8YN+HqT860tL1Qj6QLPwzTf5ZAPPAAAAABSHqd/0+Kz8A1H52Eyz1S3/wCRYV/ulV/njMT9Tv8Ap8Vn4BqPzsJlnqlv/wAiwr/dKr/PGBIYAAAAD0s4HfqZ8a/pKz/upSKM51f1Tpc1vtNTah5NDBDcqiOONlylRrGpI5ERE36IiFr8Dv1M+Nf0lZ/3Upy7jkPDWy4VLLhU6apWNlclQk0FLz9puvNzbt333333AgX2Z9WvtkZT8py/pMey3L8py2WnlyjIbneZKZrmwOral0qxou26N5lXbfZPyHon88fDB/8AdaX/ANxSfqkhcadbgdfqnbZtPJLC+1JZImzLZ2Rth7ft51dv2aInNyqz07bAaNAAHZYvfLpjORUF/stU+luNBO2enlb71zV8U8UXuVO5UVUU9NMHv+LcQeh0i1cDHU1zp1pLnSIu7qSoREVURV7la7lexfNyr6Dy5NxcKOrkuleocbq6V645dVbT3SNOqRpv5E6J52Kq7+dquTv2A77Szhzvt04gq3B8jgkS0WCVJ7nVNRWtqKdV3iRi+eVPTuic/i3Yqnit1apNI9OY7bYlhhyC4xLTWqCNERKWNqcqzcvciMTZGp3K7boqIptXM7/acQxi65Xd/odJb6VZqh7Gbvc1u+zU86qq7InnceV+r2e3jUrPbhld5crZKh3LTwI7dtNCnuIm+hE718VVV71AxSaWSaZ800j5JJHK573ru5yr1VVVe9QfgAbz9thrb8I6L5Mg/VOhz3iD1WzfGajHL9kTX22pVO3ip6SKFZURd+VzmNRVbvtuncux3HtVdcfgjD8q0v7Qe1V1x+CMPyrS/tANKwxSzzMhhjfLLI5GsYxqq5zlXZERE71PQvg+0Dj07tLMtymmY/La2LyI3Ii/M6Jye4T/APIqe6Xw9ynirug4SOGuqwy5rmeodHB83IHqltoEkZKyl2/lnOaqtV6+9RFXlTr3qnLVKqiJuq7IgHxraqmoaOatrKiKnpoI3SzSyuRrI2NTdXOVeiIiJvuec/FrrvU6oX9bFYZpYcRt8q9i3q1a6ROnbPTzd/K1e5Oq9V2TKuM3iAXLayfT/DK3/V6mk5bhWRO6V8jV9w1U74mqnf75U37kRVl+lgnqqmKlpoZJ55npHFHG1XOe5V2RqInVVVemwHLx+z3PIL3R2WzUUtbcK2VIaeCJN3Pcvcn6VXoidVL2024RNOrfh9FDm1FNeb85vPVzxVssUTHL/JsRjk3a3u3Xqq7r03RE7LhE0Gg00sjclyOnjly6vi8pF2clviX+Sav16++cn3qdEVXb5uVbR2231FwuFTFS0lNG6WeaVyNZGxqbq5yr3IiIBpj2qWiHwWqflSp/XHtUtEPgtU/KlT+ufdeKbQtFVPn1f8lVn7I/ntptC/ho/wCSqz9kB8fapaIfBap+VKn9c0Fxq6N6f6aYZYrlh9nloamruLoJnPrJZuZiRudts9yonVPAoP202hfw0f8AJVZ+yJ/42tYNPNSMLsNuw2/OuVTSXF08zFo54eVixubvvIxqL1VO4CUAAAAAFjepnfx7PP6Og/xqDXnqgH1Qc34Kpv8AyOt4Uda7Ro5UZFJdbLXXNLsymbGlM9jeTslk335vP2ifkMZ4ktR6DVPUt+V223VNvgdRxU/Y1Dmufuzfdd29NuoGtAABUHqb/wBOG/f8Pyf9xAcn1ST6ZmNfgZfzzzWPC3qtbdIc3uOQXS1Vdyiq7a6jbHTPa1zXLLG/mXm8NmKn4z7cU+rls1fyy1Xm12mstsdDQrTOZUva5XL2jnbpy+HlAaeAAAAAAAB+4pJIZWSxPdHIxyOa5q7K1U7lRfOen2n11t2uvDjF80XMc682x9DcdkTeKpanI9yJ4Kj0SRvoVp5fG/uFLX+m0hor1ab5ba+52uukZUQR0rm80MyJyvXylRNnNRu/3iAWPe6q2aDcOLuwWJyY/amw0+6bJUVbuiLt/PldzL6FVfA8wKypnrKyasqpXzVE8jpJZHru57nLuqqvnVVKA4q+Iek1bsNosFgtdwtlupqh1VVtqnM5ppEbyx7cqr0aiv7+9VTzE8gD9wRSzzxwQRuklkcjGMam6ucq7IiJ4qfgzLRbJMfxDUq0ZRklsqbpRWyX1yylgVqK+ZqfQ1VXdNmu2d/VQD0b0bxi06NaG0NDd6iCiZb6R1deKp3uUmcnPK5VTv5fcpt1VGtOnn4gNAp5VlmzC0yyO73PoJlVfxrGTNxI8UFLqXp6uI49ZLhaY6mpY+ukqJWO7SJnlJGiN870aq/e7eJMYHprDr/oFDI2WHL7RG9vc5tBMip+PszvtUMfsmtGiNfb7TVwVlLdqNKm11bfcpM3yondeqeUmy9y7K5DysKX4aOJum0wwKTEsgstfdoIap0tA+nla3smP6ujVHeHPu5PvlAm2spqijrJqOqhfDUQSOjljemzmPauytVPOipsfIzjXPKcezbUy6ZXjdqqrXTXNzZ56aoVqqk6p9Ecit8HKnN91ymDgZ7w7fT4wb8PUn51pdXG1jGQZbou2041aKu61yXWCXsKZnM/kRr93beZN0/KefemOQwYnqJj2T1NPJUwWq4w1ckUaojntY9HKib9N12LG9u7iHwKvv8AfxfpAlz2CtYPtd5B8VU4t30c1StFqqrrc8FvdJQ0kTpqieWnVGRsam7nKvgiIVb7d3EPgVff7+L9Jjup3F5i+Wad5DjFNiV5p57rbpqSOWSaNWsc9itRV2XfZNwI4AAFIep3/T4rPwDUfnYTaXHzgGaZpfcUmxTGrjeI6WmqWzupYudI1c5ioi/d2X8hN/DJqdbtJtRJ8nudsqrjBJbpaRIqdzWuRznxuRfK6beQv5Sl/bu4h8Cr7/fxfpAlz2CtYPtd5B8VU6fL9M8+xC1NuuT4ndbTQulSFs9TCrWK9UVUbv59mr+Qrv27uIfAq+/38X6TVvE3xH2DVjTuDGLZjtzt08dxiq1lqJGOarWskaqeT138tPyATQAAPSzgd+pnxr+krP8AupSQ804eNZq7Mb1W0mDVktPUXCeWJ6VMCI5jpHKi9X+KKhnfD9xR45prpTasOuGMXWuqKJ87nTwSxox3aTPkTZFXfojkT8Rn3t3cQ+BV9/v4v0gTh7W7W34A1vxmn/aGHahaeZlp/UUcGYWOa0yVjXPp2ySMf2iNVEcvkOXu3TvLA9u7iHwKvv8AfxfpNBcVms1p1iulhq7VZ622NtkM0b21L2uV6vc1UVOX70DSYAAAAD1J4rvqds0/B/8A5tPLYrzWPiyxnOdMb9iVHil3pKi503YsmlljVjF5kXdURd/AkMAAAPZgHlp7P2sv2wrz/bb+gez9rL9sK8/22/oA9SyOeNfiB7BtZpjhNb9FVFivdfC73Cdy0zFTx8Hqnd7n67aeJde9Y5I3Ru1CvfK5Fau0qIuy+lE3Q1q9znvV73K5zl3VVXdVUD+F2cF3D/8AO3TU2omaUW17nZz2uhmb1omKn8K9F7pXIvRPeov1y+TiHBTw/fNGSk1Mzai/0JipLZaCZv8ADuTuqHovvE72J75fK7kTmtsD+Pc1jVe9yNa1N1VV2REIC4ydf3ZvcJsGxCsVMYpJNqupjd0uMrV8F8YmqnT65U5u5GmW8a/ED2y1mmOE1v0NN4r3Xwu90vctMxU8PB6p3+5+u3jlEVVRERVVe5EA/gLk4WeGGz02MfPJqhZY6643GNFprXUovLRxL1Rz0RU+iO6dF9ynTvVUTdHsA6N/a9sv9h36QPLMHqZ7AOjf2vbL/Yd+knPjv02wXCcGx+txTGaC0VFRc3RTSU7VRXs7Jy7LuvdugEfgAAAAAAAAAAAAAAAAAAAAAAAAAAAfe31UtDXU9bAkSywSNkYksTZGKrV3TmY5Fa5OnVFRUXxA+AKQo8YwziHsrJsPpbRh2pVFCiVdojakFBdI2p1lhRE2Y5E6qiJ93dPLOs1EqtPtIMYq9P8AF6S05bmdS3s73f6qlZPDQu7lgpWvRURydUV/enj12RgaCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUt7SzVX7NYf8cqP2A9pZqr9msP+OVH7A9AgB5++0s1V+zWH/HKj9gZlo7wcXe3ZrTXLUe4WSus1J9FSioJpZFqZEXyWSc8bdmeK7bqu23juWgAPzFGyKNsUTGsjYiNa1qbI1E7kRPBCX+M3iATEaKfAMNrf9YamPluFZE7rQRuT3DVTulci9/vUXfvVFTKeLTXem0usC2KwzRTZdcIl7BvRyUUa9O2enn7+Vq969V6JsvnNXVVTXVs9bW1EtRUzyOlmmlcrnyPcu6ucq9VVVXfcD5Kqqqqq7qvepY/BRw/dqtHqdm1F9DTaWyUEzfdeKVL0Xw8WIv331u+I8G2gDs3uEOdZhRr87NJJvR0sjelxlavinjE1U6/XKnL3I4v1rWtajWtRrUTZERNkRAP6aHzjiu0rxTKK7H5vm1c56KTspp7fTxyQc6e6ajnSN3VF6Lsm26L1UwrjR4gPncpqnTrCq3a9Ts5LpXQu60TFT+CYqfyrk7196i/XL5MKAeg3tz9J/sXlvxKH9saQ4vNeMM1ZxKzWrGaO9QT0Ve6olWup442q1Y1b0Vr3dd1JoAAAAAABszQzS2PUuDKpX3t1r+YFqdcERtN2vb8qL5Hum8vd39fuGsyk+CD+I6pf8LS/wCDzUWjmmWS6o5S2y2CBGQxoj62ulRUgo4vr3r5+i7N7128yKqBwdMcDyTUXK6fHMYoVqaqXypJHdIqePfrJI73rU/Kq7IiKqoh2etOH4tg2TfO9j+YrlFVTIrbhNHRpDBDKn8mx3O7nVOu67IidE6ruibP1N1NxrTnFKjSnRSdexf5F+yZqp29wkRNnNjenczvTdOm26N6KrnTqAAAAA2Xw06dM1N1Zt1gq+ZLVA11bc3NXZUp41Tdu/hzOVrN/Dm38AOXpBoRmWoltkvyPo8fxmHdZbxdJOyh2T3SsTvft5+jd0VFcimZSaZ8Ntnd60vmu1XW1bejn2y1PfFv6FYyRFT+sYzxL6vVefZI+w2KX1jhFnd62tVvp/IhkZH5KTOanRVXbyU963ZE67qunQKMi4e8IzOJ/sSaw2e+3BGq5lruUK0s8iJ1Xl38pf7CJ51Q0ZmeLZBhuQVFgya11FtuNOvlwyp3ovc5qp0c1fByKqKdVTTz0tTHU000kE8TkfHJG5WuY5F3RUVOqKi+JU1nuXtjdA7xbL6jJ9Q8KplrKGu2Tta6lRFVzHfXKvKrV/ndm7vVwEqgAAAABsHRrSDMdVLhPFj1NDBQUm3ry5Vb1jpoOm+yu2VXO268rUVfFdk6mvioNVK2uxfgp06tWNufTW2/zSyXieBdu2k8p3Zvcneirv080SJ3IB1M+kegWOvWkyzXplRWt6SNtFudNGx3inNGkm+34vuH0pNCtJ8yd6z001voKq7P6U9Bd6R1O6d3g1Fdyu3+4xy+gnE/rXOa5HNVWuRd0VF6ooHf6g4ZkeBZNUY7lFtkoK+HZ3Kq7skYvc9jk6Oauy9U8yp3oqGPmX6g6kZdntDZKPKbk2vbZaZaelkdE1JVau26vk25nuXZvVV8N+9VVcQAAAAAANk6i6YR4lpZg+bNvTqx2URSyOpVpuRKbk5eiP5l5t+bzJ3GtijeIf6l3RP/AHaq/wDWTkAAAAAADbul2gOX5nYvnouVVbsTxZE51u15l7GN7frmNXq5PSvK1fBT7cKOn1ozLNq695XypimLUbrndVenkSI3dWRu9C8rnKni1jk8Totd9Wr9qllElVVyyUljpnqy1Wpi7RUsSdG+SnRXqne78SbIiIgZ2/TPh0tzvWt018nqKpOivorHM+Lf0K1r0VP6x/Kvhxpcit09w0h1IsOcLCztJLeu1JWNb6GOcv5XchP5zLLdLlZbpT3W0V1RQV1M9Hw1FPIrJI3J4oqdUA/N3t1faLnUWy6UVRRVtM9Y56eeNWSRuTvRzV6opxTv8/zHIs7yWbIsouC19ylYyN0vZtYiNamzURrURET7iec6AAAAAAA3Dw/6O2jUrHMov98zNMYoMeSF08zqLt2qx6PVXKvO3bbk9PeZL7DGiH+0bbPklf2pyuGr6mrXD8H0/wDkmJvAob2GNEP9o22fJK/tTCdX8C09xOyUlbiGqlJmFXNU9lLSw0XYrEzlcvab87t+qIm3pNXgAAAMn9kPP/hxk3ytP+sPZDz/AOHGTfK0/wCsUr7R29fbCt/ya/8AXHtHb19sK3/Jr/1wJq9kPP8A4cZN8rT/AKw9kPP/AIcZN8rT/rFK+0dvX2wrf8mv/XHtHb19sK3/ACa/9cCTLncK+6V0lfc62prquXZZJ6iV0kj9k2TdzlVV6IifiN08KOhdZqrkfzVvEctPiVulT13Km7Vq3p17CNfyczk7kXzqhtK3cD1clfTrcM/pn0aSNWdsFvc2RzN/KRqq9URdu5VRdvMpYGJ4/Z8Vxyix6w0MdFbaGJIoIWJ0RPFVXvVVXdVVeqqqqoHNt1FSW2309vt9NFS0lNG2KCGJqNZGxqbI1qJ3IiIaE4u9eYNNLI7GsbqI5cur4vJVNnJb4l/lXJ9evvWr98vRER2S8TetNs0jxPeFYavJa9jm22icu6J4LNIngxq/2l6J4qnmlkF3ud/vdZerzWy1twrZVmqJ5V3c9y96/wD8ToidEA4tVPPVVMtTUzSTTzPWSSSRyuc9yrurlVeqqq9dynuDPh/XMK2DPsyov9XaaTmoKOVvS4SNX3TkXviaqf1lTbuRUXFeEvQmp1Rv6Xy+wywYjb5U7d/Vq1sidexYvm7uZydyLsnVd09GqGlpqGigoqKnipqanjbFDDE1GsjY1Nka1E6IiIm2wHRfOFg3wMxz5Lh/VJi9UMxzHrLp/jc1msNrtssl1c176Skjic5vZOXZVaiboWASn6pL9LnF/wALu/MuAhMAAAABTvARBSVNTqNTV9V60pJceVk8/LzdlGquRz9vHZN129B2vFHNddMdNrNg2m1sbQafXSnbJUX6lmSWS7SuburZJW926Jvt3PTomzUVp0HBB/EdUv8AhaX/AAeYpoLrPHi1unwPPaH54dPrnuypopU530auXdZIfFOvlK1FTr5TVR3eGlwbh180ZkwmGny/Eq754cCum0lBc4V51h5u6OXbuXwR3TdU2VEduhp4AAABSHB2q0WnmtN8pt0r6LF3JA9O9vNFUOVU/HG1fxE3lAcDt9tsGpF2wq9SIy35faZbau67Isuyq1N/S1ZGp51ciAT+DvM9xe6YXmN0xe8wrHW26odC/psj0T3L2/zXN2ci+ZUOjAG/eAisnpuIeip4lXs623VUE6eCsRnabL/WY00EUrwa29MPsuZa23mNI7ZY7ZJSUCydEqKp/KvK30+4Z92X0KBPmU0sNFk11o6fbsaetmij2+ta9UT/AKIdafueWSeeSaV6vkkcrnuXvVVXdVPwAAAA3NozrgmKYlUYBmuNU2XYVUyK/wBYzO5ZaVyruronL6d3bdFR3VHNVV30ycmsoK+iippayiqaaOqi7andLE5iTR7qnOxVTym7oqbp03RQKCdjPCtl6rLZs6yTB6qX3NLc6ZZ4Y/RzIi/9ZT8VfCxdbtSS1mm2oOI5tDGnMsdNVtimX+rzOYi/fPQnc5VruFfaq+G4WutqaGshdzRT08ro5GL50c1UVFA5eWY5fcUvk9kyO1VVruMH8JBUM5XbeCp4K1fBU3RfBTqiotY7pPqXwe4vqFkkcb8mtd3dbXV3IjXVUS86Lvt59mKvpa5U23Ul0AAAAAAo3iH+pd0T/wB2qv8A1k5FG8Q/1Luif+7VX/rJyAAAAAAKO0nVbbwRaq3Wk8mqqrnS0cr07+y56dNl9G0z0/GTiUlwgSUuYYRqJo3VTxxVN/t6VdrWRdmrURJ/16pE7bzMd5idrrQVtqudVbLjTSUtZSSuhnhkbs6N7V2c1U86KgHGAAAAAAAAAAFTcHNqo75onq/aLheKay0tXTU0UtfU/wAFTtVs273bqnRPuoY57AenX+0ZhP5Gftjm8NX1NWuH4Pp/8kxN4FB+wHp1/tGYT+Rn7Y11rDguP4RU22KwahWbMm1bJHSvtyJtTq1W7I7Z7vdbrt3dymAgAAAPZgHjOAPZgHjOAPZgwDXXVKxaUYVLfrs5J6yXeO3ULXbPqptu5PM1Oiud4J51VEXymAHf6gZdfc6yyuyfI6x1VX1j+Zy9zI2+9YxPetanRE//AHupm3Dbo3dtXMwSmTtaSwUTmvudcie5b4Rs36LI7w8ybqvdsuqgB7D4xYrTjOP0VhsdFFQ22iiSKngjTo1qf4qq7qqr1VVVV6qdieM4A9mCU/VJfpc4v+F3fmXEJgAAAAAAojgxulsttFqYlxuNJRrPjMkcKTzNj7R2z/Jbuqbr6EJ3AA2voJrJXadzVFjvNGl+wq6bx3Szzoj2q13R0kaO6I/bvTudtsuy7OTla96aY1Y6anzbTjIaK8YddNnxw+uWrVW9zl/g5GKvPy79EcqbovR3XZXaeAAAAD7UVTUUVZBWUc8lPUwSNlhljcrXRvau7XIqdyoqIu58QBULc20t1/sFFbtUbgzDc8ooUggyFkaetqtqd3a9yJ4qqOVqIu6tcm6tOmm4R9QKp3bY1kWI3+gd1jqaW4LsrfOqcqon4lX7pO4ApG38OmMYbIly1m1Px+1UcPluttrqFmq50T3qIrUcn9Vjvxd5iXEBrFR5jbbdg+D2lcfwOzL/AKHRd0lS9N9pZeq+dVRN1XdVcqqq9NNgAAAAAAFK4bqdp3qhp/btPNbXT264WpnZWfJ4G7ujbsiI2XZFXuRqKqorXIiKvK5OZZqAFE1fCjklxetTgmcYdlVtd1imhruSRU9LURzU/E9T+0fC/JY5Uq9TdSsQxe3MXeRsdZ2tS5E72ta5Gpuvhsrl9Ck6gDeHEXqfi15xmxaX6a008OF485ZG1EyK19dPs5O1VF2VE8t67qiKqvVdk2Q0eAAAAAAAUHr7cbfVcNGjdHTV1LPU01NUpPDHM1z4t+Tbmai7t/GT4AAAAAAAdljF8uuNZBQ3+yVklHcaGZJqeZne1yf4ovcqL0VFVFKQul90Y4g6eGtyu5x6cagpG2OeuVm9BXKibI5yqqIn9ZzXImycz0RCXQBQ7+EzMah3bWXNsEulE7qyojub0RU86okaon4lU5VDo9pJpw9Lpq5qXbL1NB5SWDHnrNJO5Peuf0ciL6Uj++Qm4AZXqxktlyzOa69Y9i9FjNtl5WQUFL7lGtTZHOT3KOXbdeVET7q7quKAAAAAAAFO8INJQ3zR/VbFJ79abRV3iCmp6aSvqWxM3Vs3Xr1VE3TfZF7zq/ar3D7a2nnyi79UnYAUT7Ve4fbW08+UXfqmJar6HVen+KLkE2dYlem+uGQetrbWLJN5W/lbKidE26/dNRgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9k=";

function drawItlabBackground(canvas, scale) {
  const ctx = canvas.getContext("2d");
  const w = canvas.width, h = canvas.height;
  // Logos are now rendered as HTML overlay in .pm-char-stage — no canvas drawing needed
}

function drawIceCrown(ctx, s) {
  // ice crystal crown
  rect(ctx, s, 4,1, 8,2, C.ice_col);
  // crystal spikes
  pixel(ctx, s, 5,0, C.ice_col); pixel(ctx, s, 5,-1, C.ice_col);
  pixel(ctx, s, 7,-1, C.ice_col); pixel(ctx, s, 7,-2, C.ice_col); pixel(ctx, s, 8,-2, C.ice_col); pixel(ctx, s, 8,-1, C.ice_col);
  pixel(ctx, s, 10,0, C.ice_col); pixel(ctx, s, 10,-1, C.ice_col);
  // shimmer
  pixel(ctx, s, 6,1, "rgba(224,242,254,0.8)"); pixel(ctx, s, 9,1, "rgba(224,242,254,0.8)");
  pixel(ctx, s, 7,0, "#ffffff"); pixel(ctx, s, 8,0, "#ffffff");
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
  pixel(ctx, s, 6,3, "#374151");
  pixel(ctx, s, 5,4, "#374151");
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
  rect(ctx, s, 0,8, 2,6, wc);
  pixel(ctx, s, 0,7, wc); pixel(ctx, s, 0,14, wc);
  rect(ctx, s, 14,8, 2,6, wc);
  pixel(ctx, s, 15,7, wc); pixel(ctx, s, 15,14, wc);
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

  // Exclusive IT Lab background (drawn before translate so it fills whole canvas)
  if (skin.extras.includes("itlab_bg")) drawItlabBackground(canvas, s);

  ctx.save();
  ctx.translate(0, ROW_OFFSET * s);
  ctx.imageSmoothingEnabled = false;

  if (skin.extras.includes("ghost_trail")) drawGhostTrail(ctx, s);
  if (skin.extras.includes("cape"))        drawCape(ctx, s);
  if (skin.extras.includes("wings"))       drawWings(ctx, s, skin.outfit);

  drawBase(ctx, s, skin);

  // hats
  if (skin.hat === "wizard")      drawWizardHat(ctx, s);
  if (skin.hat === "cap")         drawCap(ctx, s);
  if (skin.hat === "crown")       drawCrown(ctx, s);
  if (skin.hat === "headband")    drawHeadband(ctx, s);
  if (skin.hat === "sailor_hat")  drawSailorHat(ctx, s);
  if (skin.hat === "straw_hat")   drawStrawHat(ctx, s);
  if (skin.hat === "fedora")      drawFedora(ctx, s);
  if (skin.hat === "horns")       drawHorns(ctx, s);
  if (skin.hat === "cowboy")      drawCowboy(ctx, s);
  if (skin.hat === "helmet")      drawHelmet(ctx, s);
  if (skin.hat === "antennae")    drawAntennae(ctx, s);
  if (skin.hat === "kabuto")      drawKabuto(ctx, s);
  if (skin.hat === "pirate")      drawPirateHat(ctx, s);
  if (skin.hat === "dragon_horns") drawDragonHorns(ctx, s);
  if (skin.hat === "halo")        drawHalo(ctx, s);
  if (skin.hat === "chef_hat")    drawChefHat(ctx, s);
  if (skin.hat === "demon_horns") drawDemonHorns(ctx, s);
  if (skin.hat === "ice_crown")   drawIceCrown(ctx, s);

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

  if (skin.hat === "wizard")      { rect(ctx, s, 4,0, 8,1, C.wizard_hat); rect(ctx, s, 5,1, 6,1, C.wizard_hat); pixel(ctx, s, 7,0, C.star); }
  if (skin.hat === "cap")         { rect(ctx, s, 4,2, 8,1, C.cap_brim); rect(ctx, s, 2,3, 2,1, C.cap_brim); }
  if (skin.hat === "crown")       { rect(ctx, s, 4,2, 8,1, C.crown); pixel(ctx, s, 4,1, C.crown); pixel(ctx, s, 7,0, C.crown); pixel(ctx, s, 11,1, C.crown); }
  if (skin.hat === "headband")    { rect(ctx, s, 4,3, 8,1, C.headband); }
  if (skin.hat === "sailor_hat")  { rect(ctx, s, 4,1, 8,1, C.white); rect(ctx, s, 5,2, 6,1, C.sailor_brim); }
  if (skin.hat === "straw_hat")   { rect(ctx, s, 3,1, 10,1, C.straw); rect(ctx, s, 5,2, 6,2, C.straw); }
  if (skin.hat === "fedora")      { rect(ctx, s, 3,1, 10,1, C.fedora_col); rect(ctx, s, 5,2, 6,2, C.fedora_col); }
  if (skin.hat === "horns")       { pixel(ctx, s, 2,0, C.horn_col); pixel(ctx, s, 13,0, C.horn_col); rect(ctx, s, 4,1, 8,2, "#374151"); }
  if (skin.hat === "cowboy")      { rect(ctx, s, 3,1, 10,1, C.cowboy_col); rect(ctx, s, 5,2, 6,2, C.cowboy_col); }
  if (skin.hat === "helmet")      { rect(ctx, s, 4,0, 8,3, C.helmet_col); rect(ctx, s, 5,1, 6,1, "rgba(100,220,255,0.5)"); }
  if (skin.hat === "antennae")    { rect(ctx, s, 4,1, 8,5, "#475569"); pixel(ctx, s, 6,-1, "#fbbf24"); pixel(ctx, s, 9,-1, "#fbbf24"); }
  if (skin.hat === "kabuto")      { rect(ctx, s, 4,1, 8,3, C.kabuto_col); pixel(ctx, s, 7,0, "#fbbf24"); pixel(ctx, s, 8,0, "#fbbf24"); }
  if (skin.hat === "pirate")      { rect(ctx, s, 3,0, 10,1, C.pirate_col); rect(ctx, s, 5,1, 6,2, C.pirate_col); pixel(ctx, s, 7,1, C.white); pixel(ctx, s, 8,1, C.white); }
  if (skin.hat === "dragon_horns") { pixel(ctx, s, 4,0, C.dragon_h); pixel(ctx, s, 11,0, C.dragon_h); pixel(ctx, s, 3,-1, C.dragon_h); pixel(ctx, s, 12,-1, C.dragon_h); }
  if (skin.hat === "halo")        { rect(ctx, s, 5,0, 6,1, C.halo_col); pixel(ctx, s, 4,1, C.halo_col); pixel(ctx, s, 11,1, C.halo_col); }
  if (skin.hat === "chef_hat")    { rect(ctx, s, 4,-1, 8,3, C.white); rect(ctx, s, 4,1, 8,1, "#e2e8f0"); }
  if (skin.hat === "demon_horns") { pixel(ctx, s, 5,0, C.demon_h); pixel(ctx, s, 4,-1, C.demon_h); pixel(ctx, s, 10,0, C.demon_h); pixel(ctx, s, 11,-1, C.demon_h); }
  if (skin.hat === "ice_crown")   { rect(ctx, s, 4,2, 8,1, C.ice_col); pixel(ctx, s, 5,1, C.ice_col); pixel(ctx, s, 7,0, C.ice_col); pixel(ctx, s, 8,0, C.ice_col); pixel(ctx, s, 10,1, C.ice_col); }

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

export function unlockSecretSkin(id) {
  const skin = SKINS.find(s => s.id === id);
  if (!skin || !skin.secret) return false;
  const owned = getOwnedSkins();
  if (owned.includes(id)) return false;
  owned.push(id);
  localStorage.setItem(LS_OWNED, JSON.stringify(owned));
  return true;
}

// ---------- PROMO CODE REDEMPTION ----------
const PROMO_CODES = {
  "ITLAB2026":   "exclusive_itlab",
  "ITVALLEY":    "exclusive_itlab",
  "KREATIVITA":  "exclusive_itlab",
};

export function redeemCode(code) {
  const skinId = PROMO_CODES[code.trim().toUpperCase()];
  if (!skinId) return { ok: false, reason: "Neplatný kód" };
  const owned = getOwnedSkins();
  if (owned.includes(skinId)) return { ok: false, reason: "Tento skin už vlastníš", alreadyOwned: true };
  owned.push(skinId);
  localStorage.setItem(LS_OWNED, JSON.stringify(owned));
  return { ok: true, skinId };
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
