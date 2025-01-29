/* empty css                                       */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, a as createAstro, b as addAttribute, e as renderTransition } from '../../chunks/astro/server_CVW_p6uL.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_CtwgWLCX.mjs';
import 'clsx';
import { $ as $$Results } from '../../chunks/Results_DO_TN03-.mjs';
import { $ as $$Sponsors } from '../../chunks/Sponsors_HSh1NXxO.mjs';
import { G as GET_JUEGOS } from '../../chunks/juegos_B2p-KQNS.mjs';
/* empty css                                       */
export { renderers } from '../../renderers.mjs';

const $$WatchGame = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-4 items-center justify-center mb-5 mt-8"> <span class="text-green">ver juego</span> <a href="https://www.twitch.tv/camilovaron1205" target="_blank" class=""> <img src="/img/icons/twitch.svg" alt="play icon twitch" class="w-16 h-16 hover:scale-110 hover:opacity-75"> </a> </div>`;
}, "/Users/camilo/Documents/dev/softball/src/components/WatchGame.astro", void 0);

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  console.log(id);
  const TOTAL_JUEGOS = await GET_JUEGOS();
  const juegoIdBuscado = id;
  const jornadaEncontrada = TOTAL_JUEGOS.find(
    (jornada) => jornada.juegos.some((juego) => juego.id === juegoIdBuscado)
  );
  const juegoDetalle = jornadaEncontrada?.juegos.find((juego) => juego.id === juegoIdBuscado);
  const { equipo1, equipo2, resultado } = juegoDetalle;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": id }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class=""> <div> <div class="flex flex-row justify-center items-center gap-6"> <h2 class="text-green text-center text-3xl md:text-6xl my-10 -rotate-3"${addAttribute(renderTransition($$result2, "iknpvrbj", "", `title-list-${id}-${equipo1}-1`), "data-astro-transition-scope")}> ${equipo1} </h2> <span class="text-xl text-white"${addAttribute(renderTransition($$result2, "fsmucc6y", "", "vs-span-title"), "data-astro-transition-scope")}>vs</span> <h2 class="text-green text-center text-3xl md:text-6xl my-10 -rotate-3"${addAttribute(renderTransition($$result2, "cyiv7tkb", "", `title-list-${id}-${equipo2}-2`), "data-astro-transition-scope")}> ${equipo2} </h2> </div> <div class="flex flex-row gap-4 items-center justify-evenly my-5 py-20 bg-cover md:bg-center bg-no-repeat" style="background-image: url('/img/bg/campo.webp') "> <a${addAttribute(`/equipos/${equipo1}`, "href")}> <img style="mask-image: linear-gradient(black 70%, transparent 100%);"${addAttribute(`/img/equipos/${equipo1}.webp`, "src")}${addAttribute(`logo del equipo ${equipo1}`, "alt")} class="w-28 h-28 md:w-60 md:h-60 object-cover rounded-full shadow-white transition-transform duration-300 ease-in-out transform hover:scale-105 hover:opacity-75"${addAttribute(renderTransition($$result2, "ohkly7rv", "", `img-list-${id}-${equipo1}-1`), "data-astro-transition-scope")}> </a> <span class="text-4xl md:text-6xl text-green rotate-12"${addAttribute(renderTransition($$result2, "bjsh7kqd", "", `vs-span-${id}`), "data-astro-transition-scope")}>vs</span> <a${addAttribute(`/equipos/${equipo2}`, "href")}> <img style="mask-image: linear-gradient(black 75%, transparent 100%);"${addAttribute(`/img/equipos/${equipo2}.webp`, "src")}${addAttribute(`logo del equipo ${equipo2}`, "alt")} class="w-28 h-28 md:w-60 md:h-60 object-cover rounded-full shadow-white transition-transform duration-300 ease-in-out transform hover:scale-105 hover:opacity-75"${addAttribute(renderTransition($$result2, "rwn47yns", "", `img-list-${id}-${equipo2}-2`), "data-astro-transition-scope")}> </a> </div> ${renderComponent($$result2, "Results", $$Results, { "resultado": resultado })} ${renderComponent($$result2, "WatchGame", $$WatchGame, {})} </div> ${renderComponent($$result2, "Sponsors", $$Sponsors, {})} </main> ` })}`;
}, "/Users/camilo/Documents/dev/softball/src/pages/juegos/[id].astro", "self");

const $$file = "/Users/camilo/Documents/dev/softball/src/pages/juegos/[id].astro";
const $$url = "/juegos/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
