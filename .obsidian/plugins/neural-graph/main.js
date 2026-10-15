"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => NeuralGraph3DPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var VIEW_TYPE = "neural-graph-3d-view";
var GOLDEN = Math.PI * (3 - Math.sqrt(5));
var GAP_X = 120;
var SPREAD = 26;
var INDENT = 36;
var ROW = 28;
var DEFAULTS = {
  view: "layers",
  // layers | core
  mode: "full",
  // full | explore | tree
  rotateSpeed: 3,
  pulseSpeed: 3,
  nodeScale: 1,
  labels: "auto",
  pulses: true,
  background: "none",
  // none | matrix
  palette: "obsidian",
  // obsidian | green | orange
  scanlines: true,
  glow: true,
  followActive: true,
  openOnClick: false,
  hiddenLayers: []
};
var EN = {
  title: "Neural graph 3D",
  open: "Open neural graph 3D",
  root: "Root",
  search: "> search note\u2026",
  full: "Full map",
  explore: "Explore 3D",
  tree: "Tree",
  viewLayers: "View: layers",
  viewCore: "View: core",
  colObsidian: "Color: Obsidian",
  colGreen: "Color: green",
  colOrange: "Color: orange",
  bgNone: "Background: none",
  bgMatrix: "Background: Matrix",
  back: "\u25C0 Back",
  restart: "Restart",
  center: "Center",
  openNote: "\u25B6 open note",
  linked: "linked to:",
  hintTree: "click: open/close branch \xB7 double-click: open note \xB7 drag: move \xB7 wheel: zoom \xB7 \u232B: back",
  hintExplore: "click: expand / collapse \xB7 double-click: open note \xB7 drag: rotate \xB7 \u232B: back",
  hintFull: "drag: rotate \xB7 wheel: zoom \xB7 click: focus \xB7 double-click: open note \xB7 /: search",
  statsExplore: (a, b) => `> ${a}/${b} nodes discovered`,
  statsFull: (n, l, k) => `> ${n} nodes // ${l} synapses // ${k} layers`,
  layer: "layer: ",
  conns: (n) => `${n} connections`,
  words: (w, n) => `${w} words \xB7 ${n} connections`,
  noSummary: "No summary.",
  sMode: "Initial mode",
  sView: "3D view",
  sLayers: "Layers (one per folder)",
  sCore: "Core (all together)",
  hAppearance: "Appearance",
  sColor: "Color",
  sColorDesc: "Your Obsidian theme colors, or a green or orange terminal style.",
  obsidianTheme: "Obsidian theme",
  green: "Green",
  orange: "Orange",
  sBg: "Background",
  sBgDesc: "Animated background behind the map.",
  none: "None",
  matrixRain: "Matrix rain",
  hEffects: "Effects",
  scan: "Scanlines",
  scanDesc: "Monitor lines and vignette (dark themes).",
  glow: "Glow",
  glowDesc: "Soft glow on nodes and links.",
  pulses: "Synaptic pulses",
  pulsesDesc: "Signals travelling along the links.",
  pulseSpeed: "Pulse speed",
  rotSpeed: "Rotation speed",
  rotDesc: "0 = no automatic rotation.",
  hBehavior: "Behavior",
  openClick: "Open note on single click",
  openClickDesc: "When off, notes open with a double-click or the panel button.",
  follow: "Follow the open note",
  followDesc: "Highlights the note you are editing and moves the camera to it.",
  nodeSize: "Node size",
  labels: "Labels (3D views)",
  lAuto: "Appear when zooming in",
  lAll: "All",
  lNone: "Only on hover",
  showLayers: "Show all layers",
  showLayersDesc: "Shows again the folders hidden from the legend.",
  showAll: "Show all"
};
var ES = {
  title: "Red neuronal 3D",
  open: "Abrir red neuronal 3D",
  root: "Ra\xEDz",
  search: "> buscar nota\u2026",
  full: "Mapa completo",
  explore: "Explorar 3D",
  tree: "\xC1rbol",
  viewLayers: "Vista: capas",
  viewCore: "Vista: n\xFAcleo",
  colObsidian: "Color: Obsidian",
  colGreen: "Color: verde",
  colOrange: "Color: naranja",
  bgNone: "Fondo: ninguno",
  bgMatrix: "Fondo: Matrix",
  back: "\u25C0 Atr\xE1s",
  restart: "Reiniciar",
  center: "Centrar",
  openNote: "\u25B6 abrir nota",
  linked: "conectada con:",
  hintTree: "clic: abrir/cerrar rama \xB7 doble clic: abrir nota \xB7 arrastrar: mover \xB7 rueda: zoom \xB7 \u232B: atr\xE1s",
  hintExplore: "clic: desplegar / replegar \xB7 doble clic: abrir nota \xB7 arrastrar: girar \xB7 \u232B: atr\xE1s",
  hintFull: "arrastrar: girar \xB7 rueda: zoom \xB7 clic: ir \xB7 doble clic: abrir nota \xB7 /: buscar",
  statsExplore: (a, b) => `> ${a}/${b} nodos descubiertos`,
  statsFull: (n, l, k) => `> ${n} nodos // ${l} sinapsis // ${k} capas`,
  layer: "capa: ",
  conns: (n) => `${n} conexiones`,
  words: (w, n) => `${w} palabras \xB7 ${n} conexiones`,
  noSummary: "Sin resumen.",
  sMode: "Modo inicial",
  sView: "Vista 3D",
  sLayers: "Capas (una por carpeta)",
  sCore: "N\xFAcleo (todas juntas)",
  hAppearance: "Apariencia",
  sColor: "Color",
  sColorDesc: "Colores del tema de Obsidian, o estilo terminal verde o naranja.",
  obsidianTheme: "Tema de Obsidian",
  green: "Verde",
  orange: "Naranja",
  sBg: "Fondo",
  sBgDesc: "Fondo animado detr\xE1s del mapa.",
  none: "Ninguno",
  matrixRain: "Lluvia Matrix",
  hEffects: "Efectos",
  scan: "Scanlines",
  scanDesc: "L\xEDneas de monitor y vi\xF1eta (en temas oscuros).",
  glow: "Brillo",
  glowDesc: "Resplandor en nodos y conexiones.",
  pulses: "Pulsos sin\xE1pticos",
  pulsesDesc: "Se\xF1ales que viajan por las conexiones.",
  pulseSpeed: "Velocidad de pulsos",
  rotSpeed: "Velocidad de rotaci\xF3n",
  rotDesc: "0 = sin rotaci\xF3n autom\xE1tica.",
  hBehavior: "Comportamiento",
  openClick: "Abrir la nota con un clic",
  openClickDesc: "Si est\xE1 apagado, se abre con doble clic o con el bot\xF3n del panel.",
  follow: "Seguir la nota abierta",
  followDesc: "Marca la nota que est\xE1s editando y mueve la c\xE1mara hacia ella.",
  nodeSize: "Tama\xF1o de nodos",
  labels: "Etiquetas (vistas 3D)",
  lAuto: "Aparecen al acercarse",
  lAll: "Todas",
  lNone: "Solo al pasar el mouse",
  showLayers: "Mostrar todas las capas",
  showLayersDesc: "Vuelve a mostrar las carpetas ocultas desde la leyenda.",
  showAll: "Mostrar todas"
};
var detectLang = () => {
  let lang = "en";
  try {
    lang = (0, import_obsidian.getLanguage)() || "en";
  } catch {
    lang = "en";
  }
  return lang.toLowerCase().startsWith("es") ? "es" : "en";
};
var T = detectLang() === "es" ? ES : EN;
var ROOT_LAYER = "/";
var layerOf = (path) => {
  const i = path.indexOf("/");
  return i === -1 ? ROOT_LAYER : path.slice(0, i);
};
var layerName = (f) => f === ROOT_LAYER ? T.root : f.replace(/^\d+\s*-\s*/, "");
var norm = (s) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
var smooth = (a, b, x) => {
  const u = Math.max(0, Math.min(1, (x - a) / (b - a)));
  return u * u * (3 - 2 * u);
};
var PALETTES = {
  obsidian: { name: "colObsidian" },
  green: { name: "colGreen", bg: "#000000", panel: "#030d05", fg: "#00ff41", muted: "#0b8a2a", accent: "#c8ffd4", border: "#0b5a1e" },
  orange: { name: "colOrange", bg: "#0a0600", panel: "#140c02", fg: "#ffb000", muted: "#8a5a00", accent: "#fff2c4", border: "#5a3a00" }
};
var RAIN_CHARS = "\u30A2\u30A4\u30A6\u30A8\u30AA\u30AB\u30AD\u30AF\u30B1\u30B3\u30B5\u30B7\u30B9\u30BB\u30BD\u30BF\u30C1\u30C4\u30C6\u30C8\u30CA\u30CB\u30CC\u30CD\u30CE0123456789ABCDEF<>/{}[]=+*";
var toRgb = (color) => {
  const c = createEl("canvas").getContext("2d");
  if (!c) return [128, 128, 128];
  c.fillStyle = "#808080";
  c.fillStyle = color;
  const v = String(c.fillStyle);
  if (v.startsWith("#")) {
    const n = parseInt(v.slice(1), 16);
    return [n >> 16 & 255, n >> 8 & 255, n & 255];
  }
  const m = /rgba?\(([^)]+)\)/.exec(v);
  if (!m) return [128, 128, 128];
  const parts = m[1].split(",").map((x) => parseFloat(x));
  return [parts[0] ?? 128, parts[1] ?? 128, parts[2] ?? 128];
};
var rgba = (rgb, a) => `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${a})`;
var NeuralGraphView = class extends import_obsidian.ItemView {
  constructor(leaf, plugin) {
    super(leaf);
    this.root = null;
    this.lastDt = 16;
    this.byPath = /* @__PURE__ */ new Map();
    this.treeRows = [];
    this.built = false;
    this.curMode = "full";
    this.curView = "layers";
    this.W = 800;
    this.H = 600;
    this.dpr = 1;
    this.C = null;
    this.scanPattern = null;
    this.resizeObs = null;
    this.plugin = plugin;
    this.nodes = [];
    this.links = [];
    this.layers = [];
    this.cam = { yaw: 0.65, pitch: -0.32, dist: 1050, tx: 0, ty: 0, tz: 0 };
    this.home = Object.assign({}, this.cam);
    this.goal = null;
    this.selected = null;
    this.hover = null;
    this.active = null;
    this.autoRotate = true;
    this.dragging = false;
    this.lastT = 0;
    this.raf = null;
    this.pulses = [];
    this.rain = [];
    this.revealed = /* @__PURE__ */ new Set();
    this.expanded = /* @__PURE__ */ new Set();
    this.parentOf = /* @__PURE__ */ new Map();
    this.history = [];
  }
  get S() {
    return this.plugin.prefs;
  }
  get interactive() {
    return this.S.mode === "explore" || this.S.mode === "tree";
  }
  get isTree() {
    return this.S.mode === "tree";
  }
  getViewType() {
    return VIEW_TYPE;
  }
  getDisplayText() {
    return T.title;
  }
  getIcon() {
    return "binary";
  }
  async onOpen() {
    const root = this.contentEl;
    root.empty();
    root.addClass("nx4-root");
    this.canvas = root.createEl("canvas", { cls: "nx4-canvas" });
    const ctx = this.canvas.getContext("2d");
    if (!ctx) return;
    this.ctx = ctx;
    const tools = root.createDiv({ cls: "nx4-tools" });
    this.search = tools.createEl("input", { type: "search", placeholder: T.search, cls: "nx4-input" });
    this.modeSel = tools.createEl("select", { cls: "nx4-input" });
    this.modeSel.createEl("option", { value: "full", text: T.full });
    this.modeSel.createEl("option", { value: "explore", text: T.explore });
    this.modeSel.createEl("option", { value: "tree", text: T.tree });
    this.viewSel = tools.createEl("select", { cls: "nx4-input" });
    this.viewSel.createEl("option", { value: "layers", text: T.viewLayers });
    this.viewSel.createEl("option", { value: "core", text: T.viewCore });
    this.palSel = tools.createEl("select", { cls: "nx4-input" });
    for (const [k, p] of Object.entries(PALETTES)) this.palSel.createEl("option", { value: k, text: T[p.name] });
    this.bgSel = tools.createEl("select", { cls: "nx4-input" });
    this.bgSel.createEl("option", { value: "none", text: T.bgNone });
    this.bgSel.createEl("option", { value: "matrix", text: T.bgMatrix });
    this.palSel.value = this.S.palette;
    this.bgSel.value = this.S.background;
    this.palSel.onchange = () => {
      this.S.palette = this.palSel.value;
      void this.plugin.saveData(this.S);
      this.readColors();
    };
    this.bgSel.onchange = () => {
      this.S.background = this.bgSel.value;
      void this.plugin.saveData(this.S);
    };
    this.backBtn = tools.createEl("button", { text: T.back, cls: "nx4-btn" });
    this.restartBtn = tools.createEl("button", { text: T.restart, cls: "nx4-btn" });
    const resetBtn = tools.createEl("button", { text: T.center, cls: "nx4-btn" });
    this.legend = root.createDiv({ cls: "nx4-legend" });
    this.stats = root.createDiv({ cls: "nx4-stats" });
    this.hint = root.createDiv({ cls: "nx4-hint" });
    this.panel = root.createDiv({ cls: "nx4-panel" });
    const close = this.panel.createEl("button", { text: "\xD7", cls: "nx4-close" });
    this.pName = this.panel.createEl("h3");
    this.pFolder = this.panel.createDiv({ cls: "nx4-dim" });
    this.pSummary = this.panel.createEl("p", { cls: "nx4-summary" });
    this.pMeta = this.panel.createDiv({ cls: "nx4-dim" });
    this.pOpen = this.panel.createEl("button", { text: T.openNote, cls: "nx4-btn nx4-open" });
    this.panel.createDiv({ cls: "nx4-dim", text: T.linked });
    this.pNbs = this.panel.createDiv({ cls: "nx4-nbs" });
    close.onclick = () => this.select(null);
    this.pOpen.onclick = () => {
      if (this.selected) this.openNote(this.selected);
    };
    resetBtn.onclick = () => this.recenter();
    this.restartBtn.onclick = () => this.startExplore();
    this.backBtn.onclick = () => this.back();
    this.viewSel.onchange = () => {
      this.S.view = this.viewSel.value;
      this.curView = this.S.view;
      void this.plugin.saveData(this.S);
      this.applyLayout(true);
    };
    this.modeSel.onchange = () => {
      void this.setMode(this.modeSel.value);
    };
    const go = () => {
      const q = norm(this.search.value.trim());
      if (!q) return;
      const n = this.nodes.find((m) => norm(m.id) === q) || this.nodes.find((m) => norm(m.id).includes(q));
      if (!n) return;
      if (this.interactive) this.revealPathTo(n);
      this.select(n);
    };
    this.search.addEventListener("keydown", (e) => {
      if (e.key === "Enter") go();
      e.stopPropagation();
    });
    this.search.addEventListener("change", go);
    root.tabIndex = 0;
    root.addEventListener("keydown", (e) => {
      if (e.key === "Escape") this.select(null);
      if (e.key === "/") {
        e.preventDefault();
        this.search.focus();
      }
      if (e.key === "Backspace" && this.interactive) {
        e.preventDefault();
        this.back();
      }
    });
    this.bindPointer();
    this.resizeObs = new ResizeObserver(() => this.resize());
    this.resizeObs.observe(root);
    const refresh = (0, import_obsidian.debounce)(() => this.rebuild(), 800, true);
    this.registerEvent(this.app.metadataCache.on("resolved", refresh));
    this.registerEvent(this.app.vault.on("rename", refresh));
    this.registerEvent(this.app.vault.on("delete", refresh));
    this.registerEvent(this.app.workspace.on("css-change", () => this.readColors()));
    this.registerEvent(this.app.workspace.on("file-open", (f) => this.onFileOpen(f)));
    this.register(() => {
      if (this.raf !== null) window.cancelAnimationFrame(this.raf);
    });
    this.readColors();
    this.resize();
    this.rebuild();
    this.onFileOpen(this.app.workspace.getActiveFile());
    const loop = (t) => {
      this.frame(t);
      this.raf = window.requestAnimationFrame(loop);
    };
    this.raf = window.requestAnimationFrame(loop);
  }
  async onClose() {
    if (this.raf !== null) window.cancelAnimationFrame(this.raf);
    if (this.resizeObs) this.resizeObs.disconnect();
    await Promise.resolve();
  }
  // ---------- colores ----------
  readColors() {
    const cs = getComputedStyle(document.body);
    const v = (n, fb) => cs.getPropertyValue(n).trim() || fb;
    const pal = this.S.palette !== "obsidian" ? PALETTES[this.S.palette] : void 0;
    const mono = v("--font-monospace", "monospace");
    const base = pal && pal.bg ? { bg: pal.bg, fg: pal.fg ?? "#ffffff", muted: pal.muted ?? "#888888", accent: pal.accent ?? "#ffffff", font: mono, mono } : {
      bg: v("--background-primary", "#1e1e1e"),
      fg: v("--text-normal", "#dadada"),
      muted: v("--text-muted", "#999999"),
      accent: v("--interactive-accent", "#7c5cff"),
      font: v("--font-interface", "sans-serif"),
      mono
    };
    this.contentEl.toggleClass("nx4-pal-green", this.S.palette === "green");
    this.contentEl.toggleClass("nx4-pal-orange", this.S.palette === "orange");
    if (this.palSel) this.palSel.value = this.S.palette;
    if (this.bgSel) this.bgSel.value = this.S.background;
    const bgRgb = toRgb(base.bg);
    this.C = {
      ...base,
      bgRgb,
      fgRgb: toRgb(base.fg),
      mutedRgb: toRgb(base.muted),
      accentRgb: toRgb(base.accent),
      dark: (bgRgb[0] * 299 + bgRgb[1] * 587 + bgRgb[2] * 114) / 1e3 < 128
    };
    this.scanPattern = null;
  }
  // ---------- datos ----------
  rebuild() {
    const files = this.app.vault.getMarkdownFiles();
    const prevSel = this.selected && this.selected.path;
    const old = new Map(this.nodes.map((n) => [n.path, n]));
    const byPath = /* @__PURE__ */ new Map();
    this.nodes = files.map((f) => {
      const o = old.get(f.path);
      const n = {
        id: f.basename,
        path: f.path,
        file: f,
        folder: layerOf(f.path),
        deg: 0,
        nb: [],
        x: o ? o.x : 0,
        y: o ? o.y : 0,
        z: o ? o.z : 0,
        tx: 0,
        ty: 0,
        tz: 0,
        appear: o ? o.appear : 1,
        vanish: false,
        p: o ? o.p : { x: -9999, y: -9999, s: 0, depth: 0 },
        hitR: 10,
        hitW: 0,
        depthT: 0
      };
      byPath.set(f.path, n);
      return n;
    });
    this.byPath = byPath;
    const seen = /* @__PURE__ */ new Set();
    this.links = [];
    const resolved = this.app.metadataCache.resolvedLinks;
    for (const src of Object.keys(resolved)) for (const dst of Object.keys(resolved[src])) {
      const a = byPath.get(src), b = byPath.get(dst);
      if (!a || !b || a === b) continue;
      const key = a.path < b.path ? a.path + "|" + b.path : b.path + "|" + a.path;
      if (seen.has(key)) continue;
      seen.add(key);
      this.links.push({ s: a, t: b });
      a.deg++;
      b.deg++;
      a.nb.push(b);
      b.nb.push(a);
    }
    this.layers = [...new Set(this.nodes.map((n) => n.folder))].sort((a, b) => {
      if (a === ROOT_LAYER) return -1;
      if (b === ROOT_LAYER) return 1;
      return a.localeCompare(b, void 0, { numeric: true });
    });
    this.root = this.nodes.find((n) => ["indice", "index"].includes(norm(n.id))) ?? this.nodes.slice().sort((a, b) => b.deg - a.deg)[0] ?? null;
    const mapN = (n) => byPath.get(n.path);
    const mapAll = (arr) => {
      const out = [];
      for (const n of arr) {
        const m = mapN(n);
        if (m) out.push(m);
      }
      return out;
    };
    this.revealed = new Set(mapAll(this.revealed));
    this.expanded = new Set(mapAll(this.expanded));
    const po = /* @__PURE__ */ new Map();
    for (const [c, p] of this.parentOf) {
      const cc = mapN(c), pp = mapN(p);
      if (cc && pp) po.set(cc, pp);
    }
    this.parentOf = po;
    const hist = [];
    for (const h of this.history) {
      const node = mapN(h.node);
      if (node) hist.push({ node, added: mapAll(h.added) });
    }
    this.history = hist;
    if (!this.built) {
      this.built = true;
      this.curMode = this.S.mode;
      this.curView = this.S.view;
      if (this.interactive) this.startExplore(true);
      else {
        this.revealed = new Set(this.nodes);
        this.applyLayout(false);
      }
      Object.assign(this.cam, this.goal || this.home);
      this.nodes.forEach((n) => {
        n.x = n.tx;
        n.y = n.ty;
        n.z = n.tz;
      });
      this.goal = null;
    } else {
      if (!this.interactive) this.revealed = new Set(this.nodes);
      else if (!this.revealed.size) this.startExplore(true);
      this.relayout(false);
    }
    this.selected = prevSel ? byPath.get(prevSel) ?? null : null;
    if (!this.selected) this.panel.removeClass("open");
    if (this.active) this.active = byPath.get(this.active.path) ?? null;
    this.pulses = [];
    this.renderLegend();
    this.syncControls();
  }
  // ---------- disposiciones ----------
  relayout(fly) {
    if (this.isTree) this.layoutTree();
    else this.applyLayout(fly);
  }
  applyLayout(fly) {
    let maxR = 0;
    if (this.S.view === "core") {
      const ns = this.nodes.slice().sort((a, b) => b.deg - a.deg);
      ns.forEach((n, i) => {
        const r = SPREAD * 1.1 * Math.sqrt(i + 0.6);
        const ang = i * GOLDEN;
        n.tx = 0;
        n.ty = r * Math.sin(ang);
        n.tz = r * Math.cos(ang);
        maxR = Math.max(maxR, r);
      });
      this.home = { yaw: 0.65, pitch: -0.32, dist: Math.max(600, maxR * 4.2), tx: 0, ty: 0, tz: 0 };
    } else {
      this.layers.forEach((f, li) => {
        const ns = this.nodes.filter((n) => n.folder === f).sort((a, b) => b.deg - a.deg);
        const x = (li - (this.layers.length - 1) / 2) * GAP_X;
        ns.forEach((n, k) => {
          const r = SPREAD * Math.sqrt(k + (ns.length > 1 ? 0.6 : 0));
          const ang = k * GOLDEN + li * 0.9;
          n.tx = x;
          n.ty = r * Math.sin(ang);
          n.tz = r * Math.cos(ang);
          maxR = Math.max(maxR, r);
        });
      });
      this.home = { yaw: 0.65, pitch: -0.32, dist: Math.max(700, this.layers.length * GAP_X * 1.35, maxR * 4), tx: 0, ty: 0, tz: 0 };
    }
    if (fly) this.goal = Object.assign({}, this.home);
    if (this.viewSel) this.viewSel.value = this.S.view;
  }
  // Árbol plano tipo explorador de archivos: una fila por nota, sangría por nivel
  childrenOf(n, includeVanishing = false) {
    const out = [];
    for (const [c, p] of this.parentOf) if (p === n && this.revealed.has(c) && (includeVanishing || !c.vanish)) out.push(c);
    return out.sort((a, b) => a.id.localeCompare(b.id, void 0, { numeric: true }));
  }
  layoutTree() {
    let row = 0;
    this.treeRows = [];
    const walk = (n, depth) => {
      n.depthT = depth;
      n.tx = depth * INDENT;
      n.ty = row * ROW;
      n.tz = 0;
      this.treeRows.push(n);
      row++;
      for (const c of this.childrenOf(n)) walk(c, depth + 1);
    };
    if (this.root && this.revealed.has(this.root)) walk(this.root, 0);
    for (const n of this.nodes) if (!this.revealed.has(n)) {
      const r = this.root || n;
      n.tx = r.tx || 0;
      n.ty = r.ty || 0;
      n.tz = 0;
    }
  }
  treeScale() {
    return Math.min(this.W, this.H * 1.6) * 1.05 / this.cam.dist;
  }
  treeHome() {
    const dist = 1e3;
    const f = Math.min(this.W, this.H * 1.6) * 1.05 / dist;
    const rx = this.root ? this.root.tx : 0, ry = this.root ? this.root.ty : 0;
    return { yaw: 0, pitch: 0, dist, tz: 0, tx: rx - (90 - this.W / 2) / f, ty: ry - (90 - this.H / 2) / f };
  }
  recenter() {
    this.select(null);
    if (this.isTree) this.goal = this.treeHome();
    else {
      this.goal = Object.assign({}, this.home);
      this.autoRotate = true;
    }
  }
  // ---------- modos ----------
  async setMode(mode) {
    const prev = this.curMode || "full";
    this.curMode = mode;
    this.S.mode = mode;
    await this.plugin.saveData(this.S);
    this.select(null);
    if (mode === "full") {
      this.nodes.forEach((n) => {
        if (!this.revealed.has(n)) n.appear = 0;
        n.vanish = false;
      });
      this.revealed = new Set(this.nodes);
      this.applyLayout(true);
      this.autoRotate = true;
    } else {
      if (prev === "full" || !this.revealed.size) this.startExplore();
      else {
        this.relayout(false);
        this.goal = mode === "tree" ? this.treeHome() : Object.assign({}, this.home);
      }
      if (mode === "explore") {
        this.applyLayout(false);
        this.autoRotate = true;
      }
    }
    this.syncControls();
  }
  startExplore(instant = false) {
    this.revealed = new Set(this.root ? [this.root] : []);
    this.expanded = /* @__PURE__ */ new Set();
    this.parentOf = /* @__PURE__ */ new Map();
    this.history = [];
    this.nodes.forEach((n) => {
      n.vanish = false;
    });
    if (this.selected) this.select(null);
    if (this.isTree) {
      this.layoutTree();
      this.goal = this.treeHome();
      this.autoRotate = false;
    } else {
      this.applyLayout(false);
      if (this.root) this.goal = { tx: this.root.tx, ty: this.root.ty, tz: this.root.tz, dist: 520, yaw: this.cam.yaw || 0.65, pitch: -0.32 };
    }
    if (this.root && !instant) this.root.appear = 0;
    this.syncControls();
  }
  hiddenCount(n) {
    let k = 0;
    for (const m of n.nb) if (!this.revealed.has(m) || m.vanish) k++;
    return k;
  }
  reveal(m, parent) {
    if (this.revealed.has(m) && !m.vanish) return false;
    if (!this.revealed.has(m)) {
      m.x = parent.x;
      m.y = parent.y;
      m.z = parent.z;
      m.appear = 0;
    }
    m.vanish = false;
    this.revealed.add(m);
    this.parentOf.set(m, parent);
    return true;
  }
  expand(n) {
    const added = [];
    for (const m of n.nb.slice().sort((a, b) => a.id.localeCompare(b.id))) if (this.reveal(m, n)) added.push(m);
    this.expanded.add(n);
    if (added.length) this.history.push({ node: n, added });
    this.relayout(false);
    this.syncControls();
  }
  // Oculta a m y a todo lo que se desplegó desde m (se encoge hacia su padre)
  hideSubtree(m) {
    for (const c of this.childrenOf(m, true)) if (!c.vanish) this.hideSubtree(c);
    this.expanded.delete(m);
    m.vanish = true;
  }
  collapse(n) {
    for (const c of this.childrenOf(n)) this.hideSubtree(c);
    this.expanded.delete(n);
    this.history = this.history.filter((h) => h.node !== n && !h.node.vanish);
    this.relayout(false);
    this.syncControls();
  }
  back() {
    if (!this.interactive) return;
    let h = this.history.pop();
    while (h && (h.node.vanish || !this.revealed.has(h.node))) h = this.history.pop();
    if (!h) return;
    for (const m of h.added) if (this.revealed.has(m) && !m.vanish) this.hideSubtree(m);
    this.expanded.delete(h.node);
    if (this.selected && this.selected.vanish) this.select(null);
    this.relayout(false);
    if (this.isTree) this.ensureVisible(h.node);
    else this.goal = { tx: h.node.tx, ty: h.node.ty, tz: h.node.tz, dist: Math.max(this.cam.dist, 450) };
    this.syncControls();
  }
  revealPathTo(target) {
    if (!this.root) return;
    if (this.revealed.has(target) && !target.vanish) {
      this.relayout(false);
      return;
    }
    const prev = /* @__PURE__ */ new Map([[this.root, null]]);
    const q = [this.root];
    while (q.length) {
      const cur = q.shift();
      if (!cur || cur === target) break;
      for (const m of cur.nb) if (!prev.has(m)) {
        prev.set(m, cur);
        q.push(m);
      }
    }
    const chain = [];
    for (let c = prev.has(target) ? target : null; c; c = prev.get(c)) chain.unshift(c);
    if (!chain.length) chain.push(this.root, target);
    if (!this.revealed.has(this.root)) this.reveal(this.root, this.root);
    const added = [];
    for (let i = 1; i < chain.length; i++) if (this.reveal(chain[i], chain[i - 1])) added.push(chain[i]);
    if (added.length) this.history.push({ node: chain[0], added });
    this.relayout(false);
    this.syncControls();
  }
  ensureVisible(n) {
    const f = this.treeScale();
    const sx = this.W / 2 + (n.tx - this.cam.tx) * f, sy = this.H / 2 + (n.ty - this.cam.ty) * f;
    const g = { ...this.goal ?? this.cam, yaw: 0, pitch: 0 };
    if (sy < 80 || sy > this.H - 160) g.ty = n.ty - (this.H * 0.35 - this.H / 2) / f;
    if (sx < 40 || sx > this.W - 260) g.tx = n.tx - (120 - this.W / 2) / f;
    this.goal = g;
  }
  syncControls() {
    const m = this.S.mode;
    if (this.modeSel) this.modeSel.value = m;
    if (this.viewSel) this.viewSel.toggleClass("nx4-hidden", m === "tree");
    if (this.backBtn) {
      this.backBtn.toggleClass("nx4-hidden", !this.interactive);
      this.backBtn.disabled = !this.history.some((h) => !h.node.vanish);
    }
    if (this.restartBtn) this.restartBtn.toggleClass("nx4-hidden", !this.interactive);
    if (this.legend) this.legend.toggleClass("nx4-hidden", m === "tree");
    if (this.hint) this.hint.setText(m === "tree" ? T.hintTree : m === "explore" ? T.hintExplore : T.hintFull);
    if (this.stats) {
      const shown = [...this.revealed].filter((n) => !n.vanish).length;
      this.stats.setText(this.interactive ? T.statsExplore(shown, this.nodes.length) : T.statsFull(this.nodes.length, this.links.length, this.layers.length));
    }
  }
  renderLegend() {
    this.legend.empty();
    const hidden = new Set(this.S.hiddenLayers);
    this.layers.forEach((f) => {
      const b = this.legend.createEl("button", { cls: "nx4-chip", text: layerName(f) });
      b.toggleClass("off", hidden.has(f));
      b.onclick = () => {
        const h = new Set(this.S.hiddenLayers);
        if (h.has(f)) h.delete(f);
        else h.add(f);
        this.S.hiddenLayers = [...h];
        b.toggleClass("off", h.has(f));
        void this.plugin.saveData(this.S);
      };
    });
  }
  visible(n) {
    if (!this.revealed.has(n)) return false;
    if (this.isTree) return true;
    return !this.S.hiddenLayers.includes(n.folder);
  }
  onFileOpen(file) {
    if (!file || !this.byPath) return;
    const n = this.byPath.get(file.path);
    if (!n) return;
    this.active = n;
    if (this.S.followActive && !this.selected && !this.isTree && this.visible(n)) {
      this.goal = { tx: n.tx, ty: n.ty, tz: n.tz, dist: Math.min(this.cam.dist, 600) };
    }
  }
  openNote(n) {
    void this.app.workspace.getLeaf("tab").openFile(n.file);
  }
  // ---------- render ----------
  resize() {
    const r = this.contentEl.getBoundingClientRect();
    this.W = Math.max(200, r.width);
    this.H = Math.max(200, r.height);
    this.dpr = window.devicePixelRatio || 1;
    this.canvas.width = this.W * this.dpr;
    this.canvas.height = this.H * this.dpr;
    this.canvas.setCssProps({ "--nx4-w": this.W + "px", "--nx4-h": this.H + "px" });
    const cols = Math.floor(this.W / 16);
    this.rain = Array.from({ length: cols }, (_, i) => ({ x: i * 16 + 8, y: Math.random() * this.H, v: 40 + Math.random() * 90, chars: Array.from({ length: 14 }, () => RAIN_CHARS[Math.random() * RAIN_CHARS.length | 0]) }));
    this.scanPattern = null;
  }
  project(x, y, z) {
    const c = this.cam;
    x -= c.tx;
    y -= c.ty;
    z -= c.tz;
    const cy = Math.cos(c.yaw), sy = Math.sin(c.yaw);
    const x1 = x * cy - z * sy, z1 = x * sy + z * cy;
    const cp = Math.cos(c.pitch), sp = Math.sin(c.pitch);
    const y1 = y * cp - z1 * sp, z2 = y * sp + z1 * cp;
    const depth = z2 + c.dist;
    const f = Math.min(this.W, this.H * 1.6) * 1.05 / Math.max(depth, 30);
    return { x: this.W / 2 + x1 * f, y: this.H / 2 + y1 * f, s: f, depth };
  }
  frame(t) {
    const dt = Math.min(50, t - (this.lastT || t));
    this.lastT = t;
    this.lastDt = dt;
    const c = this.cam, g = this.goal;
    if (g) {
      const keys = ["tx", "ty", "tz", "dist", "pitch", "yaw"];
      for (const k of keys) {
        const gv = g[k];
        if (gv !== void 0) c[k] += (gv - c[k]) * 0.045;
      }
      if (Math.abs((g.dist ?? c.dist) - c.dist) < 0.5 && Math.abs((g.tx ?? c.tx) - c.tx) < 0.3 && Math.abs((g.ty ?? c.ty) - c.ty) < 0.3) this.goal = null;
    }
    let finished = false;
    for (const n of this.nodes) {
      let gx = n.tx, gy = n.ty, gz = n.tz;
      if (n.vanish) {
        const p = this.parentOf.get(n);
        if (p) {
          gx = p.x;
          gy = p.y;
          gz = p.z;
        }
        n.appear -= dt / 500;
        if (n.appear <= 0) {
          n.appear = 0;
          n.vanish = false;
          this.revealed.delete(n);
          this.parentOf.delete(n);
          finished = true;
        }
      } else if (n.appear < 1) n.appear = Math.min(1, n.appear + dt / 900);
      n.x += (gx - n.x) * 0.06;
      n.y += (gy - n.y) * 0.06;
      n.z += (gz - n.z) * 0.06;
    }
    if (finished) {
      if (this.isTree) this.layoutTree();
      this.syncControls();
    }
    if (this.autoRotate && !this.dragging && !this.isTree) c.yaw += dt * 12e-6 * this.S.rotateSpeed;
    if (this.C && this.W) this.draw(t, dt);
  }
  drawRain(dt) {
    const ctx = this.ctx, C = this.C;
    if (!C) return;
    ctx.font = `14px ${C.mono}`;
    ctx.textAlign = "center";
    for (const d of this.rain) {
      d.y += d.v * dt / 1e3;
      if (d.y - 14 * 16 > this.H) {
        d.y = -Math.random() * 200;
        d.v = 40 + Math.random() * 90;
      }
      if (Math.random() < 0.03) d.chars[Math.random() * d.chars.length | 0] = RAIN_CHARS[Math.random() * RAIN_CHARS.length | 0];
      for (let k = 0; k < d.chars.length; k++) {
        const y = d.y - k * 16;
        if (y < -16 || y > this.H + 16) continue;
        const a = k === 0 ? 0.35 : 0.16 * (1 - k / d.chars.length);
        ctx.fillStyle = rgba(k === 0 ? C.accentRgb : C.mutedRgb, a);
        ctx.fillText(d.chars[k], d.x, y);
      }
    }
  }
  drawScanlines() {
    const ctx = this.ctx;
    if (!this.scanPattern) {
      const p = createEl("canvas");
      p.width = 4;
      p.height = 3;
      const pc = p.getContext("2d");
      if (!pc) return;
      pc.fillStyle = "rgba(0,0,0,0.28)";
      pc.fillRect(0, 0, 4, 1);
      this.scanPattern = ctx.createPattern(p, "repeat");
    }
    if (this.scanPattern) {
      ctx.fillStyle = this.scanPattern;
      ctx.fillRect(0, 0, this.W, this.H);
    }
    const g = ctx.createRadialGradient(this.W / 2, this.H / 2, Math.min(this.W, this.H) * 0.3, this.W / 2, this.H / 2, Math.max(this.W, this.H) * 0.75);
    g.addColorStop(0, "rgba(0,0,0,0)");
    g.addColorStop(1, "rgba(0,0,0,0.55)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, this.W, this.H);
  }
  draw(t, dt) {
    const ctx = this.ctx, C = this.C, S = this.S, W = this.W, H = this.H;
    if (!C) return;
    ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    ctx.fillStyle = C.bg;
    ctx.fillRect(0, 0, W, H);
    if (S.background === "matrix" && C.dark) this.drawRain(dt);
    if (this.nodes.length) {
      if (this.isTree) this.drawTree(t);
      else this.drawGraph(t, dt);
    }
    if (S.scanlines && C.dark) this.drawScanlines();
  }
  // ----- árbol plano -----
  drawTree(t) {
    const ctx = this.ctx, C = this.C, S = this.S;
    if (!C) return;
    const vis = this.nodes.filter((n) => this.revealed.has(n));
    for (const n of vis) n.p = this.project(n.x, n.y, 0);
    const glow = S.glow && C.dark;
    const focus = this.hover || this.selected;
    ctx.lineWidth = 1;
    ctx.lineCap = "round";
    for (const n of vis) {
      const p = this.parentOf.get(n);
      if (!p || !this.revealed.has(p)) continue;
      const corner = this.project(p.x, n.y, 0);
      const hot = focus && (n === focus || p === focus);
      ctx.globalAlpha = Math.min(n.appear, p.appear);
      ctx.strokeStyle = hot ? C.accent : rgba(C.mutedRgb, 0.55);
      ctx.lineWidth = hot ? 1.6 : 1;
      ctx.beginPath();
      ctx.moveTo(p.p.x, p.p.y);
      ctx.lineTo(corner.x, corner.y);
      ctx.lineTo(n.p.x, n.p.y);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
    if (S.pulses) {
      if (Math.random() < 0.1) {
        const pool = vis.filter((n2) => this.parentOf.get(n2) && !n2.vanish && (!focus || n2 === focus || this.parentOf.get(n2) === focus));
        const n = pool[Math.random() * pool.length | 0];
        if (n) this.pulses.push({ child: n, k: 0 });
      }
      const dur = 6e3 / Math.max(1, S.pulseSpeed);
      for (let i = this.pulses.length - 1; i >= 0; i--) {
        const q = this.pulses[i];
        if (!q.child) {
          this.pulses.splice(i, 1);
          continue;
        }
        q.k += (this.lastDt || 16) / dur;
        const p = this.parentOf.get(q.child);
        if (q.k >= 1 || !p) {
          this.pulses.splice(i, 1);
          continue;
        }
        const corner = this.project(p.x, q.child.y, 0);
        const l1 = Math.abs(corner.y - p.p.y), l2 = Math.abs(q.child.p.x - corner.x), L = l1 + l2 || 1;
        const d = q.k * L;
        const pt = d < l1 ? { x: p.p.x, y: p.p.y + (corner.y - p.p.y) * (d / (l1 || 1)) } : { x: corner.x + (q.child.p.x - corner.x) * ((d - l1) / (l2 || 1)), y: corner.y };
        if (glow) {
          ctx.shadowColor = C.accent;
          ctx.shadowBlur = 10;
        }
        ctx.fillStyle = C.accent;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 2.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }
    const s = this.treeScale();
    const fontSize = Math.round(Math.max(10, Math.min(16, 13 * Math.sqrt(s))));
    for (const n of vis) {
      const r = Math.max(3, 6 * s * S.nodeScale) * (0.4 + 0.6 * n.appear);
      ctx.globalAlpha = n.appear;
      const isFocus = n === focus;
      if (glow && isFocus) {
        ctx.shadowColor = C.accent;
        ctx.shadowBlur = 14;
      }
      ctx.fillStyle = n === this.selected ? C.accent : C.bg;
      ctx.strokeStyle = isFocus ? C.accent : C.fg;
      ctx.lineWidth = isFocus ? 2 : 1.3;
      ctx.beginPath();
      ctx.arc(n.p.x, n.p.y, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.shadowBlur = 0;
      if (n === this.active) {
        ctx.strokeStyle = C.accent;
        ctx.lineWidth = 1.1;
        ctx.setLineDash([3, 3]);
        ctx.beginPath();
        ctx.arc(n.p.x, n.p.y, r + 4 + 1.5 * Math.sin(t / 500), 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
      }
      n.hitR = r + 6;
      const hidden = this.hiddenCount(n);
      const open = this.expanded.has(n) && this.childrenOf(n).some((c) => !c.vanish);
      ctx.font = `${fontSize}px ${C.font}`;
      ctx.textBaseline = "middle";
      ctx.textAlign = "left";
      let x = n.p.x + r + 6;
      if (open || hidden) {
        ctx.fillStyle = C.accent;
        ctx.fillText(open ? "\u25BE" : "\u25B8", x, n.p.y);
        x += fontSize * 0.9;
      }
      ctx.font = `${isFocus ? "600 " : ""}${fontSize}px ${C.font}`;
      ctx.fillStyle = isFocus || n === this.active ? C.fg : rgba(C.fgRgb, 0.85);
      ctx.fillText(n.id, x, n.p.y);
      const w = ctx.measureText(n.id).width;
      if (hidden && !open) {
        ctx.font = `${Math.max(9, fontSize - 3)}px ${C.mono}`;
        ctx.fillStyle = rgba(C.accentRgb, 0.85);
        ctx.fillText(`+${hidden}`, x + w + 8, n.p.y);
      }
      n.hitW = x + w - n.p.x + 4;
      ctx.textBaseline = "alphabetic";
      ctx.globalAlpha = 1;
    }
  }
  // ----- grafo 3D -----
  drawGraph(t, dt) {
    const ctx = this.ctx, C = this.C, S = this.S;
    if (!C) return;
    const vis = this.nodes.filter((n) => this.visible(n));
    for (const n of vis) n.p = this.project(n.x, n.y, n.z);
    const focus = this.hover || this.selected;
    const near = focus ? /* @__PURE__ */ new Set([focus, ...focus.nb]) : null;
    let dMin = Infinity, dMax = -Infinity;
    for (const n of vis) {
      dMin = Math.min(dMin, n.p.depth);
      dMax = Math.max(dMax, n.p.depth);
    }
    const fog = (d) => 1 - 0.6 * ((d - dMin) / Math.max(1, dMax - dMin));
    const glow = S.glow && C.dark && vis.length < 600;
    const explore = S.mode === "explore";
    const linkVisible = (l) => this.visible(l.s) && this.visible(l.t);
    ctx.lineCap = "round";
    for (const l of this.links) {
      if (!linkVisible(l)) continue;
      if (focus && (l.s === focus || l.t === focus)) continue;
      const ap = Math.min(l.s.appear, l.t.appear);
      const a = fog((l.s.p.depth + l.t.p.depth) / 2) * (focus ? 0.05 : C.dark ? 0.28 : 0.2) * ap;
      ctx.strokeStyle = rgba(C.mutedRgb, a.toFixed(3));
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      ctx.moveTo(l.s.p.x, l.s.p.y);
      ctx.lineTo(l.t.p.x, l.t.p.y);
      ctx.stroke();
    }
    if (focus) {
      if (glow) {
        ctx.shadowColor = C.accent;
        ctx.shadowBlur = 8;
      }
      ctx.lineWidth = 1.6;
      for (const l of this.links) {
        if (l.s !== focus && l.t !== focus || !linkVisible(l)) continue;
        ctx.strokeStyle = rgba(C.accentRgb, 0.95 * Math.min(l.s.appear, l.t.appear));
        ctx.beginPath();
        ctx.moveTo(l.s.p.x, l.s.p.y);
        ctx.lineTo(l.t.p.x, l.t.p.y);
        ctx.stroke();
      }
      ctx.shadowBlur = 0;
    }
    if (S.pulses && this.links.length) {
      if (Math.random() < 0.12) {
        const pool = this.links.filter((l2) => linkVisible(l2) && (!focus || l2.s === focus || l2.t === focus));
        const l = pool[Math.random() * pool.length | 0];
        if (l) this.pulses.push({ l, k: 0, rev: focus ? l.t === focus : Math.random() < 0.5 });
      }
      const dur = 6e3 / Math.max(1, S.pulseSpeed);
      for (let i = this.pulses.length - 1; i >= 0; i--) {
        const q = this.pulses[i];
        if (!q.l) {
          this.pulses.splice(i, 1);
          continue;
        }
        q.k += dt / dur;
        if (q.k >= 1) {
          this.pulses.splice(i, 1);
          continue;
        }
        const { s, t: e } = q.l;
        if (!this.visible(s) || !this.visible(e)) continue;
        const a = q.rev ? e.p : s.p, b = q.rev ? s.p : e.p;
        const k0 = Math.max(0, q.k - 0.08);
        ctx.strokeStyle = rgba(C.accentRgb, 0.8);
        ctx.lineWidth = 2;
        if (glow) {
          ctx.shadowColor = C.accent;
          ctx.shadowBlur = 10;
        }
        ctx.beginPath();
        ctx.moveTo(a.x + (b.x - a.x) * k0, a.y + (b.y - a.y) * k0);
        ctx.lineTo(a.x + (b.x - a.x) * q.k, a.y + (b.y - a.y) * q.k);
        ctx.stroke();
        ctx.shadowBlur = 0;
      }
    }
    const order = vis.slice().sort((a, b) => b.p.depth - a.p.depth);
    for (const n of order) {
      const grow = 0.3 + 0.7 * n.appear;
      const r = Math.max(2.5, (5 + Math.min(5, Math.sqrt(n.deg) * 0.9)) * n.p.s * S.nodeScale * grow);
      const inNear = near && near.has(n);
      ctx.globalAlpha = (near ? inNear ? 1 : 0.18 : fog(n.p.depth)) * n.appear;
      if (glow && (!near || inNear)) {
        ctx.shadowColor = C.fg;
        ctx.shadowBlur = n === focus ? 18 : 8;
      }
      ctx.fillStyle = n === this.selected ? C.accent : C.bg;
      ctx.strokeStyle = inNear && n !== focus ? C.accent : C.fg;
      ctx.lineWidth = n === focus ? 2.2 : 1.3;
      ctx.beginPath();
      ctx.arc(n.p.x, n.p.y, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.shadowBlur = 0;
      if (n === this.active) {
        const pr = r + 5 + 2 * Math.sin(t / 500);
        ctx.strokeStyle = C.accent;
        ctx.lineWidth = 1.2;
        ctx.setLineDash([3, 3]);
        ctx.beginPath();
        ctx.arc(n.p.x, n.p.y, pr, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
      }
      n.hitR = r + 4;
      n.hitW = 0;
      const hidden = explore ? this.hiddenCount(n) : 0;
      if (hidden) {
        ctx.globalAlpha = Math.max(0.25, Math.min(1, (n.p.s - 0.4) / 0.6)) * n.appear;
        const pr = r + 4 + 1.5 * Math.sin(t / 600);
        ctx.strokeStyle = rgba(C.accentRgb, 0.6);
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(n.p.x, n.p.y, pr, 0, Math.PI * 2);
        ctx.stroke();
        ctx.font = `600 10px ${C.mono}`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = C.accent;
        ctx.fillText(`+${hidden}`, n.p.x, n.p.y - r - 10);
        ctx.textBaseline = "alphabetic";
      }
      let la;
      if (n === focus || n === this.hover) la = 1;
      else if (S.labels === "none") la = 0;
      else if (near) la = inNear ? Math.max(0.35, smooth(0.55, 1.1, n.p.s)) : 0;
      else if (S.labels === "all") la = Math.max(0.25, smooth(0.5, 1, n.p.s));
      else la = smooth(0.85, 1.5, n.p.s) * (n === this.active ? 1 : fog(n.p.depth));
      la *= n.appear;
      if (la > 0.02) {
        const size = Math.round(Math.max(10, Math.min(15, 11 * Math.sqrt(n.p.s))));
        ctx.globalAlpha = la;
        ctx.font = `${n === focus ? "600 " : ""}${size}px ${C.font}`;
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";
        ctx.lineWidth = 3;
        ctx.strokeStyle = C.bg;
        ctx.lineJoin = "round";
        const txt = (n === focus ? "> " : "") + n.id;
        ctx.strokeText(txt, n.p.x + r + 5, n.p.y);
        ctx.fillStyle = inNear || n === this.active || n === this.hover ? C.fg : C.muted;
        ctx.fillText(txt, n.p.x + r + 5, n.p.y);
        ctx.textBaseline = "alphabetic";
      }
      ctx.globalAlpha = 1;
    }
  }
  // ---------- interacción ----------
  pick(mx, my) {
    let best = null, bd = Infinity;
    for (const n of this.nodes) {
      if (!this.visible(n) || n.vanish) continue;
      let hit;
      if (this.isTree && n.hitW) hit = mx >= n.p.x - n.hitR && mx <= n.p.x + n.hitW && Math.abs(my - n.p.y) <= Math.max(n.hitR, 10);
      else hit = Math.hypot(n.p.x - mx, n.p.y - my) < (n.hitR || 10);
      if (hit && n.p.depth < bd) {
        best = n;
        bd = n.p.depth;
      }
    }
    return best;
  }
  clickNode(n) {
    if (!n) {
      this.select(null);
      return;
    }
    if (this.interactive) {
      const open = this.expanded.has(n) && this.childrenOf(n).some((c) => !c.vanish);
      if (open) this.collapse(n);
      else if (this.hiddenCount(n)) this.expand(n);
    }
    this.select(n);
    if (this.S.openOnClick) this.openNote(n);
  }
  bindPointer() {
    const cv = this.canvas;
    let moved = 0, lx = 0, ly = 0;
    cv.addEventListener("pointerdown", (e) => {
      this.dragging = true;
      moved = 0;
      lx = e.clientX;
      ly = e.clientY;
      this.goal = null;
      cv.setPointerCapture(e.pointerId);
      cv.addClass("dragging");
      this.contentEl.focus();
    });
    cv.addEventListener("pointermove", (e) => {
      const rect = cv.getBoundingClientRect();
      const mx = e.clientX - rect.left, my = e.clientY - rect.top;
      if (this.dragging) {
        const dx = e.clientX - lx, dy = e.clientY - ly;
        moved += Math.abs(dx) + Math.abs(dy);
        if (this.isTree) {
          const f = this.treeScale();
          this.cam.tx -= dx / f;
          this.cam.ty -= dy / f;
        } else {
          this.cam.yaw += dx * 4e-3;
          this.cam.pitch = Math.max(-1.4, Math.min(1.4, this.cam.pitch + dy * 4e-3));
          if (moved > 4) this.autoRotate = false;
        }
        lx = e.clientX;
        ly = e.clientY;
        return;
      }
      this.hover = this.pick(mx, my);
      cv.toggleClass("pointing", !!this.hover);
    });
    cv.addEventListener("pointerup", (e) => {
      this.dragging = false;
      cv.removeClass("dragging");
      if (moved < 5) {
        const rect = cv.getBoundingClientRect();
        this.clickNode(this.pick(e.clientX - rect.left, e.clientY - rect.top));
      }
    });
    cv.addEventListener("pointerleave", () => {
      this.hover = null;
    });
    cv.addEventListener("wheel", (e) => {
      e.preventDefault();
      this.goal = null;
      this.cam.dist = Math.max(160, Math.min(4e3, this.cam.dist * (1 + Math.sign(e.deltaY) * 0.08)));
    }, { passive: false });
    cv.addEventListener("dblclick", () => {
      if (this.selected) this.openNote(this.selected);
    });
  }
  select(n) {
    this.selected = n;
    if (!n) {
      this.panel.removeClass("open");
      return;
    }
    if (this.isTree) this.ensureVisible(n);
    else {
      this.goal = { tx: n.tx, ty: n.ty, tz: n.tz, dist: 380 };
      this.autoRotate = false;
    }
    this.pName.setText(n.id);
    this.pFolder.setText(T.layer + layerName(n.folder));
    this.pMeta.setText(T.conns(n.deg));
    this.pNbs.empty();
    n.nb.slice().sort((a, b) => b.deg - a.deg).forEach((m) => {
      const b = this.pNbs.createEl("button", { text: m.id, cls: "nx4-chip" });
      b.toggleClass("off", !this.revealed.has(m));
      b.onclick = () => {
        if (this.interactive) this.revealPathTo(m);
        this.select(m);
      };
    });
    this.panel.addClass("open");
    this.pSummary.setText("");
    void this.loadSummary(n);
  }
  async loadSummary(n) {
    try {
      const text = await this.app.vault.cachedRead(n.file);
      if (this.selected !== n) return;
      const body = text.replace(/^---[\s\S]*?---\s*/, "");
      const words = body.split(/\s+/).filter(Boolean).length;
      const line = body.split("\n").map((s) => s.trim()).find((s) => s && !s.startsWith("#") && !s.startsWith("---") && !s.startsWith(">")) || "";
      const clean = line.replace(/\[\[([^\]|#]+)(?:#[^\]|]*)?(?:\|([^\]]+))?\]\]/g, (_m, a, b) => b ?? a);
      this.pSummary.setText(clean.length > 180 ? clean.slice(0, 179) + "\u2026" : clean || T.noSummary);
      this.pMeta.setText(T.words(words.toLocaleString(), n.deg));
    } catch {
    }
  }
};
var NeuralSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    const S = this.plugin.prefs;
    const save = () => this.plugin.saveSettings();
    containerEl.empty();
    new import_obsidian.Setting(containerEl).setName(T.sMode).addDropdown((d) => d.addOption("full", T.full).addOption("explore", T.explore).addOption("tree", T.tree).setValue(S.mode).onChange(async (v) => {
      S.mode = v;
      await save();
    }));
    new import_obsidian.Setting(containerEl).setName(T.sView).addDropdown((d) => d.addOption("layers", T.sLayers).addOption("core", T.sCore).setValue(S.view).onChange(async (v) => {
      S.view = v;
      await save();
    }));
    const toggle = (key, name, desc) => new import_obsidian.Setting(containerEl).setName(name).setDesc(desc).addToggle((t) => t.setValue(S[key]).onChange(async (v) => {
      S[key] = v;
      await save();
    }));
    new import_obsidian.Setting(containerEl).setName(T.hAppearance).setHeading();
    new import_obsidian.Setting(containerEl).setName(T.sColor).setDesc(T.sColorDesc).addDropdown((d) => d.addOption("obsidian", T.obsidianTheme).addOption("green", T.green).addOption("orange", T.orange).setValue(S.palette).onChange(async (v) => {
      S.palette = v;
      await save();
    }));
    new import_obsidian.Setting(containerEl).setName(T.sBg).setDesc(T.sBgDesc).addDropdown((d) => d.addOption("none", T.none).addOption("matrix", T.matrixRain).setValue(S.background).onChange(async (v) => {
      S.background = v;
      await save();
    }));
    new import_obsidian.Setting(containerEl).setName(T.hEffects).setHeading();
    toggle("scanlines", T.scan, T.scanDesc);
    toggle("glow", T.glow, T.glowDesc);
    toggle("pulses", T.pulses, T.pulsesDesc);
    new import_obsidian.Setting(containerEl).setName(T.pulseSpeed).addSlider((s) => s.setLimits(1, 10, 1).setValue(S.pulseSpeed).onChange(async (v) => {
      S.pulseSpeed = v;
      await save();
    }));
    new import_obsidian.Setting(containerEl).setName(T.rotSpeed).setDesc(T.rotDesc).addSlider((s) => s.setLimits(0, 10, 1).setValue(S.rotateSpeed).onChange(async (v) => {
      S.rotateSpeed = v;
      await save();
    }));
    new import_obsidian.Setting(containerEl).setName(T.hBehavior).setHeading();
    toggle("openOnClick", T.openClick, T.openClickDesc);
    toggle("followActive", T.follow, T.followDesc);
    new import_obsidian.Setting(containerEl).setName(T.nodeSize).addSlider((s) => s.setLimits(0.5, 2, 0.1).setValue(S.nodeScale).onChange(async (v) => {
      S.nodeScale = v;
      await save();
    }));
    new import_obsidian.Setting(containerEl).setName(T.labels).addDropdown((d) => d.addOption("auto", T.lAuto).addOption("all", T.lAll).addOption("none", T.lNone).setValue(S.labels).onChange(async (v) => {
      S.labels = v;
      await save();
    }));
    new import_obsidian.Setting(containerEl).setName(T.showLayers).setDesc(T.showLayersDesc).addButton((b) => b.setButtonText(T.showAll).onClick(async () => {
      S.hiddenLayers = [];
      await save();
    }));
  }
};
var NeuralGraph3DPlugin = class extends import_obsidian.Plugin {
  constructor() {
    super(...arguments);
    this.prefs = { ...DEFAULTS, hiddenLayers: [] };
  }
  async onload() {
    await this.loadSettings();
    this.registerView(VIEW_TYPE, (leaf) => new NeuralGraphView(leaf, this));
    this.addRibbonIcon("network", T.title, () => {
      void this.activate();
    });
    this.addCommand({ id: "open-view", name: T.open, callback: () => {
      void this.activate();
    } });
    this.addSettingTab(new NeuralSettingTab(this.app, this));
  }
  async loadSettings() {
    const raw = await this.loadData();
    const data = raw && typeof raw === "object" ? raw : {};
    const out = { ...DEFAULTS, hiddenLayers: [] };
    for (const k of Object.keys(DEFAULTS)) {
      const val = data[k];
      if (k === "hiddenLayers") {
        if (Array.isArray(val)) out[k] = val.filter((x) => typeof x === "string");
      } else if (typeof val === typeof out[k]) out[k] = val;
    }
    this.prefs = out;
  }
  async saveSettings() {
    await this.saveData(this.prefs);
    for (const leaf of this.app.workspace.getLeavesOfType(VIEW_TYPE)) {
      const v = leaf.view;
      if (!(v instanceof NeuralGraphView)) continue;
      v.readColors();
      v.renderLegend();
      if (v.curMode !== this.prefs.mode) await v.setMode(this.prefs.mode);
      else if (v.curView !== this.prefs.view) {
        v.curView = this.prefs.view;
        if (!v.isTree) v.applyLayout(true);
      }
      v.syncControls();
    }
  }
  async activate() {
    const existing = this.app.workspace.getLeavesOfType(VIEW_TYPE)[0];
    if (existing) {
      await this.app.workspace.revealLeaf(existing);
      return;
    }
    const leaf = this.app.workspace.getLeaf("tab");
    await leaf.setViewState({ type: VIEW_TYPE, active: true });
    await this.app.workspace.revealLeaf(leaf);
  }
};

/* nosourcemap */