/* empty css                                       */
import { c as createComponent, r as renderTemplate, d as renderComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, e as renderTransition } from '../../chunks/astro/server_CVW_p6uL.mjs';
import 'kleur/colors';
import { G as GET_PLAYERS } from '../../chunks/players_DlsGRP_E.mjs';
import { $ as $$Layout } from '../../chunks/Layout_CtwgWLCX.mjs';
import { $ as $$Sponsors } from '../../chunks/Sponsors_HSh1NXxO.mjs';
/* empty css                                       */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const PLAYERS = await GET_PLAYERS();
  const player = PLAYERS.find((player2) => player2.id === id);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Perfil de ${player.nombres}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<a data-astro-reload${addAttribute(`/equipos/${player.equipo}`, "href")} class="hover:bg-slate-200/10 px-5 py-8 text-md"><span>Volver</span></a> <div class="flex flex-col md:flex-row justify-center items-center"> <div class="flex flex-col my-5"> <a${addAttribute(`/equipos/${player.equipo}`, "href")}> <img${addAttribute(`/img/equipos/${player.equipo}.webp`, "src")}${addAttribute(`Foto del equipo ${player.equipo}`, "alt")} class="w-28 h-auto rounded-full hover:scale-110 hover:opacity-75"> </a> </div> <div class="flex flex-col items-center justify-center"> <h1 class="text-4xl md:text-6xl text-green -rotate-5 mb-10"${addAttribute(renderTransition($$result2, "wwgyn4ik", "", "player-title"), "data-astro-transition-scope")}> ${player.nombres} ${player.apellidos} </h1> <img${addAttribute(`/img/jugadores/${player.id}.webp`, "src")}${addAttribute(`Foto de ${player.nombres} ${player.apellidos}`, "alt")} class="w-96 h-auto" style="mask-image: linear-gradient(to bottom, black 80%, transparent 100%);"${addAttribute(renderTransition($$result2, "4x4mo5ua", "", "player-image"), "data-astro-transition-scope")}> <img${addAttribute(`/img/pais/${player.nacionalidad}.svg`, "src")}${addAttribute(`Bandera de ${player.nacionalidad}`, "alt")} class="w-20"> </div> <div class="flex flex-col gap-3 md:gap-10"> <div class="text-lg md:text-2xl text-center flex flex-col gap-3 my-2"> <span class="text-green">Edad</span> <span> ${player.edad} años</span> </div> <div class="text-lg md:text-2xl text-center flex flex-col gap-3"> <span class="text-green">Posición</span> <span> ${player.posicion}</span> </div> </div> </div> ${renderComponent($$result2, "Sponsors", $$Sponsors, {})} ` })}`;
}, "/Users/camilo/Documents/dev/softball/src/pages/player/[id].astro", "self");

const $$file = "/Users/camilo/Documents/dev/softball/src/pages/player/[id].astro";
const $$url = "/player/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
