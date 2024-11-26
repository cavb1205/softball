import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CYdb-Mpb.mjs';
import { manifest } from './manifest_wf1I-z2U.mjs';

const serverIslandMap = new Map([
]);;

const _page0 = () => import('./pages/index.astro.mjs');
const _page1 = () => import('./pages/_image.astro.mjs');
const pageMap = new Map([
    ["src/pages/index.astro", _page0],
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page1]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "b8a9753f-0d0a-4855-84e0-083212272b26",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
