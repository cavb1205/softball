/* empty css                                    */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute, e as renderTransition } from '../chunks/astro/server_CVW_p6uL.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CtwgWLCX.mjs';
import { G as GET_JUEGOS } from '../chunks/juegos_B2p-KQNS.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const TOTAL_JUEGOS = await GET_JUEGOS();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Juegos" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex items-center flex-col p-2 md:p-10"> <div class="w-full"> <h1 class="text-center text-4xl text-green mb-10">Calendario</h1> <div class="flex flex-col md:flex-col gap-4 flex-wrap justify-evenly"> ${TOTAL_JUEGOS.map(({ jornada, fecha, campo, juegos }) => renderTemplate`<div class="p-6 bg-slate-600 mb-2 rounded-lg shadow-white w-full"> <div class="flex flex-col items-center gap-y-2"> <h2 class="text-2xl">${jornada}</h2> <span class="text-sm text-green">${fecha}</span> <span class="text-xs">${campo}</span> <div class="flex flex-col items-center"> <h3 class="text-xl text-green mb-2">Juegos</h3> <div class="flex flex-col gap-y-5"> ${juegos.map(({ id, equipo1, equipo2 }) => renderTemplate`<a${addAttribute(`/juegos/${id}`, "href")} class="text-sm hover:text-green hover:scale-x-105"> <div class="grid grid-cols-3 items-center "> <div class="flex flex-row items-center justify-between gap-2 "> <img${addAttribute(`/img/equipos/${equipo1}.webp`, "src")} alt="escudo" class="w-10 h-10 md:w-20 md:h-20 rounded-full"${addAttribute(renderTransition($$result2, "tpwbd6up", "", `img-list-${id}-${equipo1}-1`), "data-astro-transition-scope")}> <h2 class="text-xs md:text-lg"${addAttribute(renderTransition($$result2, "ftmzkfgc", "", `title-list-${id}-${equipo1}-1`), "data-astro-transition-scope")}> ${equipo1} </h2> </div> <span class="text-green text-center"${addAttribute(renderTransition($$result2, "gahpdr6d", "", `vs-span-${id}`), "data-astro-transition-scope")}>vs</span> <div class="flex flex-row items-center justify-evenly gap-2"> <img${addAttribute(`/img/equipos/${equipo2}.webp`, "src")} alt="escudo" class="w-10 h-10 md:w-20 md:h-20 rounded-full"${addAttribute(renderTransition($$result2, "w3gopmld", "", `img-list-${id}-${equipo2}-2`), "data-astro-transition-scope")}> <h2 class="text-xs md:text-lg"${addAttribute(renderTransition($$result2, "6cdtj2qp", "", `title-list-${id}-${equipo2}-2`), "data-astro-transition-scope")}> ${equipo2} </h2> </div> </div> </a>`)} </div> </div> </div> </div>`)} </div> </div> </main> ` })}`;
}, "/Users/camilo/Documents/dev/softball/src/pages/juegos/index.astro", "self");

const $$file = "/Users/camilo/Documents/dev/softball/src/pages/juegos/index.astro";
const $$url = "/juegos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
