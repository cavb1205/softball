import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_SdRQ7CQo.mjs';
import { manifest } from './manifest_B69vmpnL.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/equipos/_equipo_.astro.mjs');
const _page3 = () => import('./pages/equipos.astro.mjs');
const _page4 = () => import('./pages/juegos/results.astro.mjs');
const _page5 = () => import('./pages/juegos/_id_.astro.mjs');
const _page6 = () => import('./pages/juegos.astro.mjs');
const _page7 = () => import('./pages/player/_id_.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/equipos/[equipo].astro", _page2],
    ["src/pages/equipos/index.astro", _page3],
    ["src/pages/juegos/Results.astro", _page4],
    ["src/pages/juegos/[id].astro", _page5],
    ["src/pages/juegos/index.astro", _page6],
    ["src/pages/player/[id].astro", _page7],
    ["src/pages/index.astro", _page8]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "ae73942d-e289-4071-934b-64795acd111e",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
