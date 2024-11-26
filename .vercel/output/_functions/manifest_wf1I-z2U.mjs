import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_IgJh_Ak7.mjs';
import 'es-module-lexer';
import { d as decodeKey } from './chunks/astro/server_lNyOO_E4.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/camilo/Documents/dev/softball/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DjBuhb1K.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"[data-astro-image]{width:100%;height:auto;-o-object-fit:var(--fit);object-fit:var(--fit);-o-object-position:var(--pos);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"}],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/camilo/Documents/dev/softball/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/Users/camilo/Documents/dev/softball/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DGYU_WPz.mjs","\u0000@astrojs-manifest":"manifest_wf1I-z2U.mjs","/Users/camilo/Documents/dev/softball/src/sections/Countdown.astro?astro&type=script&index=0&lang.ts":"_astro/Countdown.astro_astro_type_script_index_0_lang.BliOfOuy.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/camilo/Documents/dev/softball/src/sections/Countdown.astro?astro&type=script&index=0&lang.ts","function T(){const t=document.querySelector(\"[data-date]\");if(!t)return;const s=t.querySelector(\"[data-days] \"),a=t.querySelector(\"[data-hours] \"),i=t.querySelector(\"[data-minutes] \"),r=t.querySelector(\"[data-seconds] \"),c=t.getAttribute(\"data-date\");if(!c)return;const f=new Date(+c*1e3).getTime(),u=new Date(1733081400*1e3).getTime(),e=o=>Math.floor(o).toString().padStart(2,\"0\");function d(){const o=Date.now(),n=f-o;n<=0&&(t.innerHTML='<span class=\"text-xl\">en vivo</span>'),o>=u&&(t.innerHTML='<span class=\"text-xl\">Finalizado</span>'),s instanceof HTMLElement&&(s.innerText=e(n/864e5).toString()),a instanceof HTMLElement&&(a.innerText=e(n%864e5/36e5).toString()),i instanceof HTMLElement&&(i.innerText=e(n%36e5/6e4).toString()),r instanceof HTMLElement&&(r.innerText=e(n%6e4/1e3).toString())}setInterval(d,1e3),d()}T();"]],"assets":["/_astro/index.DjBuhb1K.css","/favicon.svg","/img/Gemini_Generated_Image_2d3xyb2d3xyb2d3x.jpeg","/img/instagram-white.svg","/img/logo.svg","/img/rosapastell-logo.png","/img/bg/angeles-logo.webp","/img/bg/bola.webp","/img/bg/campo-pelota.webp","/img/bg/campo.webp","/img/bg/humo-pelota.webp","/img/icons/bate-small.webp","/img/icons/twitch.svg","/img/equipos/angeles.webp","/img/equipos/barinas.webp","/img/equipos/logo-angeles.webp","/img/equipos/logo-barinas.webp","/img/equipos/phillies.webp","/img/equipos/zorros.webp","/img/pais/Colombia.svg","/img/pais/Dominicana.svg","/img/pais/Venezuela.svg","/img/jugadores/albert-arias.webp","/img/jugadores/camilo-varon.webp","/img/jugadores/felix-bruno.webp","/img/jugadores/luis-pulido-jr.webp","/img/jugadores/luis-pulido.webp","/img/jugadores/wladimir-pulido.webp"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"tm8W/kaMW2ke0pG0CHjUpnE5v2/U3r6rVEUbgRxSEq4=","envGetSecretEnabled":true});

export { manifest };
