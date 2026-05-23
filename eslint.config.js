// eslint.config.js  (ESLint v9 flat config)
export default [
  {
    // Lint fast.js (ES module) and the questions_sets scripts (browser globals)
    files: ["fast.js", "questions_sets/**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",   // fast.js uses ES import
      globals: {
        // Browser globals used in questions_sets files and fast.js
        window:               "readonly",
        document:             "readonly",
        console:              "readonly",
        setTimeout:           "readonly",
        clearTimeout:         "readonly",
        requestAnimationFrame:"readonly",
        cancelAnimationFrame: "readonly",
        performance:          "readonly",  // window.performance (timing API)
        localStorage:         "readonly",  // web storage
        sessionStorage:       "readonly",
        alert:                "readonly",
        confirm:              "readonly",
        fetch:                "readonly",
      },
    },
    rules: {
      // ── Possible errors ──────────────────────────────────────────────────
      "no-undef":          "error",   // catch typos / missing vars
      "no-unused-vars":    "warn",    // warn, not error – plenty of helper fns
      "no-console":        "off",     // console.log is fine for a school project

      // ── Best practices ───────────────────────────────────────────────────
      "eqeqeq":            "error",   // require === instead of ==
      "no-var":            "error",   // prefer let / const
      "prefer-const":      "warn",    // suggest const where reassignment never happens
      "curly":             "warn",    // require braces for if/else/for

      // ── Style (non-blocking) ─────────────────────────────────────────────
      "semi":              ["warn", "always"],
      "quotes":            ["warn", "double"],
    },
  },
  {
    // questions_sets files are NOT ES modules – they use window.xxx = {}
    files: ["questions_sets/**/*.js"],
    languageOptions: {
      sourceType: "script",   // override to script so 'window' is valid
    },
  },
];
