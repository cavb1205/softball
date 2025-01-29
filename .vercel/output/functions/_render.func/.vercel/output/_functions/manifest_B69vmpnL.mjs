import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_78f6SEw5.mjs';
import 'es-module-lexer';
import { h as decodeKey } from './chunks/astro/server_CVW_p6uL.mjs';
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
    isIndex: rawRouteData.isIndex
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

const manifest = deserializeManifest({"hrefRoot":"file:///Users/camilo/Documents/dev/softball/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_equipo_.CIYZHXnt.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Ct_k3qKO.js"}],"styles":[{"type":"external","src":"/_astro/_equipo_.CIYZHXnt.css"},{"type":"inline","content":".astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}html{font-family:Rock Salt,system-ui,sans-serif;background:#333;color:#fff}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0;mix-blend-mode:plus-lighter}to{opacity:1;mix-blend-mode:plus-lighter}}@keyframes astroFadeOut{0%{opacity:1;mix-blend-mode:plus-lighter}to{opacity:0;mix-blend-mode:plus-lighter}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/equipos/[equipo]","isIndex":false,"type":"page","pattern":"^\\/equipos\\/([^/]+?)\\/?$","segments":[[{"content":"equipos","dynamic":false,"spread":false}],[{"content":"equipo","dynamic":true,"spread":false}]],"params":["equipo"],"component":"src/pages/equipos/[equipo].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BScVxmeO.js"}],"styles":[{"type":"external","src":"/_astro/_equipo_.CIYZHXnt.css"},{"type":"inline","content":".astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}html{font-family:Rock Salt,system-ui,sans-serif;background:#333;color:#fff}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0;mix-blend-mode:plus-lighter}to{opacity:1;mix-blend-mode:plus-lighter}}@keyframes astroFadeOut{0%{opacity:1;mix-blend-mode:plus-lighter}to{opacity:0;mix-blend-mode:plus-lighter}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/equipos","isIndex":true,"type":"page","pattern":"^\\/equipos\\/?$","segments":[[{"content":"equipos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/equipos/index.astro","pathname":"/equipos","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_equipo_.CIYZHXnt.css"}],"routeData":{"route":"/juegos/results","isIndex":false,"type":"page","pattern":"^\\/juegos\\/Results\\/?$","segments":[[{"content":"juegos","dynamic":false,"spread":false}],[{"content":"Results","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/juegos/Results.astro","pathname":"/juegos/Results","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BScVxmeO.js"}],"styles":[{"type":"external","src":"/_astro/_equipo_.CIYZHXnt.css"},{"type":"inline","content":".astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}html{font-family:Rock Salt,system-ui,sans-serif;background:#333;color:#fff}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0;mix-blend-mode:plus-lighter}to{opacity:1;mix-blend-mode:plus-lighter}}@keyframes astroFadeOut{0%{opacity:1;mix-blend-mode:plus-lighter}to{opacity:0;mix-blend-mode:plus-lighter}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/juegos/[id]","isIndex":false,"type":"page","pattern":"^\\/juegos\\/([^/]+?)\\/?$","segments":[[{"content":"juegos","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/juegos/[id].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BScVxmeO.js"}],"styles":[{"type":"external","src":"/_astro/_equipo_.CIYZHXnt.css"},{"type":"inline","content":"@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0;mix-blend-mode:plus-lighter}to{opacity:1;mix-blend-mode:plus-lighter}}@keyframes astroFadeOut{0%{opacity:1;mix-blend-mode:plus-lighter}to{opacity:0;mix-blend-mode:plus-lighter}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}html{font-family:Rock Salt,system-ui,sans-serif;background:#333;color:#fff}\n"}],"routeData":{"route":"/juegos","isIndex":true,"type":"page","pattern":"^\\/juegos\\/?$","segments":[[{"content":"juegos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/juegos/index.astro","pathname":"/juegos","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BScVxmeO.js"}],"styles":[{"type":"external","src":"/_astro/_equipo_.CIYZHXnt.css"},{"type":"inline","content":"@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0;mix-blend-mode:plus-lighter}to{opacity:1;mix-blend-mode:plus-lighter}}@keyframes astroFadeOut{0%{opacity:1;mix-blend-mode:plus-lighter}to{opacity:0;mix-blend-mode:plus-lighter}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}html{font-family:Rock Salt,system-ui,sans-serif;background:#333;color:#fff}\n"}],"routeData":{"route":"/player/[id]","isIndex":false,"type":"page","pattern":"^\\/player\\/([^/]+?)\\/?$","segments":[[{"content":"player","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/player/[id].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BScVxmeO.js"}],"styles":[{"type":"external","src":"/_astro/_equipo_.CIYZHXnt.css"},{"type":"inline","content":".astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}html{font-family:Rock Salt,system-ui,sans-serif;background:#333;color:#fff}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/camilo/Documents/dev/softball/src/pages/juegos/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/juegos/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/camilo/Documents/dev/softball/src/pages/player/[id].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/player/[id]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/camilo/Documents/dev/softball/src/pages/equipos/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/equipos/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/camilo/Documents/dev/softball/src/pages/juegos/[id].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/juegos/[id]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/camilo/Documents/dev/softball/src/sections/SelectPlayer.astro",{"propagation":"in-tree","containsHead":false}],["/Users/camilo/Documents/dev/softball/src/pages/equipos/[equipo].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/equipos/[equipo]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/camilo/Documents/dev/softball/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/juegos/Results@_@astro":"pages/juegos/results.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/juegos/index@_@astro":"pages/juegos.astro.mjs","\u0000@astro-page:src/pages/player/[id]@_@astro":"pages/player/_id_.astro.mjs","\u0000@astro-page:src/pages/equipos/index@_@astro":"pages/equipos.astro.mjs","\u0000@astro-page:src/pages/juegos/[id]@_@astro":"pages/juegos/_id_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/equipos/[equipo]@_@astro":"pages/equipos/_equipo_.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/Users/camilo/Documents/dev/softball/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_B69vmpnL.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.Ct_k3qKO.js","/astro/hoisted.js?q=1":"_astro/hoisted.BScVxmeO.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/_equipo_.CIYZHXnt.css","/favicon.svg","/_astro/hoisted.BScVxmeO.js","/_astro/hoisted.Ct_k3qKO.js","/img/Gemini_Generated_Image_2d3xyb2d3xyb2d3x.jpeg","/img/instagram-white.svg","/img/logo.svg","/img/rosapastell-logo.png","/img/bg/angeles-logo.webp","/img/bg/bg-versus.avif","/img/bg/bola.webp","/img/bg/campo-pelota.webp","/img/bg/campo.webp","/img/bg/humo-pelota.webp","/img/equipos/aguilas.webp","/img/equipos/angeles.webp","/img/equipos/barinas.webp","/img/equipos/logo-angeles.webp","/img/equipos/logo-barinas.webp","/img/equipos/phillies.webp","/img/equipos/zorros.webp","/img/jugadores/albert-arias.webp","/img/jugadores/camilo-varon.webp","/img/jugadores/chamosky.webp","/img/jugadores/darwin.webp","/img/jugadores/felix-bruno.webp","/img/jugadores/francisco.webp","/img/jugadores/jose-luis.webp","/img/jugadores/kote.webp","/img/jugadores/leonardo.webp","/img/jugadores/luis-pulido.webp","/img/jugadores/no-retrato.webp","/img/jugadores/wladimir-pulido.webp","/img/jugadores/wlady.webp","/img/icons/bate-small.webp","/img/icons/facebook.svg","/img/icons/instagram.svg","/img/icons/twitch.svg","/img/pais/colombia.svg","/img/pais/dominicana.svg","/img/pais/venezuela.svg"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"IGe4FeNDq1swcerkev8w1OYJEi/03Jj/PuXRmX08Do0=","experimentalEnvGetSecretEnabled":false});

export { manifest };
