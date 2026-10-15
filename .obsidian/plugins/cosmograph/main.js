"use strict";var tr=Object.defineProperty;var tu=Object.getOwnPropertyDescriptor;var nu=Object.getOwnPropertyNames;var iu=Object.prototype.hasOwnProperty;var su=(i,e,t)=>e in i?tr(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var ru=(i,e)=>{for(var t in e)tr(i,t,{get:e[t],enumerable:!0})},au=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of nu(e))!iu.call(i,s)&&s!==t&&tr(i,s,{get:()=>e[s],enumerable:!(n=tu(e,s))||n.enumerable});return i};var ou=i=>au(tr({},"__esModule",{value:!0}),i);var $=(i,e,t)=>su(i,typeof e!="symbol"?e+"":e,t);var Jg={};ru(Jg,{default:()=>fo});module.exports=ou(Jg);var Zh=require("obsidian");var Ks=require("obsidian");var Yl=`:root {
  color-scheme: dark;
  font-family: "Avenir Next", Avenir, "SF Pro Display", system-ui, sans-serif;
  background: #02020b;
  color: #e9edf4;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  --accent: #f08bd7;
  --surface: rgba(7, 9, 16, 0.91);
  --line: rgba(171, 184, 214, 0.12);
  --muted: #858b99;
  --radius: 14px;
}

* { box-sizing: border-box; }
html, body, #app { width: 100%; min-height: 100%; margin: 0; }
body { overflow: hidden; }
button, input { font: inherit; }
button, label { -webkit-tap-highlight-color: transparent; }

.app-shell {
  position: relative;
  min-height: 100dvh;
  overflow: hidden;
  isolation: isolate;
  background:
    radial-gradient(circle at 52% 48%, rgba(37, 25, 95, 0.16) 0, rgba(7, 8, 28, 0.08) 34%, transparent 66%),
    #02020b;
}

.app-shell::after {
  content: "";
  position: fixed;
  z-index: 8;
  inset: 0;
  pointer-events: none;
  opacity: 0.022;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 140 140' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.82' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.9'/%3E%3C/svg%3E");
}

.scene-settings {
  position: absolute;
  z-index: 11;
  top: 26px;
  right: 142px;
}
.scene-settings__trigger {
  width: 34px;
  height: 34px;
  display: grid;
  place-content: center;
  gap: 3px;
  padding: 0;
  border: 1px solid rgba(185, 197, 224, 0.1);
  border-radius: 10px;
  background: rgba(10, 13, 21, 0.76);
  color: #9ca3b2;
  box-shadow: inset 0 1px rgba(255, 255, 255, 0.025), 0 10px 28px rgba(0, 0, 0, 0.16);
  backdrop-filter: blur(16px);
  cursor: pointer;
  transition: color 160ms ease, border-color 160ms ease, background 160ms ease, opacity 220ms ease;
}
.scene-settings__trigger > span {
  width: 12px;
  height: 1px;
  display: block;
  border-radius: 1px;
  background: currentColor;
  transition: transform 180ms ease, width 180ms ease;
}
.scene-settings__trigger > span:nth-child(2) { width: 8px; justify-self: end; }
.scene-settings__trigger:hover,
.scene-settings__trigger.is-active { color: #e5e9f0; border-color: rgba(201, 144, 180, 0.3); background: rgba(18, 20, 30, 0.92); }
.scene-settings__trigger.is-active > span:nth-child(2) { width: 12px; }
.scene-settings__trigger:active { transform: translateY(1px); }
.scene-settings__trigger:focus-visible { outline: 1px solid rgba(240, 139, 215, 0.72); outline-offset: 2px; }
.scene-settings__menu {
  position: absolute;
  top: 43px;
  right: 0;
  width: 238px;
  max-height: calc(100dvh - 86px);
  overflow-y: auto;
  scrollbar-width: thin;
  padding: 8px;
  border: 1px solid rgba(184, 196, 224, 0.13);
  border-radius: 12px;
  background: rgba(7, 9, 16, 0.94);
  box-shadow: inset 0 1px rgba(255, 255, 255, 0.035), 0 24px 60px rgba(0, 0, 0, 0.42);
  backdrop-filter: blur(24px) saturate(130%);
  transform-origin: top right;
  animation: settings-in 180ms cubic-bezier(0.16, 1, 0.3, 1) both;
}
.scene-settings__menu[hidden] { display: none; }
.scene-settings__heading { display: flex; align-items: baseline; justify-content: space-between; padding: 6px 8px 10px; }
.scene-settings__heading > span { color: #e5e9f0; font-size: 10px; font-weight: 580; }
.scene-settings__heading > small { color: #696f7c; font-size: 8px; }
.scene-settings__row {
  min-height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  padding: 9px 8px;
  border: 1px solid rgba(181, 194, 221, 0.07);
  border-radius: 9px;
  background: rgba(198, 206, 226, 0.025);
}
.scene-settings__copy { display: grid; gap: 3px; }
.scene-settings__copy strong { color: #dfe4ed; font-size: 10px; font-weight: 520; }
.scene-settings__copy small { color: #757c8a; font-size: 8px; line-height: 1.3; }
.scene-settings__row--labels { display: grid; align-items: stretch; gap: 9px; }
.scene-settings__row--clusters { margin-top: 6px; }
.label-mode-switch,
.cluster-depth-switch {
  display: grid;
  gap: 2px;
  padding: 2px;
  border: 1px solid rgba(184, 194, 222, 0.08);
  border-radius: 8px;
  background: rgba(3, 5, 14, 0.48);
}
.label-mode-switch { grid-template-columns: 0.8fr 1.25fr 0.8fr; }
.cluster-depth-switch {
  grid-template-columns: repeat(3, 25px);
  flex: 0 0 auto;
}
.label-mode-switch button,
.cluster-depth-switch button {
  min-width: 0;
  height: 25px;
  padding: 0 5px;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: #777d89;
  cursor: pointer;
  font-size: 8px;
  white-space: nowrap;
  transition: color 160ms ease, background 160ms ease, transform 120ms ease;
}
.label-mode-switch button:hover,
.cluster-depth-switch button:hover { color: #d8dde6; }
.label-mode-switch button.is-active,
.cluster-depth-switch button.is-active { color: #efbadb; background: rgba(185, 123, 160, 0.15); }
.label-mode-switch button:active,
.cluster-depth-switch button:active { transform: translateY(1px); }
.label-mode-switch button:focus-visible,
.cluster-depth-switch button:focus-visible { outline: 1px solid rgba(240, 139, 215, 0.72); outline-offset: -1px; }
.scene-settings__actions { display: grid; gap: 3px; margin-top: 6px; }
.scene-menu-action {
  width: 100%;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px;
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: #dfe4ed;
  cursor: pointer;
  text-align: left;
  transition: color 160ms ease, background 160ms ease, transform 120ms ease;
}
.scene-menu-action:hover { color: #f2f4f8; background: rgba(198, 206, 226, 0.055); }
.scene-menu-action:active { transform: translateY(1px); }
.scene-menu-action:focus-visible { outline: 1px solid rgba(240, 139, 215, 0.72); outline-offset: -1px; }
.scene-menu-action > span:first-child { display: grid; gap: 3px; }
.scene-menu-action strong { font-size: 10px; font-weight: 520; }
.scene-menu-action small { color: #757c8a; font-size: 8px; font-weight: 400; }
.scene-menu-action__value { color: #9a8396; font-size: 8px; transition: color 160ms ease; }
.scene-menu-action.is-active .scene-menu-action__value { color: #e6a4d2; }
.topbar,
.library-sidebar,
.note-panel,
.view-dock,
.node-tooltip {
  transition: opacity 220ms ease, visibility 220ms ease;
}
.app-shell.is-immersive .topbar,
.app-shell.is-immersive .library-sidebar,
.app-shell.is-immersive .note-panel,
.app-shell.is-immersive .view-dock,
.app-shell.is-immersive .node-tooltip {
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
}

.topbar {
  position: absolute;
  z-index: 4;
  top: 0;
  left: 0;
  right: 0;
  height: 86px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 22px;
  pointer-events: none;
}
.brand, .top-actions { pointer-events: auto; }
.brand { display: flex; align-items: center; gap: 12px; }

.brand-mark {
  position: relative;
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(140, 158, 205, 0.3);
  border-radius: 50%;
  background: rgba(48, 61, 94, 0.2);
  box-shadow: 0 0 24px rgba(87, 110, 168, 0.13), inset 0 0 12px rgba(104, 122, 170, 0.12);
}
.brand-mark::before, .brand-mark span { content: ""; position: absolute; border-radius: 50%; }
.brand-mark::before { width: 12px; height: 12px; background: #7abfff; box-shadow: 0 0 14px #6a83ff; opacity: 0.62; }
.brand-mark span { width: 4px; height: 4px; background: #fff3ff; box-shadow: 0 0 9px #ff7ddb; }
.brand-copy { display: grid; gap: 2px; }
.brand-copy strong { font-size: 15px; font-weight: 590; letter-spacing: -0.015em; }
.brand-copy small { color: #7f8592; font-size: 10px; }

#vault-input { position: absolute; width: 1px; height: 1px; opacity: 0; pointer-events: none; }
.vault-button {
  min-height: 38px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 17px;
  border: 1px solid rgba(185, 197, 224, 0.1);
  border-radius: 12px;
  background: rgba(13, 16, 25, 0.86);
  color: #e5e9f0;
  box-shadow: inset 0 1px rgba(255, 255, 255, 0.025), 0 12px 30px rgba(0, 0, 0, 0.16);
  font-size: 11px;
  cursor: pointer;
  transition: transform 160ms ease, border-color 160ms ease, background 160ms ease;
  white-space: nowrap;
}
.vault-button:hover { border-color: rgba(201, 144, 180, 0.3); background: rgba(20, 22, 33, 0.94); }
.vault-button:active { transform: translateY(1px); }

.library-sidebar {
  position: absolute;
  z-index: 4;
  top: 128px;
  left: 16px;
  bottom: 110px;
  width: 184px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 18px;
  pointer-events: none;
}
.library-sidebar nav, .search-field { pointer-events: auto; }
.library-sidebar nav { display: grid; gap: 3px; }
.library-sidebar nav button {
  width: 100%;
  min-height: 39px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  border: 1px solid transparent;
  border-radius: 11px;
  background: transparent;
  color: #969ca9;
  cursor: pointer;
  font-size: 11px;
  text-align: left;
  transition: color 160ms ease, background 160ms ease, border-color 160ms ease;
}
.library-sidebar nav button:hover { color: #dde2eb; background: rgba(17, 20, 29, 0.5); }
.library-sidebar nav button.is-active { color: #edf0f5; border-color: rgba(181, 195, 224, 0.08); background: rgba(15, 18, 27, 0.72); }
.library-sidebar nav small { color: #6f7582; font-size: 9px; font-variant-numeric: tabular-nums; }

.search-field { position: relative; display: block; }
.search-field input {
  width: 100%;
  height: 36px;
  border: 1px solid rgba(182, 195, 222, 0.08);
  border-radius: 11px;
  outline: none;
  padding: 0 42px 0 12px;
  background: rgba(12, 15, 23, 0.76);
  color: #e1e5ec;
  font-size: 10px;
}
.search-field input::placeholder { color: #747a87; }
.search-field input:focus { border-color: rgba(201, 144, 180, 0.38); background: rgba(18, 20, 30, 0.9); }
.search-shortcut { position: absolute; top: 50%; right: 10px; transform: translateY(-50%); color: #676d79; font-size: 9px; pointer-events: none; }

.viewport { position: absolute; z-index: 1; inset: 0; }
#graph-canvas { position: absolute; inset: 0; width: 100%; height: 100%; cursor: grab; touch-action: none; }
#graph-canvas:active { cursor: grabbing; }
#graph-canvas.is-hovering-node { cursor: pointer; }
.graph-label-layer { position: absolute; z-index: 2; inset: 0; pointer-events: none; overflow: hidden; }
.graph-label-layer.is-hidden { visibility: hidden; opacity: 0; }
.graph-label {
  display: block;
  padding: 3px 5px;
  color: rgba(226, 232, 242, 0.9);
  font-size: 10px;
  line-height: 1;
  white-space: nowrap;
  text-shadow: 0 1px 4px #03050b, 0 0 12px rgba(11, 16, 31, 0.94);
  transition: opacity 120ms linear, color 160ms ease;
}
.graph-label--cluster { color: #edf0f5; font-size: 12px; font-weight: 540; }
.graph-label.is-selected { color: #f5dfec; }
.graph-label.is-focus-neighbor { color: rgba(226, 234, 247, 0.94); }
.graph-label[data-focus-distance="2"] { color: rgba(201, 211, 232, 0.78); }
.graph-label[data-focus-distance="3"] { color: rgba(184, 195, 220, 0.62); }

.node-tooltip {
  position: fixed;
  z-index: 7;
  left: 0;
  top: 0;
  max-width: 260px;
  padding: 8px 10px;
  border: 1px solid rgba(180, 193, 222, 0.14);
  border-radius: 9px;
  background: rgba(8, 10, 17, 0.94);
  color: #e9ecf2;
  box-shadow: 0 12px 34px rgba(0, 0, 0, 0.38);
  font-size: 10px;
  pointer-events: none;
}

.note-panel {
  position: absolute;
  z-index: 5;
  right: 28px;
  bottom: 42px;
  width: min(278px, calc(100vw - 32px));
  padding: 17px;
  border: 1px solid rgba(180, 192, 219, 0.13);
  border-radius: var(--radius);
  background: var(--surface);
  backdrop-filter: blur(24px) saturate(125%);
  box-shadow: inset 0 1px rgba(255, 255, 255, 0.035), 0 26px 70px rgba(0, 0, 0, 0.38);
  animation: panel-in 260ms cubic-bezier(0.16, 1, 0.3, 1) both;
  transition: opacity 220ms ease, visibility 220ms ease, border-color 240ms ease, box-shadow 240ms ease;
}
.app-shell.is-focus-mode .note-panel {
  border-color: rgba(224, 143, 201, 0.24);
  box-shadow: inset 0 1px rgba(255, 255, 255, 0.045), 0 26px 70px rgba(0, 0, 0, 0.42), 0 0 36px rgba(160, 92, 174, 0.08);
}
.panel-heading { display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 8px; }
.panel-swatch { width: 7px; height: 7px; border-radius: 50%; background: #f28bdc; box-shadow: 0 0 12px rgba(242, 139, 220, 0.62); }
.app-shell[data-sphere-style="calm"] .panel-swatch { background: #d3a0be; box-shadow: 0 0 9px rgba(190, 161, 208, 0.4); }
.panel-group { margin: 0; color: #e3e7ed; font-size: 11px; font-weight: 560; }
.panel-close { padding: 0; border: 0; background: transparent; color: #777d89; cursor: pointer; font-size: 9px; }
.panel-close:hover { color: #d9dee7; }
.panel-close:active { transform: translateY(1px); }
.note-panel h1 { margin: 17px 0 0; font-size: 20px; line-height: 1.08; letter-spacing: -0.03em; font-weight: 560; }
.panel-path { margin: 7px 0 12px; color: #858b98; font-size: 9px; line-height: 1.45; overflow-wrap: anywhere; }
.panel-preview {
  display: -webkit-box;
  overflow: hidden;
  margin: 0 0 13px;
  color: #aeb5c2;
  font-size: 9px;
  line-height: 1.52;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
}
.panel-preview[hidden] { display: none; }
.focus-controls {
  min-height: 47px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin: 0 0 14px;
  padding: 8px 9px;
  border: 1px solid rgba(184, 194, 222, 0.08);
  border-radius: 9px;
  background: rgba(198, 206, 226, 0.025);
}
.focus-controls__copy { display: grid; gap: 3px; min-width: 0; }
.focus-controls__copy strong { color: #dfe4ed; font-size: 9px; font-weight: 540; }
.focus-controls__copy small { overflow: hidden; color: #747b89; font-size: 7px; text-overflow: ellipsis; white-space: nowrap; }
.focus-depth-switch {
  flex: 0 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 25px);
  gap: 2px;
  padding: 2px;
  border: 1px solid rgba(184, 194, 222, 0.08);
  border-radius: 8px;
  background: rgba(3, 5, 14, 0.48);
}
.focus-depth-switch button {
  height: 25px;
  padding: 0;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: #777d89;
  cursor: pointer;
  font-size: 8px;
  transition: color 160ms ease, background 160ms ease, transform 120ms ease;
}
.focus-depth-switch button:hover { color: #d8dde6; }
.focus-depth-switch button.is-active { color: #efbadb; background: rgba(185, 123, 160, 0.15); }
.focus-depth-switch button:active { transform: translateY(1px); }
.focus-depth-switch button:focus-visible { outline: 1px solid rgba(240, 139, 215, 0.72); outline-offset: -1px; }
.panel-meta { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin: 0; }
.panel-meta div { padding-top: 10px; border-top: 1px solid var(--line); }
.panel-meta dt { color: #7c8290; font-size: 8px; }
.panel-meta dd { margin: 5px 0 0; color: #e4e8ef; font-size: 15px; font-variant-numeric: tabular-nums; }
.recent-block { margin-top: 18px; }
.recent-block > p { margin: 0 0 8px; color: #777d89; font-size: 8px; }
.recent-block ul { display: grid; gap: 4px; margin: 0; padding: 0; list-style: none; }
.recent-block li { position: relative; overflow: hidden; padding: 6px 8px 6px 18px; color: #aeb4c0; background: rgba(194, 204, 226, 0.025); border-radius: 7px; font-size: 9px; text-overflow: ellipsis; white-space: nowrap; cursor: pointer; transition: color 150ms ease, background 150ms ease; }
.recent-block li:hover { color: #e0e4ec; background: rgba(194, 204, 226, 0.055); }
.recent-block li:focus-visible { outline: 1px solid rgba(240, 139, 215, 0.62); outline-offset: 1px; }
.recent-block li::before { content: ""; position: absolute; left: 8px; top: 50%; width: 4px; height: 4px; transform: translateY(-50%); border-radius: 50%; background: #d79abe; box-shadow: 0 0 7px rgba(215, 154, 190, 0.46); }
.app-shell[data-sphere-style="calm"] .recent-block li::before { background: #a79de9; box-shadow: 0 0 6px rgba(167, 157, 233, 0.34); }

.view-dock {
  position: absolute;
  z-index: 5;
  left: 50%;
  bottom: 18px;
  transform: translateX(-50%);
  min-height: 46px;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 6px;
  border: 1px solid rgba(181, 194, 221, 0.1);
  border-radius: 13px;
  background: rgba(10, 13, 21, 0.88);
  backdrop-filter: blur(20px);
  box-shadow: inset 0 1px rgba(255, 255, 255, 0.025), 0 16px 42px rgba(0, 0, 0, 0.3);
}
.view-dock button, .view-dock span { min-height: 32px; display: inline-flex; align-items: center; padding: 0 11px; border: 0; border-radius: 8px; background: transparent; color: #777d89; font-size: 9px; white-space: nowrap; }
.view-dock button { cursor: pointer; }
.view-dock button:hover { color: #ccd2dc; }
.view-dock button.is-active { color: #e1abc9; background: rgba(185, 123, 160, 0.12); }
.view-dock button:active { transform: translateY(1px); }
.view-dock button:focus-visible { outline: 1px solid rgba(240, 139, 215, 0.7); outline-offset: 2px; }
.view-dock span { border-left: 1px solid var(--line); border-radius: 0; }
.sphere-style-switch { display: flex; align-items: center; gap: 2px; padding: 2px; border: 1px solid rgba(184, 194, 222, 0.07); border-radius: 9px; background: rgba(3, 5, 14, 0.48); }
.sphere-style-switch button { min-height: 28px; padding-inline: 10px; }

.loading-state {
  position: absolute;
  z-index: 9;
  inset: 0;
  display: grid;
  place-content: center;
  justify-items: center;
  gap: 18px;
  background: rgba(2, 4, 10, 0.86);
  backdrop-filter: blur(12px);
  color: #aeb4c0;
  font-size: 11px;
}
.loading-state[hidden] { display: none; }
.loading-orbit { width: 46px; height: 46px; border: 1px solid rgba(180, 193, 219, 0.16); border-top-color: var(--accent); border-radius: 50%; animation: orbit 900ms linear infinite; }
.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }

@keyframes orbit { to { transform: rotate(360deg); } }
@keyframes panel-in { from { opacity: 0; transform: translateX(14px); } to { opacity: 1; transform: translateX(0); } }
@keyframes settings-in { from { opacity: 0; transform: translateY(-4px) scale(0.98); } to { opacity: 1; transform: translateY(0) scale(1); } }

@media (max-width: 760px) {
  .scene-settings { top: 17px; right: 118px; }
  .scene-settings__menu { position: fixed; top: 60px; right: 12px; }
  .topbar { height: 68px; padding: 0 14px; }
  .brand-copy small { display: none; }
  .library-sidebar { display: none; }
  .note-panel { right: 12px; bottom: 78px; width: min(270px, calc(100vw - 24px)); max-height: calc(100dvh - 152px); overflow-y: auto; }
  .view-dock { bottom: 12px; }
  .vault-button { min-height: 36px; padding: 0 13px; }
  .graph-label { font-size: 8px; }
  .graph-label--cluster { font-size: 10px; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; }
}

@media (prefers-reduced-transparency: reduce) {
  .note-panel, .view-dock, .vault-button, .scene-settings__trigger, .scene-settings__menu { background: #0b0e16; backdrop-filter: none; }
}
`;var Ec=0,$o=1,Tc=2;var Jo=1,wc=2,fn=3,Ft=0,wt=1,pn=2,ln=0,ii=1,lt=2,Ko=3,Qo=4,Ac=5,zn=100,Cc=101,Rc=102,Pc=103,Ic=104,Lc=200,Dc=201,Nc=202,Uc=203,Cr=204,Rr=205,Fc=206,Bc=207,Oc=208,zc=209,Hc=210,kc=211,Vc=212,Gc=213,Wc=214,ea=0,ta=1,na=2,si=3,ia=4,sa=5,ra=6,aa=7,jo=0,Xc=1,qc=2,An=0,oa=1,la=2,ca=3,Zi=4,ha=5,ua=6,da=7;var el=300,fi=301,pi=302,fa=303,pa=304,Hs=306,Pr=1e3,On=1001,Ir=1002,Zt=1003,Yc=1004;var ks=1005;var Tt=1006,ma=1007;var qn=1008;var cn=1009,tl=1010,nl=1011,$i=1012,ga=1013,Yn=1014,mn=1015,Kt=1016,xa=1017,va=1018,Ji=1020,il=35902,sl=1021,rl=1022,Qt=1023,Hi=1026,Ki=1027,al=1028,_a=1029,ol=1030,ya=1031;var ba=1033,Vs=33776,Gs=33777,Ws=33778,Xs=33779,Ma=35840,Sa=35841,Ea=35842,Ta=35843,wa=36196,Aa=37492,Ca=37496,Ra=37808,Pa=37809,Ia=37810,La=37811,Da=37812,Na=37813,Ua=37814,Fa=37815,Ba=37816,Oa=37817,za=37818,Ha=37819,ka=37820,Va=37821,qs=36492,Ga=36494,Wa=36495,ll=36283,Xa=36284,qa=36285,Ya=36286;var vs=2300,Lr=2301,Ar=2302,Ho=2400,ko=2401,Vo=2402;var Zc=3200,$c=3201;var cl=0,Jc=1,Cn="",Et="srgb",ri="srgb-linear",_s="linear",Ye="srgb";var ni=7680;var Go=519,Kc=512,Qc=513,jc=514,hl=515,eh=516,th=517,nh=518,ih=519,Dr=35044;var ul="300 es",sn=2e3,ys=2001;var wn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zl=1234567,gs=Math.PI/180,ki=180/Math.PI;function En(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(At[i&255]+At[i>>8&255]+At[i>>16&255]+At[i>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]).toLowerCase()}function Ve(i,e,t){return Math.max(e,Math.min(t,i))}function dl(i,e){return(i%e+e)%e}function cu(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function hu(i,e,t){return i!==e?(t-i)/(e-i):0}function xs(i,e,t){return(1-t)*i+t*e}function uu(i,e,t,n){return xs(i,e,1-Math.exp(-t*n))}function du(i,e=1){return e-Math.abs(dl(i,e*2)-e)}function fu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function pu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function mu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function gu(i,e){return i+Math.random()*(e-i)}function xu(i){return i*(.5-Math.random())}function vu(i){i!==void 0&&(Zl=i);let e=Zl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _u(i){return i*gs}function yu(i){return i*ki}function bu(i){return(i&i-1)===0&&i!==0}function Mu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Su(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Eu(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),f=r((e-n)/2),d=a((e-n)/2),p=r((n-e)/2),m=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*f,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*f,o*c);break;case"ZXZ":i.set(l*f,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*m,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*m,o*c);break;case"ZYZ":i.set(l*m,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function nn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ke(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ft={DEG2RAD:gs,RAD2DEG:ki,generateUUID:En,clamp:Ve,euclideanModulo:dl,mapLinear:cu,inverseLerp:hu,lerp:xs,damp:uu,pingpong:du,smoothstep:fu,smootherstep:pu,randInt:mu,randFloat:gu,randFloatSpread:xu,seededRandom:vu,degToRad:_u,radToDeg:yu,isPowerOfTwo:bu,ceilPowerOfTwo:Mu,floorPowerOfTwo:Su,setQuaternionFromProperEuler:Eu,normalize:Ke,denormalize:nn},Se=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$t=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],d=r[a+0],p=r[a+1],m=r[a+2],x=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=m,e[t+3]=x;return}if(f!==x||l!==d||c!==p||h!==m){let g=1-o,u=l*d+c*p+h*m+f*x,T=u>=0?1:-1,S=1-u*u;if(S>Number.EPSILON){let A=Math.sqrt(S),E=Math.atan2(A,u*T);g=Math.sin(g*E)/A,o=Math.sin(o*E)/A}let _=o*T;if(l=l*g+d*_,c=c*g+p*_,h=h*g+m*_,f=f*g+x*_,g===1-o){let A=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=A,c*=A,h*=A,f*=A}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],d=r[a+1],p=r[a+2],m=r[a+3];return e[t]=o*m+h*f+l*p-c*d,e[t+1]=l*m+h*d+c*f-o*p,e[t+2]=c*m+h*p+o*d-l*f,e[t+3]=h*m-o*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),d=l(n/2),p=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=d*h*f+c*p*m,this._y=c*p*f-d*h*m,this._z=c*h*m+d*p*f,this._w=c*h*f-d*p*m;break;case"YXZ":this._x=d*h*f+c*p*m,this._y=c*p*f-d*h*m,this._z=c*h*m-d*p*f,this._w=c*h*f+d*p*m;break;case"ZXY":this._x=d*h*f-c*p*m,this._y=c*p*f+d*h*m,this._z=c*h*m+d*p*f,this._w=c*h*f-d*p*m;break;case"ZYX":this._x=d*h*f-c*p*m,this._y=c*p*f+d*h*m,this._z=c*h*m-d*p*f,this._w=c*h*f+d*p*m;break;case"YZX":this._x=d*h*f+c*p*m,this._y=c*p*f+d*h*m,this._z=c*h*m-d*p*f,this._w=c*h*f-d*p*m;break;case"XZY":this._x=d*h*f-c*p*m,this._y=c*p*f-d*h*m,this._z=c*h*m+d*p*f,this._w=c*h*f+d*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],d=n+o+f;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>f){let p=2*Math.sqrt(1+n-o-f);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>f){let p=2*Math.sqrt(1+o-n-f);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+f-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),f=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($l.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($l.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return go.copy(this).projectOnVector(e),this.sub(go)}reflect(e){return this.sub(go.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},go=new L,$l=new $t,Be=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],p=n[5],m=n[8],x=s[0],g=s[3],u=s[6],T=s[1],S=s[4],_=s[7],A=s[2],E=s[5],R=s[8];return r[0]=a*x+o*T+l*A,r[3]=a*g+o*S+l*E,r[6]=a*u+o*_+l*R,r[1]=c*x+h*T+f*A,r[4]=c*g+h*S+f*E,r[7]=c*u+h*_+f*R,r[2]=d*x+p*T+m*A,r[5]=d*g+p*S+m*E,r[8]=d*u+p*_+m*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,d=o*l-h*r,p=c*r-a*l,m=t*f+n*d+s*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=f*x,e[1]=(s*c-h*n)*x,e[2]=(o*n-s*a)*x,e[3]=d*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=p*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(xo.makeScale(e,t)),this}rotate(e){return this.premultiply(xo.makeRotation(-e)),this}translate(e,t){return this.premultiply(xo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},xo=new Be;function fl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function bs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function sh(){let i=bs("canvas");return i.style.display="block",i}var Jl={};function ai(i){i in Jl||(Jl[i]=!0,console.warn(i))}function rh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Kl=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ql=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Tu(){let i={enabled:!0,workingColorSpace:ri,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ye&&(s.r=Tn(s.r),s.g=Tn(s.g),s.b=Tn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ye&&(s.r=zi(s.r),s.g=zi(s.g),s.b=zi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Cn?_s:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ai("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ai("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ri]:{primaries:e,whitePoint:n,transfer:_s,toXYZ:Kl,fromXYZ:Ql,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Et},outputColorSpaceConfig:{drawingBufferColorSpace:Et}},[Et]:{primaries:e,whitePoint:n,transfer:Ye,toXYZ:Kl,fromXYZ:Ql,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Et}}}),i}var Ge=Tu();function Tn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function zi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Si,Nr=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Si===void 0&&(Si=bs("canvas")),Si.width=e.width,Si.height=e.height;let s=Si.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Si}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=bs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Tn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Tn(t[n]/255)*255):t[n]=Tn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},wu=0,Vi=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=En(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(vo(s[a].image)):r.push(vo(s[a]))}else r=vo(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function vo(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Nr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Au=0,_o=new L,Bt=class i extends wn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=On,s=On,r=Tt,a=qn,o=Qt,l=cn,c=i.DEFAULT_ANISOTROPY,h=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Au++}),this.uuid=En(),this.name="",this.source=new Vi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(_o).x}get height(){return this.source.getSize(_o).y}get depth(){return this.source.getSize(_o).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==el)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pr:e.x=e.x-Math.floor(e.x);break;case On:e.x=e.x<0?0:1;break;case Ir:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pr:e.y=e.y-Math.floor(e.y);break;case On:e.y=e.y<0?0:1;break;case Ir:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=el;Bt.DEFAULT_ANISOTROPY=1;var dt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],p=l[5],m=l[9],x=l[2],g=l[6],u=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,_=(p+1)/2,A=(u+1)/2,E=(h+d)/4,R=(f+x)/4,I=(m+g)/4;return S>_&&S>A?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=E/n,r=R/n):_>A?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=E/s,r=I/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=R/r,s=I/r),this.set(n,s,r,t),this}let T=Math.sqrt((g-m)*(g-m)+(f-x)*(f-x)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(g-m)/T,this.y=(f-x)/T,this.z=(d-h)/T,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ur=class extends wn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new Bt(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Tt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Vi(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},It=class extends Ur{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ms=class extends Bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Fr=class extends Bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Hn=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,jt):jt.fromBufferAttribute(r,a),jt.applyMatrix4(e.matrixWorld),this.expandByPoint(jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),nr.copy(n.boundingBox)),nr.applyMatrix4(e.matrixWorld),this.union(nr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,jt),jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ls),ir.subVectors(this.max,ls),Ei.subVectors(e.a,ls),Ti.subVectors(e.b,ls),wi.subVectors(e.c,ls),Ln.subVectors(Ti,Ei),Dn.subVectors(wi,Ti),Qn.subVectors(Ei,wi);let t=[0,-Ln.z,Ln.y,0,-Dn.z,Dn.y,0,-Qn.z,Qn.y,Ln.z,0,-Ln.x,Dn.z,0,-Dn.x,Qn.z,0,-Qn.x,-Ln.y,Ln.x,0,-Dn.y,Dn.x,0,-Qn.y,Qn.x,0];return!yo(t,Ei,Ti,wi,ir)||(t=[1,0,0,0,1,0,0,0,1],!yo(t,Ei,Ti,wi,ir))?!1:(sr.crossVectors(Ln,Dn),t=[sr.x,sr.y,sr.z],yo(t,Ei,Ti,wi,ir))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},vn=[new L,new L,new L,new L,new L,new L,new L,new L],jt=new L,nr=new Hn,Ei=new L,Ti=new L,wi=new L,Ln=new L,Dn=new L,Qn=new L,ls=new L,ir=new L,sr=new L,jn=new L;function yo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){jn.fromArray(i,r);let o=s.x*Math.abs(jn.x)+s.y*Math.abs(jn.y)+s.z*Math.abs(jn.z),l=e.dot(jn),c=t.dot(jn),h=n.dot(jn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Cu=new Hn,cs=new L,bo=new L,kn=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Cu.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cs.subVectors(e,this.center);let t=cs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(cs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cs.copy(e.center).add(bo)),this.expandByPoint(cs.copy(e.center).sub(bo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},_n=new L,Mo=new L,rr=new L,Nn=new L,So=new L,ar=new L,Eo=new L,oi=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=_n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_n.copy(this.origin).addScaledVector(this.direction,t),_n.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Mo.copy(e).add(t).multiplyScalar(.5),rr.copy(t).sub(e).normalize(),Nn.copy(this.origin).sub(Mo);let r=e.distanceTo(t)*.5,a=-this.direction.dot(rr),o=Nn.dot(this.direction),l=-Nn.dot(rr),c=Nn.lengthSq(),h=Math.abs(1-a*a),f,d,p,m;if(h>0)if(f=a*l-o,d=a*o-l,m=r*h,f>=0)if(d>=-m)if(d<=m){let x=1/h;f*=x,d*=x,p=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d<=-m?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c):d<=m?(f=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Mo).addScaledVector(rr,d),p}intersectSphere(e,t){_n.subVectors(e.center,this.origin);let n=_n.dot(this.direction),s=_n.dot(_n)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,_n)!==null}intersectTriangle(e,t,n,s,r){So.subVectors(t,e),ar.subVectors(n,e),Eo.crossVectors(So,ar);let a=this.direction.dot(Eo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Nn.subVectors(this.origin,e);let l=o*this.direction.dot(ar.crossVectors(Nn,ar));if(l<0)return null;let c=o*this.direction.dot(So.cross(Nn));if(c<0||l+c>a)return null;let h=-o*Nn.dot(Eo);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},et=class i{constructor(e,t,n,s,r,a,o,l,c,h,f,d,p,m,x,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,f,d,p,m,x,g)}set(e,t,n,s,r,a,o,l,c,h,f,d,p,m,x,g){let u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=f,u[14]=d,u[3]=p,u[7]=m,u[11]=x,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Ai.setFromMatrixColumn(e,0).length(),r=1/Ai.setFromMatrixColumn(e,1).length(),a=1/Ai.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let d=a*h,p=a*f,m=o*h,x=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=p+m*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=m+p*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,p=l*f,m=c*h,x=c*f;t[0]=d+x*o,t[4]=m*o-p,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=p*o-m,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,p=l*f,m=c*h,x=c*f;t[0]=d-x*o,t[4]=-a*f,t[8]=m+p*o,t[1]=p+m*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,p=a*f,m=o*h,x=o*f;t[0]=l*h,t[4]=m*c-p,t[8]=d*c+x,t[1]=l*f,t[5]=x*c+d,t[9]=p*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,m=o*l,x=o*c;t[0]=l*h,t[4]=x-d*f,t[8]=m*f+p,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*f+m,t[10]=d-x*f}else if(e.order==="XZY"){let d=a*l,p=a*c,m=o*l,x=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=d*f+x,t[5]=a*h,t[9]=p*f-m,t[2]=m*f-p,t[6]=o*h,t[10]=x*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ru,e,Pu)}lookAt(e,t,n){let s=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),Un.crossVectors(n,Ht),Un.lengthSq()===0&&(Math.abs(n.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),Un.crossVectors(n,Ht)),Un.normalize(),or.crossVectors(Ht,Un),s[0]=Un.x,s[4]=or.x,s[8]=Ht.x,s[1]=Un.y,s[5]=or.y,s[9]=Ht.y,s[2]=Un.z,s[6]=or.z,s[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],p=n[13],m=n[2],x=n[6],g=n[10],u=n[14],T=n[3],S=n[7],_=n[11],A=n[15],E=s[0],R=s[4],I=s[8],b=s[12],M=s[1],C=s[5],V=s[9],H=s[13],k=s[2],Z=s[6],W=s[10],K=s[14],z=s[3],ne=s[7],ae=s[11],ge=s[15];return r[0]=a*E+o*M+l*k+c*z,r[4]=a*R+o*C+l*Z+c*ne,r[8]=a*I+o*V+l*W+c*ae,r[12]=a*b+o*H+l*K+c*ge,r[1]=h*E+f*M+d*k+p*z,r[5]=h*R+f*C+d*Z+p*ne,r[9]=h*I+f*V+d*W+p*ae,r[13]=h*b+f*H+d*K+p*ge,r[2]=m*E+x*M+g*k+u*z,r[6]=m*R+x*C+g*Z+u*ne,r[10]=m*I+x*V+g*W+u*ae,r[14]=m*b+x*H+g*K+u*ge,r[3]=T*E+S*M+_*k+A*z,r[7]=T*R+S*C+_*Z+A*ne,r[11]=T*I+S*V+_*W+A*ae,r[15]=T*b+S*H+_*K+A*ge,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],p=e[14],m=e[3],x=e[7],g=e[11],u=e[15];return m*(+r*l*f-s*c*f-r*o*d+n*c*d+s*o*p-n*l*p)+x*(+t*l*p-t*c*d+r*a*d-s*a*p+s*c*h-r*l*h)+g*(+t*c*f-t*o*p-r*a*f+n*a*p+r*o*h-n*c*h)+u*(-s*o*h-t*l*f+t*o*d+s*a*f-n*a*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],p=e[11],m=e[12],x=e[13],g=e[14],u=e[15],T=f*g*c-x*d*c+x*l*p-o*g*p-f*l*u+o*d*u,S=m*d*c-h*g*c-m*l*p+a*g*p+h*l*u-a*d*u,_=h*x*c-m*f*c+m*o*p-a*x*p-h*o*u+a*f*u,A=m*f*l-h*x*l-m*o*d+a*x*d+h*o*g-a*f*g,E=t*T+n*S+s*_+r*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/E;return e[0]=T*R,e[1]=(x*d*r-f*g*r-x*s*p+n*g*p+f*s*u-n*d*u)*R,e[2]=(o*g*r-x*l*r+x*s*c-n*g*c-o*s*u+n*l*u)*R,e[3]=(f*l*r-o*d*r-f*s*c+n*d*c+o*s*p-n*l*p)*R,e[4]=S*R,e[5]=(h*g*r-m*d*r+m*s*p-t*g*p-h*s*u+t*d*u)*R,e[6]=(m*l*r-a*g*r-m*s*c+t*g*c+a*s*u-t*l*u)*R,e[7]=(a*d*r-h*l*r+h*s*c-t*d*c-a*s*p+t*l*p)*R,e[8]=_*R,e[9]=(m*f*r-h*x*r-m*n*p+t*x*p+h*n*u-t*f*u)*R,e[10]=(a*x*r-m*o*r+m*n*c-t*x*c-a*n*u+t*o*u)*R,e[11]=(h*o*r-a*f*r-h*n*c+t*f*c+a*n*p-t*o*p)*R,e[12]=A*R,e[13]=(h*x*s-m*f*s+m*n*d-t*x*d-h*n*g+t*f*g)*R,e[14]=(m*o*s-a*x*s-m*n*l+t*x*l+a*n*g-t*o*g)*R,e[15]=(a*f*s-h*o*s+h*n*l-t*f*l-a*n*d+t*o*d)*R,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,f=o+o,d=r*c,p=r*h,m=r*f,x=a*h,g=a*f,u=o*f,T=l*c,S=l*h,_=l*f,A=n.x,E=n.y,R=n.z;return s[0]=(1-(x+u))*A,s[1]=(p+_)*A,s[2]=(m-S)*A,s[3]=0,s[4]=(p-_)*E,s[5]=(1-(d+u))*E,s[6]=(g+T)*E,s[7]=0,s[8]=(m+S)*R,s[9]=(g-T)*R,s[10]=(1-(d+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Ai.set(s[0],s[1],s[2]).length(),a=Ai.set(s[4],s[5],s[6]).length(),o=Ai.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],en.copy(this);let c=1/r,h=1/a,f=1/o;return en.elements[0]*=c,en.elements[1]*=c,en.elements[2]*=c,en.elements[4]*=h,en.elements[5]*=h,en.elements[6]*=h,en.elements[8]*=f,en.elements[9]*=f,en.elements[10]*=f,t.setFromRotationMatrix(en),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=sn,l=!1){let c=this.elements,h=2*r/(t-e),f=2*r/(n-s),d=(t+e)/(t-e),p=(n+s)/(n-s),m,x;if(l)m=r/(a-r),x=a*r/(a-r);else if(o===sn)m=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===ys)m=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=sn,l=!1){let c=this.elements,h=2/(t-e),f=2/(n-s),d=-(t+e)/(t-e),p=-(n+s)/(n-s),m,x;if(l)m=1/(a-r),x=a/(a-r);else if(o===sn)m=-2/(a-r),x=-(a+r)/(a-r);else if(o===ys)m=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ai=new L,en=new et,Ru=new L(0,0,0),Pu=new L(1,1,1),Un=new L,or=new L,Ht=new L,jl=new et,ec=new $t,rn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ve(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return jl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ec.setFromEuler(this),this.setFromQuaternion(ec,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};rn.DEFAULT_ORDER="XYZ";var Gi=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Iu=0,tc=new L,Ci=new $t,yn=new et,lr=new L,hs=new L,Lu=new L,Du=new $t,nc=new L(1,0,0),ic=new L(0,1,0),sc=new L(0,0,1),rc={type:"added"},Nu={type:"removed"},Ri={type:"childadded",child:null},To={type:"childremoved",child:null},xt=class i extends wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Iu++}),this.uuid=En(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new rn,n=new $t,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new et},normalMatrix:{value:new Be}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.multiply(Ci),this}rotateOnWorldAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.premultiply(Ci),this}rotateX(e){return this.rotateOnAxis(nc,e)}rotateY(e){return this.rotateOnAxis(ic,e)}rotateZ(e){return this.rotateOnAxis(sc,e)}translateOnAxis(e,t){return tc.copy(e).applyQuaternion(this.quaternion),this.position.add(tc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nc,e)}translateY(e){return this.translateOnAxis(ic,e)}translateZ(e){return this.translateOnAxis(sc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?lr.copy(e):lr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(hs,lr,this.up):yn.lookAt(lr,hs,this.up),this.quaternion.setFromRotationMatrix(yn),s&&(yn.extractRotation(s.matrixWorld),Ci.setFromRotationMatrix(yn),this.quaternion.premultiply(Ci.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rc),Ri.child=e,this.dispatchEvent(Ri),Ri.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Nu),To.child=e,this.dispatchEvent(To),To.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rc),Ri.child=e,this.dispatchEvent(Ri),Ri.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,e,Lu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,Du,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),d=a(e.skeletons),p=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};xt.DEFAULT_UP=new L(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var tn=new L,bn=new L,wo=new L,Mn=new L,Pi=new L,Ii=new L,ac=new L,Ao=new L,Co=new L,Ro=new L,Po=new dt,Io=new dt,Lo=new dt,Sn=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),tn.subVectors(e,t),s.cross(tn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){tn.subVectors(s,t),bn.subVectors(n,t),wo.subVectors(e,t);let a=tn.dot(tn),o=tn.dot(bn),l=tn.dot(wo),c=bn.dot(bn),h=bn.dot(wo),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let d=1/f,p=(c*l-o*h)*d,m=(a*h-o*l)*d;return r.set(1-p-m,m,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Mn)===null?!1:Mn.x>=0&&Mn.y>=0&&Mn.x+Mn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Mn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Mn.x),l.addScaledVector(a,Mn.y),l.addScaledVector(o,Mn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Po.setScalar(0),Io.setScalar(0),Lo.setScalar(0),Po.fromBufferAttribute(e,t),Io.fromBufferAttribute(e,n),Lo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Po,r.x),a.addScaledVector(Io,r.y),a.addScaledVector(Lo,r.z),a}static isFrontFacing(e,t,n,s){return tn.subVectors(n,t),bn.subVectors(e,t),tn.cross(bn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tn.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),tn.cross(bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Pi.subVectors(s,n),Ii.subVectors(r,n),Ao.subVectors(e,n);let l=Pi.dot(Ao),c=Ii.dot(Ao);if(l<=0&&c<=0)return t.copy(n);Co.subVectors(e,s);let h=Pi.dot(Co),f=Ii.dot(Co);if(h>=0&&f<=h)return t.copy(s);let d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Pi,a);Ro.subVectors(e,r);let p=Pi.dot(Ro),m=Ii.dot(Ro);if(m>=0&&p<=m)return t.copy(r);let x=p*c-l*m;if(x<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(Ii,o);let g=h*m-p*f;if(g<=0&&f-h>=0&&p-m>=0)return ac.subVectors(r,s),o=(f-h)/(f-h+(p-m)),t.copy(s).addScaledVector(ac,o);let u=1/(g+x+d);return a=x*u,o=d*u,t.copy(n).addScaledVector(Pi,a).addScaledVector(Ii,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ah={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},cr={h:0,s:0,l:0};function Do(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var de=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ge.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ge.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ge.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ge.workingColorSpace){if(e=dl(e,1),t=Ve(t,0,1),n=Ve(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Do(a,r,e+1/3),this.g=Do(a,r,e),this.b=Do(a,r,e-1/3)}return Ge.colorSpaceToWorking(this,s),this}setStyle(e,t=Et){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Et){let n=ah[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Tn(e.r),this.g=Tn(e.g),this.b=Tn(e.b),this}copyLinearToSRGB(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Et){return Ge.workingToColorSpace(Ct.copy(this),e),Math.round(Ve(Ct.r*255,0,255))*65536+Math.round(Ve(Ct.g*255,0,255))*256+Math.round(Ve(Ct.b*255,0,255))}getHexString(e=Et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ge.workingColorSpace){Ge.workingToColorSpace(Ct.copy(this),t);let n=Ct.r,s=Ct.g,r=Ct.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ge.workingColorSpace){return Ge.workingToColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=Et){Ge.workingToColorSpace(Ct.copy(this),e);let t=Ct.r,n=Ct.g,s=Ct.b;return e!==Et?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Fn),this.setHSL(Fn.h+e,Fn.s+t,Fn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Fn),e.getHSL(cr);let n=xs(Fn.h,cr.h,t),s=xs(Fn.s,cr.s,t),r=xs(Fn.l,cr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ct=new de;de.NAMES=ah;var Uu=0,an=class extends wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=En(),this.name="",this.type="Material",this.blending=ii,this.side=Ft,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cr,this.blendDst=Rr,this.blendEquation=zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new de(0,0,0),this.blendAlpha=0,this.depthFunc=si,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Go,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ni,this.stencilZFail=ni,this.stencilZPass=ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ii&&(n.blending=this.blending),this.side!==Ft&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Cr&&(n.blendSrc=this.blendSrc),this.blendDst!==Rr&&(n.blendDst=this.blendDst),this.blendEquation!==zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==si&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Go&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},on=class extends an{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=jo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var _t=new L,hr=new Se,Fu=0,De=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Fu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Dr,this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.applyMatrix3(e),this.setXY(t,hr.x,hr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=nn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ke(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=nn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=nn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=nn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=nn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),s=Ke(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),s=Ke(s,this.array),r=Ke(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Dr&&(e.usage=this.usage),e}};var Ss=class extends De{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Es=class extends De{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ze=class extends De{constructor(e,t,n){super(new Float32Array(e),t,n)}},Bu=0,Yt=new et,No=new xt,Li=new L,kt=new Hn,us=new Hn,St=new L,Qe=class i extends wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bu++}),this.uuid=En(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fl(e)?Es:Ss)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Be().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yt.makeRotationFromQuaternion(e),this.applyMatrix4(Yt),this}rotateX(e){return Yt.makeRotationX(e),this.applyMatrix4(Yt),this}rotateY(e){return Yt.makeRotationY(e),this.applyMatrix4(Yt),this}rotateZ(e){return Yt.makeRotationZ(e),this.applyMatrix4(Yt),this}translate(e,t,n){return Yt.makeTranslation(e,t,n),this.applyMatrix4(Yt),this}scale(e,t,n){return Yt.makeScale(e,t,n),this.applyMatrix4(Yt),this}lookAt(e){return No.lookAt(e),No.updateMatrix(),this.applyMatrix4(No.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ze(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];kt.setFromBufferAttribute(r),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,kt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,kt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(kt.min),this.boundingBox.expandByPoint(kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(kt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];us.setFromBufferAttribute(o),this.morphTargetsRelative?(St.addVectors(kt.min,us.min),kt.expandByPoint(St),St.addVectors(kt.max,us.max),kt.expandByPoint(St)):(kt.expandByPoint(us.min),kt.expandByPoint(us.max))}kt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)St.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(St));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)St.fromBufferAttribute(o,c),l&&(Li.fromBufferAttribute(e,c),St.add(Li)),s=Math.max(s,n.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new De(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new L,l[I]=new L;let c=new L,h=new L,f=new L,d=new Se,p=new Se,m=new Se,x=new L,g=new L;function u(I,b,M){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,b),f.fromBufferAttribute(n,M),d.fromBufferAttribute(r,I),p.fromBufferAttribute(r,b),m.fromBufferAttribute(r,M),h.sub(c),f.sub(c),p.sub(d),m.sub(d);let C=1/(p.x*m.y-m.x*p.y);isFinite(C)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(f,-p.y).multiplyScalar(C),g.copy(f).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(C),o[I].add(x),o[b].add(x),o[M].add(x),l[I].add(g),l[b].add(g),l[M].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let I=0,b=T.length;I<b;++I){let M=T[I],C=M.start,V=M.count;for(let H=C,k=C+V;H<k;H+=3)u(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let S=new L,_=new L,A=new L,E=new L;function R(I){A.fromBufferAttribute(s,I),E.copy(A);let b=o[I];S.copy(b),S.sub(A.multiplyScalar(A.dot(b))).normalize(),_.crossVectors(E,b);let C=_.dot(l[I])<0?-1:1;a.setXYZW(I,S.x,S.y,S.z,C)}for(let I=0,b=T.length;I<b;++I){let M=T[I],C=M.start,V=M.count;for(let H=C,k=C+V;H<k;H+=3)R(e.getX(H+0)),R(e.getX(H+1)),R(e.getX(H+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new De(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,f=new L;if(e)for(let d=0,p=e.count;d<p;d+=3){let m=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,f=o.normalized,d=new c.constructor(l.length*h),p=0,m=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*h;for(let u=0;u<h;u++)d[m++]=c[p++]}return new De(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let d=c[h],p=e(d,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){let p=c[f];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let d=0,p=f.length;d<p;d++)h.push(f[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},oc=new et,ei=new oi,ur=new kn,lc=new L,dr=new L,fr=new L,pr=new L,Uo=new L,mr=new L,cc=new L,gr=new L,vt=class extends xt{constructor(e=new Qe,t=new on){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){mr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(Uo.fromBufferAttribute(f,e),a?mr.addScaledVector(Uo,h):mr.addScaledVector(Uo.sub(t),h))}t.add(mr)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere),ur.applyMatrix4(r),ei.copy(e.ray).recast(e.near),!(ur.containsPoint(ei.origin)===!1&&(ei.intersectSphere(ur,lc)===null||ei.origin.distanceToSquared(lc)>(e.far-e.near)**2))&&(oc.copy(r).invert(),ei.copy(e.ray).applyMatrix4(oc),!(n.boundingBox!==null&&ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ei)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){let g=d[m],u=a[g.materialIndex],T=Math.max(g.start,p.start),S=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let _=T,A=S;_<A;_+=3){let E=o.getX(_),R=o.getX(_+1),I=o.getX(_+2);s=xr(this,u,e,n,c,h,f,E,R,I),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let g=m,u=x;g<u;g+=3){let T=o.getX(g),S=o.getX(g+1),_=o.getX(g+2);s=xr(this,a,e,n,c,h,f,T,S,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){let g=d[m],u=a[g.materialIndex],T=Math.max(g.start,p.start),S=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let _=T,A=S;_<A;_+=3){let E=_,R=_+1,I=_+2;s=xr(this,u,e,n,c,h,f,E,R,I),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let g=m,u=x;g<u;g+=3){let T=g,S=g+1,_=g+2;s=xr(this,a,e,n,c,h,f,T,S,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Ou(i,e,t,n,s,r,a,o){let l;if(e.side===wt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Ft,o),l===null)return null;gr.copy(o),gr.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(gr);return c<t.near||c>t.far?null:{distance:c,point:gr.clone(),object:i}}function xr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,dr),i.getVertexPosition(l,fr),i.getVertexPosition(c,pr);let h=Ou(i,e,t,n,dr,fr,pr,cc);if(h){let f=new L;Sn.getBarycoord(cc,dr,fr,pr,f),s&&(h.uv=Sn.getInterpolatedAttribute(s,o,l,c,f,new Se)),r&&(h.uv1=Sn.getInterpolatedAttribute(r,o,l,c,f,new Se)),a&&(h.normal=Sn.getInterpolatedAttribute(a,o,l,c,f,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new L,materialIndex:0};Sn.getNormal(dr,fr,pr,d.normal),h.face=d,h.barycoord=f}return h}var Wi=class i extends Qe{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],d=0,p=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,s,a,2),m("x","z","y",1,-1,e,n,-t,s,a,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ze(c,3)),this.setAttribute("normal",new Ze(h,3)),this.setAttribute("uv",new Ze(f,2));function m(x,g,u,T,S,_,A,E,R,I,b){let M=_/R,C=A/I,V=_/2,H=A/2,k=E/2,Z=R+1,W=I+1,K=0,z=0,ne=new L;for(let ae=0;ae<W;ae++){let ge=ae*C-H;for(let Fe=0;Fe<Z;Fe++){let it=Fe*M-V;ne[x]=it*T,ne[g]=ge*S,ne[u]=k,c.push(ne.x,ne.y,ne.z),ne[x]=0,ne[g]=0,ne[u]=E>0?1:-1,h.push(ne.x,ne.y,ne.z),f.push(Fe/R),f.push(1-ae/I),K+=1}}for(let ae=0;ae<I;ae++)for(let ge=0;ge<R;ge++){let Fe=d+ge+Z*ae,it=d+ge+Z*(ae+1),$e=d+(ge+1)+Z*(ae+1),X=d+(ge+1)+Z*ae;l.push(Fe,it,X),l.push(it,$e,X),z+=6}o.addGroup(p,z,b),p+=z,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function mi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Lt(i){let e={};for(let t=0;t<i.length;t++){let n=mi(i[t]);for(let s in n)e[s]=n[s]}return e}function zu(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function pl(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ge.workingColorSpace}var Rn={clone:mi,merge:Lt},Hu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ku=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,nt=class extends an{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hu,this.fragmentShader=ku,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mi(e.uniforms),this.uniformsGroups=zu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ts=class extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Bn=new L,hc=new Se,uc=new Se,Rt=class extends Ts{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ki*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(gs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ki*2*Math.atan(Math.tan(gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Bn.x,Bn.y).multiplyScalar(-e/Bn.z),Bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bn.x,Bn.y).multiplyScalar(-e/Bn.z)}getViewSize(e,t){return this.getViewBounds(e,hc,uc),t.subVectors(uc,hc)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(gs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Di=-90,Ni=1,Br=class extends xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Rt(Di,Ni,e,t);s.layers=this.layers,this.add(s);let r=new Rt(Di,Ni,e,t);r.layers=this.layers,this.add(r);let a=new Rt(Di,Ni,e,t);a.layers=this.layers,this.add(a);let o=new Rt(Di,Ni,e,t);o.layers=this.layers,this.add(o);let l=new Rt(Di,Ni,e,t);l.layers=this.layers,this.add(l);let c=new Rt(Di,Ni,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===sn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ys)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(f,d,p),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},ws=class extends Bt{constructor(e=[],t=fi,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Or=class extends It{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ws(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Wi(5,5,5),r=new nt({name:"CubemapFromEquirect",uniforms:mi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:wt,blending:ln});r.uniforms.tEquirect.value=t;let a=new vt(s,r),o=t.minFilter;return t.minFilter===qn&&(t.minFilter=Tt),new Br(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Pt=class extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Vu={type:"move"},Xi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),u=this._getHandJoint(c,x);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),p=.02,m=.005;c.inputState.pinching&&d>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Vu)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Pt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var As=class extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rn,this.environmentIntensity=1,this.environmentRotation=new rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},zr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Dr,this.updateRanges=[],this.version=0,this.uuid=En()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Nt=new L,Cs=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=nn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ke(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=nn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=nn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=nn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=nn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),s=Ke(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),s=Ke(s,this.array),r=Ke(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new De(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},li=class extends an{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ui,ds=new L,Fi=new L,Bi=new L,Oi=new Se,fs=new Se,oh=new et,vr=new L,ps=new L,_r=new L,dc=new Se,Fo=new Se,fc=new Se,qi=class extends xt{constructor(e=new li){if(super(),this.isSprite=!0,this.type="Sprite",Ui===void 0){Ui=new Qe;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new zr(t,5);Ui.setIndex([0,1,2,0,2,3]),Ui.setAttribute("position",new Cs(n,3,0,!1)),Ui.setAttribute("uv",new Cs(n,2,3,!1))}this.geometry=Ui,this.material=e,this.center=new Se(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fi.setFromMatrixScale(this.matrixWorld),oh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Bi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fi.multiplyScalar(-Bi.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;yr(vr.set(-.5,-.5,0),Bi,a,Fi,s,r),yr(ps.set(.5,-.5,0),Bi,a,Fi,s,r),yr(_r.set(.5,.5,0),Bi,a,Fi,s,r),dc.set(0,0),Fo.set(1,0),fc.set(1,1);let o=e.ray.intersectTriangle(vr,ps,_r,!1,ds);if(o===null&&(yr(ps.set(-.5,.5,0),Bi,a,Fi,s,r),Fo.set(0,1),o=e.ray.intersectTriangle(vr,_r,ps,!1,ds),o===null))return;let l=e.ray.origin.distanceTo(ds);l<e.near||l>e.far||t.push({distance:l,point:ds.clone(),uv:Sn.getInterpolation(ds,vr,ps,_r,dc,Fo,fc,new Se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function yr(i,e,t,n,s,r){Oi.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(fs.x=r*Oi.x-s*Oi.y,fs.y=s*Oi.x+r*Oi.y):fs.copy(Oi),i.copy(e),i.x+=fs.x,i.y+=fs.y,i.applyMatrix4(oh)}var Bo=new L,Gu=new L,Wu=new Be,un=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Bo.subVectors(n,t).cross(Gu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Bo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Wu.getNormalMatrix(e),s=this.coplanarPoint(Bo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ti=new kn,Xu=new Se(.5,.5),br=new L,Yi=class{constructor(e=new un,t=new un,n=new un,s=new un,r=new un,a=new un){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=sn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],d=r[6],p=r[7],m=r[8],x=r[9],g=r[10],u=r[11],T=r[12],S=r[13],_=r[14],A=r[15];if(s[0].setComponents(c-a,p-h,u-m,A-T).normalize(),s[1].setComponents(c+a,p+h,u+m,A+T).normalize(),s[2].setComponents(c+o,p+f,u+x,A+S).normalize(),s[3].setComponents(c-o,p-f,u-x,A-S).normalize(),n)s[4].setComponents(l,d,g,_).normalize(),s[5].setComponents(c-l,p-d,u-g,A-_).normalize();else if(s[4].setComponents(c-l,p-d,u-g,A-_).normalize(),t===sn)s[5].setComponents(c+l,p+d,u+g,A+_).normalize();else if(t===ys)s[5].setComponents(l,d,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ti)}intersectsSprite(e){ti.center.set(0,0,0);let t=Xu.distanceTo(e.center);return ti.radius=.7071067811865476+t,ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(ti)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(br.x=s.normal.x>0?e.max.x:e.min.x,br.y=s.normal.y>0?e.max.y:e.min.y,br.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(br)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var dn=class extends an{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new de(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Hr=new L,kr=new L,pc=new et,ms=new oi,Mr=new kn,Oo=new L,mc=new L,Rs=class extends xt{constructor(e=new Qe,t=new dn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Hr.fromBufferAttribute(t,s-1),kr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Hr.distanceTo(kr);e.setAttribute("lineDistance",new Ze(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere),Mr.applyMatrix4(s),Mr.radius+=r,e.ray.intersectsSphere(Mr)===!1)return;pc.copy(s).invert(),ms.copy(e.ray).applyMatrix4(pc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let p=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let x=p,g=m-1;x<g;x+=c){let u=h.getX(x),T=h.getX(x+1),S=Sr(this,e,ms,l,u,T,x);S&&t.push(S)}if(this.isLineLoop){let x=h.getX(m-1),g=h.getX(p),u=Sr(this,e,ms,l,x,g,m-1);u&&t.push(u)}}else{let p=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let x=p,g=m-1;x<g;x+=c){let u=Sr(this,e,ms,l,x,x+1,x);u&&t.push(u)}if(this.isLineLoop){let x=Sr(this,e,ms,l,m-1,p,m-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Sr(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Hr.fromBufferAttribute(o,s),kr.fromBufferAttribute(o,r),t.distanceSqToSegment(Hr,kr,Oo,mc)>n)return;Oo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Oo);if(!(c<e.near||c>e.far))return{distance:c,point:mc.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var gc=new L,xc=new L,Vn=class extends Rs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)gc.fromBufferAttribute(t,s),xc.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+gc.distanceTo(xc);e.setAttribute("lineDistance",new Ze(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ps=class extends Rs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Jt=class extends an{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},vc=new et,Wo=new oi,Er=new kn,Tr=new L,Vt=class extends xt{constructor(e=new Qe,t=new Jt){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere),Er.applyMatrix4(s),Er.radius+=r,e.ray.intersectsSphere(Er)===!1)return;vc.copy(s).invert(),Wo.copy(e.ray).applyMatrix4(vc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let m=d,x=p;m<x;m++){let g=c.getX(m);Tr.fromBufferAttribute(f,g),_c(Tr,g,l,s,e,t,this)}}else{let d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let m=d,x=p;m<x;m++)Tr.fromBufferAttribute(f,m),_c(Tr,m,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function _c(i,e,t,n,s,r,a){let o=Wo.distanceSqToPoint(i);if(o<t){let l=new L;Wo.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var ci=class extends Bt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Is=class extends Bt{constructor(e,t,n=Yn,s,r,a,o=Zt,l=Zt,c,h=Hi,f=1){if(h!==Hi&&h!==Ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:f};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};var Ls=class i extends Qe{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=e/o,d=t/l,p=[],m=[],x=[],g=[];for(let u=0;u<h;u++){let T=u*d-a;for(let S=0;S<c;S++){let _=S*f-r;m.push(_,-T,0),x.push(0,0,1),g.push(S/o),g.push(1-u/l)}}for(let u=0;u<l;u++)for(let T=0;T<o;T++){let S=T+c*u,_=T+c*(u+1),A=T+1+c*(u+1),E=T+1+c*u;p.push(S,_,E),p.push(_,A,E)}this.setIndex(p),this.setAttribute("position",new Ze(m,3)),this.setAttribute("normal",new Ze(x,3)),this.setAttribute("uv",new Ze(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Gn=class i extends Qe{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new L,d=new L,p=[],m=[],x=[],g=[];for(let u=0;u<=n;u++){let T=[],S=u/n,_=0;u===0&&a===0?_=.5/t:u===n&&l===Math.PI&&(_=-.5/t);for(let A=0;A<=t;A++){let E=A/t;f.x=-e*Math.cos(s+E*r)*Math.sin(a+S*o),f.y=e*Math.cos(a+S*o),f.z=e*Math.sin(s+E*r)*Math.sin(a+S*o),m.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),g.push(E+_,1-S),T.push(c++)}h.push(T)}for(let u=0;u<n;u++)for(let T=0;T<t;T++){let S=h[u][T+1],_=h[u][T],A=h[u+1][T],E=h[u+1][T+1];(u!==0||a>0)&&p.push(S,_,E),(u!==n-1||l<Math.PI)&&p.push(_,A,E)}this.setIndex(p),this.setAttribute("position",new Ze(m,3)),this.setAttribute("normal",new Ze(x,3)),this.setAttribute("uv",new Ze(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ds=class extends nt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ns=class extends an{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new de(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cl,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Vr=class extends an{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Gr=class extends an{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function wr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function qu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var hi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Wr=class extends hi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ho,endingEnd:Ho}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ko:r=e,o=2*t-n;break;case Vo:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ko:a=e,l=2*n-t;break;case Vo:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,p=this._weightNext,m=(n-t)/(s-t),x=m*m,g=x*m,u=-d*g+2*d*x-d*m,T=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*m+1,S=(-1-p)*g+(1.5+p)*x+.5*m,_=p*g-p*x;for(let A=0;A!==o;++A)r[A]=u*a[h+A]+T*a[c+A]+S*a[l+A]+_*a[f+A];return r}},Xr=class extends hi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),f=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*f+a[l+d]*h;return r}},qr=class extends hi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Gt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=wr(t,this.TimeBufferType),this.values=wr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:wr(e.times,Array),values:wr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new qr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Xr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Wr(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case vs:t=this.InterpolantFactoryMethodDiscrete;break;case Lr:t=this.InterpolantFactoryMethodLinear;break;case Ar:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vs;case this.InterpolantFactoryMethodLinear:return Lr;case this.InterpolantFactoryMethodSmooth:return Ar}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&qu(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ar,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let f=o*n,d=f-n,p=f+n;for(let m=0;m!==n;++m){let x=t[f+m];if(x!==t[d+m]||x!==t[p+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*n,d=a*n;for(let p=0;p!==n;++p)t[d+p]=t[f+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Gt.prototype.ValueTypeName="";Gt.prototype.TimeBufferType=Float32Array;Gt.prototype.ValueBufferType=Float32Array;Gt.prototype.DefaultInterpolation=Lr;var Wn=class extends Gt{constructor(e,t,n){super(e,t,n)}};Wn.prototype.ValueTypeName="bool";Wn.prototype.ValueBufferType=Array;Wn.prototype.DefaultInterpolation=vs;Wn.prototype.InterpolantFactoryMethodLinear=void 0;Wn.prototype.InterpolantFactoryMethodSmooth=void 0;var Yr=class extends Gt{constructor(e,t,n,s){super(e,t,n,s)}};Yr.prototype.ValueTypeName="color";var Zr=class extends Gt{constructor(e,t,n,s){super(e,t,n,s)}};Zr.prototype.ValueTypeName="number";var $r=class extends hi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)$t.slerpFlat(r,0,a,c-o,a,c,l);return r}},Us=class extends Gt{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new $r(this.times,this.values,this.getValueSize(),e)}};Us.prototype.ValueTypeName="quaternion";Us.prototype.InterpolantFactoryMethodSmooth=void 0;var Xn=class extends Gt{constructor(e,t,n){super(e,t,n)}};Xn.prototype.ValueTypeName="string";Xn.prototype.ValueBufferType=Array;Xn.prototype.DefaultInterpolation=vs;Xn.prototype.InterpolantFactoryMethodLinear=void 0;Xn.prototype.InterpolantFactoryMethodSmooth=void 0;var Jr=class extends Gt{constructor(e,t,n,s){super(e,t,n,s)}};Jr.prototype.ValueTypeName="vector";var Kr=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){let p=c[f],m=c[f+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},lh=new Kr,Qr=class{constructor(e){this.manager=e!==void 0?e:lh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Qr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Fs=class extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new de(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Bs=class extends Fs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new de(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},zo=new et,yc=new L,bc=new L,Xo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.mapType=cn,this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yi,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;yc.setFromMatrixPosition(e.matrixWorld),t.position.copy(yc),bc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bc),t.updateMatrixWorld(),zo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zo,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(zo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var ui=class extends Ts{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},qo=class extends Xo{constructor(){super(new ui(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Os=class extends Fs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new qo}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var jr=class extends Rt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},di=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var ml="\\[\\]\\.:\\/",Yu=new RegExp("["+ml+"]","g"),gl="[^"+ml+"]",Zu="[^"+ml.replace("\\.","")+"]",$u=/((?:WC+[\/:])*)/.source.replace("WC",gl),Ju=/(WCOD+)?/.source.replace("WCOD",Zu),Ku=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gl),Qu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gl),ju=new RegExp("^"+$u+Ju+Ku+Qu+"$"),ed=["material","materials","bones","map"],Yo=class{constructor(e,t,n){let s=n||ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ot=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Yu,"")}static parseTrackName(e){let t=ju.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ed.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ot.Composite=Yo;ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray];ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var jg=new Float32Array(1);var Mc=new et,zs=class{constructor(e,t,n=0,s=1/0){this.ray=new oi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Gi,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Mc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Mc),this}intersectObject(e,t=!0,n=[]){return Zo(e,this,n,t),n.sort(Sc),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Zo(e[s],this,n,t);return n.sort(Sc),n}};function Sc(i,e){return i.distance-e.distance}function Zo(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Zo(r[a],e,t,!0)}}function xl(i,e,t,n){let s=td(n);switch(t){case sl:return i*e;case al:return i*e/s.components*s.byteLength;case _a:return i*e/s.components*s.byteLength;case ol:return i*e*2/s.components*s.byteLength;case ya:return i*e*2/s.components*s.byteLength;case rl:return i*e*3/s.components*s.byteLength;case Qt:return i*e*4/s.components*s.byteLength;case ba:return i*e*4/s.components*s.byteLength;case Vs:case Gs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ws:case Xs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Sa:case Ta:return Math.max(i,16)*Math.max(e,8)/4;case Ma:case Ea:return Math.max(i,8)*Math.max(e,8)/2;case wa:case Aa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ia:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case La:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Da:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Na:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ua:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Fa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case za:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ka:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Va:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case qs:case Ga:case Wa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ll:case Xa:return Math.ceil(i/4)*Math.ceil(e/4)*8;case qa:case Ya:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function td(i){switch(i){case cn:case tl:return{byteLength:1,components:1};case $i:case nl:case Kt:return{byteLength:2,components:1};case xa:case va:return{byteLength:2,components:4};case Yn:case ga:case mn:return{byteLength:4,components:1};case il:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"179"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="179");function Lh(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function id(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,f=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((p,m)=>p.start-m.start);let d=0;for(let p=1;p<f.length;p++){let m=f[d],x=f[p];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,f[d]=x)}f.length=d+1;for(let p=0,m=f.length;p<m;p++){let x=f[p];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var sd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ad=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,od=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ld=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ud=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,fd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,md=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_d=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,yd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Md=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ed=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Td=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ad=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Cd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Rd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Pd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Id=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ld=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ud=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Bd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Od=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,zd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,kd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$d=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Jd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Kd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ef=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,nf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,af=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,of=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,df=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ff=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_f=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,bf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Sf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ef=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Af=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Cf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,If=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Df=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Nf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Uf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ff=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Of=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,kf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Vf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Gf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Zf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$f=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ip=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,sp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,op=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,up=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,dp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_p=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Sp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ep=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Tp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ap=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Rp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ip=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Dp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Np=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Up=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:sd,alphahash_pars_fragment:rd,alphamap_fragment:ad,alphamap_pars_fragment:od,alphatest_fragment:ld,alphatest_pars_fragment:cd,aomap_fragment:hd,aomap_pars_fragment:ud,batching_pars_vertex:dd,batching_vertex:fd,begin_vertex:pd,beginnormal_vertex:md,bsdfs:gd,iridescence_fragment:xd,bumpmap_pars_fragment:vd,clipping_planes_fragment:_d,clipping_planes_pars_fragment:yd,clipping_planes_pars_vertex:bd,clipping_planes_vertex:Md,color_fragment:Sd,color_pars_fragment:Ed,color_pars_vertex:Td,color_vertex:wd,common:Ad,cube_uv_reflection_fragment:Cd,defaultnormal_vertex:Rd,displacementmap_pars_vertex:Pd,displacementmap_vertex:Id,emissivemap_fragment:Ld,emissivemap_pars_fragment:Dd,colorspace_fragment:Nd,colorspace_pars_fragment:Ud,envmap_fragment:Fd,envmap_common_pars_fragment:Bd,envmap_pars_fragment:Od,envmap_pars_vertex:zd,envmap_physical_pars_fragment:Jd,envmap_vertex:Hd,fog_vertex:kd,fog_pars_vertex:Vd,fog_fragment:Gd,fog_pars_fragment:Wd,gradientmap_pars_fragment:Xd,lightmap_pars_fragment:qd,lights_lambert_fragment:Yd,lights_lambert_pars_fragment:Zd,lights_pars_begin:$d,lights_toon_fragment:Kd,lights_toon_pars_fragment:Qd,lights_phong_fragment:jd,lights_phong_pars_fragment:ef,lights_physical_fragment:tf,lights_physical_pars_fragment:nf,lights_fragment_begin:sf,lights_fragment_maps:rf,lights_fragment_end:af,logdepthbuf_fragment:of,logdepthbuf_pars_fragment:lf,logdepthbuf_pars_vertex:cf,logdepthbuf_vertex:hf,map_fragment:uf,map_pars_fragment:df,map_particle_fragment:ff,map_particle_pars_fragment:pf,metalnessmap_fragment:mf,metalnessmap_pars_fragment:gf,morphinstance_vertex:xf,morphcolor_vertex:vf,morphnormal_vertex:_f,morphtarget_pars_vertex:yf,morphtarget_vertex:bf,normal_fragment_begin:Mf,normal_fragment_maps:Sf,normal_pars_fragment:Ef,normal_pars_vertex:Tf,normal_vertex:wf,normalmap_pars_fragment:Af,clearcoat_normal_fragment_begin:Cf,clearcoat_normal_fragment_maps:Rf,clearcoat_pars_fragment:Pf,iridescence_pars_fragment:If,opaque_fragment:Lf,packing:Df,premultiplied_alpha_fragment:Nf,project_vertex:Uf,dithering_fragment:Ff,dithering_pars_fragment:Bf,roughnessmap_fragment:Of,roughnessmap_pars_fragment:zf,shadowmap_pars_fragment:Hf,shadowmap_pars_vertex:kf,shadowmap_vertex:Vf,shadowmask_pars_fragment:Gf,skinbase_vertex:Wf,skinning_pars_vertex:Xf,skinning_vertex:qf,skinnormal_vertex:Yf,specularmap_fragment:Zf,specularmap_pars_fragment:$f,tonemapping_fragment:Jf,tonemapping_pars_fragment:Kf,transmission_fragment:Qf,transmission_pars_fragment:jf,uv_pars_fragment:ep,uv_pars_vertex:tp,uv_vertex:np,worldpos_vertex:ip,background_vert:sp,background_frag:rp,backgroundCube_vert:ap,backgroundCube_frag:op,cube_vert:lp,cube_frag:cp,depth_vert:hp,depth_frag:up,distanceRGBA_vert:dp,distanceRGBA_frag:fp,equirect_vert:pp,equirect_frag:mp,linedashed_vert:gp,linedashed_frag:xp,meshbasic_vert:vp,meshbasic_frag:_p,meshlambert_vert:yp,meshlambert_frag:bp,meshmatcap_vert:Mp,meshmatcap_frag:Sp,meshnormal_vert:Ep,meshnormal_frag:Tp,meshphong_vert:wp,meshphong_frag:Ap,meshphysical_vert:Cp,meshphysical_frag:Rp,meshtoon_vert:Pp,meshtoon_frag:Ip,points_vert:Lp,points_frag:Dp,shadow_vert:Np,shadow_frag:Up,sprite_vert:Fp,sprite_frag:Bp},le={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},gn={basic:{uniforms:Lt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Lt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new de(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Lt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Lt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Lt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new de(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Lt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Lt([le.points,le.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Lt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Lt([le.common,le.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Lt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Lt([le.sprite,le.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Lt([le.common,le.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Lt([le.lights,le.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};gn.physical={uniforms:Lt([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};var Za={r:0,b:0,g:0},gi=new rn,Op=new et;function zp(i,e,t,n,s,r,a){let o=new de(0),l=r===!0?0:1,c,h,f=null,d=0,p=null;function m(S){let _=S.isScene===!0?S.background:null;return _&&_.isTexture&&(_=(S.backgroundBlurriness>0?t:e).get(_)),_}function x(S){let _=!1,A=m(S);A===null?u(o,l):A&&A.isColor&&(u(A,1),_=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(S,_){let A=m(_);A&&(A.isCubeTexture||A.mapping===Hs)?(h===void 0&&(h=new vt(new Wi(1,1,1),new nt({name:"BackgroundCubeMaterial",uniforms:mi(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:wt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),gi.copy(_.backgroundRotation),gi.x*=-1,gi.y*=-1,gi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Op.makeRotationFromEuler(gi)),h.material.toneMapped=Ge.getTransfer(A.colorSpace)!==Ye,(f!==A||d!==A.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,f=A,d=A.version,p=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new vt(new Ls(2,2),new nt({name:"BackgroundMaterial",uniforms:mi(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=Ge.getTransfer(A.colorSpace)!==Ye,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(f!==A||d!==A.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,f=A,d=A.version,p=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function u(S,_){S.getRGB(Za,pl(i)),n.buffers.color.setClear(Za.r,Za.g,Za.b,_,a)}function T(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,_=1){o.set(S),l=_,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,u(o,l)},render:x,addToRenderList:g,dispose:T}}function Hp(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(M,C,V,H,k){let Z=!1,W=f(H,V,C);r!==W&&(r=W,c(r.object)),Z=p(M,H,V,k),Z&&m(M,H,V,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,_(M,C,V,H),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function f(M,C,V){let H=V.wireframe===!0,k=n[M.id];k===void 0&&(k={},n[M.id]=k);let Z=k[C.id];Z===void 0&&(Z={},k[C.id]=Z);let W=Z[H];return W===void 0&&(W=d(l()),Z[H]=W),W}function d(M){let C=[],V=[],H=[];for(let k=0;k<t;k++)C[k]=0,V[k]=0,H[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:V,attributeDivisors:H,object:M,attributes:{},index:null}}function p(M,C,V,H){let k=r.attributes,Z=C.attributes,W=0,K=V.getAttributes();for(let z in K)if(K[z].location>=0){let ae=k[z],ge=Z[z];if(ge===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(ge=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(ge=M.instanceColor)),ae===void 0||ae.attribute!==ge||ge&&ae.data!==ge.data)return!0;W++}return r.attributesNum!==W||r.index!==H}function m(M,C,V,H){let k={},Z=C.attributes,W=0,K=V.getAttributes();for(let z in K)if(K[z].location>=0){let ae=Z[z];ae===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(ae=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(ae=M.instanceColor));let ge={};ge.attribute=ae,ae&&ae.data&&(ge.data=ae.data),k[z]=ge,W++}r.attributes=k,r.attributesNum=W,r.index=H}function x(){let M=r.newAttributes;for(let C=0,V=M.length;C<V;C++)M[C]=0}function g(M){u(M,0)}function u(M,C){let V=r.newAttributes,H=r.enabledAttributes,k=r.attributeDivisors;V[M]=1,H[M]===0&&(i.enableVertexAttribArray(M),H[M]=1),k[M]!==C&&(i.vertexAttribDivisor(M,C),k[M]=C)}function T(){let M=r.newAttributes,C=r.enabledAttributes;for(let V=0,H=C.length;V<H;V++)C[V]!==M[V]&&(i.disableVertexAttribArray(V),C[V]=0)}function S(M,C,V,H,k,Z,W){W===!0?i.vertexAttribIPointer(M,C,V,k,Z):i.vertexAttribPointer(M,C,V,H,k,Z)}function _(M,C,V,H){x();let k=H.attributes,Z=V.getAttributes(),W=C.defaultAttributeValues;for(let K in Z){let z=Z[K];if(z.location>=0){let ne=k[K];if(ne===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(ne=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(ne=M.instanceColor)),ne!==void 0){let ae=ne.normalized,ge=ne.itemSize,Fe=e.get(ne);if(Fe===void 0)continue;let it=Fe.buffer,$e=Fe.type,X=Fe.bytesPerElement,oe=$e===i.INT||$e===i.UNSIGNED_INT||ne.gpuType===ga;if(ne.isInterleavedBufferAttribute){let ie=ne.data,we=ie.stride,Ae=ne.offset;if(ie.isInstancedInterleavedBuffer){for(let Ne=0;Ne<z.locationSize;Ne++)u(z.location+Ne,ie.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Ne=0;Ne<z.locationSize;Ne++)g(z.location+Ne);i.bindBuffer(i.ARRAY_BUFFER,it);for(let Ne=0;Ne<z.locationSize;Ne++)S(z.location+Ne,ge/z.locationSize,$e,ae,we*X,(Ae+ge/z.locationSize*Ne)*X,oe)}else{if(ne.isInstancedBufferAttribute){for(let ie=0;ie<z.locationSize;ie++)u(z.location+ie,ne.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ie=0;ie<z.locationSize;ie++)g(z.location+ie);i.bindBuffer(i.ARRAY_BUFFER,it);for(let ie=0;ie<z.locationSize;ie++)S(z.location+ie,ge/z.locationSize,$e,ae,ge*X,ge/z.locationSize*ie*X,oe)}}else if(W!==void 0){let ae=W[K];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv(z.location,ae);break;case 3:i.vertexAttrib3fv(z.location,ae);break;case 4:i.vertexAttrib4fv(z.location,ae);break;default:i.vertexAttrib1fv(z.location,ae)}}}}T()}function A(){I();for(let M in n){let C=n[M];for(let V in C){let H=C[V];for(let k in H)h(H[k].object),delete H[k];delete C[V]}delete n[M]}}function E(M){if(n[M.id]===void 0)return;let C=n[M.id];for(let V in C){let H=C[V];for(let k in H)h(H[k].object),delete H[k];delete C[V]}delete n[M.id]}function R(M){for(let C in n){let V=n[C];if(V[M.id]===void 0)continue;let H=V[M.id];for(let k in H)h(H[k].object),delete H[k];delete V[M.id]}}function I(){b(),a=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:b,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:g,disableUnusedAttributes:T}}function kp(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,f){f!==0&&(i.drawArraysInstanced(n,c,h,f),t.update(h,n,f))}function o(c,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let p=0;for(let m=0;m<f;m++)p+=h[m];t.update(p,n,1)}function l(c,h,f,d){if(f===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<c.length;m++)a(c[m],h[m],d[m]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,f);let m=0;for(let x=0;x<f;x++)m+=h[x]*d[x];t.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Vp(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Qt&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let I=R===Kt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==cn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==mn&&!I)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=m>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:u,maxVertexUniforms:T,maxVaryings:S,maxFragmentUniforms:_,vertexTextures:A,maxSamples:E}}function Gp(i){let e=this,t=null,n=0,s=!1,r=!1,a=new un,o=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let p=f.length!==0||d||n!==0||s;return s=d,n=f.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,p){let m=f.clippingPlanes,x=f.clipIntersection,g=f.clipShadows,u=i.get(f);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let T=r?0:n,S=T*4,_=u.clippingState||null;l.value=_,_=h(m,d,S,p);for(let A=0;A!==S;++A)_[A]=t[A];u.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,d,p,m){let x=f!==null?f.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let u=p+x*4,T=d.matrixWorldInverse;o.getNormalMatrix(T),(g===null||g.length<u)&&(g=new Float32Array(u));for(let S=0,_=p;S!==x;++S,_+=4)a.copy(f[S]).applyMatrix4(T,o),a.normal.toArray(g,_),g[_+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function Wp(i){let e=new WeakMap;function t(a,o){return o===fa?a.mapping=fi:o===pa&&(a.mapping=pi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===fa||o===pa)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Or(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var ji=4,ch=[.125,.215,.35,.446,.526,.582],_i=20,vl=new ui,hh=new de,_l=null,yl=0,bl=0,Ml=!1,vi=(1+Math.sqrt(5))/2,Qi=1/vi,uh=[new L(-vi,Qi,0),new L(vi,Qi,0),new L(-Qi,0,vi),new L(Qi,0,vi),new L(0,vi,-Qi),new L(0,vi,Qi),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],Xp=new L,Ka=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Xp}=r;_l=this._renderer.getRenderTarget(),yl=this._renderer.getActiveCubeFace(),bl=this._renderer.getActiveMipmapLevel(),Ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ph(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_l,yl,bl),this._renderer.xr.enabled=Ml,e.scissorTest=!1,$a(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fi||e.mapping===pi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_l=this._renderer.getRenderTarget(),yl=this._renderer.getActiveCubeFace(),bl=this._renderer.getActiveMipmapLevel(),Ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Tt,minFilter:Tt,generateMipmaps:!1,type:Kt,format:Qt,colorSpace:ri,depthBuffer:!1},s=dh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dh(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qp(r)),this._blurMaterial=Yp(r,e,t)}return s}_compileMaterial(e){let t=new vt(this._lodPlanes[0],e);this._renderer.compile(t,vl)}_sceneToCubeUV(e,t,n,s,r){let l=new Rt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(hh),f.toneMapping=An,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null));let x=new on({name:"PMREM.Background",side:wt,depthWrite:!1,depthTest:!1}),g=new vt(new Wi,x),u=!1,T=e.background;T?T.isColor&&(x.color.copy(T),e.background=null,u=!0):(x.color.copy(hh),u=!0);for(let S=0;S<6;S++){let _=S%3;_===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[S],r.y,r.z)):_===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[S]));let A=this._cubeSize;$a(s,_*A,S>2?A:0,A,A),f.setRenderTarget(s),u&&f.render(g,l),f.render(e,l)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=p,f.autoClear=d,e.background=T}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===fi||e.mapping===pi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ph()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new vt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;$a(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,vl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=uh[(s-r-1)%uh.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new vt(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*_i-1),x=r/m,g=isFinite(r)?1+Math.floor(h*x):_i;g>_i&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${_i}`);let u=[],T=0;for(let R=0;R<_i;++R){let I=R/x,b=Math.exp(-I*I/2);u.push(b),R===0?T+=b:R<g&&(T+=2*b)}for(let R=0;R<u.length;R++)u[R]=u[R]/T;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=u,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:S}=this;d.dTheta.value=m,d.mipInt.value=S-n;let _=this._sizeLods[s],A=3*_*(s>S-ji?s-S+ji:0),E=4*(this._cubeSize-_);$a(t,A,E,3*_,2*_),l.setRenderTarget(t),l.render(f,vl)}};function qp(i){let e=[],t=[],n=[],s=i,r=i-ji+1+ch.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-ji?l=ch[a-i+ji-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,m=6,x=3,g=2,u=1,T=new Float32Array(x*m*p),S=new Float32Array(g*m*p),_=new Float32Array(u*m*p);for(let E=0;E<p;E++){let R=E%3*2/3-1,I=E>2?0:-1,b=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];T.set(b,x*m*E),S.set(d,g*m*E);let M=[E,E,E,E,E,E];_.set(M,u*m*E)}let A=new Qe;A.setAttribute("position",new De(T,x)),A.setAttribute("uv",new De(S,g)),A.setAttribute("faceIndex",new De(_,u)),e.push(A),s>ji&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function dh(i,e,t){let n=new It(i,e,t);return n.texture.mapping=Hs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $a(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Yp(i,e,t){let n=new Float32Array(_i),s=new L(0,1,0);return new nt({name:"SphericalGaussianBlur",defines:{n:_i,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ln,depthTest:!1,depthWrite:!1})}function fh(){return new nt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ln,depthTest:!1,depthWrite:!1})}function ph(){return new nt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ln,depthTest:!1,depthWrite:!1})}function Ll(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Zp(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===fa||l===pa,h=l===fi||l===pi;if(c||h){let f=e.get(o),d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Ka(i)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{let p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new Ka(i)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function $p(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ai("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Jp(i,e,t,n){let s={},r=new WeakMap;function a(f){let d=f.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",a),delete s[d.id];let p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(f){let d=f.attributes;for(let p in d)e.update(d[p],i.ARRAY_BUFFER)}function c(f){let d=[],p=f.index,m=f.attributes.position,x=0;if(p!==null){let T=p.array;x=p.version;for(let S=0,_=T.length;S<_;S+=3){let A=T[S+0],E=T[S+1],R=T[S+2];d.push(A,E,E,R,R,A)}}else if(m!==void 0){let T=m.array;x=m.version;for(let S=0,_=T.length/3-1;S<_;S+=3){let A=S+0,E=S+1,R=S+2;d.push(A,E,E,R,R,A)}}else return;let g=new(fl(d)?Es:Ss)(d,1);g.version=x;let u=r.get(f);u&&e.remove(u),r.set(f,g)}function h(f){let d=r.get(f);if(d){let p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function Kp(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*a),t.update(p,n,1)}function c(d,p,m){m!==0&&(i.drawElementsInstanced(n,p,r,d*a,m),t.update(p,n,m))}function h(d,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,m);let g=0;for(let u=0;u<m;u++)g+=p[u];t.update(g,n,1)}function f(d,p,m,x){if(m===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let u=0;u<d.length;u++)c(d[u]/a,p[u],x[u]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,x,0,m);let u=0;for(let T=0;T<m;T++)u+=p[T]*x[T];t.update(u,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Qp(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function jp(i,e,t){let n=new WeakMap,s=new dt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==f){let b=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();let p=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],S=0;p===!0&&(S=1),m===!0&&(S=2),x===!0&&(S=3);let _=o.attributes.position.count*S,A=1;_>e.maxTextureSize&&(A=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let E=new Float32Array(_*A*4*f),R=new Ms(E,_,A,f);R.type=mn,R.needsUpdate=!0;let I=S*4;for(let M=0;M<f;M++){let C=g[M],V=u[M],H=T[M],k=_*A*4*M;for(let Z=0;Z<C.count;Z++){let W=Z*I;p===!0&&(s.fromBufferAttribute(C,Z),E[k+W+0]=s.x,E[k+W+1]=s.y,E[k+W+2]=s.z,E[k+W+3]=0),m===!0&&(s.fromBufferAttribute(V,Z),E[k+W+4]=s.x,E[k+W+5]=s.y,E[k+W+6]=s.z,E[k+W+7]=0),x===!0&&(s.fromBufferAttribute(H,Z),E[k+W+8]=s.x,E[k+W+9]=s.y,E[k+W+10]=s.z,E[k+W+11]=H.itemSize===4?s.w:1)}}d={count:f,texture:R,size:new Se(_,A)},n.set(o,d),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let m=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function em(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,f=e.get(l,h);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Dh=new Bt,mh=new Is(1,1),Nh=new Ms,Uh=new Fr,Fh=new ws,gh=[],xh=[],vh=new Float32Array(16),_h=new Float32Array(9),yh=new Float32Array(4);function ts(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=gh[s];if(r===void 0&&(r=new Float32Array(s),gh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function yt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function bt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function eo(i,e){let t=xh[e];t===void 0&&(t=new Int32Array(e),xh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function tm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function nm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2fv(this.addr,e),bt(t,e)}}function im(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;i.uniform3fv(this.addr,e),bt(t,e)}}function sm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4fv(this.addr,e),bt(t,e)}}function rm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(yt(t,n))return;yh.set(n),i.uniformMatrix2fv(this.addr,!1,yh),bt(t,n)}}function am(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(yt(t,n))return;_h.set(n),i.uniformMatrix3fv(this.addr,!1,_h),bt(t,n)}}function om(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(yt(t,n))return;vh.set(n),i.uniformMatrix4fv(this.addr,!1,vh),bt(t,n)}}function lm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function cm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2iv(this.addr,e),bt(t,e)}}function hm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;i.uniform3iv(this.addr,e),bt(t,e)}}function um(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4iv(this.addr,e),bt(t,e)}}function dm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function fm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2uiv(this.addr,e),bt(t,e)}}function pm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;i.uniform3uiv(this.addr,e),bt(t,e)}}function mm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4uiv(this.addr,e),bt(t,e)}}function gm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(mh.compareFunction=hl,r=mh):r=Dh,t.setTexture2D(e||r,s)}function xm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Uh,s)}function vm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Fh,s)}function _m(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Nh,s)}function ym(i){switch(i){case 5126:return tm;case 35664:return nm;case 35665:return im;case 35666:return sm;case 35674:return rm;case 35675:return am;case 35676:return om;case 5124:case 35670:return lm;case 35667:case 35671:return cm;case 35668:case 35672:return hm;case 35669:case 35673:return um;case 5125:return dm;case 36294:return fm;case 36295:return pm;case 36296:return mm;case 35678:case 36198:case 36298:case 36306:case 35682:return gm;case 35679:case 36299:case 36307:return xm;case 35680:case 36300:case 36308:case 36293:return vm;case 36289:case 36303:case 36311:case 36292:return _m}}function bm(i,e){i.uniform1fv(this.addr,e)}function Mm(i,e){let t=ts(e,this.size,2);i.uniform2fv(this.addr,t)}function Sm(i,e){let t=ts(e,this.size,3);i.uniform3fv(this.addr,t)}function Em(i,e){let t=ts(e,this.size,4);i.uniform4fv(this.addr,t)}function Tm(i,e){let t=ts(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function wm(i,e){let t=ts(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Am(i,e){let t=ts(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Cm(i,e){i.uniform1iv(this.addr,e)}function Rm(i,e){i.uniform2iv(this.addr,e)}function Pm(i,e){i.uniform3iv(this.addr,e)}function Im(i,e){i.uniform4iv(this.addr,e)}function Lm(i,e){i.uniform1uiv(this.addr,e)}function Dm(i,e){i.uniform2uiv(this.addr,e)}function Nm(i,e){i.uniform3uiv(this.addr,e)}function Um(i,e){i.uniform4uiv(this.addr,e)}function Fm(i,e,t){let n=this.cache,s=e.length,r=eo(t,s);yt(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Dh,r[a])}function Bm(i,e,t){let n=this.cache,s=e.length,r=eo(t,s);yt(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Uh,r[a])}function Om(i,e,t){let n=this.cache,s=e.length,r=eo(t,s);yt(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Fh,r[a])}function zm(i,e,t){let n=this.cache,s=e.length,r=eo(t,s);yt(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Nh,r[a])}function Hm(i){switch(i){case 5126:return bm;case 35664:return Mm;case 35665:return Sm;case 35666:return Em;case 35674:return Tm;case 35675:return wm;case 35676:return Am;case 5124:case 35670:return Cm;case 35667:case 35671:return Rm;case 35668:case 35672:return Pm;case 35669:case 35673:return Im;case 5125:return Lm;case 36294:return Dm;case 36295:return Nm;case 36296:return Um;case 35678:case 36198:case 36298:case 36306:case 35682:return Fm;case 35679:case 36299:case 36307:return Bm;case 35680:case 36300:case 36308:case 36293:return Om;case 36289:case 36303:case 36311:case 36292:return zm}}var El=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ym(t.type)}},Tl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Hm(t.type)}},wl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Sl=/(\w+)(\])?(\[|\.)?/g;function bh(i,e){i.seq.push(e),i.map[e.id]=e}function km(i,e,t){let n=i.name,s=n.length;for(Sl.lastIndex=0;;){let r=Sl.exec(n),a=Sl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){bh(t,c===void 0?new El(o,i,e):new Tl(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new wl(o),bh(t,f)),t=f}}}var es=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);km(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Mh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Vm=37297,Gm=0;function Wm(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Sh=new Be;function Xm(i){Ge._getMatrix(Sh,Ge.workingColorSpace,i);let e=`mat3( ${Sh.elements.map(t=>t.toFixed(4))} )`;switch(Ge.getTransfer(i)){case _s:return[e,"LinearTransferOETF"];case Ye:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Eh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Wm(i.getShaderSource(e),o)}else return r}function qm(i,e){let t=Xm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Ym(i,e){let t;switch(e){case oa:t="Linear";break;case la:t="Reinhard";break;case ca:t="Cineon";break;case Zi:t="ACESFilmic";break;case ua:t="AgX";break;case da:t="Neutral";break;case ha:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ja=new L;function Zm(){Ge.getLuminanceCoefficients(Ja);let i=Ja.x.toFixed(4),e=Ja.y.toFixed(4),t=Ja.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $m(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ys).join(`
`)}function Jm(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Km(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ys(i){return i!==""}function Th(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Qm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Al(i){return i.replace(Qm,eg)}var jm=new Map;function eg(i,e){let t=ze[e];if(t===void 0){let n=jm.get(e);if(n!==void 0)t=ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Al(t)}var tg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ah(i){return i.replace(tg,ng)}function ng(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ch(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ig(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Jo?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===wc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===fn&&(e="SHADOWMAP_TYPE_VSM"),e}function sg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case fi:case pi:e="ENVMAP_TYPE_CUBE";break;case Hs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function rg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case pi:e="ENVMAP_MODE_REFRACTION";break}return e}function ag(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case jo:e="ENVMAP_BLENDING_MULTIPLY";break;case Xc:e="ENVMAP_BLENDING_MIX";break;case qc:e="ENVMAP_BLENDING_ADD";break}return e}function og(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function lg(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=ig(t),c=sg(t),h=rg(t),f=ag(t),d=og(t),p=$m(t),m=Jm(r),x=s.createProgram(),g,u,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ys).join(`
`),g.length>0&&(g+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ys).join(`
`),u.length>0&&(u+=`
`)):(g=[Ch(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ys).join(`
`),u=[Ch(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==An?"#define TONE_MAPPING":"",t.toneMapping!==An?ze.tonemapping_pars_fragment:"",t.toneMapping!==An?Ym("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,qm("linearToOutputTexel",t.outputColorSpace),Zm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ys).join(`
`)),a=Al(a),a=Th(a,t),a=wh(a,t),o=Al(o),o=Th(o,t),o=wh(o,t),a=Ah(a),o=Ah(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,u=["#define varying in",t.glslVersion===ul?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ul?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let S=T+g+a,_=T+u+o,A=Mh(s,s.VERTEX_SHADER,S),E=Mh(s,s.FRAGMENT_SHADER,_);s.attachShader(x,A),s.attachShader(x,E),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(C){if(i.debug.checkShaderErrors){let V=s.getProgramInfoLog(x)||"",H=s.getShaderInfoLog(A)||"",k=s.getShaderInfoLog(E)||"",Z=V.trim(),W=H.trim(),K=k.trim(),z=!0,ne=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,A,E);else{let ae=Eh(s,A,"vertex"),ge=Eh(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+Z+`
`+ae+`
`+ge)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(W===""||K==="")&&(ne=!1);ne&&(C.diagnostics={runnable:z,programLog:Z,vertexShader:{log:W,prefix:g},fragmentShader:{log:K,prefix:u}})}s.deleteShader(A),s.deleteShader(E),I=new es(s,x),b=Km(s,x)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,Vm)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Gm++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=E,this}var cg=0,Cl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Rl(e),t.set(e,n)),n}},Rl=class{constructor(e){this.id=cg++,this.code=e,this.usedTimes=0}};function hg(i,e,t,n,s,r,a){let o=new Gi,l=new Cl,c=new Set,h=[],f=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function g(b,M,C,V,H){let k=V.fog,Z=H.geometry,W=b.isMeshStandardMaterial?V.environment:null,K=(b.isMeshStandardMaterial?t:e).get(b.envMap||W),z=K&&K.mapping===Hs?K.image.height:null,ne=m[b.type];b.precision!==null&&(p=s.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));let ae=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ge=ae!==void 0?ae.length:0,Fe=0;Z.morphAttributes.position!==void 0&&(Fe=1),Z.morphAttributes.normal!==void 0&&(Fe=2),Z.morphAttributes.color!==void 0&&(Fe=3);let it,$e,X,oe;if(ne){let Je=gn[ne];it=Je.vertexShader,$e=Je.fragmentShader}else it=b.vertexShader,$e=b.fragmentShader,l.update(b),X=l.getVertexShaderID(b),oe=l.getFragmentShaderID(b);let ie=i.getRenderTarget(),we=i.state.buffers.depth.getReversed(),Ae=H.isInstancedMesh===!0,Ne=H.isBatchedMesh===!0,mt=!!b.map,We=!!b.matcap,P=!!K,st=!!b.aoMap,Ce=!!b.lightMap,qe=!!b.bumpMap,Ee=!!b.normalMap,ct=!!b.displacementMap,me=!!b.emissiveMap,He=!!b.metalnessMap,Mt=!!b.roughnessMap,gt=b.anisotropy>0,w=b.clearcoat>0,v=b.dispersion>0,F=b.iridescence>0,q=b.sheen>0,J=b.transmission>0,G=gt&&!!b.anisotropyMap,Me=w&&!!b.clearcoatMap,se=w&&!!b.clearcoatNormalMap,_e=w&&!!b.clearcoatRoughnessMap,ye=F&&!!b.iridescenceMap,ee=F&&!!b.iridescenceThicknessMap,ue=q&&!!b.sheenColorMap,Ie=q&&!!b.sheenRoughnessMap,be=!!b.specularMap,ce=!!b.specularColorMap,Oe=!!b.specularIntensityMap,D=J&&!!b.transmissionMap,te=J&&!!b.thicknessMap,re=!!b.gradientMap,pe=!!b.alphaMap,Q=b.alphaTest>0,Y=!!b.alphaHash,ve=!!b.extensions,Ue=An;b.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Ue=i.toneMapping);let rt={shaderID:ne,shaderType:b.type,shaderName:b.name,vertexShader:it,fragmentShader:$e,defines:b.defines,customVertexShaderID:X,customFragmentShaderID:oe,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Ne,batchingColor:Ne&&H._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&H.instanceColor!==null,instancingMorph:Ae&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ie===null?i.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:ri,alphaToCoverage:!!b.alphaToCoverage,map:mt,matcap:We,envMap:P,envMapMode:P&&K.mapping,envMapCubeUVHeight:z,aoMap:st,lightMap:Ce,bumpMap:qe,normalMap:Ee,displacementMap:d&&ct,emissiveMap:me,normalMapObjectSpace:Ee&&b.normalMapType===Jc,normalMapTangentSpace:Ee&&b.normalMapType===cl,metalnessMap:He,roughnessMap:Mt,anisotropy:gt,anisotropyMap:G,clearcoat:w,clearcoatMap:Me,clearcoatNormalMap:se,clearcoatRoughnessMap:_e,dispersion:v,iridescence:F,iridescenceMap:ye,iridescenceThicknessMap:ee,sheen:q,sheenColorMap:ue,sheenRoughnessMap:Ie,specularMap:be,specularColorMap:ce,specularIntensityMap:Oe,transmission:J,transmissionMap:D,thicknessMap:te,gradientMap:re,opaque:b.transparent===!1&&b.blending===ii&&b.alphaToCoverage===!1,alphaMap:pe,alphaTest:Q,alphaHash:Y,combine:b.combine,mapUv:mt&&x(b.map.channel),aoMapUv:st&&x(b.aoMap.channel),lightMapUv:Ce&&x(b.lightMap.channel),bumpMapUv:qe&&x(b.bumpMap.channel),normalMapUv:Ee&&x(b.normalMap.channel),displacementMapUv:ct&&x(b.displacementMap.channel),emissiveMapUv:me&&x(b.emissiveMap.channel),metalnessMapUv:He&&x(b.metalnessMap.channel),roughnessMapUv:Mt&&x(b.roughnessMap.channel),anisotropyMapUv:G&&x(b.anisotropyMap.channel),clearcoatMapUv:Me&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:se&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&x(b.sheenRoughnessMap.channel),specularMapUv:be&&x(b.specularMap.channel),specularColorMapUv:ce&&x(b.specularColorMap.channel),specularIntensityMapUv:Oe&&x(b.specularIntensityMap.channel),transmissionMapUv:D&&x(b.transmissionMap.channel),thicknessMapUv:te&&x(b.thicknessMap.channel),alphaMapUv:pe&&x(b.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Ee||gt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Z.attributes.uv&&(mt||pe),fog:!!k,useFog:b.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:we,skinning:H.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Fe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ue,decodeVideoTexture:mt&&b.map.isVideoTexture===!0&&Ge.getTransfer(b.map.colorSpace)===Ye,decodeVideoTextureEmissive:me&&b.emissiveMap.isVideoTexture===!0&&Ge.getTransfer(b.emissiveMap.colorSpace)===Ye,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===pn,flipSided:b.side===wt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ve&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&b.extensions.multiDraw===!0||Ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return rt.vertexUv1s=c.has(1),rt.vertexUv2s=c.has(2),rt.vertexUv3s=c.has(3),c.clear(),rt}function u(b){let M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(let C in b.defines)M.push(C),M.push(b.defines[C]);return b.isRawShaderMaterial===!1&&(T(M,b),S(M,b),M.push(i.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function T(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function S(b,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),b.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),b.push(o.mask)}function _(b){let M=m[b.type],C;if(M){let V=gn[M];C=Rn.clone(V.uniforms)}else C=b.uniforms;return C}function A(b,M){let C;for(let V=0,H=h.length;V<H;V++){let k=h[V];if(k.cacheKey===M){C=k,++C.usedTimes;break}}return C===void 0&&(C=new lg(i,M,b,r),h.push(C)),C}function E(b){if(--b.usedTimes===0){let M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function R(b){l.remove(b)}function I(){l.dispose()}return{getParameters:g,getProgramCacheKey:u,getUniforms:_,acquireProgram:A,releaseProgram:E,releaseShaderCache:R,programs:h,dispose:I}}function ug(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function dg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Rh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ph(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f,d,p,m,x,g){let u=i[e];return u===void 0?(u={id:f.id,object:f,geometry:d,material:p,groupOrder:m,renderOrder:f.renderOrder,z:x,group:g},i[e]=u):(u.id=f.id,u.object=f,u.geometry=d,u.material=p,u.groupOrder=m,u.renderOrder=f.renderOrder,u.z=x,u.group=g),e++,u}function o(f,d,p,m,x,g){let u=a(f,d,p,m,x,g);p.transmission>0?n.push(u):p.transparent===!0?s.push(u):t.push(u)}function l(f,d,p,m,x,g){let u=a(f,d,p,m,x,g);p.transmission>0?n.unshift(u):p.transparent===!0?s.unshift(u):t.unshift(u)}function c(f,d){t.length>1&&t.sort(f||dg),n.length>1&&n.sort(d||Rh),s.length>1&&s.sort(d||Rh)}function h(){for(let f=e,d=i.length;f<d;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function fg(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Ph,i.set(n,[a])):s>=r.length?(a=new Ph,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function pg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new de};break;case"SpotLight":t={position:new L,direction:new L,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new de,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new de,groundColor:new de};break;case"RectAreaLight":t={color:new de,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function mg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var gg=0;function xg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function vg(i){let e=new pg,t=mg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let s=new L,r=new et,a=new et;function o(c){let h=0,f=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,m=0,x=0,g=0,u=0,T=0,S=0,_=0,A=0,E=0,R=0;c.sort(xg);for(let b=0,M=c.length;b<M;b++){let C=c[b],V=C.color,H=C.intensity,k=C.distance,Z=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=V.r*H,f+=V.g*H,d+=V.b*H;else if(C.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(C.sh.coefficients[W],H);R++}else if(C.isDirectionalLight){let W=e.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let K=C.shadow,z=t.get(C);z.shadowIntensity=K.intensity,z.shadowBias=K.bias,z.shadowNormalBias=K.normalBias,z.shadowRadius=K.radius,z.shadowMapSize=K.mapSize,n.directionalShadow[p]=z,n.directionalShadowMap[p]=Z,n.directionalShadowMatrix[p]=C.shadow.matrix,T++}n.directional[p]=W,p++}else if(C.isSpotLight){let W=e.get(C);W.position.setFromMatrixPosition(C.matrixWorld),W.color.copy(V).multiplyScalar(H),W.distance=k,W.coneCos=Math.cos(C.angle),W.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),W.decay=C.decay,n.spot[x]=W;let K=C.shadow;if(C.map&&(n.spotLightMap[A]=C.map,A++,K.updateMatrices(C),C.castShadow&&E++),n.spotLightMatrix[x]=K.matrix,C.castShadow){let z=t.get(C);z.shadowIntensity=K.intensity,z.shadowBias=K.bias,z.shadowNormalBias=K.normalBias,z.shadowRadius=K.radius,z.shadowMapSize=K.mapSize,n.spotShadow[x]=z,n.spotShadowMap[x]=Z,_++}x++}else if(C.isRectAreaLight){let W=e.get(C);W.color.copy(V).multiplyScalar(H),W.halfWidth.set(C.width*.5,0,0),W.halfHeight.set(0,C.height*.5,0),n.rectArea[g]=W,g++}else if(C.isPointLight){let W=e.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),W.distance=C.distance,W.decay=C.decay,C.castShadow){let K=C.shadow,z=t.get(C);z.shadowIntensity=K.intensity,z.shadowBias=K.bias,z.shadowNormalBias=K.normalBias,z.shadowRadius=K.radius,z.shadowMapSize=K.mapSize,z.shadowCameraNear=K.camera.near,z.shadowCameraFar=K.camera.far,n.pointShadow[m]=z,n.pointShadowMap[m]=Z,n.pointShadowMatrix[m]=C.shadow.matrix,S++}n.point[m]=W,m++}else if(C.isHemisphereLight){let W=e.get(C);W.skyColor.copy(C.color).multiplyScalar(H),W.groundColor.copy(C.groundColor).multiplyScalar(H),n.hemi[u]=W,u++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;let I=n.hash;(I.directionalLength!==p||I.pointLength!==m||I.spotLength!==x||I.rectAreaLength!==g||I.hemiLength!==u||I.numDirectionalShadows!==T||I.numPointShadows!==S||I.numSpotShadows!==_||I.numSpotMaps!==A||I.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=u,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=_+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,I.directionalLength=p,I.pointLength=m,I.spotLength=x,I.rectAreaLength=g,I.hemiLength=u,I.numDirectionalShadows=T,I.numPointShadows=S,I.numSpotShadows=_,I.numSpotMaps=A,I.numLightProbes=R,n.version=gg++)}function l(c,h){let f=0,d=0,p=0,m=0,x=0,g=h.matrixWorldInverse;for(let u=0,T=c.length;u<T;u++){let S=c[u];if(S.isDirectionalLight){let _=n.directional[f];_.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),f++}else if(S.isSpotLight){let _=n.spot[p];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),p++}else if(S.isRectAreaLight){let _=n.rectArea[m];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(g),a.identity(),r.copy(S.matrixWorld),r.premultiply(g),a.extractRotation(r),_.halfWidth.set(S.width*.5,0,0),_.halfHeight.set(0,S.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),m++}else if(S.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(g),d++}else if(S.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(S.matrixWorld),_.direction.transformDirection(g),x++}}}return{setup:o,setupView:l,state:n}}function Ih(i){let e=new vg(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function _g(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Ih(i),e.set(s,[o])):r>=a.length?(o=new Ih(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var yg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Mg(i,e,t){let n=new Yi,s=new Se,r=new Se,a=new dt,o=new Vr({depthPacking:$c}),l=new Gr,c={},h=t.maxTextureSize,f={[Ft]:wt,[wt]:Ft,[pn]:pn},d=new nt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:yg,fragmentShader:bg}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let m=new Qe;m.setAttribute("position",new De(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new vt(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jo;let u=this.type;this.render=function(E,R,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;let b=i.getRenderTarget(),M=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),V=i.state;V.setBlending(ln),V.buffers.depth.getReversed()?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let H=u!==fn&&this.type===fn,k=u===fn&&this.type!==fn;for(let Z=0,W=E.length;Z<W;Z++){let K=E[Z],z=K.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let ne=z.getFrameExtents();if(s.multiply(ne),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ne.x),s.x=r.x*ne.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ne.y),s.y=r.y*ne.y,z.mapSize.y=r.y)),z.map===null||H===!0||k===!0){let ge=this.type!==fn?{minFilter:Zt,magFilter:Zt}:{};z.map!==null&&z.map.dispose(),z.map=new It(s.x,s.y,ge),z.map.texture.name=K.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();let ae=z.getViewportCount();for(let ge=0;ge<ae;ge++){let Fe=z.getViewport(ge);a.set(r.x*Fe.x,r.y*Fe.y,r.x*Fe.z,r.y*Fe.w),V.viewport(a),z.updateMatrices(K,ge),n=z.getFrustum(),_(R,I,z.camera,K,this.type)}z.isPointLightShadow!==!0&&this.type===fn&&T(z,I),z.needsUpdate=!1}u=this.type,g.needsUpdate=!1,i.setRenderTarget(b,M,C)};function T(E,R){let I=e.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new It(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(R,null,I,d,x,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(R,null,I,p,x,null)}function S(E,R,I,b){let M=null,C=I.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)M=C;else if(M=I.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let V=M.uuid,H=R.uuid,k=c[V];k===void 0&&(k={},c[V]=k);let Z=k[H];Z===void 0&&(Z=M.clone(),k[H]=Z,R.addEventListener("dispose",A)),M=Z}if(M.visible=R.visible,M.wireframe=R.wireframe,b===fn?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:f[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let V=i.properties.get(M);V.light=I}return M}function _(E,R,I,b,M){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===fn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,E.matrixWorld);let H=e.update(E),k=E.material;if(Array.isArray(k)){let Z=H.groups;for(let W=0,K=Z.length;W<K;W++){let z=Z[W],ne=k[z.materialIndex];if(ne&&ne.visible){let ae=S(E,ne,b,M);E.onBeforeShadow(i,E,R,I,H,ae,z),i.renderBufferDirect(I,null,H,ae,E,z),E.onAfterShadow(i,E,R,I,H,ae,z)}}}else if(k.visible){let Z=S(E,k,b,M);E.onBeforeShadow(i,E,R,I,H,Z,null),i.renderBufferDirect(I,null,H,Z,E,null),E.onAfterShadow(i,E,R,I,H,Z,null)}}let V=E.children;for(let H=0,k=V.length;H<k;H++)_(V[H],R,I,b,M)}function A(E){E.target.removeEventListener("dispose",A);for(let I in c){let b=c[I],M=E.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}var Sg={[ea]:ta,[na]:ra,[ia]:aa,[si]:sa,[ta]:ea,[ra]:na,[aa]:ia,[sa]:si};function Eg(i,e){function t(){let D=!1,te=new dt,re=null,pe=new dt(0,0,0,0);return{setMask:function(Q){re!==Q&&!D&&(i.colorMask(Q,Q,Q,Q),re=Q)},setLocked:function(Q){D=Q},setClear:function(Q,Y,ve,Ue,rt){rt===!0&&(Q*=Ue,Y*=Ue,ve*=Ue),te.set(Q,Y,ve,Ue),pe.equals(te)===!1&&(i.clearColor(Q,Y,ve,Ue),pe.copy(te))},reset:function(){D=!1,re=null,pe.set(-1,0,0,0)}}}function n(){let D=!1,te=!1,re=null,pe=null,Q=null;return{setReversed:function(Y){if(te!==Y){let ve=e.get("EXT_clip_control");Y?ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.ZERO_TO_ONE_EXT):ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.NEGATIVE_ONE_TO_ONE_EXT),te=Y;let Ue=Q;Q=null,this.setClear(Ue)}},getReversed:function(){return te},setTest:function(Y){Y?ie(i.DEPTH_TEST):we(i.DEPTH_TEST)},setMask:function(Y){re!==Y&&!D&&(i.depthMask(Y),re=Y)},setFunc:function(Y){if(te&&(Y=Sg[Y]),pe!==Y){switch(Y){case ea:i.depthFunc(i.NEVER);break;case ta:i.depthFunc(i.ALWAYS);break;case na:i.depthFunc(i.LESS);break;case si:i.depthFunc(i.LEQUAL);break;case ia:i.depthFunc(i.EQUAL);break;case sa:i.depthFunc(i.GEQUAL);break;case ra:i.depthFunc(i.GREATER);break;case aa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pe=Y}},setLocked:function(Y){D=Y},setClear:function(Y){Q!==Y&&(te&&(Y=1-Y),i.clearDepth(Y),Q=Y)},reset:function(){D=!1,re=null,pe=null,Q=null,te=!1}}}function s(){let D=!1,te=null,re=null,pe=null,Q=null,Y=null,ve=null,Ue=null,rt=null;return{setTest:function(Je){D||(Je?ie(i.STENCIL_TEST):we(i.STENCIL_TEST))},setMask:function(Je){te!==Je&&!D&&(i.stencilMask(Je),te=Je)},setFunc:function(Je,xn,hn){(re!==Je||pe!==xn||Q!==hn)&&(i.stencilFunc(Je,xn,hn),re=Je,pe=xn,Q=hn)},setOp:function(Je,xn,hn){(Y!==Je||ve!==xn||Ue!==hn)&&(i.stencilOp(Je,xn,hn),Y=Je,ve=xn,Ue=hn)},setLocked:function(Je){D=Je},setClear:function(Je){rt!==Je&&(i.clearStencil(Je),rt=Je)},reset:function(){D=!1,te=null,re=null,pe=null,Q=null,Y=null,ve=null,Ue=null,rt=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},f={},d=new WeakMap,p=[],m=null,x=!1,g=null,u=null,T=null,S=null,_=null,A=null,E=null,R=new de(0,0,0),I=0,b=!1,M=null,C=null,V=null,H=null,k=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,K=0,z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(z)[1]),W=K>=1):z.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),W=K>=2);let ne=null,ae={},ge=i.getParameter(i.SCISSOR_BOX),Fe=i.getParameter(i.VIEWPORT),it=new dt().fromArray(ge),$e=new dt().fromArray(Fe);function X(D,te,re,pe){let Q=new Uint8Array(4),Y=i.createTexture();i.bindTexture(D,Y),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ve=0;ve<re;ve++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(te,0,i.RGBA,1,1,pe,0,i.RGBA,i.UNSIGNED_BYTE,Q):i.texImage2D(te+ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Q);return Y}let oe={};oe[i.TEXTURE_2D]=X(i.TEXTURE_2D,i.TEXTURE_2D,1),oe[i.TEXTURE_CUBE_MAP]=X(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[i.TEXTURE_2D_ARRAY]=X(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),oe[i.TEXTURE_3D]=X(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(i.DEPTH_TEST),a.setFunc(si),qe(!1),Ee($o),ie(i.CULL_FACE),st(ln);function ie(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function we(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Ae(D,te){return f[D]!==te?(i.bindFramebuffer(D,te),f[D]=te,D===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=te),D===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=te),!0):!1}function Ne(D,te){let re=p,pe=!1;if(D){re=d.get(te),re===void 0&&(re=[],d.set(te,re));let Q=D.textures;if(re.length!==Q.length||re[0]!==i.COLOR_ATTACHMENT0){for(let Y=0,ve=Q.length;Y<ve;Y++)re[Y]=i.COLOR_ATTACHMENT0+Y;re.length=Q.length,pe=!0}}else re[0]!==i.BACK&&(re[0]=i.BACK,pe=!0);pe&&i.drawBuffers(re)}function mt(D){return m!==D?(i.useProgram(D),m=D,!0):!1}let We={[zn]:i.FUNC_ADD,[Cc]:i.FUNC_SUBTRACT,[Rc]:i.FUNC_REVERSE_SUBTRACT};We[Pc]=i.MIN,We[Ic]=i.MAX;let P={[Lc]:i.ZERO,[Dc]:i.ONE,[Nc]:i.SRC_COLOR,[Cr]:i.SRC_ALPHA,[Hc]:i.SRC_ALPHA_SATURATE,[Oc]:i.DST_COLOR,[Fc]:i.DST_ALPHA,[Uc]:i.ONE_MINUS_SRC_COLOR,[Rr]:i.ONE_MINUS_SRC_ALPHA,[zc]:i.ONE_MINUS_DST_COLOR,[Bc]:i.ONE_MINUS_DST_ALPHA,[kc]:i.CONSTANT_COLOR,[Vc]:i.ONE_MINUS_CONSTANT_COLOR,[Gc]:i.CONSTANT_ALPHA,[Wc]:i.ONE_MINUS_CONSTANT_ALPHA};function st(D,te,re,pe,Q,Y,ve,Ue,rt,Je){if(D===ln){x===!0&&(we(i.BLEND),x=!1);return}if(x===!1&&(ie(i.BLEND),x=!0),D!==Ac){if(D!==g||Je!==b){if((u!==zn||_!==zn)&&(i.blendEquation(i.FUNC_ADD),u=zn,_=zn),Je)switch(D){case ii:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case lt:i.blendFunc(i.ONE,i.ONE);break;case Ko:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Qo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ii:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case lt:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ko:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qo:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}T=null,S=null,A=null,E=null,R.set(0,0,0),I=0,g=D,b=Je}return}Q=Q||te,Y=Y||re,ve=ve||pe,(te!==u||Q!==_)&&(i.blendEquationSeparate(We[te],We[Q]),u=te,_=Q),(re!==T||pe!==S||Y!==A||ve!==E)&&(i.blendFuncSeparate(P[re],P[pe],P[Y],P[ve]),T=re,S=pe,A=Y,E=ve),(Ue.equals(R)===!1||rt!==I)&&(i.blendColor(Ue.r,Ue.g,Ue.b,rt),R.copy(Ue),I=rt),g=D,b=!1}function Ce(D,te){D.side===pn?we(i.CULL_FACE):ie(i.CULL_FACE);let re=D.side===wt;te&&(re=!re),qe(re),D.blending===ii&&D.transparent===!1?st(ln):st(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let pe=D.stencilWrite;o.setTest(pe),pe&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),me(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ie(i.SAMPLE_ALPHA_TO_COVERAGE):we(i.SAMPLE_ALPHA_TO_COVERAGE)}function qe(D){M!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),M=D)}function Ee(D){D!==Ec?(ie(i.CULL_FACE),D!==C&&(D===$o?i.cullFace(i.BACK):D===Tc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):we(i.CULL_FACE),C=D}function ct(D){D!==V&&(W&&i.lineWidth(D),V=D)}function me(D,te,re){D?(ie(i.POLYGON_OFFSET_FILL),(H!==te||k!==re)&&(i.polygonOffset(te,re),H=te,k=re)):we(i.POLYGON_OFFSET_FILL)}function He(D){D?ie(i.SCISSOR_TEST):we(i.SCISSOR_TEST)}function Mt(D){D===void 0&&(D=i.TEXTURE0+Z-1),ne!==D&&(i.activeTexture(D),ne=D)}function gt(D,te,re){re===void 0&&(ne===null?re=i.TEXTURE0+Z-1:re=ne);let pe=ae[re];pe===void 0&&(pe={type:void 0,texture:void 0},ae[re]=pe),(pe.type!==D||pe.texture!==te)&&(ne!==re&&(i.activeTexture(re),ne=re),i.bindTexture(D,te||oe[D]),pe.type=D,pe.texture=te)}function w(){let D=ae[ne];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{i.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{i.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{i.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{i.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(){try{i.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(){try{i.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{i.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(D){it.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),it.copy(D))}function Ie(D){$e.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),$e.copy(D))}function be(D,te){let re=c.get(te);re===void 0&&(re=new WeakMap,c.set(te,re));let pe=re.get(D);pe===void 0&&(pe=i.getUniformBlockIndex(te,D.name),re.set(D,pe))}function ce(D,te){let pe=c.get(te).get(D);l.get(te)!==pe&&(i.uniformBlockBinding(te,pe,D.__bindingPointIndex),l.set(te,pe))}function Oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ne=null,ae={},f={},d=new WeakMap,p=[],m=null,x=!1,g=null,u=null,T=null,S=null,_=null,A=null,E=null,R=new de(0,0,0),I=0,b=!1,M=null,C=null,V=null,H=null,k=null,it.set(0,0,i.canvas.width,i.canvas.height),$e.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ie,disable:we,bindFramebuffer:Ae,drawBuffers:Ne,useProgram:mt,setBlending:st,setMaterial:Ce,setFlipSided:qe,setCullFace:Ee,setLineWidth:ct,setPolygonOffset:me,setScissorTest:He,activeTexture:Mt,bindTexture:gt,unbindTexture:w,compressedTexImage2D:v,compressedTexImage3D:F,texImage2D:ye,texImage3D:ee,updateUBOMapping:be,uniformBlockBinding:ce,texStorage2D:se,texStorage3D:_e,texSubImage2D:q,texSubImage3D:J,compressedTexSubImage2D:G,compressedTexSubImage3D:Me,scissor:ue,viewport:Ie,reset:Oe}}function Tg(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Se,h=new WeakMap,f,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(w){}function m(w,v){return p?new OffscreenCanvas(w,v):bs("canvas")}function x(w,v,F){let q=1,J=gt(w);if((J.width>F||J.height>F)&&(q=F/Math.max(J.width,J.height)),q<1)if(typeof HTMLImageElement!="undefined"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&w instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&w instanceof ImageBitmap||typeof VideoFrame!="undefined"&&w instanceof VideoFrame){let G=Math.floor(q*J.width),Me=Math.floor(q*J.height);f===void 0&&(f=m(G,Me));let se=v?m(G,Me):f;return se.width=G,se.height=Me,se.getContext("2d").drawImage(w,0,0,G,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+G+"x"+Me+")."),se}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),w;return w}function g(w){return w.generateMipmaps}function u(w){i.generateMipmap(w)}function T(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(w,v,F,q,J=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let G=v;if(v===i.RED&&(F===i.FLOAT&&(G=i.R32F),F===i.HALF_FLOAT&&(G=i.R16F),F===i.UNSIGNED_BYTE&&(G=i.R8)),v===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(G=i.R8UI),F===i.UNSIGNED_SHORT&&(G=i.R16UI),F===i.UNSIGNED_INT&&(G=i.R32UI),F===i.BYTE&&(G=i.R8I),F===i.SHORT&&(G=i.R16I),F===i.INT&&(G=i.R32I)),v===i.RG&&(F===i.FLOAT&&(G=i.RG32F),F===i.HALF_FLOAT&&(G=i.RG16F),F===i.UNSIGNED_BYTE&&(G=i.RG8)),v===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(G=i.RG8UI),F===i.UNSIGNED_SHORT&&(G=i.RG16UI),F===i.UNSIGNED_INT&&(G=i.RG32UI),F===i.BYTE&&(G=i.RG8I),F===i.SHORT&&(G=i.RG16I),F===i.INT&&(G=i.RG32I)),v===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(G=i.RGB8UI),F===i.UNSIGNED_SHORT&&(G=i.RGB16UI),F===i.UNSIGNED_INT&&(G=i.RGB32UI),F===i.BYTE&&(G=i.RGB8I),F===i.SHORT&&(G=i.RGB16I),F===i.INT&&(G=i.RGB32I)),v===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(G=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(G=i.RGBA16UI),F===i.UNSIGNED_INT&&(G=i.RGBA32UI),F===i.BYTE&&(G=i.RGBA8I),F===i.SHORT&&(G=i.RGBA16I),F===i.INT&&(G=i.RGBA32I)),v===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(G=i.RGB9_E5),v===i.RGBA){let Me=J?_s:Ge.getTransfer(q);F===i.FLOAT&&(G=i.RGBA32F),F===i.HALF_FLOAT&&(G=i.RGBA16F),F===i.UNSIGNED_BYTE&&(G=Me===Ye?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(G=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(G=i.RGB5_A1)}return(G===i.R16F||G===i.R32F||G===i.RG16F||G===i.RG32F||G===i.RGBA16F||G===i.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function _(w,v){let F;return w?v===null||v===Yn||v===Ji?F=i.DEPTH24_STENCIL8:v===mn?F=i.DEPTH32F_STENCIL8:v===$i&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Yn||v===Ji?F=i.DEPTH_COMPONENT24:v===mn?F=i.DEPTH_COMPONENT32F:v===$i&&(F=i.DEPTH_COMPONENT16),F}function A(w,v){return g(w)===!0||w.isFramebufferTexture&&w.minFilter!==Zt&&w.minFilter!==Tt?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function E(w){let v=w.target;v.removeEventListener("dispose",E),I(v),v.isVideoTexture&&h.delete(v)}function R(w){let v=w.target;v.removeEventListener("dispose",R),M(v)}function I(w){let v=n.get(w);if(v.__webglInit===void 0)return;let F=w.source,q=d.get(F);if(q){let J=q[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&b(w),Object.keys(q).length===0&&d.delete(F)}n.remove(w)}function b(w){let v=n.get(w);i.deleteTexture(v.__webglTexture);let F=w.source,q=d.get(F);delete q[v.__cacheKey],a.memory.textures--}function M(w){let v=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(v.__webglFramebuffer[q]))for(let J=0;J<v.__webglFramebuffer[q].length;J++)i.deleteFramebuffer(v.__webglFramebuffer[q][J]);else i.deleteFramebuffer(v.__webglFramebuffer[q]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[q])}else{if(Array.isArray(v.__webglFramebuffer))for(let q=0;q<v.__webglFramebuffer.length;q++)i.deleteFramebuffer(v.__webglFramebuffer[q]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let q=0;q<v.__webglColorRenderbuffer.length;q++)v.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[q]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let F=w.textures;for(let q=0,J=F.length;q<J;q++){let G=n.get(F[q]);G.__webglTexture&&(i.deleteTexture(G.__webglTexture),a.memory.textures--),n.remove(F[q])}n.remove(w)}let C=0;function V(){C=0}function H(){let w=C;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),C+=1,w}function k(w){let v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function Z(w,v){let F=n.get(w);if(w.isVideoTexture&&He(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&F.__version!==w.version){let q=w.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(F,w,v);return}}else w.isExternalTexture&&(F.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+v)}function W(w,v){let F=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){oe(F,w,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+v)}function K(w,v){let F=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){oe(F,w,v);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+v)}function z(w,v){let F=n.get(w);if(w.version>0&&F.__version!==w.version){ie(F,w,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+v)}let ne={[Pr]:i.REPEAT,[On]:i.CLAMP_TO_EDGE,[Ir]:i.MIRRORED_REPEAT},ae={[Zt]:i.NEAREST,[Yc]:i.NEAREST_MIPMAP_NEAREST,[ks]:i.NEAREST_MIPMAP_LINEAR,[Tt]:i.LINEAR,[ma]:i.LINEAR_MIPMAP_NEAREST,[qn]:i.LINEAR_MIPMAP_LINEAR},ge={[Kc]:i.NEVER,[ih]:i.ALWAYS,[Qc]:i.LESS,[hl]:i.LEQUAL,[jc]:i.EQUAL,[nh]:i.GEQUAL,[eh]:i.GREATER,[th]:i.NOTEQUAL};function Fe(w,v){if(v.type===mn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Tt||v.magFilter===ma||v.magFilter===ks||v.magFilter===qn||v.minFilter===Tt||v.minFilter===ma||v.minFilter===ks||v.minFilter===qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,ne[v.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,ne[v.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,ne[v.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,ae[v.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,ae[v.minFilter]),v.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,ge[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Zt||v.minFilter!==ks&&v.minFilter!==qn||v.type===mn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function it(w,v){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",E));let q=v.source,J=d.get(q);J===void 0&&(J={},d.set(q,J));let G=k(v);if(G!==w.__cacheKey){J[G]===void 0&&(J[G]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),J[G].usedTimes++;let Me=J[w.__cacheKey];Me!==void 0&&(J[w.__cacheKey].usedTimes--,Me.usedTimes===0&&b(v)),w.__cacheKey=G,w.__webglTexture=J[G].texture}return F}function $e(w,v,F){return Math.floor(Math.floor(w/F)/v)}function X(w,v,F,q){let G=w.updateRanges;if(G.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,F,q,v.data);else{G.sort((ee,ue)=>ee.start-ue.start);let Me=0;for(let ee=1;ee<G.length;ee++){let ue=G[Me],Ie=G[ee],be=ue.start+ue.count,ce=$e(Ie.start,v.width,4),Oe=$e(ue.start,v.width,4);Ie.start<=be+1&&ce===Oe&&$e(Ie.start+Ie.count-1,v.width,4)===ce?ue.count=Math.max(ue.count,Ie.start+Ie.count-ue.start):(++Me,G[Me]=Ie)}G.length=Me+1;let se=i.getParameter(i.UNPACK_ROW_LENGTH),_e=i.getParameter(i.UNPACK_SKIP_PIXELS),ye=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let ee=0,ue=G.length;ee<ue;ee++){let Ie=G[ee],be=Math.floor(Ie.start/4),ce=Math.ceil(Ie.count/4),Oe=be%v.width,D=Math.floor(be/v.width),te=ce,re=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Oe),i.pixelStorei(i.UNPACK_SKIP_ROWS,D),t.texSubImage2D(i.TEXTURE_2D,0,Oe,D,te,re,F,q,v.data)}w.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,se),i.pixelStorei(i.UNPACK_SKIP_PIXELS,_e),i.pixelStorei(i.UNPACK_SKIP_ROWS,ye)}}function oe(w,v,F){let q=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(q=i.TEXTURE_3D);let J=it(w,v),G=v.source;t.bindTexture(q,w.__webglTexture,i.TEXTURE0+F);let Me=n.get(G);if(G.version!==Me.__version||J===!0){t.activeTexture(i.TEXTURE0+F);let se=Ge.getPrimaries(Ge.workingColorSpace),_e=v.colorSpace===Cn?null:Ge.getPrimaries(v.colorSpace),ye=v.colorSpace===Cn||se===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let ee=x(v.image,!1,s.maxTextureSize);ee=Mt(v,ee);let ue=r.convert(v.format,v.colorSpace),Ie=r.convert(v.type),be=S(v.internalFormat,ue,Ie,v.colorSpace,v.isVideoTexture);Fe(q,v);let ce,Oe=v.mipmaps,D=v.isVideoTexture!==!0,te=Me.__version===void 0||J===!0,re=G.dataReady,pe=A(v,ee);if(v.isDepthTexture)be=_(v.format===Ki,v.type),te&&(D?t.texStorage2D(i.TEXTURE_2D,1,be,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,be,ee.width,ee.height,0,ue,Ie,null));else if(v.isDataTexture)if(Oe.length>0){D&&te&&t.texStorage2D(i.TEXTURE_2D,pe,be,Oe[0].width,Oe[0].height);for(let Q=0,Y=Oe.length;Q<Y;Q++)ce=Oe[Q],D?re&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ce.width,ce.height,ue,Ie,ce.data):t.texImage2D(i.TEXTURE_2D,Q,be,ce.width,ce.height,0,ue,Ie,ce.data);v.generateMipmaps=!1}else D?(te&&t.texStorage2D(i.TEXTURE_2D,pe,be,ee.width,ee.height),re&&X(v,ee,ue,Ie)):t.texImage2D(i.TEXTURE_2D,0,be,ee.width,ee.height,0,ue,Ie,ee.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){D&&te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,be,Oe[0].width,Oe[0].height,ee.depth);for(let Q=0,Y=Oe.length;Q<Y;Q++)if(ce=Oe[Q],v.format!==Qt)if(ue!==null)if(D){if(re)if(v.layerUpdates.size>0){let ve=xl(ce.width,ce.height,v.format,v.type);for(let Ue of v.layerUpdates){let rt=ce.data.subarray(Ue*ve/ce.data.BYTES_PER_ELEMENT,(Ue+1)*ve/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,Ue,ce.width,ce.height,1,ue,rt)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ce.width,ce.height,ee.depth,ue,ce.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,be,ce.width,ce.height,ee.depth,0,ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?re&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ce.width,ce.height,ee.depth,ue,Ie,ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,be,ce.width,ce.height,ee.depth,0,ue,Ie,ce.data)}else{D&&te&&t.texStorage2D(i.TEXTURE_2D,pe,be,Oe[0].width,Oe[0].height);for(let Q=0,Y=Oe.length;Q<Y;Q++)ce=Oe[Q],v.format!==Qt?ue!==null?D?re&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,ce.width,ce.height,ue,ce.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,be,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?re&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ce.width,ce.height,ue,Ie,ce.data):t.texImage2D(i.TEXTURE_2D,Q,be,ce.width,ce.height,0,ue,Ie,ce.data)}else if(v.isDataArrayTexture)if(D){if(te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,be,ee.width,ee.height,ee.depth),re)if(v.layerUpdates.size>0){let Q=xl(ee.width,ee.height,v.format,v.type);for(let Y of v.layerUpdates){let ve=ee.data.subarray(Y*Q/ee.data.BYTES_PER_ELEMENT,(Y+1)*Q/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Y,ee.width,ee.height,1,ue,Ie,ve)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ue,Ie,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,be,ee.width,ee.height,ee.depth,0,ue,Ie,ee.data);else if(v.isData3DTexture)D?(te&&t.texStorage3D(i.TEXTURE_3D,pe,be,ee.width,ee.height,ee.depth),re&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ue,Ie,ee.data)):t.texImage3D(i.TEXTURE_3D,0,be,ee.width,ee.height,ee.depth,0,ue,Ie,ee.data);else if(v.isFramebufferTexture){if(te)if(D)t.texStorage2D(i.TEXTURE_2D,pe,be,ee.width,ee.height);else{let Q=ee.width,Y=ee.height;for(let ve=0;ve<pe;ve++)t.texImage2D(i.TEXTURE_2D,ve,be,Q,Y,0,ue,Ie,null),Q>>=1,Y>>=1}}else if(Oe.length>0){if(D&&te){let Q=gt(Oe[0]);t.texStorage2D(i.TEXTURE_2D,pe,be,Q.width,Q.height)}for(let Q=0,Y=Oe.length;Q<Y;Q++)ce=Oe[Q],D?re&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ue,Ie,ce):t.texImage2D(i.TEXTURE_2D,Q,be,ue,Ie,ce);v.generateMipmaps=!1}else if(D){if(te){let Q=gt(ee);t.texStorage2D(i.TEXTURE_2D,pe,be,Q.width,Q.height)}re&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,Ie,ee)}else t.texImage2D(i.TEXTURE_2D,0,be,ue,Ie,ee);g(v)&&u(q),Me.__version=G.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function ie(w,v,F){if(v.image.length!==6)return;let q=it(w,v),J=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+F);let G=n.get(J);if(J.version!==G.__version||q===!0){t.activeTexture(i.TEXTURE0+F);let Me=Ge.getPrimaries(Ge.workingColorSpace),se=v.colorSpace===Cn?null:Ge.getPrimaries(v.colorSpace),_e=v.colorSpace===Cn||Me===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let ye=v.isCompressedTexture||v.image[0].isCompressedTexture,ee=v.image[0]&&v.image[0].isDataTexture,ue=[];for(let Y=0;Y<6;Y++)!ye&&!ee?ue[Y]=x(v.image[Y],!0,s.maxCubemapSize):ue[Y]=ee?v.image[Y].image:v.image[Y],ue[Y]=Mt(v,ue[Y]);let Ie=ue[0],be=r.convert(v.format,v.colorSpace),ce=r.convert(v.type),Oe=S(v.internalFormat,be,ce,v.colorSpace),D=v.isVideoTexture!==!0,te=G.__version===void 0||q===!0,re=J.dataReady,pe=A(v,Ie);Fe(i.TEXTURE_CUBE_MAP,v);let Q;if(ye){D&&te&&t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,Oe,Ie.width,Ie.height);for(let Y=0;Y<6;Y++){Q=ue[Y].mipmaps;for(let ve=0;ve<Q.length;ve++){let Ue=Q[ve];v.format!==Qt?be!==null?D?re&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ve,0,0,Ue.width,Ue.height,be,Ue.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ve,Oe,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ve,0,0,Ue.width,Ue.height,be,ce,Ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ve,Oe,Ue.width,Ue.height,0,be,ce,Ue.data)}}}else{if(Q=v.mipmaps,D&&te){Q.length>0&&pe++;let Y=gt(ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,Oe,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(ee){D?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,ue[Y].width,ue[Y].height,be,ce,ue[Y].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Oe,ue[Y].width,ue[Y].height,0,be,ce,ue[Y].data);for(let ve=0;ve<Q.length;ve++){let rt=Q[ve].image[Y].image;D?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ve+1,0,0,rt.width,rt.height,be,ce,rt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ve+1,Oe,rt.width,rt.height,0,be,ce,rt.data)}}else{D?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,be,ce,ue[Y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Oe,be,ce,ue[Y]);for(let ve=0;ve<Q.length;ve++){let Ue=Q[ve];D?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ve+1,0,0,be,ce,Ue.image[Y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ve+1,Oe,be,ce,Ue.image[Y])}}}g(v)&&u(i.TEXTURE_CUBE_MAP),G.__version=J.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function we(w,v,F,q,J,G){let Me=r.convert(F.format,F.colorSpace),se=r.convert(F.type),_e=S(F.internalFormat,Me,se,F.colorSpace),ye=n.get(v),ee=n.get(F);if(ee.__renderTarget=v,!ye.__hasExternalTextures){let ue=Math.max(1,v.width>>G),Ie=Math.max(1,v.height>>G);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,G,_e,ue,Ie,v.depth,0,Me,se,null):t.texImage2D(J,G,_e,ue,Ie,0,Me,se,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),me(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,J,ee.__webglTexture,0,ct(v)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,J,ee.__webglTexture,G),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(w,v,F){if(i.bindRenderbuffer(i.RENDERBUFFER,w),v.depthBuffer){let q=v.depthTexture,J=q&&q.isDepthTexture?q.type:null,G=_(v.stencilBuffer,J),Me=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=ct(v);me(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se,G,v.width,v.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,se,G,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,G,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Me,i.RENDERBUFFER,w)}else{let q=v.textures;for(let J=0;J<q.length;J++){let G=q[J],Me=r.convert(G.format,G.colorSpace),se=r.convert(G.type),_e=S(G.internalFormat,Me,se,G.colorSpace),ye=ct(v);F&&me(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,_e,v.width,v.height):me(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye,_e,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,_e,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ne(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let q=n.get(v.depthTexture);q.__renderTarget=v,(!q.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z(v.depthTexture,0);let J=q.__webglTexture,G=ct(v);if(v.depthTexture.format===Hi)me(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(v.depthTexture.format===Ki)me(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function mt(w){let v=n.get(w),F=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){let q=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),q){let J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,q.removeEventListener("dispose",J)};q.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=q}if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");let q=w.texture.mipmaps;q&&q.length>0?Ne(v.__webglFramebuffer[0],w):Ne(v.__webglFramebuffer,w)}else if(F){v.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[q]),v.__webglDepthbuffer[q]===void 0)v.__webglDepthbuffer[q]=i.createRenderbuffer(),Ae(v.__webglDepthbuffer[q],w,!1);else{let J=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=v.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,G)}}else{let q=w.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Ae(v.__webglDepthbuffer,w,!1);else{let J=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,G)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function We(w,v,F){let q=n.get(w);v!==void 0&&we(q.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&mt(w)}function P(w){let v=w.texture,F=n.get(w),q=n.get(v);w.addEventListener("dispose",R);let J=w.textures,G=w.isWebGLCubeRenderTarget===!0,Me=J.length>1;if(Me||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=v.version,a.memory.textures++),G){F.__webglFramebuffer=[];for(let se=0;se<6;se++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[se]=[];for(let _e=0;_e<v.mipmaps.length;_e++)F.__webglFramebuffer[se][_e]=i.createFramebuffer()}else F.__webglFramebuffer[se]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let se=0;se<v.mipmaps.length;se++)F.__webglFramebuffer[se]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(Me)for(let se=0,_e=J.length;se<_e;se++){let ye=n.get(J[se]);ye.__webglTexture===void 0&&(ye.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&me(w)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let se=0;se<J.length;se++){let _e=J[se];F.__webglColorRenderbuffer[se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[se]);let ye=r.convert(_e.format,_e.colorSpace),ee=r.convert(_e.type),ue=S(_e.internalFormat,ye,ee,_e.colorSpace,w.isXRRenderTarget===!0),Ie=ct(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,ue,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,F.__webglColorRenderbuffer[se])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Ae(F.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(G){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Fe(i.TEXTURE_CUBE_MAP,v);for(let se=0;se<6;se++)if(v.mipmaps&&v.mipmaps.length>0)for(let _e=0;_e<v.mipmaps.length;_e++)we(F.__webglFramebuffer[se][_e],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,_e);else we(F.__webglFramebuffer[se],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);g(v)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let se=0,_e=J.length;se<_e;se++){let ye=J[se],ee=n.get(ye),ue=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ue=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,ee.__webglTexture),Fe(ue,ye),we(F.__webglFramebuffer,w,ye,i.COLOR_ATTACHMENT0+se,ue,0),g(ye)&&u(ue)}t.unbindTexture()}else{let se=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(se=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,q.__webglTexture),Fe(se,v),v.mipmaps&&v.mipmaps.length>0)for(let _e=0;_e<v.mipmaps.length;_e++)we(F.__webglFramebuffer[_e],w,v,i.COLOR_ATTACHMENT0,se,_e);else we(F.__webglFramebuffer,w,v,i.COLOR_ATTACHMENT0,se,0);g(v)&&u(se),t.unbindTexture()}w.depthBuffer&&mt(w)}function st(w){let v=w.textures;for(let F=0,q=v.length;F<q;F++){let J=v[F];if(g(J)){let G=T(w),Me=n.get(J).__webglTexture;t.bindTexture(G,Me),u(G),t.unbindTexture()}}}let Ce=[],qe=[];function Ee(w){if(w.samples>0){if(me(w)===!1){let v=w.textures,F=w.width,q=w.height,J=i.COLOR_BUFFER_BIT,G=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=n.get(w),se=v.length>1;if(se)for(let ye=0;ye<v.length;ye++)t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);let _e=w.texture.mipmaps;_e&&_e.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ye=0;ye<v.length;ye++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Me.__webglColorRenderbuffer[ye]);let ee=n.get(v[ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ee,0)}i.blitFramebuffer(0,0,F,q,0,0,F,q,J,i.NEAREST),l===!0&&(Ce.length=0,qe.length=0,Ce.push(i.COLOR_ATTACHMENT0+ye),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Ce.push(G),qe.push(G),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,qe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ce))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),se)for(let ye=0;ye<v.length;ye++){t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,Me.__webglColorRenderbuffer[ye]);let ee=n.get(v[ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,ee,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let v=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function ct(w){return Math.min(s.maxSamples,w.samples)}function me(w){let v=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function He(w){let v=a.render.frame;h.get(w)!==v&&(h.set(w,v),w.update())}function Mt(w,v){let F=w.colorSpace,q=w.format,J=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||F!==ri&&F!==Cn&&(Ge.getTransfer(F)===Ye?(q!==Qt||J!==cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),v}function gt(w){return typeof HTMLImageElement!="undefined"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame!="undefined"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=V,this.setTexture2D=Z,this.setTexture2DArray=W,this.setTexture3D=K,this.setTextureCube=z,this.rebindTextures=We,this.setupRenderTarget=P,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=we,this.useMultisampledRTT=me}function wg(i,e){function t(n,s=Cn){let r,a=Ge.getTransfer(s);if(n===cn)return i.UNSIGNED_BYTE;if(n===xa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===va)return i.UNSIGNED_SHORT_5_5_5_1;if(n===il)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===tl)return i.BYTE;if(n===nl)return i.SHORT;if(n===$i)return i.UNSIGNED_SHORT;if(n===ga)return i.INT;if(n===Yn)return i.UNSIGNED_INT;if(n===mn)return i.FLOAT;if(n===Kt)return i.HALF_FLOAT;if(n===sl)return i.ALPHA;if(n===rl)return i.RGB;if(n===Qt)return i.RGBA;if(n===Hi)return i.DEPTH_COMPONENT;if(n===Ki)return i.DEPTH_STENCIL;if(n===al)return i.RED;if(n===_a)return i.RED_INTEGER;if(n===ol)return i.RG;if(n===ya)return i.RG_INTEGER;if(n===ba)return i.RGBA_INTEGER;if(n===Vs||n===Gs||n===Ws||n===Xs)if(a===Ye)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Vs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Gs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Vs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Gs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ws)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ma||n===Sa||n===Ea||n===Ta)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ma)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ea)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ta)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wa||n===Aa||n===Ca)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===wa||n===Aa)return a===Ye?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ca)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ra||n===Pa||n===Ia||n===La||n===Da||n===Na||n===Ua||n===Fa||n===Ba||n===Oa||n===za||n===Ha||n===ka||n===Va)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ra)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Pa)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ia)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===La)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Da)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Na)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ua)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fa)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ba)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Oa)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===za)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ha)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ka)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Va)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===qs||n===Ga||n===Wa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===qs)return a===Ye?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ga)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ll||n===Xa||n===qa||n===Ya)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===qs)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Xa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ya)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ji?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Qa=class extends Bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}},Ag=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Pl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Qa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new nt({vertexShader:Ag,fragmentShader:Cg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vt(new Ls(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Il=class extends wn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,d=null,p=null,m=null,x=new Pl,g={},u=t.getContextAttributes(),T=null,S=null,_=[],A=[],E=new Se,R=null,I=new Rt;I.viewport=new dt;let b=new Rt;b.viewport=new dt;let M=[I,b],C=new jr,V=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let oe=_[X];return oe===void 0&&(oe=new Xi,_[X]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(X){let oe=_[X];return oe===void 0&&(oe=new Xi,_[X]=oe),oe.getGripSpace()},this.getHand=function(X){let oe=_[X];return oe===void 0&&(oe=new Xi,_[X]=oe),oe.getHandSpace()};function k(X){let oe=A.indexOf(X.inputSource);if(oe===-1)return;let ie=_[oe];ie!==void 0&&(ie.update(X.inputSource,X.frame,c||a),ie.dispatchEvent({type:X.type,data:X.inputSource}))}function Z(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",W);for(let X=0;X<_.length;X++){let oe=A[X];oe!==null&&(A[X]=null,_[X].disconnect(oe))}V=null,H=null,x.reset();for(let X in g)delete g[X];e.setRenderTarget(T),p=null,d=null,f=null,s=null,S=null,$e.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",W),u.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(E),typeof XRWebGLBinding!="undefined"&&(f=new XRWebGLBinding(s,t)),f!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,we=null,Ae=null;u.depth&&(Ae=u.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=u.stencil?Ki:Hi,we=u.stencil?Ji:Yn);let Ne={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:r};d=f.createProjectionLayer(Ne),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new It(d.textureWidth,d.textureHeight,{format:Qt,type:cn,depthTexture:new Is(d.textureWidth,d.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:u.stencil,colorSpace:e.outputColorSpace,samples:u.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let ie={antialias:u.antialias,alpha:!0,depth:u.depth,stencil:u.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ie),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new It(p.framebufferWidth,p.framebufferHeight,{format:Qt,type:cn,colorSpace:e.outputColorSpace,stencilBuffer:u.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),$e.setContext(s),$e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function W(X){for(let oe=0;oe<X.removed.length;oe++){let ie=X.removed[oe],we=A.indexOf(ie);we>=0&&(A[we]=null,_[we].disconnect(ie))}for(let oe=0;oe<X.added.length;oe++){let ie=X.added[oe],we=A.indexOf(ie);if(we===-1){for(let Ne=0;Ne<_.length;Ne++)if(Ne>=A.length){A.push(ie),we=Ne;break}else if(A[Ne]===null){A[Ne]=ie,we=Ne;break}if(we===-1)break}let Ae=_[we];Ae&&Ae.connect(ie)}}let K=new L,z=new L;function ne(X,oe,ie){K.setFromMatrixPosition(oe.matrixWorld),z.setFromMatrixPosition(ie.matrixWorld);let we=K.distanceTo(z),Ae=oe.projectionMatrix.elements,Ne=ie.projectionMatrix.elements,mt=Ae[14]/(Ae[10]-1),We=Ae[14]/(Ae[10]+1),P=(Ae[9]+1)/Ae[5],st=(Ae[9]-1)/Ae[5],Ce=(Ae[8]-1)/Ae[0],qe=(Ne[8]+1)/Ne[0],Ee=mt*Ce,ct=mt*qe,me=we/(-Ce+qe),He=me*-Ce;if(oe.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(He),X.translateZ(me),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Ae[10]===-1)X.projectionMatrix.copy(oe.projectionMatrix),X.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{let Mt=mt+me,gt=We+me,w=Ee-He,v=ct+(we-He),F=P*We/gt*Mt,q=st*We/gt*Mt;X.projectionMatrix.makePerspective(w,v,F,q,Mt,gt),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function ae(X,oe){oe===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(oe.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let oe=X.near,ie=X.far;x.texture!==null&&(x.depthNear>0&&(oe=x.depthNear),x.depthFar>0&&(ie=x.depthFar)),C.near=b.near=I.near=oe,C.far=b.far=I.far=ie,(V!==C.near||H!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),V=C.near,H=C.far),C.layers.mask=X.layers.mask|6,I.layers.mask=C.layers.mask&3,b.layers.mask=C.layers.mask&5;let we=X.parent,Ae=C.cameras;ae(C,we);for(let Ne=0;Ne<Ae.length;Ne++)ae(Ae[Ne],we);Ae.length===2?ne(C,I,b):C.projectionMatrix.copy(I.projectionMatrix),ge(X,C,we)};function ge(X,oe,ie){ie===null?X.matrix.copy(oe.matrixWorld):(X.matrix.copy(ie.matrixWorld),X.matrix.invert(),X.matrix.multiply(oe.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(oe.projectionMatrix),X.projectionMatrixInverse.copy(oe.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=ki*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(C)},this.getCameraTexture=function(X){return g[X]};let Fe=null;function it(X,oe){if(h=oe.getViewerPose(c||a),m=oe,h!==null){let ie=h.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let we=!1;ie.length!==C.cameras.length&&(C.cameras.length=0,we=!0);for(let We=0;We<ie.length;We++){let P=ie[We],st=null;if(p!==null)st=p.getViewport(P);else{let qe=f.getViewSubImage(d,P);st=qe.viewport,We===0&&(e.setRenderTargetTextures(S,qe.colorTexture,qe.depthStencilTexture),e.setRenderTarget(S))}let Ce=M[We];Ce===void 0&&(Ce=new Rt,Ce.layers.enable(We),Ce.viewport=new dt,M[We]=Ce),Ce.matrix.fromArray(P.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(P.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(st.x,st.y,st.width,st.height),We===0&&(C.matrix.copy(Ce.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),we===!0&&C.cameras.push(Ce)}let Ae=s.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&f){let We=f.getDepthInformation(ie[0]);We&&We.isValid&&We.texture&&x.init(We,s.renderState)}if(Ae&&Ae.includes("camera-access")&&(e.state.unbindTexture(),f))for(let We=0;We<ie.length;We++){let P=ie[We].camera;if(P){let st=g[P];st||(st=new Qa,g[P]=st);let Ce=f.getCameraImage(P);st.sourceTexture=Ce}}}for(let ie=0;ie<_.length;ie++){let we=A[ie],Ae=_[ie];we!==null&&Ae!==void 0&&Ae.update(we,oe,c||a)}Fe&&Fe(X,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),m=null}let $e=new Lh;$e.setAnimationLoop(it),this.setAnimationLoop=function(X){Fe=X},this.dispose=function(){}}},xi=new rn,Rg=new et;function Pg(i,e){function t(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function n(g,u){u.color.getRGB(g.fogColor.value,pl(i)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function s(g,u,T,S,_){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(g,u):u.isMeshToonMaterial?(r(g,u),f(g,u)):u.isMeshPhongMaterial?(r(g,u),h(g,u)):u.isMeshStandardMaterial?(r(g,u),d(g,u),u.isMeshPhysicalMaterial&&p(g,u,_)):u.isMeshMatcapMaterial?(r(g,u),m(g,u)):u.isMeshDepthMaterial?r(g,u):u.isMeshDistanceMaterial?(r(g,u),x(g,u)):u.isMeshNormalMaterial?r(g,u):u.isLineBasicMaterial?(a(g,u),u.isLineDashedMaterial&&o(g,u)):u.isPointsMaterial?l(g,u,T,S):u.isSpriteMaterial?c(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,t(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,t(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,t(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===wt&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,t(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===wt&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,t(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,t(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);let T=e.get(u),S=T.envMap,_=T.envMapRotation;S&&(g.envMap.value=S,xi.copy(_),xi.x*=-1,xi.y*=-1,xi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),g.envMapRotation.value.setFromMatrix4(Rg.makeRotationFromEuler(xi)),g.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap&&(g.lightMap.value=u.lightMap,g.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,g.lightMapTransform)),u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,g.aoMapTransform))}function a(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,t(u.map,g.mapTransform))}function o(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function l(g,u,T,S){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*T,g.scale.value=S*.5,u.map&&(g.map.value=u.map,t(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,t(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function c(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,t(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,t(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function h(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function f(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function d(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,g.roughnessMapTransform)),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function p(g,u,T){g.ior.value=u.ior,u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===wt&&g.clearcoatNormalScale.value.negate())),u.dispersion>0&&(g.dispersion.value=u.dispersion),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=T.texture,g.transmissionSamplerSize.value.set(T.width,T.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,u){u.matcap&&(g.matcap.value=u.matcap)}function x(g,u){let T=e.get(u).light;g.referencePosition.value.setFromMatrixPosition(T.matrixWorld),g.nearDistance.value=T.shadow.camera.near,g.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ig(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,S){let _=S.program;n.uniformBlockBinding(T,_)}function c(T,S){let _=s[T.id];_===void 0&&(m(T),_=h(T),s[T.id]=_,T.addEventListener("dispose",g));let A=S.program;n.updateUBOMapping(T,A);let E=e.render.frame;r[T.id]!==E&&(d(T),r[T.id]=E)}function h(T){let S=f();T.__bindingPointIndex=S;let _=i.createBuffer(),A=T.__size,E=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,A,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,_),_}function f(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){let S=s[T.id],_=T.uniforms,A=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let E=0,R=_.length;E<R;E++){let I=Array.isArray(_[E])?_[E]:[_[E]];for(let b=0,M=I.length;b<M;b++){let C=I[b];if(p(C,E,b,A)===!0){let V=C.__offset,H=Array.isArray(C.value)?C.value:[C.value],k=0;for(let Z=0;Z<H.length;Z++){let W=H[Z],K=x(W);typeof W=="number"||typeof W=="boolean"?(C.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,V+k,C.__data)):W.isMatrix3?(C.__data[0]=W.elements[0],C.__data[1]=W.elements[1],C.__data[2]=W.elements[2],C.__data[3]=0,C.__data[4]=W.elements[3],C.__data[5]=W.elements[4],C.__data[6]=W.elements[5],C.__data[7]=0,C.__data[8]=W.elements[6],C.__data[9]=W.elements[7],C.__data[10]=W.elements[8],C.__data[11]=0):(W.toArray(C.__data,k),k+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(T,S,_,A){let E=T.value,R=S+"_"+_;if(A[R]===void 0)return typeof E=="number"||typeof E=="boolean"?A[R]=E:A[R]=E.clone(),!0;{let I=A[R];if(typeof E=="number"||typeof E=="boolean"){if(I!==E)return A[R]=E,!0}else if(I.equals(E)===!1)return I.copy(E),!0}return!1}function m(T){let S=T.uniforms,_=0,A=16;for(let R=0,I=S.length;R<I;R++){let b=Array.isArray(S[R])?S[R]:[S[R]];for(let M=0,C=b.length;M<C;M++){let V=b[M],H=Array.isArray(V.value)?V.value:[V.value];for(let k=0,Z=H.length;k<Z;k++){let W=H[k],K=x(W),z=_%A,ne=z%K.boundary,ae=z+ne;_+=ne,ae!==0&&A-ae<K.storage&&(_+=A-ae),V.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=_,_+=K.storage}}}let E=_%A;return E>0&&(_+=A-E),T.__size=_,T.__cache={},this}function x(T){let S={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(S.boundary=4,S.storage=4):T.isVector2?(S.boundary=8,S.storage=8):T.isVector3||T.isColor?(S.boundary=16,S.storage=12):T.isVector4?(S.boundary=16,S.storage=16):T.isMatrix3?(S.boundary=48,S.storage=48):T.isMatrix4?(S.boundary=64,S.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),S}function g(T){let S=T.target;S.removeEventListener("dispose",g);let _=a.indexOf(S.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function u(){for(let T in s)i.deleteBuffer(s[T]);a=[],s={},r={}}return{bind:l,update:c,dispose:u}}var ja=class{constructor(e={}){let{canvas:t=sh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let m=new Uint32Array(4),x=new Int32Array(4),g=null,u=null,T=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=An,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let _=this,A=!1;this._outputColorSpace=Et;let E=0,R=0,I=null,b=-1,M=null,C=new dt,V=new dt,H=null,k=new de(0),Z=0,W=t.width,K=t.height,z=1,ne=null,ae=null,ge=new dt(0,0,W,K),Fe=new dt(0,0,W,K),it=!1,$e=new Yi,X=!1,oe=!1,ie=new et,we=new L,Ae=new dt,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},mt=!1;function We(){return I===null?z:1}let P=n;function st(y,N){return t.getContext(y,N)}try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"179"}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",Q,!1),P===null){let N="webgl2";if(P=st(N,y),P===null)throw st(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Ce,qe,Ee,ct,me,He,Mt,gt,w,v,F,q,J,G,Me,se,_e,ye,ee,ue,Ie,be,ce,Oe;function D(){Ce=new $p(P),Ce.init(),be=new wg(P,Ce),qe=new Vp(P,Ce,e,be),Ee=new Eg(P,Ce),qe.reversedDepthBuffer&&d&&Ee.buffers.depth.setReversed(!0),ct=new Qp(P),me=new ug,He=new Tg(P,Ce,Ee,me,qe,be,ct),Mt=new Wp(_),gt=new Zp(_),w=new id(P),ce=new Hp(P,w),v=new Jp(P,w,ct,ce),F=new em(P,v,w,ct),ee=new jp(P,qe,He),se=new Gp(me),q=new hg(_,Mt,gt,Ce,qe,ce,se),J=new Pg(_,me),G=new fg,Me=new _g(Ce),ye=new zp(_,Mt,gt,Ee,F,p,l),_e=new Mg(_,F,qe),Oe=new Ig(P,ct,qe,Ee),ue=new kp(P,Ce,ct),Ie=new Kp(P,Ce,ct),ct.programs=q.programs,_.capabilities=qe,_.extensions=Ce,_.properties=me,_.renderLists=G,_.shadowMap=_e,_.state=Ee,_.info=ct}D();let te=new Il(_,P);this.xr=te,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let y=Ce.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=Ce.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(y){y!==void 0&&(z=y,this.setSize(W,K,!1))},this.getSize=function(y){return y.set(W,K)},this.setSize=function(y,N,B=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=y,K=N,t.width=Math.floor(y*z),t.height=Math.floor(N*z),B===!0&&(t.style.width=y+"px",t.style.height=N+"px"),this.setViewport(0,0,y,N)},this.getDrawingBufferSize=function(y){return y.set(W*z,K*z).floor()},this.setDrawingBufferSize=function(y,N,B){W=y,K=N,z=B,t.width=Math.floor(y*B),t.height=Math.floor(N*B),this.setViewport(0,0,y,N)},this.getCurrentViewport=function(y){return y.copy(C)},this.getViewport=function(y){return y.copy(ge)},this.setViewport=function(y,N,B,O){y.isVector4?ge.set(y.x,y.y,y.z,y.w):ge.set(y,N,B,O),Ee.viewport(C.copy(ge).multiplyScalar(z).round())},this.getScissor=function(y){return y.copy(Fe)},this.setScissor=function(y,N,B,O){y.isVector4?Fe.set(y.x,y.y,y.z,y.w):Fe.set(y,N,B,O),Ee.scissor(V.copy(Fe).multiplyScalar(z).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(y){Ee.setScissorTest(it=y)},this.setOpaqueSort=function(y){ne=y},this.setTransparentSort=function(y){ae=y},this.getClearColor=function(y){return y.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor(...arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha(...arguments)},this.clear=function(y=!0,N=!0,B=!0){let O=0;if(y){let U=!1;if(I!==null){let j=I.texture.format;U=j===ba||j===ya||j===_a}if(U){let j=I.texture.type,he=j===cn||j===Yn||j===$i||j===Ji||j===xa||j===va,xe=ye.getClearColor(),fe=ye.getClearAlpha(),Pe=xe.r,Le=xe.g,Te=xe.b;he?(m[0]=Pe,m[1]=Le,m[2]=Te,m[3]=fe,P.clearBufferuiv(P.COLOR,0,m)):(x[0]=Pe,x[1]=Le,x[2]=Te,x[3]=fe,P.clearBufferiv(P.COLOR,0,x))}else O|=P.COLOR_BUFFER_BIT}N&&(O|=P.DEPTH_BUFFER_BIT),B&&(O|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",Q,!1),ye.dispose(),G.dispose(),Me.dispose(),me.dispose(),Mt.dispose(),gt.dispose(),F.dispose(),ce.dispose(),Oe.dispose(),q.dispose(),te.dispose(),te.removeEventListener("sessionstart",hn),te.removeEventListener("sessionend",kl),Jn.stop()};function re(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let y=ct.autoReset,N=_e.enabled,B=_e.autoUpdate,O=_e.needsUpdate,U=_e.type;D(),ct.autoReset=y,_e.enabled=N,_e.autoUpdate=B,_e.needsUpdate=O,_e.type=U}function Q(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Y(y){let N=y.target;N.removeEventListener("dispose",Y),ve(N)}function ve(y){Ue(y),me.remove(y)}function Ue(y){let N=me.get(y).programs;N!==void 0&&(N.forEach(function(B){q.releaseProgram(B)}),y.isShaderMaterial&&q.releaseShaderCache(y))}this.renderBufferDirect=function(y,N,B,O,U,j){N===null&&(N=Ne);let he=U.isMesh&&U.matrixWorld.determinant()<0,xe=$h(y,N,B,O,U);Ee.setMaterial(O,he);let fe=B.index,Pe=1;if(O.wireframe===!0){if(fe=v.getWireframeAttribute(B),fe===void 0)return;Pe=2}let Le=B.drawRange,Te=B.attributes.position,ke=Le.start*Pe,je=(Le.start+Le.count)*Pe;j!==null&&(ke=Math.max(ke,j.start*Pe),je=Math.min(je,(j.start+j.count)*Pe)),fe!==null?(ke=Math.max(ke,0),je=Math.min(je,fe.count)):Te!=null&&(ke=Math.max(ke,0),je=Math.min(je,Te.count));let pt=je-ke;if(pt<0||pt===1/0)return;ce.setup(U,O,xe,B,fe);let at,tt=ue;if(fe!==null&&(at=w.get(fe),tt=Ie,tt.setIndex(at)),U.isMesh)O.wireframe===!0?(Ee.setLineWidth(O.wireframeLinewidth*We()),tt.setMode(P.LINES)):tt.setMode(P.TRIANGLES);else if(U.isLine){let Re=O.linewidth;Re===void 0&&(Re=1),Ee.setLineWidth(Re*We()),U.isLineSegments?tt.setMode(P.LINES):U.isLineLoop?tt.setMode(P.LINE_LOOP):tt.setMode(P.LINE_STRIP)}else U.isPoints?tt.setMode(P.POINTS):U.isSprite&&tt.setMode(P.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)ai("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),tt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ce.get("WEBGL_multi_draw"))tt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let Re=U._multiDrawStarts,ht=U._multiDrawCounts,Xe=U._multiDrawCount,Ot=fe?w.get(fe).bytesPerElement:1,Mi=me.get(O).currentProgram.getUniforms();for(let zt=0;zt<Xe;zt++)Mi.setValue(P,"_gl_DrawID",zt),tt.render(Re[zt]/Ot,ht[zt])}else if(U.isInstancedMesh)tt.renderInstances(ke,pt,U.count);else if(B.isInstancedBufferGeometry){let Re=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,ht=Math.min(B.instanceCount,Re);tt.renderInstances(ke,pt,ht)}else tt.render(ke,pt)};function rt(y,N,B){y.transparent===!0&&y.side===pn&&y.forceSinglePass===!1?(y.side=wt,y.needsUpdate=!0,er(y,N,B),y.side=Ft,y.needsUpdate=!0,er(y,N,B),y.side=pn):er(y,N,B)}this.compile=function(y,N,B=null){B===null&&(B=y),u=Me.get(B),u.init(N),S.push(u),B.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),y!==B&&y.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),u.setupLights();let O=new Set;return y.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let j=U.material;if(j)if(Array.isArray(j))for(let he=0;he<j.length;he++){let xe=j[he];rt(xe,B,U),O.add(xe)}else rt(j,B,U),O.add(j)}),u=S.pop(),O},this.compileAsync=function(y,N,B=null){let O=this.compile(y,N,B);return new Promise(U=>{function j(){if(O.forEach(function(he){me.get(he).currentProgram.isReady()&&O.delete(he)}),O.size===0){U(y);return}setTimeout(j,10)}Ce.get("KHR_parallel_shader_compile")!==null?j():setTimeout(j,10)})};let Je=null;function xn(y){Je&&Je(y)}function hn(){Jn.stop()}function kl(){Jn.start()}let Jn=new Lh;Jn.setAnimationLoop(xn),typeof self!="undefined"&&Jn.setContext(self),this.setAnimationLoop=function(y){Je=y,te.setAnimationLoop(y),y===null?Jn.stop():Jn.start()},te.addEventListener("sessionstart",hn),te.addEventListener("sessionend",kl),this.render=function(y,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(N),N=te.getCamera()),y.isScene===!0&&y.onBeforeRender(_,y,N,I),u=Me.get(y,S.length),u.init(N),S.push(u),ie.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),$e.setFromProjectionMatrix(ie,sn,N.reversedDepth),oe=this.localClippingEnabled,X=se.init(this.clippingPlanes,oe),g=G.get(y,T.length),g.init(),T.push(g),te.enabled===!0&&te.isPresenting===!0){let j=_.xr.getDepthSensingMesh();j!==null&&po(j,N,-1/0,_.sortObjects)}po(y,N,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(ne,ae),mt=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,mt&&ye.addToRenderList(g,y),this.info.render.frame++,X===!0&&se.beginShadows();let B=u.state.shadowsArray;_e.render(B,y,N),X===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();let O=g.opaque,U=g.transmissive;if(u.setupLights(),N.isArrayCamera){let j=N.cameras;if(U.length>0)for(let he=0,xe=j.length;he<xe;he++){let fe=j[he];Gl(O,U,y,fe)}mt&&ye.render(y);for(let he=0,xe=j.length;he<xe;he++){let fe=j[he];Vl(g,y,fe,fe.viewport)}}else U.length>0&&Gl(O,U,y,N),mt&&ye.render(y),Vl(g,y,N);I!==null&&R===0&&(He.updateMultisampleRenderTarget(I),He.updateRenderTargetMipmap(I)),y.isScene===!0&&y.onAfterRender(_,y,N),ce.resetDefaultState(),b=-1,M=null,S.pop(),S.length>0?(u=S[S.length-1],X===!0&&se.setGlobalState(_.clippingPlanes,u.state.camera)):u=null,T.pop(),T.length>0?g=T[T.length-1]:g=null};function po(y,N,B,O){if(y.visible===!1)return;if(y.layers.test(N.layers)){if(y.isGroup)B=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(N);else if(y.isLight)u.pushLight(y),y.castShadow&&u.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||$e.intersectsSprite(y)){O&&Ae.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ie);let he=F.update(y),xe=y.material;xe.visible&&g.push(y,he,xe,B,Ae.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||$e.intersectsObject(y))){let he=F.update(y),xe=y.material;if(O&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ae.copy(y.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Ae.copy(he.boundingSphere.center)),Ae.applyMatrix4(y.matrixWorld).applyMatrix4(ie)),Array.isArray(xe)){let fe=he.groups;for(let Pe=0,Le=fe.length;Pe<Le;Pe++){let Te=fe[Pe],ke=xe[Te.materialIndex];ke&&ke.visible&&g.push(y,he,ke,B,Ae.z,Te)}}else xe.visible&&g.push(y,he,xe,B,Ae.z,null)}}let j=y.children;for(let he=0,xe=j.length;he<xe;he++)po(j[he],N,B,O)}function Vl(y,N,B,O){let U=y.opaque,j=y.transmissive,he=y.transparent;u.setupLightsView(B),X===!0&&se.setGlobalState(_.clippingPlanes,B),O&&Ee.viewport(C.copy(O)),U.length>0&&js(U,N,B),j.length>0&&js(j,N,B),he.length>0&&js(he,N,B),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Gl(y,N,B,O){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[O.id]===void 0&&(u.state.transmissionRenderTarget[O.id]=new It(1,1,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")||Ce.has("EXT_color_buffer_float")?Kt:cn,minFilter:qn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ge.workingColorSpace}));let j=u.state.transmissionRenderTarget[O.id],he=O.viewport||C;j.setSize(he.z*_.transmissionResolutionScale,he.w*_.transmissionResolutionScale);let xe=_.getRenderTarget(),fe=_.getActiveCubeFace(),Pe=_.getActiveMipmapLevel();_.setRenderTarget(j),_.getClearColor(k),Z=_.getClearAlpha(),Z<1&&_.setClearColor(16777215,.5),_.clear(),mt&&ye.render(B);let Le=_.toneMapping;_.toneMapping=An;let Te=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),u.setupLightsView(O),X===!0&&se.setGlobalState(_.clippingPlanes,O),js(y,B,O),He.updateMultisampleRenderTarget(j),He.updateRenderTargetMipmap(j),Ce.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let je=0,pt=N.length;je<pt;je++){let at=N[je],tt=at.object,Re=at.geometry,ht=at.material,Xe=at.group;if(ht.side===pn&&tt.layers.test(O.layers)){let Ot=ht.side;ht.side=wt,ht.needsUpdate=!0,Wl(tt,B,O,Re,ht,Xe),ht.side=Ot,ht.needsUpdate=!0,ke=!0}}ke===!0&&(He.updateMultisampleRenderTarget(j),He.updateRenderTargetMipmap(j))}_.setRenderTarget(xe,fe,Pe),_.setClearColor(k,Z),Te!==void 0&&(O.viewport=Te),_.toneMapping=Le}function js(y,N,B){let O=N.isScene===!0?N.overrideMaterial:null;for(let U=0,j=y.length;U<j;U++){let he=y[U],xe=he.object,fe=he.geometry,Pe=he.group,Le=he.material;Le.allowOverride===!0&&O!==null&&(Le=O),xe.layers.test(B.layers)&&Wl(xe,N,B,fe,Le,Pe)}}function Wl(y,N,B,O,U,j){y.onBeforeRender(_,N,B,O,U,j),y.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),U.onBeforeRender(_,N,B,O,y,j),U.transparent===!0&&U.side===pn&&U.forceSinglePass===!1?(U.side=wt,U.needsUpdate=!0,_.renderBufferDirect(B,N,O,U,y,j),U.side=Ft,U.needsUpdate=!0,_.renderBufferDirect(B,N,O,U,y,j),U.side=pn):_.renderBufferDirect(B,N,O,U,y,j),y.onAfterRender(_,N,B,O,U,j)}function er(y,N,B){N.isScene!==!0&&(N=Ne);let O=me.get(y),U=u.state.lights,j=u.state.shadowsArray,he=U.state.version,xe=q.getParameters(y,U.state,j,N,B),fe=q.getProgramCacheKey(xe),Pe=O.programs;O.environment=y.isMeshStandardMaterial?N.environment:null,O.fog=N.fog,O.envMap=(y.isMeshStandardMaterial?gt:Mt).get(y.envMap||O.environment),O.envMapRotation=O.environment!==null&&y.envMap===null?N.environmentRotation:y.envMapRotation,Pe===void 0&&(y.addEventListener("dispose",Y),Pe=new Map,O.programs=Pe);let Le=Pe.get(fe);if(Le!==void 0){if(O.currentProgram===Le&&O.lightsStateVersion===he)return ql(y,xe),Le}else xe.uniforms=q.getUniforms(y),y.onBeforeCompile(xe,_),Le=q.acquireProgram(xe,fe),Pe.set(fe,Le),O.uniforms=xe.uniforms;let Te=O.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Te.clippingPlanes=se.uniform),ql(y,xe),O.needsLights=Kh(y),O.lightsStateVersion=he,O.needsLights&&(Te.ambientLightColor.value=U.state.ambient,Te.lightProbe.value=U.state.probe,Te.directionalLights.value=U.state.directional,Te.directionalLightShadows.value=U.state.directionalShadow,Te.spotLights.value=U.state.spot,Te.spotLightShadows.value=U.state.spotShadow,Te.rectAreaLights.value=U.state.rectArea,Te.ltc_1.value=U.state.rectAreaLTC1,Te.ltc_2.value=U.state.rectAreaLTC2,Te.pointLights.value=U.state.point,Te.pointLightShadows.value=U.state.pointShadow,Te.hemisphereLights.value=U.state.hemi,Te.directionalShadowMap.value=U.state.directionalShadowMap,Te.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Te.spotShadowMap.value=U.state.spotShadowMap,Te.spotLightMatrix.value=U.state.spotLightMatrix,Te.spotLightMap.value=U.state.spotLightMap,Te.pointShadowMap.value=U.state.pointShadowMap,Te.pointShadowMatrix.value=U.state.pointShadowMatrix),O.currentProgram=Le,O.uniformsList=null,Le}function Xl(y){if(y.uniformsList===null){let N=y.currentProgram.getUniforms();y.uniformsList=es.seqWithValue(N.seq,y.uniforms)}return y.uniformsList}function ql(y,N){let B=me.get(y);B.outputColorSpace=N.outputColorSpace,B.batching=N.batching,B.batchingColor=N.batchingColor,B.instancing=N.instancing,B.instancingColor=N.instancingColor,B.instancingMorph=N.instancingMorph,B.skinning=N.skinning,B.morphTargets=N.morphTargets,B.morphNormals=N.morphNormals,B.morphColors=N.morphColors,B.morphTargetsCount=N.morphTargetsCount,B.numClippingPlanes=N.numClippingPlanes,B.numIntersection=N.numClipIntersection,B.vertexAlphas=N.vertexAlphas,B.vertexTangents=N.vertexTangents,B.toneMapping=N.toneMapping}function $h(y,N,B,O,U){N.isScene!==!0&&(N=Ne),He.resetTextureUnits();let j=N.fog,he=O.isMeshStandardMaterial?N.environment:null,xe=I===null?_.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:ri,fe=(O.isMeshStandardMaterial?gt:Mt).get(O.envMap||he),Pe=O.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Le=!!B.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Te=!!B.morphAttributes.position,ke=!!B.morphAttributes.normal,je=!!B.morphAttributes.color,pt=An;O.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(pt=_.toneMapping);let at=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,tt=at!==void 0?at.length:0,Re=me.get(O),ht=u.state.lights;if(X===!0&&(oe===!0||y!==M)){let Dt=y===M&&O.id===b;se.setState(O,y,Dt)}let Xe=!1;O.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==ht.state.version||Re.outputColorSpace!==xe||U.isBatchedMesh&&Re.batching===!1||!U.isBatchedMesh&&Re.batching===!0||U.isBatchedMesh&&Re.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Re.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Re.instancing===!1||!U.isInstancedMesh&&Re.instancing===!0||U.isSkinnedMesh&&Re.skinning===!1||!U.isSkinnedMesh&&Re.skinning===!0||U.isInstancedMesh&&Re.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Re.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Re.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Re.instancingMorph===!1&&U.morphTexture!==null||Re.envMap!==fe||O.fog===!0&&Re.fog!==j||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==se.numPlanes||Re.numIntersection!==se.numIntersection)||Re.vertexAlphas!==Pe||Re.vertexTangents!==Le||Re.morphTargets!==Te||Re.morphNormals!==ke||Re.morphColors!==je||Re.toneMapping!==pt||Re.morphTargetsCount!==tt)&&(Xe=!0):(Xe=!0,Re.__version=O.version);let Ot=Re.currentProgram;Xe===!0&&(Ot=er(O,N,U));let Mi=!1,zt=!1,os=!1,ut=Ot.getUniforms(),Xt=Re.uniforms;if(Ee.useProgram(Ot.program)&&(Mi=!0,zt=!0,os=!0),O.id!==b&&(b=O.id,zt=!0),Mi||M!==y){Ee.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),ut.setValue(P,"projectionMatrix",y.projectionMatrix),ut.setValue(P,"viewMatrix",y.matrixWorldInverse);let Ut=ut.map.cameraPosition;Ut!==void 0&&Ut.setValue(P,we.setFromMatrixPosition(y.matrixWorld)),qe.logarithmicDepthBuffer&&ut.setValue(P,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&ut.setValue(P,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,zt=!0,os=!0)}if(U.isSkinnedMesh){ut.setOptional(P,U,"bindMatrix"),ut.setOptional(P,U,"bindMatrixInverse");let Dt=U.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),ut.setValue(P,"boneTexture",Dt.boneTexture,He))}U.isBatchedMesh&&(ut.setOptional(P,U,"batchingTexture"),ut.setValue(P,"batchingTexture",U._matricesTexture,He),ut.setOptional(P,U,"batchingIdTexture"),ut.setValue(P,"batchingIdTexture",U._indirectTexture,He),ut.setOptional(P,U,"batchingColorTexture"),U._colorsTexture!==null&&ut.setValue(P,"batchingColorTexture",U._colorsTexture,He));let qt=B.morphAttributes;if((qt.position!==void 0||qt.normal!==void 0||qt.color!==void 0)&&ee.update(U,B,Ot),(zt||Re.receiveShadow!==U.receiveShadow)&&(Re.receiveShadow=U.receiveShadow,ut.setValue(P,"receiveShadow",U.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(Xt.envMap.value=fe,Xt.flipEnvMap.value=fe.isCubeTexture&&fe.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&N.environment!==null&&(Xt.envMapIntensity.value=N.environmentIntensity),zt&&(ut.setValue(P,"toneMappingExposure",_.toneMappingExposure),Re.needsLights&&Jh(Xt,os),j&&O.fog===!0&&J.refreshFogUniforms(Xt,j),J.refreshMaterialUniforms(Xt,O,z,K,u.state.transmissionRenderTarget[y.id]),es.upload(P,Xl(Re),Xt,He)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(es.upload(P,Xl(Re),Xt,He),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&ut.setValue(P,"center",U.center),ut.setValue(P,"modelViewMatrix",U.modelViewMatrix),ut.setValue(P,"normalMatrix",U.normalMatrix),ut.setValue(P,"modelMatrix",U.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){let Dt=O.uniformsGroups;for(let Ut=0,mo=Dt.length;Ut<mo;Ut++){let Kn=Dt[Ut];Oe.update(Kn,Ot),Oe.bind(Kn,Ot)}}return Ot}function Jh(y,N){y.ambientLightColor.needsUpdate=N,y.lightProbe.needsUpdate=N,y.directionalLights.needsUpdate=N,y.directionalLightShadows.needsUpdate=N,y.pointLights.needsUpdate=N,y.pointLightShadows.needsUpdate=N,y.spotLights.needsUpdate=N,y.spotLightShadows.needsUpdate=N,y.rectAreaLights.needsUpdate=N,y.hemisphereLights.needsUpdate=N}function Kh(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(y,N,B){let O=me.get(y);O.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),me.get(y.texture).__webglTexture=N,me.get(y.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:B,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,N){let B=me.get(y);B.__webglFramebuffer=N,B.__useDefaultFramebuffer=N===void 0};let Qh=P.createFramebuffer();this.setRenderTarget=function(y,N=0,B=0){I=y,E=N,R=B;let O=!0,U=null,j=!1,he=!1;if(y){let fe=me.get(y);if(fe.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(P.FRAMEBUFFER,null),O=!1;else if(fe.__webglFramebuffer===void 0)He.setupRenderTarget(y);else if(fe.__hasExternalTextures)He.rebindTextures(y,me.get(y.texture).__webglTexture,me.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Te=y.depthTexture;if(fe.__boundDepthTexture!==Te){if(Te!==null&&me.has(Te)&&(y.width!==Te.image.width||y.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");He.setupDepthRenderbuffer(y)}}let Pe=y.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(he=!0);let Le=me.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Le[N])?U=Le[N][B]:U=Le[N],j=!0):y.samples>0&&He.useMultisampledRTT(y)===!1?U=me.get(y).__webglMultisampledFramebuffer:Array.isArray(Le)?U=Le[B]:U=Le,C.copy(y.viewport),V.copy(y.scissor),H=y.scissorTest}else C.copy(ge).multiplyScalar(z).floor(),V.copy(Fe).multiplyScalar(z).floor(),H=it;if(B!==0&&(U=Qh),Ee.bindFramebuffer(P.FRAMEBUFFER,U)&&O&&Ee.drawBuffers(y,U),Ee.viewport(C),Ee.scissor(V),Ee.setScissorTest(H),j){let fe=me.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+N,fe.__webglTexture,B)}else if(he){let fe=N;for(let Pe=0;Pe<y.textures.length;Pe++){let Le=me.get(y.textures[Pe]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Pe,Le.__webglTexture,B,fe)}}else if(y!==null&&B!==0){let fe=me.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,fe.__webglTexture,B)}b=-1},this.readRenderTargetPixels=function(y,N,B,O,U,j,he,xe=0){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=me.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&he!==void 0&&(fe=fe[he]),fe){Ee.bindFramebuffer(P.FRAMEBUFFER,fe);try{let Pe=y.textures[xe],Le=Pe.format,Te=Pe.type;if(!qe.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=y.width-O&&B>=0&&B<=y.height-U&&(y.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+xe),P.readPixels(N,B,O,U,be.convert(Le),be.convert(Te),j))}finally{let Pe=I!==null?me.get(I).__webglFramebuffer:null;Ee.bindFramebuffer(P.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(y,N,B,O,U,j,he,xe=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=me.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&he!==void 0&&(fe=fe[he]),fe)if(N>=0&&N<=y.width-O&&B>=0&&B<=y.height-U){Ee.bindFramebuffer(P.FRAMEBUFFER,fe);let Pe=y.textures[xe],Le=Pe.format,Te=Pe.type;if(!qe.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ke=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,ke),P.bufferData(P.PIXEL_PACK_BUFFER,j.byteLength,P.STREAM_READ),y.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+xe),P.readPixels(N,B,O,U,be.convert(Le),be.convert(Te),0);let je=I!==null?me.get(I).__webglFramebuffer:null;Ee.bindFramebuffer(P.FRAMEBUFFER,je);let pt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await rh(P,pt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,ke),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,j),P.deleteBuffer(ke),P.deleteSync(pt),j}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,N=null,B=0){let O=Math.pow(2,-B),U=Math.floor(y.image.width*O),j=Math.floor(y.image.height*O),he=N!==null?N.x:0,xe=N!==null?N.y:0;He.setTexture2D(y,0),P.copyTexSubImage2D(P.TEXTURE_2D,B,0,0,he,xe,U,j),Ee.unbindTexture()};let jh=P.createFramebuffer(),eu=P.createFramebuffer();this.copyTextureToTexture=function(y,N,B=null,O=null,U=0,j=null){j===null&&(U!==0?(ai("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),j=U,U=0):j=0);let he,xe,fe,Pe,Le,Te,ke,je,pt,at=y.isCompressedTexture?y.mipmaps[j]:y.image;if(B!==null)he=B.max.x-B.min.x,xe=B.max.y-B.min.y,fe=B.isBox3?B.max.z-B.min.z:1,Pe=B.min.x,Le=B.min.y,Te=B.isBox3?B.min.z:0;else{let qt=Math.pow(2,-U);he=Math.floor(at.width*qt),xe=Math.floor(at.height*qt),y.isDataArrayTexture?fe=at.depth:y.isData3DTexture?fe=Math.floor(at.depth*qt):fe=1,Pe=0,Le=0,Te=0}O!==null?(ke=O.x,je=O.y,pt=O.z):(ke=0,je=0,pt=0);let tt=be.convert(N.format),Re=be.convert(N.type),ht;N.isData3DTexture?(He.setTexture3D(N,0),ht=P.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(He.setTexture2DArray(N,0),ht=P.TEXTURE_2D_ARRAY):(He.setTexture2D(N,0),ht=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,N.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,N.unpackAlignment);let Xe=P.getParameter(P.UNPACK_ROW_LENGTH),Ot=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Mi=P.getParameter(P.UNPACK_SKIP_PIXELS),zt=P.getParameter(P.UNPACK_SKIP_ROWS),os=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,at.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,at.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Pe),P.pixelStorei(P.UNPACK_SKIP_ROWS,Le),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Te);let ut=y.isDataArrayTexture||y.isData3DTexture,Xt=N.isDataArrayTexture||N.isData3DTexture;if(y.isDepthTexture){let qt=me.get(y),Dt=me.get(N),Ut=me.get(qt.__renderTarget),mo=me.get(Dt.__renderTarget);Ee.bindFramebuffer(P.READ_FRAMEBUFFER,Ut.__webglFramebuffer),Ee.bindFramebuffer(P.DRAW_FRAMEBUFFER,mo.__webglFramebuffer);for(let Kn=0;Kn<fe;Kn++)ut&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,me.get(y).__webglTexture,U,Te+Kn),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,me.get(N).__webglTexture,j,pt+Kn)),P.blitFramebuffer(Pe,Le,he,xe,ke,je,he,xe,P.DEPTH_BUFFER_BIT,P.NEAREST);Ee.bindFramebuffer(P.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(U!==0||y.isRenderTargetTexture||me.has(y)){let qt=me.get(y),Dt=me.get(N);Ee.bindFramebuffer(P.READ_FRAMEBUFFER,jh),Ee.bindFramebuffer(P.DRAW_FRAMEBUFFER,eu);for(let Ut=0;Ut<fe;Ut++)ut?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,qt.__webglTexture,U,Te+Ut):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,qt.__webglTexture,U),Xt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Dt.__webglTexture,j,pt+Ut):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Dt.__webglTexture,j),U!==0?P.blitFramebuffer(Pe,Le,he,xe,ke,je,he,xe,P.COLOR_BUFFER_BIT,P.NEAREST):Xt?P.copyTexSubImage3D(ht,j,ke,je,pt+Ut,Pe,Le,he,xe):P.copyTexSubImage2D(ht,j,ke,je,Pe,Le,he,xe);Ee.bindFramebuffer(P.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Xt?y.isDataTexture||y.isData3DTexture?P.texSubImage3D(ht,j,ke,je,pt,he,xe,fe,tt,Re,at.data):N.isCompressedArrayTexture?P.compressedTexSubImage3D(ht,j,ke,je,pt,he,xe,fe,tt,at.data):P.texSubImage3D(ht,j,ke,je,pt,he,xe,fe,tt,Re,at):y.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,j,ke,je,he,xe,tt,Re,at.data):y.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,j,ke,je,at.width,at.height,tt,at.data):P.texSubImage2D(P.TEXTURE_2D,j,ke,je,he,xe,tt,Re,at);P.pixelStorei(P.UNPACK_ROW_LENGTH,Xe),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ot),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Mi),P.pixelStorei(P.UNPACK_SKIP_ROWS,zt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,os),j===0&&N.generateMipmaps&&P.generateMipmap(ht),Ee.unbindTexture()},this.copyTextureToTexture3D=function(y,N,B=null,O=null,U=0){return ai('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,N,B,O,U)},this.initRenderTarget=function(y){me.get(y).__webglFramebuffer===void 0&&He.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?He.setTextureCube(y,0):y.isData3DTexture?He.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?He.setTexture2DArray(y,0):He.setTexture2D(y,0),Ee.unbindTexture()},this.resetState=function(){E=0,R=0,I=null,Ee.reset(),ce.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ge._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ge._getUnpackColorSpace()}};var is=class extends xt{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Se(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}},ns=new L,Bh=new et,Oh=new et,zh=new L,Hh=new L,to=class{constructor(e={}){let t=this,n,s,r,a,o={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:n,height:s}},this.render=function(m,x){m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),x.parent===null&&x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),Bh.copy(x.matrixWorldInverse),Oh.multiplyMatrices(x.projectionMatrix,Bh),h(m,m,x),p(m)},this.setSize=function(m,x){n=m,s=x,r=n/2,a=s/2,l.style.width=m+"px",l.style.height=x+"px"};function c(m){m.isCSS2DObject&&(m.element.style.display="none");for(let x=0,g=m.children.length;x<g;x++)c(m.children[x])}function h(m,x,g){if(m.visible===!1){c(m);return}if(m.isCSS2DObject){ns.setFromMatrixPosition(m.matrixWorld),ns.applyMatrix4(Oh);let u=ns.z>=-1&&ns.z<=1&&m.layers.test(g.layers)===!0,T=m.element;T.style.display=u===!0?"":"none",u===!0&&(m.onBeforeRender(t,x,g),T.style.transform="translate("+-100*m.center.x+"%,"+-100*m.center.y+"%)translate("+(ns.x*r+r)+"px,"+(-ns.y*a+a)+"px)",T.parentNode!==l&&l.appendChild(T),m.onAfterRender(t,x,g));let S={distanceToCameraSquared:f(g,m)};o.objects.set(m,S)}for(let u=0,T=m.children.length;u<T;u++)h(m.children[u],x,g)}function f(m,x){return zh.setFromMatrixPosition(m.matrixWorld),Hh.setFromMatrixPosition(x.matrixWorld),zh.distanceToSquared(Hh)}function d(m){let x=[];return m.traverseVisible(function(g){g.isCSS2DObject&&x.push(g)}),x}function p(m){let x=d(m).sort(function(u,T){if(u.renderOrder!==T.renderOrder)return T.renderOrder-u.renderOrder;let S=o.objects.get(u).distanceToCameraSquared,_=o.objects.get(T).distanceToCameraSquared;return S-_}),g=x.length;for(let u=0,T=x.length;u<T;u++)x[u].element.style.zIndex=g-u}}};var ss={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Wt=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Dg=new ui(-1,1,1,-1,0,1),Dl=class extends Qe{constructor(){super(),this.setAttribute("position",new Ze([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ze([0,2,0,0,2,0],2))}},Ng=new Dl,Zn=class{constructor(e){this._mesh=new vt(Ng,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Dg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var no=class extends Wt{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof nt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Rn.clone(e.uniforms),this.material=new nt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Zn(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Zs=class extends Wt{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},io=class extends Wt{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var so=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Se);this._width=n.width,this._height=n.height,t=new It(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Kt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new no(ss),this.copyPass.material.blending=ln,this.clock=new di}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Zs!==void 0&&(a instanceof Zs?n=!0:a instanceof io&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Se);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var $s={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var ro=class extends Wt{constructor(){super(),this.uniforms=Rn.clone($s.uniforms),this.material=new Ds({name:$s.name,uniforms:this.uniforms,vertexShader:$s.vertexShader,fragmentShader:$s.fragmentShader}),this._fsQuad=new Zn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ge.getTransfer(this._outputColorSpace)===Ye&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===oa?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===la?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ca?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Zi?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ua?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===da?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ha&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ao=class extends Wt{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new de}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var kh={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new de(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var rs=class i extends Wt{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Se(e.x,e.y):new Se(256,256),this.clearColor=new de(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new It(r,a,{type:Kt}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new It(r,a,{type:Kt});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new It(r,a,{type:Kt});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=kh;this.highPassUniforms=Rn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new nt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Se(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Rn.clone(ss.uniforms),this.blendMaterial=new nt({uniforms:this.copyUniforms,vertexShader:ss.vertexShader,fragmentShader:ss.fragmentShader,blending:lt,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new de,this._oldClearAlpha=1,this._basic=new on,this._fsQuad=new Zn(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Se(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new nt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Se(.5,.5)},direction:{value:new Se(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(e){return new nt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};rs.BlurDirectionX=new Se(1,0);rs.BlurDirectionY=new Se(0,1);function Nl(i){return Math.min(3,Math.max(1,Math.trunc(i)||1))}function Js(i){let e=new Map;return i.nodes.forEach(t=>e.set(t.id,new Set)),i.edges.forEach(t=>{var n,s;(n=e.get(t.source))==null||n.add(t.target),(s=e.get(t.target))==null||s.add(t.source)}),e}function Vh(i,e,t,n=Js(i)){let s=Nl(t),r=new Map([[e.id,0]]),a=[],o=0;if(e.kind==="cluster")a=i.nodes.filter(l=>l.group===e.group).map(l=>l.id),a.forEach(l=>r.set(l,1)),o=1;else{a=[e.id];let l=`@cluster/${e.group}`;r.set(l,1)}for(let l=o+1;l<=s;l+=1){let c=[];if(a.forEach(h=>{var f;(f=n.get(h))==null||f.forEach(d=>{r.has(d)||(r.set(d,l),c.push(d))})}),a=c,a.length===0)break}return r}function Gh(i,e){return i.nodes.reduce((t,n)=>t+(e.has(n.id)?1:0),0)}var Ug={tier:"full",batchedNotes:!1,maxPixelRatio:1.8,maxGraphEdges:Number.POSITIVE_INFINITY,baseLabelBudget:Number.POSITIVE_INFINITY,focusLabelBudget:Number.POSITIVE_INFINITY,pointSizeScale:1,targetFps:60},Fg={tier:"balanced",batchedNotes:!0,maxPixelRatio:1.45,maxGraphEdges:1e4,baseLabelBudget:220,focusLabelBudget:180,pointSizeScale:.96,targetFps:50},Bg={tier:"massive",batchedNotes:!0,maxPixelRatio:1.15,maxGraphEdges:14e3,baseLabelBudget:120,focusLabelBudget:140,pointSizeScale:.86,targetFps:36};function Ul(i){return i<=800?Ug:i<=5e3?Fg:Bg}function Fl(i,e){if(!Number.isFinite(e)||i.length<=e)return[...i];let t=Math.max(0,Math.trunc(e));if(t===0)return[];let n=i.length/t;return Array.from({length:t},(s,r)=>i[Math.floor(r*n)])}var yi=3.66,Wh=[9428223,7441919,11108607,15370214,7463135,12886527],Xh=[10930687,7837423,10984937,13869246,8239298,12430553],Bl=16749020,Ol=14852293,oo=new de(15791355);function Og(i){return i-Math.floor(i)}function $n(i,e,t){return Og(Math.sin(i*127.1+e*311.7+t*74.7)*43758.5453123)*2-1}function zg(i,e,t){let n=Math.floor(i),s=Math.floor(e),r=Math.floor(t),a=i-n,o=e-s,l=t-r,c=a*a*(3-2*a),h=o*o*(3-2*o),f=l*l*(3-2*l),d=ft.lerp($n(n,s,r),$n(n+1,s,r),c),p=ft.lerp($n(n,s+1,r),$n(n+1,s+1,r),c),m=ft.lerp($n(n,s,r+1),$n(n+1,s,r+1),c),x=ft.lerp($n(n,s+1,r+1),$n(n+1,s+1,r+1),c),g=ft.lerp(d,p,h),u=ft.lerp(m,x,h);return ft.lerp(g,u,f)}function lo(i,e){let t=i.x*e+11.7,n=i.y*e-4.3,s=i.z*e+7.9,r=.56,a=0,o=0;for(let l=0;l<4;l+=1)a+=zg(t,n,s)*r,o+=r,t=t*1.93+3.1,n=n*2.07-1.7,s=s*1.89+2.4,r*=.5;return a/o}function Hg(){let i=2211636641,e=()=>(i=Math.imul(i^i>>>15,1|i),i^=i+Math.imul(i^i>>>7,61|i),((i^i>>>14)>>>0)/4294967296),t=[],n=19;for(let s=0;s<n;s+=1){let r=s<7?.22+e()*.76:e()*2-1,a=e()*Math.PI*2,o=Math.sqrt(Math.max(0,1-r*r)),l=new L(Math.cos(a)*o,Math.sin(a)*o,r).normalize(),c=new L().crossVectors(l,Math.abs(l.y)>.9?new L(1,0,0):new L(0,1,0)).normalize(),h=new L().crossVectors(l,c).normalize(),f=s<2?.46:s<7?.25:.11,d=s<2?.12:s<7?.18:.16,p=f+e()*d,m=.045+p*(.17+e()*.14);t.push({center:l,tangentA:c,tangentB:h,angularRadius:p,rimWidth:.11+e()*.1,rimHeight:.045+p*(.17+e()*.12),basinDepth:m,peakHeight:e()>.68?m*(.28+e()*.5):0,phase:e()*Math.PI*2,harmonics:3+Math.floor(e()*5)})}return t}var qh=Hg();function bi(i){let e=lo(i,1.45),t=lo(i,4.8),n=lo(i,11.5),s=e*.14+t*.057+n*.022,r=Math.max(0,Math.abs(t)*.18+Math.abs(n)*.1);for(let a of qh){let o=ft.clamp(i.dot(a.center),-1,1);if(o<Math.cos(a.angularRadius*1.42))continue;let l=Math.acos(o),c=Math.atan2(i.dot(a.tangentB),i.dot(a.tangentA)),h=lo(i,8.2),f=1+Math.sin(c*a.harmonics+a.phase)*.09+Math.sin(c*(a.harmonics+3)-a.phase*.7)*.045+h*.055,d=l/(a.angularRadius*f),p=(d-1)/a.rimWidth,m=Math.exp(-p*p),x=Math.sin(c*(a.harmonics-1)-a.phase*1.4)+Math.sin(c*(a.harmonics+2)+a.phase)*.42+h*1.35,g=.04+ft.smoothstep(x,-.12,.68)*.96,u=m*g,T=d<1?Math.pow(1-d,1.55):0,S=a.peakHeight>0?Math.exp(-Math.pow(d/.19,2))*a.peakHeight:0;s+=u*a.rimHeight-T*a.basinDepth+S,r=Math.max(r,u*(.76+a.rimHeight*2.4),T*.14)}return{displacement:ft.clamp(s,-.29,.36),ridge:ft.clamp(r,0,1)}}function co(i){return yi+bi(i).displacement}var kg=[new L(.45,-.12,2.9),new L(-1.85,1.05,2.15),new L(1.75,1.35,1.9),new L(-1.65,-1.45,1.85),new L(1.75,-1.25,1.6),new L(.05,2.45,1.15),new L(-.15,-2.5,1.05),new L(2.6,.15,.65)].map(i=>i.normalize());function Pn(i){let e=i>>>0;return()=>{e+=1831565813;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Vg(i=128){let e=document.createElement("canvas");e.width=i,e.height=i;let t=e.getContext("2d"),n=t.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.12,"rgba(255,255,255,.96)"),n.addColorStop(.36,"rgba(255,255,255,.34)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,i,i);let s=new ci(e);return s.colorSpace=Et,s.generateMipmaps=!1,s.minFilter=Tt,s.magFilter=Tt,s}function Gg(i,e){let t=document.createElement("canvas");t.width=i,t.height=e;let n=t.getContext("2d"),s=Pn(1554098974),r=(_,A=0,E=1)=>Math.max(A,Math.min(E,_)),a=_=>_*_*(3-2*_),o=(_,A)=>{let E=Math.imul(_,374761393)+Math.imul(A,668265263)+1554098974;return E=Math.imul(E^E>>>13,1274126177),((E^E>>>16)>>>0)/4294967296},l=(_,A)=>{let E=Math.floor(_),R=Math.floor(A),I=a(_-E),b=a(A-R),M=o(E,R)*(1-I)+o(E+1,R)*I,C=o(E,R+1)*(1-I)+o(E+1,R+1)*I;return M*(1-b)+C*b},c=(_,A)=>{let E=.55,R=1,I=0,b=0;for(let M=0;M<5;M+=1)I+=l(_*R,A*R)*E,b+=E,E*=.52,R*=2.03;return I/b},h=n.createLinearGradient(0,0,i,e);h.addColorStop(0,"#010416"),h.addColorStop(.34,"#020824"),h.addColorStop(.68,"#050526"),h.addColorStop(1,"#01020d"),n.fillStyle=h,n.fillRect(0,0,i,e);let f=(_,A,E,R,I,b,M)=>{n.save(),n.translate(_,A),n.scale(E,R),n.globalCompositeOperation="screen",n.globalAlpha=M;let C=n.createRadialGradient(0,0,0,0,0,1);C.addColorStop(0,I),C.addColorStop(.32,b),C.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=C,n.fillRect(-1,-1,2,2),n.restore()};f(i*.02,e*.72,i*.52,e*.56,"rgba(30,107,255,.74)","rgba(13,34,129,.3)",.82),f(i*.98,e*.27,i*.5,e*.48,"rgba(54,105,255,.68)","rgba(43,31,145,.28)",.78),f(i*.88,e*.58,i*.34,e*.32,"rgba(242,56,221,.58)","rgba(98,32,159,.22)",.64),f(i*.34,e*.03,i*.5,e*.3,"rgba(40,123,255,.58)","rgba(29,44,145,.22)",.72);let d=document.createElement("canvas");d.width=Math.max(260,Math.min(480,Math.round(i*.3))),d.height=Math.max(150,Math.min(300,Math.round(e*.3)));let p=d.getContext("2d"),m=p.createImageData(d.width,d.height);for(let _=0;_<d.height;_+=1)for(let A=0;A<d.width;A+=1){let E=A/Math.max(d.width-1,1),R=_/Math.max(d.height-1,1),I=c(E*4.3+11.2,R*4.3+3.7),b=c(E*10.7+31.6,R*10.7+17.4),M=Math.pow(1-Math.abs(b*2-1),3.1),C=.91-E*.66+Math.sin(E*12.4)*.045,V=Math.exp(-Math.pow((R-C)/.18,2)),H=Math.exp(-Math.pow((R-(.06+E*.13))/.21,2))*(1-E*.32),k=Math.exp(-Math.pow((E-.88)/.2,2)-Math.pow((R-.56)/.3,2)),Z=Math.exp(-Math.pow((E-.08)/.24,2)-Math.pow((R-.48)/.38,2)),W=r(V*.94+H*.52+k*.76+Z*.58),K=r((I-.3)*1.9)*W,z=r((M-.43)*2.5)*W*(.35+K*.75),ne=r(K*.68+z*.62),ae=r(k*.86+V*(.28+.28*Math.sin(E*13.5+R*4.2))),ge=(_*d.width+A)*4;m.data[ge]=Math.round(21+ne*62+ae*71),m.data[ge+1]=Math.round(48+ne*63+(1-ae)*24),m.data[ge+2]=Math.round(132+ne*108+ae*39),m.data[ge+3]=Math.round(ne*194)}p.putImageData(m,0,0),n.save(),n.globalCompositeOperation="screen",n.globalAlpha=.58,n.filter=`blur(${Math.max(7,Math.round(i/190))}px)`,n.drawImage(d,-i*.015,-e*.015,i*1.03,e*1.03),n.globalAlpha=.92,n.filter="none",n.drawImage(d,0,0,i,e),n.restore();let x=(_,A,E,R)=>{n.save(),n.globalCompositeOperation="screen",n.lineCap="round";for(let I=5;I>=1;I-=1){let b=(s()-.5)*E*1.9;n.beginPath(),n.moveTo(_[0][0],_[0][1]+b),n.bezierCurveTo(_[1][0],_[1][1]+b,_[2][0],_[2][1]-b*.4,_[3][0],_[3][1]-b*.2),n.strokeStyle=A,n.globalAlpha=R/(5.2+I*1.4),n.lineWidth=E*(1.8+I*2.15),n.shadowColor=A,n.shadowBlur=E*(2.2+I*2.35),n.stroke()}n.restore()};x([[-i*.08,e*.86],[i*.16,e*.62],[i*.27,e*.98],[i*.5,e*.77]],"rgba(73,153,255,.9)",Math.max(1.6,i*.0017),.46),x([[i*.63,e*.88],[i*.74,e*.62],[i*.78,e*.36],[i*1.08,e*.43]],"rgba(242,72,225,.86)",Math.max(1.5,i*.00155),.4),x([[i*.15,-e*.07],[i*.27,e*.18],[i*.48,-e*.04],[i*.64,e*.17]],"rgba(64,135,255,.72)",Math.max(1.35,i*.0013),.32);let g=(_,A,E,R,I,b,M)=>{let C=Pn(M),V=b==="blue";n.save(),n.translate(_,A),n.rotate(I),n.scale(E,R),n.globalCompositeOperation="screen";let H=n.createRadialGradient(0,0,0,0,0,1);H.addColorStop(0,V?"rgba(255,246,226,.98)":"rgba(255,231,248,.96)"),H.addColorStop(.06,V?"rgba(205,229,255,.9)":"rgba(255,184,244,.82)"),H.addColorStop(.2,V?"rgba(80,158,255,.52)":"rgba(210,96,255,.52)"),H.addColorStop(.55,V?"rgba(33,78,212,.2)":"rgba(111,49,201,.2)"),H.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=H,n.fillRect(-1,-1,2,2),n.restore(),n.save(),n.globalCompositeOperation="screen";let k=Math.cos(I),Z=Math.sin(I),W=Math.round(620+E/i*1900);for(let z=0;z<W;z+=1){let ne=Math.pow(C(),.72),ge=z%4*Math.PI*.5+ne*Math.PI*3.9+(C()-C())*(.12+ne*.28),Fe=.035+ne*.91,it=(C()-C())*(.028+ne*.055),$e=Math.cos(ge)*Fe*E,X=(Math.sin(ge)*Fe+it)*R,oe=_+$e*k-X*Z,ie=A+$e*Z+X*k,we=(.1+C()*.48)*(1-ne*.52),Ae=Math.max(.26,(.28+C()*.9)*i/1600);n.fillStyle=V?`rgba(${150+Math.round(C()*85)},${190+Math.round(C()*60)},255,${we})`:`rgba(255,${145+Math.round(C()*85)},${224+Math.round(C()*31)},${we})`,n.beginPath(),n.arc(oe,ie,Ae,0,Math.PI*2),n.fill()}let K=n.createRadialGradient(_,A,0,_,A,Math.max(2,R*.34));K.addColorStop(0,"rgba(255,252,238,.98)"),K.addColorStop(.1,V?"rgba(211,229,255,.9)":"rgba(255,198,243,.9)"),K.addColorStop(.38,V?"rgba(82,153,255,.38)":"rgba(220,89,255,.38)"),K.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=K,n.fillRect(_-R,A-R,R*2,R*2),n.restore()};g(i*.91,e*.28,i*.13,e*.073,-.48,"blue",4302771),g(i*.12,e*.82,i*.115,e*.067,.31,"violet",9695565),n.globalCompositeOperation="screen";let u=Math.round(920+Math.sqrt(i*e)*.72);for(let _=0;_<u;_+=1){let A=s()*i,E=s()*e,R=s()>.973,I=R?.8+s()*1.75:.2+Math.pow(s(),4)*.78,b=R?.66+s()*.3:.14+s()*.55,M=s();if(n.fillStyle=M>.25?`rgba(177,215,255,${b})`:M>.08?`rgba(239,244,255,${b})`:`rgba(255,190,238,${b*.82})`,n.beginPath(),n.arc(A,E,I,0,Math.PI*2),n.fill(),!R)continue;let C=n.createRadialGradient(A,E,0,A,E,I*7.5);C.addColorStop(0,`rgba(214,234,255,${b*.42})`),C.addColorStop(1,"rgba(120,165,255,0)"),n.fillStyle=C,n.fillRect(A-I*8,E-I*8,I*16,I*16),n.strokeStyle=`rgba(194,222,255,${b*.44})`,n.lineWidth=Math.max(.45,i/2600),n.beginPath(),n.moveTo(A-I*6.8,E),n.lineTo(A+I*6.8,E),n.moveTo(A,E-I*6.8),n.lineTo(A,E+I*6.8),n.stroke()}for(let _=0;_<720;_+=1){let A=s(),E=A*i,I=e*(.91-A*.66+Math.sin(A*12.4)*.045)+(s()-s())*e*.17,b=.13+s()*.47,M=.18+Math.pow(s(),3.4)*.72;n.fillStyle=s()>.18?`rgba(173,215,255,${b})`:`rgba(255,169,240,${b*.82})`,n.beginPath(),n.arc(E,I,M,0,Math.PI*2),n.fill()}let T=n.createRadialGradient(i*.5,e*.48,e*.08,i*.5,e*.48,Math.max(i,e)*.72);T.addColorStop(0,"rgba(0,0,0,0)"),T.addColorStop(.66,"rgba(0,0,8,.04)"),T.addColorStop(1,"rgba(0,0,8,.42)"),n.globalCompositeOperation="source-over",n.fillStyle=T,n.fillRect(0,0,i,e);let S=new ci(t);return S.colorSpace=Et,S.generateMipmaps=!1,S.minFilter=Tt,S.magFilter=Tt,S.name="CosmoGraph cosmic background",S}function Wg(i=192){let e=document.createElement("canvas");e.width=i,e.height=i;let t=e.getContext("2d"),n=i/2,s=t.createRadialGradient(n,n,0,n,n,i*.24);s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(.12,"rgba(255,255,255,.9)"),s.addColorStop(.3,"rgba(255,255,255,.38)"),s.addColorStop(.58,"rgba(255,255,255,.08)"),s.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=s,t.fillRect(0,0,i,i),t.strokeStyle="rgba(255,255,255,.86)",t.lineWidth=i*.01,t.beginPath(),t.arc(n,n,i*.235,0,Math.PI*2),t.stroke(),t.strokeStyle="rgba(255,255,255,.34)",t.lineWidth=i*.007,t.beginPath(),t.arc(n,n,i*.36,0,Math.PI*2),t.stroke();let r=new ci(e);return r.colorSpace=Et,r.generateMipmaps=!1,r.minFilter=Tt,r.magFilter=Tt,r}function Xg(i){var t;return((t=i.split("/").at(-1))!=null?t:i).replace(/^\d+[.]?\s*/,"")||"\u0417\u0430\u043C\u0435\u0442\u043A\u0438"}var ho=class{constructor(e){$(this,"canvas");$(this,"scene",new As);$(this,"camera",new Rt(42,1,.1,100));$(this,"renderer");$(this,"composer");$(this,"bloomPass");$(this,"labelRenderer",new to);$(this,"root",new Pt);$(this,"networkRoot",new Pt);$(this,"raycaster",new zs);$(this,"pointer",new Se);$(this,"clock",new di);$(this,"glowTexture",Vg());$(this,"nodeMarkerTexture",Wg());$(this,"animatedMaterials",[]);$(this,"styledPointClouds",[]);$(this,"styledLineMaterials",[]);$(this,"terrainSurface");$(this,"calmSurfaceMaterial");$(this,"radiantSurfaceMaterial");$(this,"atmosphere");$(this,"calmAtmosphereMaterial");$(this,"radiantAtmosphereMaterial");$(this,"outerAura");$(this,"outerAuraMaterial");$(this,"orbitingMotes");$(this,"orbitingMoteCalmColors");$(this,"orbitingMoteRadiantColors");$(this,"sphereStyle","radiant");$(this,"labelMode","important");$(this,"nodeVisuals",[]);$(this,"batchedNodeCloud",null);$(this,"batchedLabels",new Map);$(this,"virtualLabelIds",new Set);$(this,"performanceProfile",Ul(0));$(this,"hitMeshes",[]);$(this,"degrees",new Map);$(this,"nodesById",new Map);$(this,"currentData",{nodes:[],edges:[]});$(this,"noteAdjacency",new Map);$(this,"nodePositions",new Map);$(this,"radiantColorsByGroup",new Map);$(this,"calmColorsByGroup",new Map);$(this,"focusLineRoot",new Pt);$(this,"graphLineMaterial",null);$(this,"focusedId",null);$(this,"focusDepth",1);$(this,"focusNodeDistances",new Map);$(this,"tempWorld",new L);$(this,"tempNormal",new L);$(this,"tempCameraDirection",new L);$(this,"selectedId",null);$(this,"hoveredId",null);$(this,"primaryNode",null);$(this,"search","");$(this,"dragging",!1);$(this,"moved",!1);$(this,"lastX",0);$(this,"lastY",0);$(this,"velocityX",0);$(this,"velocityY",0);$(this,"autoRotate");$(this,"focusStart",new $t);$(this,"focusEnd",new $t);$(this,"focusElapsed",0);$(this,"focusDuration",0);$(this,"focusing",!1);$(this,"cameraTweening",!1);$(this,"cameraTweenStart",12);$(this,"cameraTweenEnd",12);$(this,"cameraTweenElapsed",0);$(this,"cameraTweenDuration",.8);$(this,"defaultCameraZ",12);$(this,"animationFrame",0);$(this,"frameAccumulator",0);$(this,"labelRefreshAccumulator",0);$(this,"cosmicBackgroundEnabled",!1);$(this,"cosmicBackgroundTexture",null);$(this,"cosmicBackgroundAspect",0);$(this,"resizeObserver");$(this,"onSelect",()=>{});$(this,"onHover",()=>{});$(this,"reducedMotion");$(this,"animate",()=>{let e=Math.min(this.clock.getDelta(),.05);this.frameAccumulator+=e;let t=1/this.performanceProfile.targetFps;if(this.frameAccumulator<t){this.animationFrame=window.requestAnimationFrame(this.animate);return}let n=Math.min(this.frameAccumulator,.08);this.frameAccumulator=0;let s=this.clock.elapsedTime,r=this.reducedMotion?0:s;if(this.animatedMaterials.forEach(a=>{let o=a.uniforms.uTime;o&&(o.value=r)}),!this.reducedMotion&&this.orbitingMotes){let a=this.sphereStyle==="radiant"?1:.58;this.orbitingMotes.rotation.y+=n*.011*a,this.orbitingMotes.rotation.x=Math.sin(s*.19)*.009*a,this.orbitingMotes.rotation.z=Math.cos(s*.14)*.006*a}if(!this.dragging)if(this.focusing){this.focusElapsed=Math.min(this.focusElapsed+n,this.focusDuration);let a=this.focusElapsed/this.focusDuration,o=a*a*a*(a*(a*6-15)+10);this.root.quaternion.slerpQuaternions(this.focusStart,this.focusEnd,o),a>=1&&(this.focusing=!1)}else this.root.rotation.y+=this.autoRotate?n*.035:this.velocityY,this.root.rotation.x+=this.velocityX,this.velocityX*=.92,this.velocityY*=.92;if(this.cameraTweening){this.cameraTweenElapsed=Math.min(this.cameraTweenElapsed+n,this.cameraTweenDuration);let a=this.cameraTweenElapsed/this.cameraTweenDuration,o=a*a*a*(a*(a*6-15)+10);this.camera.position.z=ft.lerp(this.cameraTweenStart,this.cameraTweenEnd,o),a>=1&&(this.cameraTweening=!1)}this.batchedNodeCloud&&this.labelMode==="all"&&!this.focusedId&&!this.search&&(this.labelRefreshAccumulator+=n,this.labelRefreshAccumulator>=.42&&(this.labelRefreshAccumulator=0,this.refreshVisibleBatchedLabels())),this.updateNodeVisuals(s,n),this.composer.render(),(this.labelMode!=="none"||this.focusedId)&&this.labelRenderer.render(this.scene,this.camera),this.animationFrame=window.requestAnimationFrame(this.animate)});var n,s;this.canvas=e,this.reducedMotion=window.matchMedia("(prefers-reduced-motion: reduce)").matches,this.autoRotate=!this.reducedMotion,this.renderer=new ja({canvas:e,antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.8)),this.renderer.outputColorSpace=Et,this.renderer.toneMapping=Zi,this.renderer.toneMappingExposure=.96,this.renderer.setClearColor(131595,1),this.camera.position.set(0,0,12),this.raycaster.params.Points={threshold:.14},this.composer=new so(this.renderer),this.composer.addPass(new ao(this.scene,this.camera)),this.bloomPass=new rs(new Se(1,1),.82,.5,.62),this.composer.addPass(this.bloomPass),this.composer.addPass(new ro),this.labelRenderer.domElement.className="graph-label-layer",((n=e.parentElement)!=null?n:document.body).appendChild(this.labelRenderer.domElement),this.scene.add(this.createStarfield()),this.scene.add(new Bs(9091839,393748,.34));let t=new Os(14412031,2.9);t.position.set(-4.5,6.5,8),this.scene.add(t),this.scene.add(this.root),this.terrainSurface=this.createTerrainSurface(),this.atmosphere=this.createAtmosphere(),this.outerAura=this.createOuterAura(),this.root.add(this.outerAura),this.root.add(this.terrainSurface),this.root.add(this.atmosphere),this.root.add(this.createShellDust()),this.root.add(this.createTerrainAccents()),this.root.add(this.createSparkleShell()),this.root.add(this.createInnerDust()),this.orbitingMotes=this.createOrbitingMotes(),this.root.add(this.orbitingMotes),this.root.add(this.networkRoot),this.root.rotation.set(-.035,-.12,.015),this.setSphereStyle("radiant"),this.bindEvents(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe((s=e.parentElement)!=null?s:e),this.resize(),this.animate()}setHandlers(e,t){this.onSelect=e,this.onHover=t}setLabelMode(e){this.labelMode=e;let t=e==="none"&&!this.focusedId;this.labelRenderer.domElement.classList.toggle("is-hidden",t),this.labelRenderer.domElement.setAttribute("aria-hidden",String(t)),e==="all"?this.refreshVisibleBatchedLabels():(this.virtualLabelIds.clear(),this.syncTransientBatchedLabels())}getPrimaryNode(){return this.primaryNode}getPerformanceTier(){return this.performanceProfile.tier}setCosmicBackground(e){if(this.cosmicBackgroundEnabled=e,!e){this.scene.background=null;return}this.refreshCosmicBackground()}setSphereStyle(e){this.sphereStyle=e;let t=e==="radiant";this.terrainSurface.material=t?this.radiantSurfaceMaterial:this.calmSurfaceMaterial,this.atmosphere.material=t?this.radiantAtmosphereMaterial:this.calmAtmosphereMaterial,this.renderer.toneMappingExposure=t?.98:.97;let n=this.performanceProfile.tier==="massive"?.7:this.performanceProfile.tier==="balanced"?.88:1;if(this.bloomPass.strength=(t?.92:.86)*n,this.bloomPass.radius=t?.55:.46,this.bloomPass.threshold=t?.56:.5,this.outerAuraMaterial&&(this.outerAuraMaterial.uniforms.uIntensity.value=t?.68:.12),this.styledPointClouds.forEach(s=>{s.points.geometry.setAttribute("color",t?s.radiantColors:s.calmColors),s.points.material.opacity=t?s.radiantOpacity:s.calmOpacity,s.points.material.size=t?s.radiantSize:s.calmSize,s.points.material.needsUpdate=!0}),this.orbitingMotes&&(this.orbitingMotes.geometry.setAttribute("color",t?this.orbitingMoteRadiantColors:this.orbitingMoteCalmColors),this.orbitingMotes.material.uniforms.uOpacity.value=t?.88:.62,this.orbitingMotes.material.uniforms.uPointSize.value=t?.031:.024,this.orbitingMotes.material.uniforms.uMotionScale.value=t?1:.64),this.batchedNodeCloud&&(this.batchedNodeCloud.points.geometry.setAttribute("color",t?this.batchedNodeCloud.radiantColors:this.batchedNodeCloud.calmColors),this.batchedNodeCloud.points.material.uniforms.uEnergy.value=t?1:.78),this.applyNodePalette(),this.focusedId){let s=this.nodesById.get(this.focusedId);s&&this.updateFocusLines(s)}}applyNodePalette(){let e=this.sphereStyle==="radiant";this.nodeVisuals.forEach(t=>{let n=e?t.radiantColor:t.calmColor;t.core.material.color.copy(n),t.inner.material.color.copy(n).lerp(oo,t.node.kind==="cluster"?.76:.64),t.marker.material.color.copy(n),t.glow.material.color.copy(n)}),this.styledLineMaterials.forEach(t=>{t.material.color.copy(e?t.radiantColor:t.calmColor)})}setData(e){this.performanceProfile=Ul(e.nodes.length);let t=Math.min(window.devicePixelRatio,this.performanceProfile.maxPixelRatio);this.renderer.setPixelRatio(t),this.composer.setPixelRatio(t),this.currentData=e,this.noteAdjacency=Js(e),this.selectedId=null,this.hoveredId=null,this.primaryNode=null,this.focusedId=null,this.focusNodeDistances.clear(),this.focusing=!1,this.cameraTweening=!1,this.camera.position.z=this.defaultCameraZ,this.degrees.clear(),this.nodesById.clear(),this.nodePositions.clear(),this.radiantColorsByGroup.clear(),this.calmColorsByGroup.clear(),this.batchedNodeCloud=null,this.batchedLabels.clear(),this.virtualLabelIds.clear(),e.nodes.forEach(p=>{this.degrees.set(p.id,0),this.nodesById.set(p.id,p)}),e.edges.forEach(p=>{var m,x;this.degrees.set(p.source,((m=this.degrees.get(p.source))!=null?m:0)+1),this.degrees.set(p.target,((x=this.degrees.get(p.target))!=null?x:0)+1)}),this.clearNetwork();let n=new Map;e.nodes.forEach(p=>{var m;return n.set(p.group,[...(m=n.get(p.group))!=null?m:[],p])});let s=[...n.entries()].sort(([p,m],[x,g])=>{let u=/project|проект/i.test(p)?1:0;return(/project|проект/i.test(x)?1:0)-u||g.length-m.length}),r=new Map,a=new Map,o=new Map,l=[];s.forEach(([p,m],x)=>{var E;let g=((E=kg[x])!=null?E:this.fibonacciDirection(x,s.length)).clone(),u={id:`@cluster/${p}`,title:Xg(p),path:`${m.length} \u0437\u0430\u043C\u0435\u0442\u043E\u043A \u0432 \u043A\u043B\u0430\u0441\u0442\u0435\u0440\u0435`,group:p,kind:"cluster",noteCount:m.length};this.nodesById.set(u.id,u);let T=x===0?Bl:Wh[(x-1)%Wh.length],S=x===0?Ol:Xh[(x-1)%Xh.length];a.set(p,T),o.set(p,S),l.push(u),r.set(u.id,g.clone().multiplyScalar(co(g)+.045)),x===0&&(this.primaryNode=u);let _=new L().crossVectors(g,Math.abs(g.y)>.88?new L(1,0,0):new L(0,1,0)).normalize(),A=new L().crossVectors(g,_).normalize();m.forEach((R,I)=>{let b=I*Math.PI*(3-Math.sqrt(5)),M=Math.min(1.08,.22+Math.sqrt(I+.2)*.18),C=g.clone().addScaledVector(_,Math.cos(b)*M).addScaledVector(A,Math.sin(b)*M).normalize(),V=C.multiplyScalar(co(C)+.035+(I%3-1)*.022);r.set(R.id,V)})}),r.forEach((p,m)=>this.nodePositions.set(m,p.clone())),a.forEach((p,m)=>this.radiantColorsByGroup.set(m,p)),o.forEach((p,m)=>this.calmColorsByGroup.set(m,p)),this.networkRoot.add(this.createAmbientNetwork());let c=this.createGraphLines(e,s,l,r,a);this.graphLineMaterial=c.material,this.networkRoot.add(c),this.focusLineRoot=new Pt,this.focusLineRoot.renderOrder=4,this.networkRoot.add(this.focusLineRoot);let h=[...e.nodes].sort((p,m)=>{var x,g;return((x=this.degrees.get(m.id))!=null?x:0)-((g=this.degrees.get(p.id))!=null?g:0)}),f=Math.min(15,Math.max(8,Math.round(Math.sqrt(e.nodes.length)*2.8))),d=new Set(h.slice(0,f).map(p=>p.id));l.forEach((p,m)=>{let x=this.createNodeVisual(p,r.get(p.id),a.get(p.group),o.get(p.group),!0,!0);this.nodeVisuals.push(x),this.networkRoot.add(x.group),m===0&&this.networkRoot.add(this.createHubRings(r.get(p.id),a.get(p.group),o.get(p.group)))}),this.performanceProfile.batchedNotes?(this.batchedNodeCloud=this.createBatchedNodeCloud(e.nodes,r,a,o,h,d),this.networkRoot.add(this.batchedNodeCloud.points)):e.nodes.forEach(p=>{let m=this.createNodeVisual(p,r.get(p.id),a.get(p.group),o.get(p.group),!1,d.has(p.id));this.nodeVisuals.push(m),this.networkRoot.add(m.group)}),this.setSphereStyle(this.sphereStyle),this.labelMode==="all"&&this.refreshVisibleBatchedLabels(),this.applyVisualState(),this.resize()}setSearch(e){this.search=e.trim().toLocaleLowerCase(),this.labelMode==="all"&&this.refreshVisibleBatchedLabels(),this.applyVisualState()}setFocus(e,t=this.focusDepth){let n=this.nodesById.get(e);return n?(this.focusDepth=Nl(t),this.focusedId=e,this.virtualLabelIds.clear(),this.labelRenderer.domElement.classList.remove("is-hidden"),this.labelRenderer.domElement.setAttribute("aria-hidden","false"),this.focusNodeDistances=Vh(this.currentData,n,this.focusDepth,this.noteAdjacency),this.focusNode(e),this.startCameraTween(this.canvas.clientWidth<720?18.8:10.45,.9),this.updateFocusLines(n),this.applyVisualState(),Gh(this.currentData,this.focusNodeDistances)):0}setFocusDepth(e){return this.focusedId?this.setFocus(this.focusedId,e):0}clearFocus(e=!1){this.focusedId=null,this.focusNodeDistances.clear(),e&&(this.selectedId=null),this.clearFocusLines(),this.graphLineMaterial&&(this.graphLineMaterial.opacity=.25);let t=this.labelMode==="none";this.labelRenderer.domElement.classList.toggle("is-hidden",t),this.labelRenderer.domElement.setAttribute("aria-hidden",String(t)),this.startCameraTween(this.defaultCameraZ,.76),this.labelMode==="all"&&this.refreshVisibleBatchedLabels(),this.applyVisualState()}focusNode(e){let t=this.nodePositions.get(e);if(!t)return;this.selectedId=e,this.autoRotate=!1,this.velocityX=0,this.velocityY=0;let n=t.clone().normalize(),s=new L(.08,-.02,1).normalize();this.focusStart.copy(this.root.quaternion),this.focusEnd.setFromUnitVectors(n,s);let r=this.focusStart.angleTo(this.focusEnd);this.focusElapsed=0,this.focusDuration=ft.clamp(.52+r*.3,.68,1.38),this.focusing=!this.reducedMotion&&r>.002,this.focusing||this.root.quaternion.copy(this.focusEnd),this.applyVisualState()}startCameraTween(e,t){this.cameraTweenStart=this.camera.position.z,this.cameraTweenEnd=e,this.cameraTweenElapsed=0,this.cameraTweenDuration=t,this.cameraTweening=!this.reducedMotion&&Math.abs(this.cameraTweenStart-e)>.01,this.cameraTweening||(this.camera.position.z=e)}clearFocusLines(){this.focusLineRoot.traverse(e=>{var n,s;if(e===this.focusLineRoot)return;let t=e;(n=t.geometry)==null||n.dispose(),Array.isArray(t.material)?t.material.forEach(r=>r.dispose()):(s=t.material)==null||s.dispose()}),this.focusLineRoot.clear()}updateFocusLines(e){var l;this.clearFocusLines(),this.graphLineMaterial&&(this.graphLineMaterial.opacity=.055);let t=[],n=[],s=(c,h)=>{var E,R,I,b;let f=this.nodePositions.get(c),d=this.nodePositions.get(h),p=this.nodesById.get(c),m=this.nodesById.get(h);if(!f||!d||!p||!m)return;let x=(E=this.focusNodeDistances.get(c))!=null?E:this.focusDepth,g=(R=this.focusNodeDistances.get(h))!=null?R:this.focusDepth,u=1-Math.max(x,g)*.16,T=this.sphereStyle==="radiant"?this.radiantColorsByGroup:this.calmColorsByGroup,S=this.sphereStyle==="radiant"?Bl:Ol,_=new de((I=T.get(p.group))!=null?I:S).lerp(oo,.28).multiplyScalar(u),A=new de((b=T.get(m.group))!=null?b:S).lerp(oo,.28).multiplyScalar(u);t.push(f.x,f.y,f.z,d.x,d.y,d.z),n.push(_.r,_.g,_.b,A.r,A.g,A.b)},r=new Set;for(let c of this.focusNodeDistances.keys())(l=this.noteAdjacency.get(c))==null||l.forEach(h=>{if(!this.focusNodeDistances.has(h))return;let f=c<h?`${c}\0${h}`:`${h}\0${c}`;r.has(f)||(r.add(f),s(c,h))});if(e.kind==="cluster")this.currentData.nodes.filter(c=>c.group===e.group&&this.focusNodeDistances.get(c.id)===1).forEach(c=>s(e.id,c.id));else{let c=`@cluster/${e.group}`;this.focusNodeDistances.has(c)&&s(e.id,c)}if(t.length===0)return;let a=new Qe;a.setAttribute("position",new Ze(t,3)),a.setAttribute("color",new Ze(n,3));let o=new dn({vertexColors:!0,transparent:!0,opacity:this.sphereStyle==="radiant"?.82:.68,depthWrite:!1,blending:lt});this.focusLineRoot.add(new Vn(a,o))}createStarfield(){let e=Pn(18),t=window.innerWidth<720?700:1500,n=new Float32Array(t*3),s=new Float32Array(t*3);for(let a=0;a<t;a+=1){let o=14+e()*18,l=e()*Math.PI*2,c=Math.acos(2*e()-1);n[a*3]=o*Math.sin(c)*Math.cos(l),n[a*3+1]=o*Math.cos(c),n[a*3+2]=o*Math.sin(c)*Math.sin(l)-5;let h=.35+e()*.65;s[a*3]=.55*h,s[a*3+1]=.67*h,s[a*3+2]=h}let r=new Qe;return r.setAttribute("position",new De(n,3)),r.setAttribute("color",new De(s,3)),new Vt(r,new Jt({size:.06,map:this.glowTexture,transparent:!0,opacity:.86,vertexColors:!0,depthWrite:!1,blending:lt,alphaTest:.01}))}createTerrainGeometry(e,t){let n=new Gn(yi,e,t),s=n.getAttribute("position"),r=new L;for(let a=0;a<s.count;a+=1){r.fromBufferAttribute(s,a).normalize();let o=co(r);s.setXYZ(a,r.x*o,r.y*o,r.z*o)}return s.needsUpdate=!0,n.computeVertexNormals(),n}createTerrainSurface(){let e=this.createTerrainGeometry(128,96),t=e.getAttribute("position"),n=new Float32Array(t.count),s=new Float32Array(t.count),r=new Float32Array(t.count*3),a=new Float32Array(t.count*3),o=new L;for(let c=0;c<t.count;c+=1){o.fromBufferAttribute(t,c).normalize();let h=bi(o);n[c]=ft.clamp((h.displacement+.29)/.65,0,1),s[c]=h.ridge,r.set([o.x,o.y,o.z],c*3),a[c*3]=.055+n[c]*.07+h.ridge*.12,a[c*3+1]=.08+n[c]*.1+h.ridge*.14,a[c*3+2]=.16+n[c]*.18+h.ridge*.22}e.setAttribute("color",new De(a,3)),e.setAttribute("aElevation",new De(n,1)),e.setAttribute("aRidge",new De(s,1)),e.setAttribute("aDirection",new De(r,3)),this.calmSurfaceMaterial=new Ns({vertexColors:!0,transparent:!0,opacity:.66,roughness:.94,metalness:.06,emissive:198419,emissiveIntensity:.28,depthWrite:!1,side:Ft}),this.radiantSurfaceMaterial=new nt({transparent:!0,depthWrite:!1,side:Ft,uniforms:{uTime:{value:0},uDeepIndigo:{value:new de(525869)},uElectricBlue:{value:new de(2649599)},uCyan:{value:new de(5627391)},uViolet:{value:new de(9130239)},uMagenta:{value:new de(16732882)},uHot:{value:new de(15923199)}},vertexShader:`
        attribute float aElevation;
        attribute float aRidge;
        attribute vec3 aDirection;
        varying float vElevation;
        varying float vRidge;
        varying vec3 vDirection;
        varying vec3 vWorldNormal;
        varying vec3 vWorldPosition;
        void main() {
          vElevation = aElevation;
          vRidge = aRidge;
          vDirection = aDirection;
          vWorldNormal = normalize(mat3(modelMatrix) * normal);
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          gl_Position = projectionMatrix * viewMatrix * worldPosition;
        }
      `,fragmentShader:`
        uniform float uTime;
        uniform vec3 uDeepIndigo;
        uniform vec3 uElectricBlue;
        uniform vec3 uCyan;
        uniform vec3 uViolet;
        uniform vec3 uMagenta;
        uniform vec3 uHot;
        varying float vElevation;
        varying float vRidge;
        varying vec3 vDirection;
        varying vec3 vWorldNormal;
        varying vec3 vWorldPosition;

        float hash31(vec3 p) {
          p = fract(p * 0.1031);
          p += dot(p, p.yzx + 33.33);
          return fract((p.x + p.y) * p.z);
        }

        float noise3(vec3 p) {
          vec3 i = floor(p);
          vec3 f = fract(p);
          f = f * f * (3.0 - 2.0 * f);
          return mix(
            mix(mix(hash31(i), hash31(i + vec3(1, 0, 0)), f.x),
                mix(hash31(i + vec3(0, 1, 0)), hash31(i + vec3(1, 1, 0)), f.x), f.y),
            mix(mix(hash31(i + vec3(0, 0, 1)), hash31(i + vec3(1, 0, 1)), f.x),
                mix(hash31(i + vec3(0, 1, 1)), hash31(i + vec3(1, 1, 1)), f.x), f.y),
            f.z
          );
        }

        float fbm(vec3 p) {
          float value = 0.0;
          float amplitude = 0.54;
          for (int i = 0; i < 5; i++) {
            value += noise3(p) * amplitude;
            p = p * 2.03 + vec3(1.7, -2.3, 0.9);
            amplitude *= 0.48;
          }
          return value;
        }

        void main() {
          vec3 direction = normalize(vDirection);
          float flowTime = uTime * 0.035;
          float broad = fbm(direction * 1.75 + vec3(flowTime, -flowTime * 0.7, flowTime * 0.45));
          float fold = fbm(direction * 3.6 + vec3(broad * 2.25, -broad * 1.4, broad * 1.8));
          float fine = fbm(direction * 7.8 + vec3(fold * 1.65));

          float contourPhase = broad * 3.65 + fold * 1.32 + direction.y * 0.29 + direction.x * 0.14;
          float contour = 1.0 - abs(fract(contourPhase) - 0.5) * 2.0;
          float ribbons = smoothstep(0.42, 0.88, contour) * smoothstep(0.3, 0.76, fold);
          float ribbonCore = pow(smoothstep(0.78, 0.995, contour), 1.9) * smoothstep(0.42, 0.86, fold);
          float vein = smoothstep(0.67, 0.94, fine + contour * 0.19);
          float filament = smoothstep(0.73, 0.97, fine + ribbonCore * 0.24) * smoothstep(0.45, 0.84, fold);
          float reliefGlow = smoothstep(0.16, 0.7, vRidge + ribbons * 0.48);

          vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
          vec3 normalDirection = normalize(vWorldNormal);
          vec3 lightDirection = normalize(vec3(-0.36, 0.68, 0.94));
          float facing = max(dot(normalDirection, viewDirection), 0.0);
          float fresnel = pow(1.0 - facing, 1.9);
          float hardRim = pow(1.0 - facing, 5.4);
          float lightFacing = max(dot(normalDirection, lightDirection), 0.0);
          float light = 0.22 + lightFacing * 0.78;
          vec3 halfVector = normalize(viewDirection + lightDirection);
          float broadSheen = pow(max(dot(normalDirection, halfVector), 0.0), 4.5);
          float sharpSheen = pow(max(dot(normalDirection, halfVector), 0.0), 22.0);

          float chroma = clamp(fbm(direction * 2.55 + vec3(-1.2, 2.4, 0.6)) * 1.25 - 0.12, 0.0, 1.0);
          vec3 coolFlow = mix(uElectricBlue, uCyan, smoothstep(0.2, 0.78, chroma));
          vec3 warmFlow = mix(uViolet, uMagenta, smoothstep(0.34, 0.76, fold));
          vec3 ribbonColor = mix(coolFlow, warmFlow, smoothstep(0.3, 0.7, broad + direction.x * 0.13));
          vec3 rimColor = mix(uCyan, uMagenta, smoothstep(-0.55, 0.68, direction.y + broad * 0.5));

          vec3 color = uDeepIndigo * (0.46 + light * 0.58);
          color += mix(uElectricBlue, uViolet, chroma) * (0.075 + vElevation * 0.16 + broad * 0.1);
          color += ribbonColor * ribbons * (0.44 + reliefGlow * 0.42);
          color += mix(uCyan, uMagenta, broad) * vein * (0.12 + vRidge * 0.32);
          color += mix(uHot, ribbonColor, 0.7) * ribbonCore * (0.2 + reliefGlow * 0.38);
          color += mix(uCyan, uMagenta, fold) * filament * (0.12 + ribbonCore * 0.24);
          color += rimColor * (fresnel * (0.27 + ribbons * 0.28) + hardRim * 0.58);
          color += mix(uHot, uCyan, 0.46) * broadSheen * (0.045 + ribbons * 0.11);
          color += uHot * sharpSheen * (0.12 + ribbonCore * 0.34);

          float hotCore = pow(clamp(ribbonCore * 0.68 + filament * 0.16 + vRidge * 0.32, 0.0, 1.0), 7.1);
          color = mix(color, uHot * 0.86 + ribbonColor * 0.78, hotCore * 0.24);
          float alpha = 0.76 + vElevation * 0.05 + ribbons * 0.06 + fresnel * 0.105;
          color = clamp(color, vec3(0.0), vec3(1.65));
          gl_FragColor = vec4(color, clamp(alpha, 0.0, 1.0));
        }
      `}),this.animatedMaterials.push(this.radiantSurfaceMaterial);let l=new vt(e,this.radiantSurfaceMaterial);return l.renderOrder=-2,l}createAtmosphere(){let e=this.createTerrainGeometry(96,72),t=`
      varying vec3 vWorldNormal;
      varying vec3 vWorldPosition;
      varying vec3 vDirection;
      void main() {
        vWorldNormal = normalize(mat3(modelMatrix) * normal);
        vDirection = normalize(position);
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPosition.xyz;
        gl_Position = projectionMatrix * viewMatrix * worldPosition;
      }
    `;this.calmAtmosphereMaterial=new nt({transparent:!0,depthWrite:!1,blending:lt,side:Ft,uniforms:{glowColor:{value:new de(4286120)}},vertexShader:t,fragmentShader:`
        uniform vec3 glowColor;
        varying vec3 vWorldNormal;
        varying vec3 vWorldPosition;
        void main() {
          vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
          float rim = pow(1.0 - max(dot(normalize(vWorldNormal), viewDirection), 0.0), 3.2);
          float haze = pow(1.0 - max(dot(normalize(vWorldNormal), viewDirection), 0.0), 1.4) * 0.055;
          gl_FragColor = vec4(glowColor, clamp(rim * 0.22 + haze * 0.45, 0.0, 1.0));
        }
      `}),this.radiantAtmosphereMaterial=new nt({transparent:!0,depthWrite:!1,blending:lt,side:Ft,uniforms:{uTime:{value:0}},vertexShader:t,fragmentShader:`
        uniform float uTime;
        varying vec3 vWorldNormal;
        varying vec3 vWorldPosition;
        varying vec3 vDirection;
        float pattern(vec3 p) {
          return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453);
        }
        void main() {
          vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
          float rim = pow(1.0 - max(dot(normalize(vWorldNormal), viewDirection), 0.0), 2.55);
          float hueNoise = pattern(floor(vDirection * 7.0 + uTime * 0.025));
          vec3 cyan = vec3(0.25, 0.78, 1.0);
          vec3 violet = vec3(0.55, 0.27, 1.0);
          vec3 magenta = vec3(1.0, 0.38, 0.82);
          vec3 rimColor = mix(cyan, violet, smoothstep(0.15, 0.78, vDirection.y * 0.5 + 0.5));
          rimColor = mix(rimColor, magenta, smoothstep(0.7, 0.96, hueNoise) * 0.58);
          float edgeFlow = 0.84 + sin(dot(vDirection, vec3(8.0, 13.0, 5.0)) + uTime * 0.11) * 0.16;
          float spark = smoothstep(0.84, 0.985, hueNoise) * pow(rim, 2.4);
          float energy = (pow(rim, 1.4) * 0.62 + pow(rim, 4.8) * 0.94) * edgeFlow + spark * 0.46;
          float alpha = rim * 0.22 + pow(rim, 5.2) * 0.12 + spark * 0.045;
          gl_FragColor = vec4(clamp(rimColor * energy + vec3(0.84, 0.92, 1.0) * spark * 0.64, vec3(0.0), vec3(1.72)), clamp(alpha, 0.0, 0.42));
        }
      `}),this.animatedMaterials.push(this.radiantAtmosphereMaterial);let n=new vt(e,this.radiantAtmosphereMaterial);return n.scale.setScalar(1.012),n.renderOrder=-1,n}createOuterAura(){let e=this.createTerrainGeometry(96,72);this.outerAuraMaterial=new nt({transparent:!0,depthWrite:!1,depthTest:!1,blending:lt,side:wt,uniforms:{uTime:{value:0},uIntensity:{value:1}},vertexShader:`
        varying vec3 vWorldNormal;
        varying vec3 vWorldPosition;
        varying vec3 vDirection;
        void main() {
          vWorldNormal = normalize(mat3(modelMatrix) * normal);
          vDirection = normalize(position);
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          gl_Position = projectionMatrix * viewMatrix * worldPosition;
        }
      `,fragmentShader:`
        uniform float uTime;
        uniform float uIntensity;
        varying vec3 vWorldNormal;
        varying vec3 vWorldPosition;
        varying vec3 vDirection;
        void main() {
          vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
          float facing = abs(dot(normalize(vWorldNormal), viewDirection));
          float rim = clamp(1.0 - facing, 0.0, 1.0);
          float softEdge = pow(rim, 1.2);
          float hotEdge = pow(rim, 5.0);
          float flow = 0.5 + 0.5 * sin(vDirection.x * 13.0 + vDirection.y * 8.0 - vDirection.z * 11.0 + uTime * 0.075);
          vec3 cyan = vec3(0.2, 0.7, 1.0);
          vec3 violet = vec3(0.56, 0.25, 1.0);
          vec3 magenta = vec3(1.0, 0.3, 0.82);
          vec3 auraColor = mix(cyan, violet, smoothstep(-0.72, 0.5, vDirection.y));
          auraColor = mix(auraColor, magenta, smoothstep(0.58, 0.96, flow) * 0.54);
          float energy = (softEdge * 0.26 + hotEdge * 0.92) * (0.88 + flow * 0.18) * uIntensity;
          float alpha = (softEdge * 0.08 + hotEdge * 0.18) * uIntensity;
          gl_FragColor = vec4(auraColor * energy, clamp(alpha, 0.0, 0.3));
        }
      `}),this.animatedMaterials.push(this.outerAuraMaterial);let t=new vt(e,this.outerAuraMaterial);return t.scale.setScalar(1.032),t.renderOrder=-4,t}registerStyledPointCloud(e,t,n,s,r,a,o){return this.styledPointClouds.push({points:e,calmColors:t,radiantColors:n,calmOpacity:s,radiantOpacity:r,calmSize:a,radiantSize:o}),e}createShellDust(){let e=Pn(91),t=window.innerWidth<720?6500:16800,n=new Float32Array(t*3),s=new Float32Array(t*3),r=new Float32Array(t*3);for(let h=0;h<t;h+=1){let f=this.randomDirection(e),d=bi(f),p=yi+d.displacement+(e()-.5)*(.055+d.ridge*.08);n[h*3]=f.x*p,n[h*3+1]=f.y*p,n[h*3+2]=f.z*p;let m=e(),x=ft.clamp((d.displacement+.29)/.65,0,1),g=m>.78,u=m<.3,T=g?[.78,.23,.9]:u?[.2,.7,1]:[.3,.34,1],S=.42+x*.24+d.ridge*.88;s[h*3]=T[0]*S,s[h*3+1]=T[1]*S,s[h*3+2]=T[2]*S,r[h*3]=.11+m*.08+x*.12+d.ridge*.48,r[h*3+1]=.16+m*.1+x*.17+d.ridge*.43,r[h*3+2]=.34+m*.13+x*.23+d.ridge*.4}let a=new Qe;a.setAttribute("position",new De(n,3));let o=new De(s,3),l=new De(r,3);a.setAttribute("color",o);let c=new Vt(a,new Jt({size:.02,map:this.glowTexture,transparent:!0,opacity:.82,vertexColors:!0,depthWrite:!1,blending:lt,alphaTest:.01,toneMapped:!1}));return this.registerStyledPointCloud(c,l,o,.72,.9,.018,.024)}createTerrainAccents(){let e=Pn(1312),t=[],n=[],s=[],r=window.innerWidth<720?.38:1,a=d=>{let p=bi(d),m=Math.pow(e(),5.2)*(.035+p.ridge*.19)+(e()-.5)*.025,x=yi+p.displacement+m;t.push(d.x*x,d.y*x,d.z*x);let g=e(),u=e(),T=g>.955,S=u<.22+p.ridge*.34,_=ft.clamp((p.displacement+.29)/.65,0,1),A=e(),E=.28+_*.15+p.ridge*.6+A*.2,R=T?[.96,1,1.08]:S?[.96,.3,.88]:[.28,.72,1];n.push(R[0]*E,R[1]*E,R[2]*E);let I=g>.975,b=u<.13+p.ridge*.28,M=.2+_*.14+p.ridge*.58+A*.18,C=I?[.9,.92,1]:b?[.78,.43,.75]:[.38,.57,.94];s.push(C[0]*M,C[1]*M,C[2]*M)};for(let d of qh){let p=Math.round((620+d.angularRadius*2550)*r);for(let m=0;m<p;m+=1){let x=e()*Math.PI*2,g=Math.pow(e(),.62)*1.28,u=d.angularRadius*g,T=d.tangentA.clone().multiplyScalar(Math.cos(x)).addScaledVector(d.tangentB,Math.sin(x)),S=d.center.clone().multiplyScalar(Math.cos(u)).addScaledVector(T,Math.sin(u)).normalize();a(S)}}let o=Math.round(5200*r);for(let d=0;d<o;d+=1){let p=this.randomDirection(e),m=bi(p);e()<.38+m.ridge*.58&&a(p)}let l=new Qe;l.setAttribute("position",new Ze(t,3));let c=new Ze(n,3),h=new Ze(s,3);l.setAttribute("color",c);let f=new Vt(l,new Jt({size:.034,map:this.glowTexture,transparent:!0,opacity:.9,vertexColors:!0,depthWrite:!1,blending:lt,alphaTest:.012,toneMapped:!1}));return this.registerStyledPointCloud(f,h,c,.88,.96,.032,.039)}createInnerDust(){let e=Pn(309),t=window.innerWidth<720?500:1100,n=new Float32Array(t*3),s=new Float32Array(t*3),r=new Float32Array(t*3);for(let h=0;h<t;h+=1){let f=this.randomDirection(e),d=yi*Math.cbrt(e())*.96;n[h*3]=f.x*d,n[h*3+1]=f.y*d,n[h*3+2]=f.z*d;let p=e();s[h*3]=.24+p*.46,s[h*3+1]=.31+(1-p)*.28,s[h*3+2]=.78+p*.32,r[h*3]=.27+p*.27,r[h*3+1]=.3+p*.19,r[h*3+2]=.64+p*.24}let a=new Qe;a.setAttribute("position",new De(n,3));let o=new De(s,3),l=new De(r,3);a.setAttribute("color",o);let c=new Vt(a,new Jt({size:.019,map:this.glowTexture,transparent:!0,opacity:.54,vertexColors:!0,depthWrite:!1,blending:lt,alphaTest:.01}));return this.registerStyledPointCloud(c,l,o,.41,.54,.019,.019)}createSparkleShell(){let e=Pn(777),t=window.innerWidth<720?900:2800,n=new Float32Array(t*3),s=new Float32Array(t*3),r=new Float32Array(t*3);for(let h=0;h<t;h+=1){let f=this.randomDirection(e),d=bi(f),p=yi+d.displacement+(e()-.5)*(.13+d.ridge*.12);n[h*3]=f.x*p,n[h*3+1]=f.y*p,n[h*3+2]=f.z*p;let m=e()>.74,x=e()>.95,g=.58+d.ridge*.48+e()*.3,u=x?[.96,1,1.08]:m?[.96,.34,.86]:[.32,.76,1];s[h*3]=u[0]*g,s[h*3+1]=u[1]*g,s[h*3+2]=u[2]*g;let T=.48+d.ridge*.34+Math.max(0,g-.58-d.ridge*.48)*.6;r[h*3]=(m?.76:.52)*T,r[h*3+1]=(m?.5:.66)*T,r[h*3+2]=(m?.74:.92)*T}let a=new Qe;a.setAttribute("position",new De(n,3));let o=new De(s,3),l=new De(r,3);a.setAttribute("color",o);let c=new Vt(a,new Jt({size:.032,map:this.glowTexture,transparent:!0,opacity:.9,vertexColors:!0,depthWrite:!1,blending:lt,alphaTest:.015,toneMapped:!1}));return this.registerStyledPointCloud(c,l,o,.86,.98,.03,.04)}createOrbitingMotes(){let e=Pn(2468),t=window.innerWidth<720?760:2200,n=new Float32Array(t*3),s=new Float32Array(t*3),r=new Float32Array(t*3),a=new Float32Array(t),o=new Float32Array(t),l=new Float32Array(t),c=new Float32Array(t),h=new Float32Array(t);for(let m=0;m<t;m+=1){let x=this.randomDirection(e),g=bi(x),u=-.012+Math.pow(e(),1.7)*(.16+g.ridge*.14),T=yi+g.displacement+u;n[m*3]=x.x*T,n[m*3+1]=x.y*T,n[m*3+2]=x.z*T;let S=e(),_=.58+e()*.5+g.ridge*.32,A=S<.38?[.3,.84,1.08]:S<.73?[.64,.38,1.04]:S<.94?[1.02,.34,.86]:[1.08,1.12,1.2],E=S<.5?[.48,.64,.94]:S<.88?[.62,.55,.9]:[.82,.75,.9];s[m*3]=A[0]*_,s[m*3+1]=A[1]*_,s[m*3+2]=A[2]*_,r[m*3]=E[0]*_*.72,r[m*3+1]=E[1]*_*.72,r[m*3+2]=E[2]*_*.72,a[m]=e()*Math.PI*2,o[m]=.34+e()*.72,l[m]=.018+Math.pow(e(),1.6)*.075,c[m]=.012+e()*.052,h[m]=.62+Math.pow(e(),2.2)*1.42}let f=new Qe;f.setAttribute("position",new De(n,3)),this.orbitingMoteRadiantColors=new De(s,3),this.orbitingMoteCalmColors=new De(r,3),f.setAttribute("color",this.orbitingMoteRadiantColors),f.setAttribute("aPhase",new De(a,1)),f.setAttribute("aSpeed",new De(o,1)),f.setAttribute("aDrift",new De(l,1)),f.setAttribute("aLift",new De(c,1)),f.setAttribute("aSize",new De(h,1));let d=new nt({transparent:!0,depthWrite:!1,depthTest:!0,blending:lt,vertexColors:!0,toneMapped:!1,uniforms:{uTime:{value:0},uOpacity:{value:.88},uPointSize:{value:.031},uPixelRatio:{value:Math.min(window.devicePixelRatio,this.performanceProfile.maxPixelRatio)},uMotionScale:{value:1}},vertexShader:`
        uniform float uTime;
        uniform float uPointSize;
        uniform float uPixelRatio;
        uniform float uMotionScale;
        attribute float aPhase;
        attribute float aSpeed;
        attribute float aDrift;
        attribute float aLift;
        attribute float aSize;
        varying vec3 vColor;
        varying float vFacing;
        varying float vTwinkle;

        void main() {
          vec3 direction = normalize(position);
          vec3 guide = abs(direction.y) > 0.86 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
          vec3 tangent = normalize(cross(direction, guide));
          vec3 bitangent = normalize(cross(direction, tangent));
          float time = uTime * aSpeed + aPhase;
          float primary = sin(time);
          float secondary = cos(time * 0.73 + aPhase * 1.71);
          float radial = sin(time * 0.57 + aPhase * 0.43);
          vec3 displaced = position
            + tangent * primary * aDrift * uMotionScale
            + bitangent * secondary * aDrift * 0.58 * uMotionScale
            + direction * radial * aLift * uMotionScale;

          vec4 worldPosition = modelMatrix * vec4(displaced, 1.0);
          vec3 worldDirection = normalize(mat3(modelMatrix) * direction);
          vec3 viewDirection = normalize(cameraPosition - worldPosition.xyz);
          vFacing = smoothstep(-0.2, 0.24, dot(worldDirection, viewDirection));
          vTwinkle = 0.72 + sin(time * 1.43 + aPhase * 2.2) * 0.28;
          vColor = color;

          vec4 viewPosition = viewMatrix * worldPosition;
          gl_Position = projectionMatrix * viewPosition;
          gl_PointSize = max(1.0, uPointSize * aSize * uPixelRatio * (300.0 / max(1.0, -viewPosition.z)));
        }
      `,fragmentShader:`
        uniform float uOpacity;
        varying vec3 vColor;
        varying float vFacing;
        varying float vTwinkle;

        void main() {
          vec2 centered = gl_PointCoord - vec2(0.5);
          float distanceToCenter = length(centered) * 2.0;
          float halo = 1.0 - smoothstep(0.12, 1.0, distanceToCenter);
          float core = 1.0 - smoothstep(0.0, 0.34, distanceToCenter);
          float alpha = (halo * 0.7 + core * 0.3) * uOpacity * vFacing * vTwinkle;
          if (alpha < 0.018) discard;
          vec3 color = vColor * (0.62 + core * 0.74);
          gl_FragColor = vec4(clamp(color, vec3(0.0), vec3(1.4)), alpha);
        }
      `});this.animatedMaterials.push(d);let p=new Vt(f,d);return p.renderOrder=1,p}createAmbientNetwork(){let e=new Pt,t=Pn(2026),n=window.innerWidth<720?120:320,s=[],r=new Float32Array(n*3),a=new Float32Array(n*3),o=[],l=[];for(let m=0;m<n;m+=1){let x=this.fibonacciDirection(m,n),g=co(x)-.035-t()*.055,u=x.multiplyScalar(g);s.push(u),r.set([u.x,u.y,u.z],m*3);let S=t()>.72?[.76,.46,.72]:[.42,.58,.88];a.set(S,m*3),m%5===0&&(o.push(u.x,u.y,u.z),l.push(...S))}let c=new Qe;c.setAttribute("position",new De(r,3)),c.setAttribute("color",new De(a,3)),e.add(new Vt(c,new Jt({size:.065,map:this.glowTexture,transparent:!0,opacity:.88,vertexColors:!0,depthWrite:!1,blending:lt,toneMapped:!1,alphaTest:.01})));let h=new Qe;h.setAttribute("position",new Ze(o,3)),h.setAttribute("color",new Ze(l,3)),e.add(new Vt(h,new Jt({size:.115,map:this.nodeMarkerTexture,transparent:!0,opacity:.9,vertexColors:!0,depthWrite:!1,blending:lt,alphaTest:.015,toneMapped:!1})));let f=[],d=[];s.forEach((m,x)=>{[s[(x+13)%n],s[(x+34)%n]].forEach((u,T)=>{if(m.distanceTo(u)>(T===0?2.15:1.5))return;f.push(m.x,m.y,m.z,u.x,u.y,u.z);let S=T===0?[.3,.43,.72]:[.53,.42,.7];d.push(...S,...S)})});let p=new Qe;return p.setAttribute("position",new Ze(f,3)),p.setAttribute("color",new Ze(d,3)),e.add(new Vn(p,new dn({vertexColors:!0,transparent:!0,opacity:.17,depthWrite:!1,blending:lt}))),e}createGraphLines(e,t,n,s,r){let a=[],o=[],l=(d,p,m,x)=>{a.push(d.x,d.y,d.z,p.x,p.y,p.z),o.push(m.r,m.g,m.b,x.r,x.g,x.b)};t.forEach(([d,p],m)=>{let x=n[m],g=s.get(x.id),u=new de(r.get(d));p.forEach(T=>l(g,s.get(T.id),u,u))});let c=new Map(e.nodes.map(d=>[d.id,d]));Fl(e.edges,this.performanceProfile.maxGraphEdges).forEach(d=>{let p=s.get(d.source),m=s.get(d.target),x=c.get(d.source),g=c.get(d.target);!p||!m||!x||!g||l(p,m,new de(r.get(x.group)),new de(r.get(g.group)))});let h=new Qe;h.setAttribute("position",new Ze(a,3)),h.setAttribute("color",new Ze(o,3));let f=new Vn(h,new dn({vertexColors:!0,transparent:!0,opacity:.25,depthWrite:!1,blending:lt}));return f.userData.kind="graph-lines",f}createBatchedNodeCloud(e,t,n,s,r,a){let o=e.length,l=new Float32Array(o*3),c=new Float32Array(o*3),h=new Float32Array(o*3),f=new Float32Array(o),d=new Float32Array(o).fill(1),p=new Float32Array(o).fill(1),m=new Map;e.forEach((E,R)=>{var H,k,Z;let I=t.get(E.id),b=new de((H=n.get(E.group))!=null?H:Bl),M=new de((k=s.get(E.group))!=null?k:Ol),C=(Z=this.degrees.get(E.id))!=null?Z:0,V=.03+Math.sqrt(Math.min(C,16))*.018;I.toArray(l,R*3),b.toArray(c,R*3),M.toArray(h,R*3),f[R]=V*5.2*this.performanceProfile.pointSizeScale,m.set(E.id,R)});let x=new Qe;x.setAttribute("position",new De(l,3));let g=new De(c,3),u=new De(h,3),T=new De(d,1),S=new De(p,1);x.setAttribute("color",this.sphereStyle==="radiant"?g:u),x.setAttribute("aRadius",new De(f,1)),x.setAttribute("aVisibility",T),x.setAttribute("aScale",S);let _=new nt({uniforms:{uPixelRatio:{value:Math.min(window.devicePixelRatio,this.performanceProfile.maxPixelRatio)},uViewportHeight:{value:Math.max(this.canvas.clientHeight,1)},uEnergy:{value:this.sphereStyle==="radiant"?1:.78}},vertexColors:!0,transparent:!0,depthWrite:!1,blending:lt,vertexShader:`
        uniform float uPixelRatio;
        uniform float uViewportHeight;
        attribute float aRadius;
        attribute float aVisibility;
        attribute float aScale;
        varying vec3 vColor;
        varying float vVisibility;

        void main() {
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          float projectedSize = aRadius * uViewportHeight * uPixelRatio / (0.767 * max(1.0, -mvPosition.z));
          gl_PointSize = clamp(projectedSize * aScale, 1.25, 54.0);
          gl_Position = projectionMatrix * mvPosition;
          vColor = color;
          vVisibility = aVisibility;
        }
      `,fragmentShader:`
        uniform float uEnergy;
        varying vec3 vColor;
        varying float vVisibility;

        void main() {
          vec2 centered = gl_PointCoord * 2.0 - 1.0;
          float distanceToCenter = length(centered);
          if (distanceToCenter > 1.0) discard;
          float halo = pow(max(0.0, 1.0 - distanceToCenter), 2.4);
          float core = 1.0 - smoothstep(0.08, 0.34, distanceToCenter);
          float ring = smoothstep(0.76, 0.58, distanceToCenter) * smoothstep(0.42, 0.58, distanceToCenter);
          float alpha = (halo * 0.46 + core * 0.9 + ring * 0.2) * vVisibility;
          vec3 color = vColor * (0.7 + halo * 0.75 + core * 1.45) * uEnergy;
          gl_FragColor = vec4(color, alpha);
        }
      `}),A=new Vt(x,_);return A.renderOrder=3,A.userData.kind="batched-notes",r.filter(E=>a.has(E.id)).forEach(E=>this.ensureBatchedLabel(E,t.get(E.id),!0,!0)),{points:A,nodes:e,indexById:m,calmColors:u,radiantColors:g,visibility:T,scale:S}}ensureBatchedLabel(e,t,n,s){let r=this.batchedLabels.get(e.id);if(r)return r.important||(r.important=n),r.base||(r.base=s),r;let a=document.createElement("span");a.className="graph-label graph-label--batched",a.textContent=e.title;let o=new is(a);o.position.copy(t),o.center.set(0,1.15),this.networkRoot.add(o);let l={node:e,object:o,important:n,base:s};return this.batchedLabels.set(e.id,l),l}nodeMatchesSearch(e){return!this.search||e.title.toLocaleLowerCase().includes(this.search)||e.path.toLocaleLowerCase().includes(this.search)||e.group.toLocaleLowerCase().includes(this.search)}syncTransientBatchedLabels(){if(!this.batchedNodeCloud)return;let e=new Set;if(this.virtualLabelIds.forEach(t=>e.add(t)),this.selectedId&&e.add(this.selectedId),this.hoveredId&&e.add(this.hoveredId),this.focusedId){let t=this.performanceProfile.focusLabelBudget;for(let n of this.batchedNodeCloud.nodes){if(t<=0)break;this.focusNodeDistances.has(n.id)&&(e.add(n.id),t-=1)}}if(this.search){let t=Math.min(80,this.performanceProfile.focusLabelBudget);for(let n of this.batchedNodeCloud.nodes){if(t<=0)break;this.nodeMatchesSearch(n)&&(e.add(n.id),t-=1)}}for(let[t,n]of this.batchedLabels)n.base||e.has(t)||(n.object.removeFromParent(),n.object.element.remove(),this.batchedLabels.delete(t));e.forEach(t=>{let n=this.nodesById.get(t),s=this.nodePositions.get(t);n&&s&&n.kind!=="cluster"&&this.ensureBatchedLabel(n,s,!1,!1)})}refreshVisibleBatchedLabels(){let e=this.batchedNodeCloud;if(this.virtualLabelIds.clear(),!e||this.labelMode!=="all"||this.focusedId||this.search){this.syncTransientBatchedLabels();return}this.root.updateMatrixWorld(!0);let t=[];for(let n of e.nodes){let s=this.nodePositions.get(n.id);s&&(this.tempWorld.copy(s).applyMatrix4(this.root.matrixWorld),this.tempNormal.copy(s).normalize().transformDirection(this.root.matrixWorld),this.tempCameraDirection.copy(this.camera.position).sub(this.tempWorld).normalize(),this.tempNormal.dot(this.tempCameraDirection)>.08&&t.push(n.id))}Fl(t,this.performanceProfile.baseLabelBudget).forEach(n=>this.virtualLabelIds.add(n)),this.syncTransientBatchedLabels()}applyBatchedVisualState(){let e=this.batchedNodeCloud;e&&(e.nodes.forEach((t,n)=>{let s=this.nodeMatchesSearch(t),r=t.id===this.selectedId,a=t.id===this.hoveredId,o=this.focusedId?this.focusNodeDistances.get(t.id):void 0,l=!this.focusedId||o!==void 0,c=this.focusedId?l?o===0?1:Math.max(.34,1-(o!=null?o:0)*.2):.022:1,h=(s?1:.045)*c,f=o===1?1.14:o===2?1.06:1;e.visibility.setX(n,h),e.scale.setX(n,r?1.72:a?1.36:f)}),e.visibility.needsUpdate=!0,e.scale.needsUpdate=!0)}updateBatchedLabels(){if(!(!this.batchedNodeCloud||this.labelMode==="none"&&!this.focusedId)){this.root.updateMatrixWorld(!0);for(let e of this.batchedLabels.values()){let{node:t,object:n,important:s}=e,r=this.nodeMatchesSearch(t),a=t.id===this.selectedId,o=t.id===this.hoveredId,l=this.focusedId?this.focusNodeDistances.get(t.id):void 0,c=!this.focusedId||l!==void 0;n.getWorldPosition(this.tempWorld),this.tempNormal.copy(n.position).normalize().transformDirection(this.root.matrixWorld),this.tempCameraDirection.copy(this.camera.position).sub(this.tempWorld).normalize();let h=this.tempNormal.dot(this.tempCameraDirection),f=this.focusedId?c:this.labelMode==="all"||this.labelMode==="important"&&(s||a||o||!!(this.search&&r)),d=l===void 0?1:Math.max(.42,1-l*.2),p=f&&r?ft.smoothstep(h,-.12,.34)*d:0,m=n.element;m.classList.toggle("is-selected",a),m.classList.toggle("is-focus-neighbor",!!(this.focusedId&&c&&!a)),m.dataset.focusDistance=l===void 0?"":String(l),m.style.opacity=String(p),m.style.visibility=p<.06?"hidden":"visible"}}}createNodeVisual(e,t,n,s,r,a){var E,R;let o=new Pt;o.position.copy(t);let l=e.kind==="cluster"?(E=e.noteCount)!=null?E:1:(R=this.degrees.get(e.id))!=null?R:0,c=r?.11+Math.min(l,28)*.0021:.03+Math.sqrt(Math.min(l,16))*.018,h=new de(n),f=new de(s),d=(this.sphereStyle==="radiant"?h:f).clone(),p=d.clone().lerp(oo,r?.76:.64),m=new vt(new Gn(c,24,18),new on({color:d,transparent:!0,opacity:.9})),x=new vt(new Gn(c*(r?.21:.18),18,12),new on({color:p,transparent:!0,opacity:r?.96:.86})),g=new qi(new li({map:this.nodeMarkerTexture,color:d,transparent:!0,opacity:r?.92:.78,depthWrite:!1,blending:lt,toneMapped:!1,alphaTest:.012})),u=new qi(new li({map:this.glowTexture,color:d,transparent:!0,opacity:r?.58:.36,depthWrite:!1,blending:lt,toneMapped:!1,alphaTest:.012}));g.scale.setScalar(c*(r?5.6:5));let T=c*(r?6.4:5.8);u.scale.setScalar(T),o.add(u,g,m,x);let S=new vt(new Gn(Math.max(c*2.1,.15),10,8),new on({transparent:!0,opacity:0,depthWrite:!1}));S.userData.node=e,o.add(S),this.hitMeshes.push(S);let _=document.createElement("span");_.className=r?"graph-label graph-label--cluster":"graph-label",_.textContent=e.title;let A=new is(_);return A.position.set(c*1.5,r?-.22:-.13,0),o.add(A),{node:e,group:o,hit:S,core:m,inner:x,marker:g,glow:u,label:A,importantLabel:a,baseScale:r?1.06:1,calmColor:f,radiantColor:h}}createHubRings(e,t,n){let s=new Pt;s.position.copy(e),s.quaternion.setFromUnitVectors(new L(0,0,1),e.clone().normalize()),[.22,.34,.48,.63].forEach((l,c)=>{let h=Array.from({length:72},(p,m)=>{let x=m/72*Math.PI*2;return new L(Math.cos(x)*l,Math.sin(x)*l,0)}),f=new dn({color:this.sphereStyle==="radiant"?t:n,transparent:!0,opacity:.48-c*.085,depthWrite:!1,blending:lt});this.styledLineMaterials.push({material:f,calmColor:new de(n),radiantColor:new de(t)});let d=new Ps(new Qe().setFromPoints(h),f);s.add(d)});let r=[];for(let l=0;l<20;l+=1){let c=l/20*Math.PI*2;r.push(0,0,0,Math.cos(c)*.64,Math.sin(c)*.64,0)}let a=new dn({color:this.sphereStyle==="radiant"?t:n,transparent:!0,opacity:.18,depthWrite:!1,blending:lt});this.styledLineMaterials.push({material:a,calmColor:new de(n),radiantColor:new de(t)});let o=new Vn(new Qe().setAttribute("position",new Ze(r,3)),a);return s.add(o),s}applyVisualState(){this.syncTransientBatchedLabels();for(let e of this.nodeVisuals){let{node:t,group:n,label:s}=e,r=this.nodeMatchesSearch(t),a=t.id===this.selectedId,o=t.id===this.hoveredId,l=this.focusedId?this.focusNodeDistances.get(t.id):void 0,c=!this.focusedId||l!==void 0;n.userData.visualState={matches:r,selected:a,hovered:o,focusDistance:l,inFocus:c};let h=l===1?1.12:l===2?1.05:1;if(n.userData.targetScale=e.baseScale*(a?1.58:o?1.25:h),s){let f=s.element;f.classList.toggle("is-selected",a),f.classList.toggle("is-focus-neighbor",!!(this.focusedId&&c&&!a)),f.dataset.searchMatch=r?"true":"false",f.dataset.focusDistance=l===void 0?"":String(l)}}this.applyBatchedVisualState()}updateNodeVisuals(e,t){var n,s,r,a,o;this.root.updateMatrixWorld(!0);for(let l of this.nodeVisuals){let{node:c,group:h,core:f,inner:d,marker:p,glow:m,label:x}=l,g=h.userData.visualState,u=(n=g==null?void 0:g.matches)!=null?n:!0,T=(s=g==null?void 0:g.selected)!=null?s:!1,S=(r=g==null?void 0:g.hovered)!=null?r:!1,_=g==null?void 0:g.focusDistance,A=(a=g==null?void 0:g.inFocus)!=null?a:!0;h.getWorldPosition(this.tempWorld),this.tempNormal.copy(h.position).normalize().transformDirection(this.root.matrixWorld),this.tempCameraDirection.copy(this.camera.position).sub(this.tempWorld).normalize();let E=this.tempNormal.dot(this.tempCameraDirection),R=.24+ft.smoothstep(E,-.42,.38)*.76,I=this.focusedId?A?_===0?1:Math.max(.36,1-(_!=null?_:0)*.2):.028:1,b=(u?1:.075)*I*R,M=c.kind==="cluster",C=this.sphereStyle==="radiant",V=C?1:.9,H=C?1:.84,k=C?1:.68;f.material.opacity=b*(M?.92:.78)*V,d.material.opacity=b*(M?.98:.88)*V,p.material.opacity=b*(T||S?1:M?.88:.72)*H,m.material.opacity=b*(T||S?.78:M?.5:.3)*k;let Z=T&&!this.reducedMotion?1+Math.sin(e*2.4)*.022:1,W=((o=h.userData.targetScale)!=null?o:l.baseScale)*Z,K=this.reducedMotion?1:1-Math.exp(-t*13);if(h.scale.setScalar(ft.lerp(h.scale.x,W,K)),x){let z=x.element.dataset.searchMatch!=="false",ae=(this.focusedId?A:this.labelMode==="all"||this.labelMode==="important"&&(l.importantLabel||T||S||this.search.length>0&&z))&&z?ft.smoothstep(E,-.12,.34)*I:0;x.element.style.opacity=String(ae),x.element.style.visibility=ae<.06?"hidden":"visible"}}this.updateBatchedLabels()}bindEvents(){this.canvas.addEventListener("pointerdown",e=>{this.dragging=!0,this.moved=!1,this.focusing=!1,this.lastX=e.clientX,this.lastY=e.clientY,this.velocityX=0,this.velocityY=0,this.autoRotate=!1,this.canvas.setPointerCapture(e.pointerId)}),this.canvas.addEventListener("pointermove",e=>{var s;if(this.dragging){let r=e.clientX-this.lastX,a=e.clientY-this.lastY;Math.abs(r)+Math.abs(a)>2&&(this.moved=!0),this.velocityY=r*.0035,this.velocityX=a*.0035,this.root.rotation.y+=this.velocityY,this.root.rotation.x+=this.velocityX,this.lastX=e.clientX,this.lastY=e.clientY}this.updatePointer(e);let t=this.pickNode(),n=(s=t==null?void 0:t.id)!=null?s:null;n!==this.hoveredId&&(this.hoveredId=n,this.canvas.classList.toggle("is-hovering-node",!!n),this.applyVisualState()),this.onHover(t!=null?t:null,e.clientX,e.clientY)}),this.canvas.addEventListener("pointerup",e=>{if(this.dragging=!1,this.canvas.releasePointerCapture(e.pointerId),this.moved)return;this.updatePointer(e);let t=this.pickNode();t?this.focusNode(t.id):this.clearFocus(!0),this.onSelect(t!=null?t:null)}),this.canvas.addEventListener("pointerleave",()=>{this.dragging=!1,this.hoveredId=null,this.canvas.classList.remove("is-hovering-node"),this.applyVisualState(),this.onHover(null,0,0)}),this.canvas.addEventListener("wheel",e=>{e.preventDefault(),this.camera.position.z=ft.clamp(this.camera.position.z+e.deltaY*.007,7.1,26),this.autoRotate=!1,this.focusing=!1,this.cameraTweening=!1},{passive:!1})}updatePointer(e){let t=this.canvas.getBoundingClientRect();this.pointer.x=(e.clientX-t.left)/t.width*2-1,this.pointer.y=-((e.clientY-t.top)/t.height)*2+1}pickNode(){var t;this.raycaster.setFromCamera(this.pointer,this.camera);let e=[...this.hitMeshes];this.batchedNodeCloud&&e.push(this.batchedNodeCloud.points);for(let n of this.raycaster.intersectObjects(e,!1)){if(this.batchedNodeCloud&&n.object===this.batchedNodeCloud.points&&n.index!==void 0)return(t=this.batchedNodeCloud.nodes[n.index])!=null?t:null;let s=n.object.userData.node;if(s)return s}return null}resize(){var s;let e=(s=this.canvas.parentElement)!=null?s:this.canvas,t=Math.max(e.clientWidth,1),n=Math.max(e.clientHeight,1);this.camera.aspect=t/n,this.defaultCameraZ=t<720?21.5:12,this.camera.position.z=this.focusedId?t<720?18.8:10.45:this.defaultCameraZ,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,n,!1),this.composer.setSize(t,n),this.labelRenderer.setSize(t,n),this.orbitingMotes&&(this.orbitingMotes.material.uniforms.uPixelRatio.value=Math.min(window.devicePixelRatio,this.performanceProfile.maxPixelRatio)),this.batchedNodeCloud&&(this.batchedNodeCloud.points.material.uniforms.uPixelRatio.value=Math.min(window.devicePixelRatio,this.performanceProfile.maxPixelRatio),this.batchedNodeCloud.points.material.uniforms.uViewportHeight.value=n),this.cosmicBackgroundEnabled&&this.refreshCosmicBackground()}refreshCosmicBackground(){var l,c;let e=(l=this.canvas.parentElement)!=null?l:this.canvas,t=Math.max(e.clientWidth,1),n=Math.max(e.clientHeight,1),s=t/n;if(this.cosmicBackgroundTexture&&Math.abs(s-this.cosmicBackgroundAspect)<.06){this.scene.background=this.cosmicBackgroundTexture;return}let r=t<720?1024:this.performanceProfile.tier==="full"?1600:1280,a=s>=1?r:Math.max(512,Math.round(r*s)),o=s>=1?Math.max(512,Math.round(r/s)):r;(c=this.cosmicBackgroundTexture)==null||c.dispose(),this.cosmicBackgroundTexture=Gg(a,o),this.cosmicBackgroundAspect=s,this.scene.background=this.cosmicBackgroundTexture}fibonacciDirection(e,t){let n=Math.max(t,1),s=1-(e+.5)/n*2,r=Math.sqrt(Math.max(0,1-s*s)),a=Math.PI*(3-Math.sqrt(5))*e;return new L(Math.cos(a)*r,s,Math.sin(a)*r)}randomDirection(e){let t=e()*2-1,n=e()*Math.PI*2,s=Math.sqrt(1-t*t);return new L(Math.cos(n)*s,t,Math.sin(n)*s)}clearNetwork(){this.nodeVisuals.length=0,this.hitMeshes.length=0,this.styledLineMaterials.length=0,this.networkRoot.traverse(e=>{var n,s;e instanceof is&&e.element.remove();let t=e;(n=t.geometry)==null||n.dispose(),Array.isArray(t.material)?t.material.forEach(r=>r.dispose()):(s=t.material)==null||s.dispose()}),this.networkRoot.clear(),this.batchedLabels.clear(),this.virtualLabelIds.clear(),this.batchedNodeCloud=null,this.focusLineRoot=new Pt,this.graphLineMaterial=null}destroy(){var e;cancelAnimationFrame(this.animationFrame),this.resizeObserver.disconnect(),this.clearNetwork(),this.labelRenderer.domElement.remove(),this.glowTexture.dispose(),this.nodeMarkerTexture.dispose(),(e=this.cosmicBackgroundTexture)==null||e.dispose(),this.composer.dispose(),this.renderer.dispose()}};function zl(i){let e=new Map(i.nodes.map(a=>[a.id,a])),t=new Map,n=new Map,s=new Map,r=new Map;return i.nodes.forEach(a=>{var o;t.set(a.group,[...(o=t.get(a.group))!=null?o:[],a]),n.set(a.id,0),s.set(a.id,0)}),i.edges.forEach(a=>{var c,h,f,d,p,m;n.set(a.target,((c=n.get(a.target))!=null?c:0)+1),s.set(a.source,((h=s.get(a.source))!=null?h:0)+1);let o=(f=e.get(a.source))==null?void 0:f.group,l=(d=e.get(a.target))==null?void 0:d.group;o&&r.set(o,((p=r.get(o))!=null?p:0)+1),l&&l!==o&&r.set(l,((m=r.get(l))!=null?m:0)+1)}),{nodesById:e,nodesByGroup:t,adjacency:Js(i),incomingCounts:n,outgoingCounts:s,incidentEdgesByGroup:r}}function qg(i){return i.replace(/^\d+(?:[.]\d+)*(?:[.]\s*|\s+)/,"")||i}function Yg(i,e=1){let t=i.split("/").slice(0,-1);if(t.length===0)return"Root";let n=Number.isFinite(e)?Math.trunc(e):1,s=Math.min(Math.max(n,1),t.length);return t.slice(0,s).map(qg).join("/")||"Root"}function Yh(i,e=1){var o;let t=i.vault.getMarkdownFiles(),n=t.map(l=>({id:l.path,title:l.basename,path:l.path,group:Yg(l.path,e)})),s=new Set(n.map(l=>l.id)),r=new Set,a=[];for(let l of t){let c=(o=i.metadataCache.resolvedLinks[l.path])!=null?o:{};for(let h of Object.keys(c)){if(!s.has(h)||h===l.path)continue;let f=[l.path,h].sort().join("\0");r.has(f)||(r.add(f),a.push({source:l.path,target:h}))}}return{nodes:n,edges:a}}var as="cosmograph-3d-view",Zg=`
  :host { display: block; width: 100%; height: 100%; }
  #app { width: 100%; height: 100%; }
  .app-shell--obsidian {
    width: 100%;
    height: 100%;
    min-height: 0;
    color-scheme: dark;
    color: #e9edf4;
    font-family: "Avenir Next", Avenir, "SF Pro Display", system-ui, sans-serif;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    --accent: #f08bd7;
    --surface: rgba(7, 9, 16, 0.91);
    --line: rgba(171, 184, 214, 0.12);
    --muted: #858b99;
    --radius: 14px;
  }
  .panel-open {
    width: 100%;
    min-height: 34px;
    margin: 0 0 4px;
    border: 1px solid rgba(216, 157, 196, 0.18);
    border-radius: 9px;
    background: rgba(185, 123, 160, 0.1);
    color: #e5c8da;
    cursor: pointer;
    font-size: 9px;
  }
  .panel-open:hover { background: rgba(185, 123, 160, 0.18); color: #fff0f8; }
  .panel-open[hidden] { display: none; }
  .recent-block li { cursor: pointer; }
  .recent-block li:focus-visible { outline: 1px solid rgba(240, 139, 215, 0.62); outline-offset: 1px; }
  .empty-state {
    position: absolute;
    z-index: 3;
    inset: 0;
    display: grid;
    place-content: center;
    padding: 32px;
    color: #959cab;
    text-align: center;
    font-size: 12px;
    pointer-events: none;
  }
  .empty-state[hidden] { display: none; }
  .app-shell--obsidian .scene-settings { right: 22px; }
  @media (max-width: 760px) {
    .app-shell--obsidian .scene-settings { right: 14px; }
  }
`;function $g(){return`
    <main class="app-shell app-shell--obsidian">
      <div class="scene-settings" id="scene-settings">
        <button class="scene-settings__trigger" id="scene-settings-trigger" type="button" aria-label="\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0441\u0446\u0435\u043D\u044B" aria-controls="scene-settings-menu" aria-expanded="false" title="\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0441\u0446\u0435\u043D\u044B"><span aria-hidden="true"></span><span aria-hidden="true"></span><span aria-hidden="true"></span></button>
        <div class="scene-settings__menu" id="scene-settings-menu" role="dialog" aria-label="\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0441\u0446\u0435\u043D\u044B" hidden>
          <div class="scene-settings__heading">
            <span>\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0441\u0446\u0435\u043D\u044B</span>
            <small>\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435</small>
          </div>
          <div class="scene-settings__row scene-settings__row--labels">
            <span class="scene-settings__copy"><strong>\u041F\u043E\u0434\u043F\u0438\u0441\u0438 \u0443\u0437\u043B\u043E\u0432</strong><small>\u041A\u0430\u043A\u0438\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C</small></span>
            <div class="label-mode-switch" role="group" aria-label="\u0420\u0435\u0436\u0438\u043C \u043F\u043E\u0434\u043F\u0438\u0441\u0435\u0439 \u0443\u0437\u043B\u043E\u0432">
              <button type="button" data-label-mode="none" aria-pressed="false">\u041D\u0435\u0442</button>
              <button type="button" data-label-mode="important" aria-pressed="true" class="is-active">\u0412\u0430\u0436\u043D\u044B\u0435</button>
              <button type="button" data-label-mode="all" aria-pressed="false">\u0412\u0441\u0435</button>
            </div>
          </div>
          <div class="scene-settings__row scene-settings__row--clusters">
            <span class="scene-settings__copy"><strong>\u0413\u043B\u0443\u0431\u0438\u043D\u0430 \u043A\u043B\u0430\u0441\u0442\u0435\u0440\u043E\u0432</strong><small>\u041D\u0430\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0434\u0440\u043E\u0431\u0438\u0442\u044C \u043F\u0430\u043F\u043A\u0438</small></span>
            <div class="cluster-depth-switch" role="group" aria-label="\u0413\u043B\u0443\u0431\u0438\u043D\u0430 \u043F\u0430\u043F\u043E\u043A \u0434\u043B\u044F \u043A\u043B\u0430\u0441\u0442\u0435\u0440\u043E\u0432">
              <button type="button" data-group-depth="1" aria-label="\u041E\u0434\u0438\u043D \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u043F\u0430\u043F\u043E\u043A" aria-pressed="true" class="is-active">1</button>
              <button type="button" data-group-depth="2" aria-label="\u0414\u0432\u0430 \u0443\u0440\u043E\u0432\u043D\u044F \u043F\u0430\u043F\u043E\u043A" aria-pressed="false">2</button>
              <button type="button" data-group-depth="3" aria-label="\u0422\u0440\u0438 \u0443\u0440\u043E\u0432\u043D\u044F \u043F\u0430\u043F\u043E\u043A" aria-pressed="false">3</button>
            </div>
          </div>
          <div class="scene-settings__actions">
            <button class="scene-menu-action" id="cosmic-background-toggle" type="button" aria-pressed="false">
              <span><strong>\u041A\u043E\u0441\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0444\u043E\u043D</strong><small>\u0422\u0443\u043C\u0430\u043D\u043D\u043E\u0441\u0442\u0438 \u0438 \u0434\u0430\u043B\u044C\u043D\u0438\u0435 \u0433\u0430\u043B\u0430\u043A\u0442\u0438\u043A\u0438</small></span>
              <span class="scene-menu-action__value">\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C</span>
            </button>
            <button class="scene-menu-action" id="immersive-toggle" type="button" aria-pressed="false">
              <span><strong>\u0421\u0446\u0435\u043D\u0430</strong><small id="immersive-state">\u0421\u043A\u0440\u044B\u0442\u044C \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441</small></span>
              <span class="scene-menu-action__value">\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C</span>
            </button>
            <button class="scene-menu-action" id="refresh-button" type="button">
              <span><strong>\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C</strong><small>\u041F\u0435\u0440\u0435\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u0433\u0440\u0430\u0444 \u0438\u0437 vault</small></span>
              <span class="scene-menu-action__value">\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C</span>
            </button>
          </div>
        </div>
      </div>

      <header class="topbar">
        <div class="brand" aria-label="CosmoGraph">
          <span class="brand-mark" aria-hidden="true"><span></span></span>
          <span class="brand-copy"><strong>CosmoGraph</strong><small>\u0432\u0430\u0448 vault, \u043A\u0430\u043A \u043F\u043B\u0430\u043D\u0435\u0442\u0430.</small></span>
        </div>
      </header>

      <aside class="library-sidebar" aria-label="\u0420\u0430\u0437\u0434\u0435\u043B\u044B \u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0430">
        <nav id="group-list"></nav>
        <label class="search-field">
          <span class="sr-only">\u041F\u043E\u0438\u0441\u043A \u0437\u0430\u043C\u0435\u0442\u043A\u0438</span>
          <input id="search-input" type="search" placeholder="\u041F\u043E\u0438\u0441\u043A \u0437\u0430\u043C\u0435\u0442\u043E\u043A" autocomplete="off" />
          <span class="search-shortcut" aria-hidden="true">\u2318F</span>
        </label>
      </aside>

      <section class="viewport" aria-label="\u0422\u0440\u0451\u0445\u043C\u0435\u0440\u043D\u044B\u0439 \u0433\u0440\u0430\u0444 \u0437\u0430\u043C\u0435\u0442\u043E\u043A">
        <canvas id="graph-canvas"></canvas>
        <div class="node-tooltip" id="node-tooltip" role="tooltip" hidden></div>
        <div class="empty-state" id="empty-state" hidden>\u0412 \u044D\u0442\u043E\u043C vault \u043F\u043E\u043A\u0430 \u043D\u0435\u0442 Markdown-\u0437\u0430\u043C\u0435\u0442\u043E\u043A.</div>
      </section>

      <aside class="note-panel" id="note-panel" aria-live="polite" hidden>
        <div class="panel-heading">
          <span class="panel-swatch" aria-hidden="true"></span>
          <p class="panel-group" id="panel-group"></p>
          <button class="panel-close" id="panel-close" type="button" aria-label="\u0417\u0430\u043A\u0440\u044B\u0442\u044C">\u0417\u0430\u043A\u0440\u044B\u0442\u044C</button>
        </div>
        <h1 id="panel-title"></h1>
        <p class="panel-path" id="panel-path"></p>
        <p class="panel-preview" id="panel-preview" hidden></p>
        <button class="panel-open" id="panel-open" type="button">\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0437\u0430\u043C\u0435\u0442\u043A\u0443</button>
        <div class="focus-controls" id="focus-controls">
          <span class="focus-controls__copy"><strong>\u041E\u043A\u0440\u0443\u0436\u0435\u043D\u0438\u0435</strong><small id="focus-summary">\u0411\u043B\u0438\u0436\u0430\u0439\u0448\u0438\u0435 \u0441\u0432\u044F\u0437\u0438 \u0437\u0430\u043C\u0435\u0442\u043A\u0438</small></span>
          <div class="focus-depth-switch" role="group" aria-label="\u0413\u043B\u0443\u0431\u0438\u043D\u0430 \u0441\u0432\u044F\u0437\u0435\u0439 \u0432 \u0444\u043E\u043A\u0443\u0441\u0435">
            <button type="button" data-focus-depth="1" aria-label="\u041E\u0434\u0438\u043D \u0448\u0430\u0433 \u0441\u0432\u044F\u0437\u0435\u0439" aria-pressed="true" class="is-active">1</button>
            <button type="button" data-focus-depth="2" aria-label="\u0414\u0432\u0430 \u0448\u0430\u0433\u0430 \u0441\u0432\u044F\u0437\u0435\u0439" aria-pressed="false">2</button>
            <button type="button" data-focus-depth="3" aria-label="\u0422\u0440\u0438 \u0448\u0430\u0433\u0430 \u0441\u0432\u044F\u0437\u0435\u0439" aria-pressed="false">3</button>
          </div>
        </div>
        <dl class="panel-meta">
          <div><dt id="metric-label-a">\u0412\u0445\u043E\u0434\u044F\u0449\u0438\u0435 \u0441\u0432\u044F\u0437\u0438</dt><dd id="metric-value-a">0</dd></div>
          <div><dt id="metric-label-b">\u0418\u0441\u0445\u043E\u0434\u044F\u0449\u0438\u0435 \u0441\u0432\u044F\u0437\u0438</dt><dd id="metric-value-b">0</dd></div>
        </dl>
        <div class="recent-block">
          <p>\u0421\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0435 \u0437\u0430\u043C\u0435\u0442\u043A\u0438</p>
          <ul id="recent-notes"></ul>
        </div>
      </aside>

      <footer class="view-dock" aria-label="\u0420\u0435\u0436\u0438\u043C \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F">
        <div class="sphere-style-switch" role="group" aria-label="\u0421\u0442\u0438\u043B\u044C \u0441\u0444\u0435\u0440\u044B">
          <button type="button" data-sphere-style="calm" aria-pressed="false">\u041C\u044F\u0433\u043A\u0430\u044F</button>
          <button type="button" data-sphere-style="radiant" aria-pressed="true">\u0421\u0438\u044F\u043D\u0438\u0435</button>
        </div>
        <button type="button" id="focus-button" aria-pressed="false">\u0424\u043E\u043A\u0443\u0441</button>
        <span id="dock-status">\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430</span>
      </footer>

      <div class="loading-state" id="loading-state" hidden>
        <div class="loading-orbit" aria-hidden="true"></div>
        <p>\u0421\u0442\u0440\u043E\u0438\u043C \u043A\u0430\u0440\u0442\u0443 \u0441\u0432\u044F\u0437\u0435\u0439</p>
      </div>
    </main>
  `}var Qs=class extends Ks.ItemView{constructor(t,n){super(t);this.plugin=n;$(this,"graph",null);$(this,"shadow",null);$(this,"shell",null);$(this,"currentGraph",{nodes:[],edges:[]});$(this,"currentLookup",zl(this.currentGraph));$(this,"currentNode",null);$(this,"refreshTimer",null);$(this,"isImmersive",!1);$(this,"isFocusMode",!1);$(this,"currentFocusDepth",1)}getViewType(){return as}getDisplayText(){return"CosmoGraph 3D"}getIcon(){return"orbit"}async onOpen(){this.contentEl.empty(),this.contentEl.addClass("cosmograph-content");let t=this.contentEl.createDiv({cls:"cosmograph-host"});this.shadow=t.attachShadow({mode:"open"});let n=new CSSStyleSheet;n.replaceSync(`${Yl}
${Zg}`),this.shadow.adoptedStyleSheets=[n];let s=createDiv();s.id="app";let a=new DOMParser().parseFromString($g(),"text/html").body.firstElementChild;if(!a)throw new Error("CosmoGraph UI markup could not be created.");s.append(a),this.shadow.append(s),this.shell=this.find(".app-shell");let o=this.find("#graph-canvas");try{this.graph=new ho(o)}catch(l){this.find("#empty-state").textContent=l instanceof Error?`\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C WebGL: ${l.message}`:"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C WebGL.",this.find("#empty-state").hidden=!1;return}this.bindInterface(),this.graph.setHandlers(l=>this.showNode(l),(l,c,h)=>this.showTooltip(l,c,h)),this.applySettings(),this.refreshGraph(),this.registerEvent(this.app.vault.on("create",()=>this.scheduleRefresh())),this.registerEvent(this.app.vault.on("delete",()=>this.scheduleRefresh())),this.registerEvent(this.app.vault.on("rename",()=>this.scheduleRefresh())),this.registerEvent(this.app.metadataCache.on("resolved",()=>this.scheduleRefresh())),this.registerEvent(this.app.metadataCache.on("changed",()=>this.scheduleRefresh()))}async onClose(){var t;this.refreshTimer!==null&&window.clearTimeout(this.refreshTimer),(t=this.graph)==null||t.destroy(),this.graph=null,this.shadow=null,this.shell=null,this.contentEl.removeClass("cosmograph-content"),this.contentEl.empty()}applySettings(){this.setSphereStyle(this.plugin.preferences.sphereStyle,!1),this.setCosmicBackground(this.plugin.preferences.cosmicBackground,!1),this.setLabelMode(this.plugin.preferences.labelMode,!1),this.setGroupDepth(this.plugin.preferences.groupDepth,!1)}refreshGraph(){if(!this.graph)return;let t=this.find("#loading-state");t.hidden=!1,window.requestAnimationFrame(()=>{var n,s,r;try{this.isFocusMode&&this.setFocusMode(!1),this.currentGraph=Yh(this.app,this.plugin.preferences.groupDepth),this.currentLookup=zl(this.currentGraph),(n=this.graph)==null||n.setData(this.currentGraph),this.renderGroupList();let a=`${this.currentGraph.nodes.length} \u0437\u0430\u043C\u0435\u0442\u043E\u043A \xB7 ${this.currentGraph.edges.length} \u0441\u0432\u044F\u0437\u0435\u0439`;this.find("#dock-status").textContent=a,this.find("#empty-state").hidden=this.currentGraph.nodes.length>0,this.showNode((r=(s=this.graph)==null?void 0:s.getPrimaryNode())!=null?r:null)}finally{t.hidden=!0}})}scheduleRefresh(){this.plugin.preferences.refreshAutomatically&&(this.refreshTimer!==null&&window.clearTimeout(this.refreshTimer),this.refreshTimer=window.setTimeout(()=>{this.refreshTimer=null,this.refreshGraph()},450))}bindInterface(){var d,p;let t=this.find("#search-input"),n=this.find("#immersive-toggle"),s=this.find("#cosmic-background-toggle"),r=this.find("#scene-settings"),a=this.find("#scene-settings-trigger"),o=this.find("#scene-settings-menu"),l=this.findAll("[data-label-mode]"),c=this.findAll("[data-group-depth]"),h=this.findAll("[data-focus-depth]"),f=this.findAll("[data-sphere-style]");t.addEventListener("input",()=>{var m;return(m=this.graph)==null?void 0:m.setSearch(t.value)}),this.find("#panel-close").addEventListener("click",()=>this.showNode(null)),this.find("#panel-open").addEventListener("click",()=>void this.openCurrentNote()),this.find("#refresh-button").addEventListener("click",()=>{this.setSettingsOpen(!1),this.refreshGraph()}),this.find("#focus-button").addEventListener("click",()=>{var x,g;let m=(g=this.currentNode)!=null?g:(x=this.graph)==null?void 0:x.getPrimaryNode();m&&this.setFocusMode(!this.isFocusMode,m)}),h.forEach(m=>m.addEventListener("click",()=>{this.setFocusDepth(Number(m.dataset.focusDepth)),!this.isFocusMode&&this.currentNode&&this.setFocusMode(!0,this.currentNode)})),n.addEventListener("click",()=>this.setImmersive(!this.isImmersive)),s.addEventListener("click",()=>{this.setCosmicBackground(s.getAttribute("aria-pressed")!=="true",!0)}),a.addEventListener("click",()=>this.setSettingsOpen(o.hidden)),l.forEach(m=>m.addEventListener("click",()=>{this.setLabelMode(m.dataset.labelMode,!0)})),c.forEach(m=>m.addEventListener("click",()=>{this.setGroupDepth(Number(m.dataset.groupDepth),!0)})),(d=this.shadow)==null||d.addEventListener("pointerdown",m=>{!o.hidden&&m.target instanceof Node&&!r.contains(m.target)&&this.setSettingsOpen(!1)}),f.forEach(m=>m.addEventListener("click",()=>{this.setSphereStyle(m.dataset.sphereStyle,!0)})),(p=this.shadow)==null||p.addEventListener("keydown",m=>{let x=m;x.key==="Escape"&&(o.hidden?this.isFocusMode?this.setFocusMode(!1):this.isImmersive&&this.setImmersive(!1):(this.setSettingsOpen(!1),a.focus())),(x.metaKey||x.ctrlKey)&&x.key.toLowerCase()==="f"&&(x.preventDefault(),t.focus())})}renderGroupList(){let t=this.find("#group-list"),n=this.find("#search-input"),s=new Map;this.currentGraph.nodes.forEach(a=>{var o;return s.set(a.group,((o=s.get(a.group))!=null?o:0)+1)}),t.replaceChildren();let r=[["\u0412\u0441\u0435 \u0437\u0430\u043C\u0435\u0442\u043A\u0438","",this.currentGraph.nodes.length]];[...s.entries()].sort((a,o)=>o[1]-a[1]).slice(0,7).forEach(([a,o])=>{r.push([a,a,o])}),r.forEach(([a,o,l],c)=>{let h=document.createElement("button");h.type="button",c===0&&h.classList.add("is-active");let f=document.createElement("span");f.textContent=a;let d=document.createElement("small");d.textContent=String(l),h.append(f,d),h.addEventListener("click",()=>{var p;t.querySelectorAll("button").forEach(m=>m.classList.toggle("is-active",m===h)),n.value=o,(p=this.graph)==null||p.setSearch(o)}),t.appendChild(h)})}linkedNotes(t){var n,s;return t.kind==="cluster"?((n=this.currentLookup.nodesByGroup.get(t.group))!=null?n:[]).slice(0,3):[...(s=this.currentLookup.adjacency.get(t.id))!=null?s:[]].map(r=>this.currentLookup.nodesById.get(r)).filter(r=>!!r).slice(0,3)}showNode(t,n=!1){var a,o,l,c,h;this.currentNode=t;let s=this.find("#note-panel");if(!t){this.isFocusMode&&this.setFocusMode(!1),s.hidden=!0;return}this.find("#panel-title").textContent=t.title,this.find("#panel-path").textContent=t.path,this.find("#panel-group").textContent=t.kind==="cluster"?"\u041A\u043B\u0430\u0441\u0442\u0435\u0440":t.group,this.find("#panel-open").hidden=t.kind==="cluster",this.updateNodePreview(t),t.kind==="cluster"?(this.find("#metric-label-a").textContent="\u0417\u0430\u043C\u0435\u0442\u043E\u043A",this.find("#metric-value-a").textContent=String((a=t.noteCount)!=null?a:0),this.find("#metric-label-b").textContent="\u0421\u0432\u044F\u0437\u0435\u0439",this.find("#metric-value-b").textContent=String((o=this.currentLookup.incidentEdgesByGroup.get(t.group))!=null?o:0)):(this.find("#metric-label-a").textContent="\u0412\u0445\u043E\u0434\u044F\u0449\u0438\u0435 \u0441\u0432\u044F\u0437\u0438",this.find("#metric-value-a").textContent=String((l=this.currentLookup.incomingCounts.get(t.id))!=null?l:0),this.find("#metric-label-b").textContent="\u0418\u0441\u0445\u043E\u0434\u044F\u0449\u0438\u0435 \u0441\u0432\u044F\u0437\u0438",this.find("#metric-value-b").textContent=String((c=this.currentLookup.outgoingCounts.get(t.id))!=null?c:0)),this.find("#recent-notes").replaceChildren(...this.linkedNotes(t).map(f=>{let d=document.createElement("li");return d.textContent=f.title,d.title="\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043D\u0430 \u0441\u0444\u0435\u0440\u0435",d.tabIndex=0,d.addEventListener("click",()=>this.showNode(f,!0)),d.addEventListener("keydown",p=>{(p.key==="Enter"||p.key===" ")&&this.showNode(f,!0)}),d})),s.hidden=!1,this.isFocusMode?this.setFocusMode(!0,t):n&&((h=this.graph)==null||h.focusNode(t.id))}setFocusDepth(t){this.currentFocusDepth=Math.min(3,Math.max(1,Math.trunc(t)||1)),this.findAll("[data-focus-depth]").forEach(n=>{let s=Number(n.dataset.focusDepth)===this.currentFocusDepth;n.classList.toggle("is-active",s),n.setAttribute("aria-pressed",String(s))}),this.isFocusMode&&this.currentNode&&this.setFocusMode(!0,this.currentNode)}setFocusMode(t,n=this.currentNode){var o,l,c,h,f;let s=this.find("#focus-button"),r=this.find("#focus-summary");if(!t||!n){this.isFocusMode=!1,(o=this.graph)==null||o.clearFocus(),(l=this.shell)==null||l.classList.remove("is-focus-mode"),s.classList.remove("is-active"),s.setAttribute("aria-pressed","false"),s.textContent="\u0424\u043E\u043A\u0443\u0441",r.textContent="\u0411\u043B\u0438\u0436\u0430\u0439\u0448\u0438\u0435 \u0441\u0432\u044F\u0437\u0438 \u0437\u0430\u043C\u0435\u0442\u043A\u0438";return}this.isFocusMode=!0;let a=(h=(c=this.graph)==null?void 0:c.setFocus(n.id,this.currentFocusDepth))!=null?h:0;(f=this.shell)==null||f.classList.add("is-focus-mode"),s.classList.add("is-active"),s.setAttribute("aria-pressed","true"),s.textContent="\u0412\u044B\u0439\u0442\u0438",r.textContent=`${a} ${a===1?"\u0437\u0430\u043C\u0435\u0442\u043A\u0430":a<5?"\u0437\u0430\u043C\u0435\u0442\u043A\u0438":"\u0437\u0430\u043C\u0435\u0442\u043E\u043A"} \u0432 \u0444\u043E\u043A\u0443\u0441\u0435`}async updateNodePreview(t){var o;let n=this.find("#panel-preview");if(t.kind==="cluster"){n.hidden=!0,n.textContent="";return}let s=this.app.vault.getAbstractFileByPath(t.path);if(!(s instanceof Ks.TFile)){n.hidden=!0;return}let r=await this.app.vault.cachedRead(s);if(((o=this.currentNode)==null?void 0:o.id)!==t.id)return;let a=r.replace(/^---\s*[\s\S]*?\n---\s*/u,"").replace(/```[\s\S]*?```/gu,"").replace(/!?(?:\[([^\]]*)\]\([^)]*\)|\[\[([^\]|]*)(?:\|([^\]]*))?\]\])/gu,"$1$3$2").replace(/^[#>*+-]+\s*/gmu,"").replace(/[*_~`]/gu,"").replace(/\s+/gu," ").trim();n.textContent=a.length>190?`${a.slice(0,187).trimEnd()}...`:a,n.hidden=a.length===0}showTooltip(t,n,s){let r=this.find("#node-tooltip");if(!t||this.isImmersive){r.hidden=!0;return}r.textContent=t.title,r.style.transform=`translate3d(${n+14}px, ${s+14}px, 0)`,r.hidden=!1}async openCurrentNote(){this.currentNode&&await this.openNote(this.currentNode)}async openNote(t){if(t.kind==="cluster")return;let n=this.app.vault.getAbstractFileByPath(t.path);if(!(n instanceof Ks.TFile))return;await this.app.workspace.getLeaf(this.plugin.preferences.openNotesInNewTab?"tab":!1).openFile(n)}setSphereStyle(t,n){var s;(s=this.graph)==null||s.setSphereStyle(t),this.shell&&(this.shell.dataset.sphereStyle=t),this.findAll("[data-sphere-style]").forEach(r=>{let a=r.dataset.sphereStyle===t;r.classList.toggle("is-active",a),r.setAttribute("aria-pressed",String(a))}),n&&(this.plugin.preferences.sphereStyle=t,this.plugin.saveSettings())}setCosmicBackground(t,n){var r;(r=this.graph)==null||r.setCosmicBackground(t);let s=this.find("#cosmic-background-toggle");s.classList.toggle("is-active",t),s.setAttribute("aria-pressed",String(t)),s.querySelector(".scene-menu-action__value").textContent=t?"\u0412\u044B\u043A\u043B\u044E\u0447\u0438\u0442\u044C":"\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C",n&&(this.plugin.preferences.cosmicBackground=t,this.plugin.saveSettings())}setSettingsOpen(t){let n=this.find("#scene-settings-menu"),s=this.find("#scene-settings-trigger");n.hidden=!t,s.classList.toggle("is-active",t),s.setAttribute("aria-expanded",String(t))}setLabelMode(t,n){var s;(s=this.graph)==null||s.setLabelMode(t),this.findAll("[data-label-mode]").forEach(r=>{let a=r.dataset.labelMode===t;r.classList.toggle("is-active",a),r.setAttribute("aria-pressed",String(a))}),n&&(this.plugin.preferences.labelMode=t,this.plugin.saveSettings())}setGroupDepth(t,n){let s=Math.min(3,Math.max(1,Math.trunc(t)||1));this.findAll("[data-group-depth]").forEach(r=>{let a=Number(r.dataset.groupDepth)===s;r.classList.toggle("is-active",a),r.setAttribute("aria-pressed",String(a))}),n&&this.plugin.preferences.groupDepth!==s&&(this.plugin.preferences.groupDepth=s,this.plugin.saveSettings(),this.refreshGraph())}setImmersive(t){var r;this.isImmersive=t,(r=this.shell)==null||r.classList.toggle("is-immersive",t);let n=this.find("#immersive-toggle"),s=this.find("#immersive-state");n.setAttribute("aria-pressed",String(t)),n.classList.toggle("is-active",t),n.setAttribute("aria-label",t?"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441":"\u0421\u043A\u0440\u044B\u0442\u044C \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441"),n.title=t?"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441":"\u0421\u043A\u0440\u044B\u0442\u044C \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441",s.textContent=t?"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441":"\u0421\u043A\u0440\u044B\u0442\u044C \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441",n.querySelector(".scene-menu-action__value").textContent=t?"\u0412\u044B\u043A\u043B\u044E\u0447\u0438\u0442\u044C":"\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C",t&&(this.find("#node-tooltip").hidden=!0,this.setSettingsOpen(!1))}find(t){var s;let n=(s=this.shadow)==null?void 0:s.querySelector(t);if(!n)throw new Error(`CosmoGraph UI element is missing: ${t}`);return n}findAll(t){var n,s;return[...(s=(n=this.shadow)==null?void 0:n.querySelectorAll(t))!=null?s:[]]}};var In=require("obsidian"),Hl={sphereStyle:"radiant",cosmicBackground:!1,labelMode:"important",groupDepth:1,openNotesInNewTab:!0,refreshAutomatically:!0},uo=class extends In.PluginSettingTab{constructor(t,n){super(t,n);this.controller=n}display(){let{containerEl:t}=this;t.empty(),new In.Setting(t).setName("Sphere style").setDesc("Choose the default visual palette for the knowledge planet.").addDropdown(n=>n.addOption("radiant","Radiant").addOption("calm","Calm").setValue(this.controller.preferences.sphereStyle).onChange(async s=>{this.controller.preferences.sphereStyle=s,await this.controller.saveSettings(),this.controller.applySettingsToViews()})),new In.Setting(t).setName("Cosmic background").setDesc("Add procedural nebulae, distant galaxies, and a richer star field behind the knowledge planet.").addToggle(n=>n.setValue(this.controller.preferences.cosmicBackground).onChange(async s=>{this.controller.preferences.cosmicBackground=s,await this.controller.saveSettings(),this.controller.applySettingsToViews()})),new In.Setting(t).setName("Node labels").setDesc("Choose whether to hide labels, show important nodes, or show every node.").addDropdown(n=>n.addOption("none","None").addOption("important","Important").addOption("all","All").setValue(this.controller.preferences.labelMode).onChange(async s=>{this.controller.preferences.labelMode=s,await this.controller.saveSettings(),this.controller.applySettingsToViews()})),new In.Setting(t).setName("Cluster folder depth").setDesc("Choose how many folder levels define a cluster. Depth 1 keeps each top-level folder together; depth 2 splits it into subfolder clusters.").addDropdown(n=>n.addOption("1","1 - top-level folder").addOption("2","2 - subfolder").addOption("3","3 - sub-subfolder").setValue(String(this.controller.preferences.groupDepth)).onChange(async s=>{this.controller.preferences.groupDepth=Number(s),await this.controller.saveSettings(),this.controller.rebuildViews()})),new In.Setting(t).setName("Open notes in a new tab").setDesc("Keep CosmoGraph visible when opening a note from the details panel.").addToggle(n=>n.setValue(this.controller.preferences.openNotesInNewTab).onChange(async s=>{this.controller.preferences.openNotesInNewTab=s,await this.controller.saveSettings()})),new In.Setting(t).setName("Refresh automatically").setDesc("Rebuild the graph when notes or resolved links change.").addToggle(n=>n.setValue(this.controller.preferences.refreshAutomatically).onChange(async s=>{this.controller.preferences.refreshAutomatically=s,await this.controller.saveSettings()}))}};var fo=class extends Zh.Plugin{constructor(){super(...arguments);$(this,"preferences",{...Hl})}async onload(){await this.loadSettings(),this.registerView(as,t=>new Qs(t,this)),this.addRibbonIcon("orbit","Open CosmoGraph 3D",()=>void this.activateView()),this.addCommand({id:"open-3d-knowledge-graph",name:"Open 3D knowledge graph",callback:()=>void this.activateView()}),this.addCommand({id:"refresh-3d-knowledge-graph",name:"Refresh 3D knowledge graph",checkCallback:t=>{let n=this.getOpenViews()[0];return n?(t||n.refreshGraph(),!0):!1}}),this.addSettingTab(new uo(this.app,this))}async activateView(){let t,n=this.app.workspace.getLeavesOfType(as)[0];n?t=n:(t=this.app.workspace.getLeaf("tab"),await t.setViewState({type:as,active:!0})),await this.app.workspace.revealLeaf(t)}async loadSettings(){var r;let t=await this.loadData(),{showNodeLabels:n,...s}=t!=null?t:{};this.preferences={...Hl,...s,labelMode:(r=s.labelMode)!=null?r:n===!1?"none":"important"}}async saveSettings(){await this.saveData(this.preferences)}applySettingsToViews(){this.getOpenViews().forEach(t=>t.applySettings())}rebuildViews(){this.getOpenViews().forEach(t=>{t.applySettings(),t.refreshGraph()})}getOpenViews(){return this.app.workspace.getLeavesOfType(as).map(t=>t.view).filter(t=>t instanceof Qs)}};

/* nosourcemap */