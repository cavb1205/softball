/* empty css                                       */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, a as createAstro, d as renderComponent, e as renderTransition } from '../../chunks/astro/server_CVW_p6uL.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_CtwgWLCX.mjs';
import 'clsx';
/* empty css                                       */
import { G as GET_PLAYERS } from '../../chunks/players_DlsGRP_E.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$3 = createAstro();
const $$Carrousel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Carrousel;
  const players = Astro2.props.players || [];
  return renderTemplate`${maybeRenderHead()}<div class="md:hidden overflow-x-auto"> <div class="flex snap-x snap-mandatory overflow-x-auto gap-x-5"> ${players.map((player) => renderTemplate`<img loading="lazy"${addAttribute(`/img/jugadores/${player.id}.webp`, "src")}${addAttribute(`Foto en peque\xF1o del jugador ${player.id}-small`, "alt")} class="player-link w-28 h-28 object-cover rounded-full shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:opacity-100 opacity-60" style="mask-image: linear-gradient(to bottom, black 60%, transparent 100%);"${addAttribute(player.id, "data-id")}${addAttribute(`${player.nombres} ${player.apellidos}`, "data-name")}${addAttribute(player.edad, "data-age")}${addAttribute(player.nacionalidad, "data-country")}${addAttribute(player.posicion, "data-position")}>`)} </div> </div>`;
}, "/Users/camilo/Documents/dev/softball/src/components/Carrousel.astro", void 0);

const $$Astro$2 = createAstro();
const $$PlayerList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PlayerList;
  const players = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<aside class="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-3"> ${players.players?.map((player) => renderTemplate`<span class="player-link flex flex-row sm:flex-wrap relative items-center bg-gradient-to-b from-white/10 via-transparent to-transparent"${addAttribute(player.id, "data-id")}${addAttribute(`${player.nombres} ${player.apellidos}`, "data-name")}${addAttribute(player.edad, "data-age")}${addAttribute(player.nacionalidad, "data-country")}${addAttribute(player.posicion, "data-position")}> <img loading="lazy"${addAttribute(`/img/jugadores/${player.id}.webp`, "src")}${addAttribute(`Foto en peque\xF1o del jugador ${player.id}-small`, "alt")} class="player-image sm:w-32 -mt-5 px-4 h-auto transition hover:scale-110" style="mask-image: linear-gradient(to bottom, black 60%, transparent 90%);"> </span>`)} </aside>`;
}, "/Users/camilo/Documents/dev/softball/src/components/PlayerList.astro", void 0);

const $$Astro$1 = createAstro();
const $$SelectPlayer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SelectPlayer;
  const { equipo, jugadores } = Astro2.props;
  const PLAYERS_FILTER = jugadores.filter((player) => player.equipo === equipo);
  let MITAD = Math.floor(PLAYERS_FILTER.length / 2);
  let PLAYERS_FILTER_1 = PLAYERS_FILTER.slice(0, MITAD + 1);
  let PLAYERS_FILTER_2 = PLAYERS_FILTER.slice(MITAD + 1, PLAYERS_FILTER.length);
  return renderTemplate`${maybeRenderHead()}<section class="my-20 md:my-20 mx-10 "> <h3 class="text-2xl md:text-4xl font-semibold text-center my-5">
Elige tu jugador
</h3> <div class="flex flex-col md:flex-row justify-center items-center gap-8 mt-10"> ${renderComponent($$result, "PlayerList", $$PlayerList, { "players": PLAYERS_FILTER_1 })} <article class="player max-w-80 min-w-80 " id="camilo-varon"> <header class="flex flex-col items-center justify-center"> <img${addAttribute(`/img/jugadores/${PLAYERS_FILTER[0].id}.webp`, "src")} alt="Fotografia del jugador" class="player-photo w-96 max-h-fit" style="mask-image: linear-gradient(to bottom, black 80%, transparent 100%);"${addAttribute(renderTransition($$result, "d3gbqebe", "", "player-image"), "data-astro-transition-scope")}> <h4 class="player-title text-3xl text-green md:text-5xl text-center font-extrabold -mt-10 -rotate-6"${addAttribute(renderTransition($$result, "oqqihd3w", "", "player-title"), "data-astro-transition-scope")}> ${PLAYERS_FILTER[0].nombres} ${PLAYERS_FILTER[0].apellidos} </h4> <img${addAttribute(`/img/pais/${PLAYERS_FILTER[0].nacionalidad}.svg`, "src")}${addAttribute(`Bandera de ${PLAYERS_FILTER[0].nacionalidad}`, "alt")} class="player-country w-14 mt-6"> </header> <footer> <div class="flex flex-row justify-center items-center gap-8 mt-4"> <a${addAttribute(`/player/${PLAYERS_FILTER[0].id}`, "href")} class="player-id text-sm hover:scale-110 hover:text-green">Ver Perfil</a> </div> </footer> </article> ${renderComponent($$result, "PlayerList", $$PlayerList, { "players": PLAYERS_FILTER_2 })} ${renderComponent($$result, "Carrousel", $$Carrousel, { "players": PLAYERS_FILTER })} </div> </section> `;
}, "/Users/camilo/Documents/dev/softball/src/sections/SelectPlayer.astro", "self");

const $$Astro = createAstro();
const $$equipo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$equipo;
  const { equipo } = Astro2.params;
  const PLAYERS = await GET_PLAYERS();
  const id = equipo;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Softball-${equipo}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <h1 class="text-6xl md:text-6xl text-center text-green">${equipo}</h1> <img${addAttribute(`/img/equipos/${equipo}.webp`, "src")}${addAttribute(`Foto del equipo ${equipo}`, "alt")} class="w-40 h-auto rounded-full mx-auto my-5"${addAttribute(renderTransition($$result2, "lehkfycs", "", `logo-${id}`), "data-astro-transition-scope")}> ${renderComponent($$result2, "SelectPlayer", $$SelectPlayer, { "equipo": equipo, "jugadores": PLAYERS })} </main> ` })}`;
}, "/Users/camilo/Documents/dev/softball/src/pages/equipos/[equipo].astro", "self");

const $$file = "/Users/camilo/Documents/dev/softball/src/pages/equipos/[equipo].astro";
const $$url = "/equipos/[equipo]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$equipo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
