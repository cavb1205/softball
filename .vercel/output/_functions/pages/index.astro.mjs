/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderHead, b as renderSlot, e as createAstro, m as maybeRenderHead, f as addAttribute, g as renderScript, h as renderComponent } from '../chunks/astro/server_lNyOO_E4.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap" rel="stylesheet"><title>${title}</title>${renderHead()}</head> <body> <div class="p-10"> ${renderSlot($$result, $$slots["default"])} </div> </body></html>`;
}, "/Users/camilo/Documents/dev/softball/src/layouts/Layout.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const nombre = "primavera verano";
  const a\u00F1o = 2024;
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col place-items-center"> <div class="relative "> <h2 class="text-secondary text-center mb-2 text-xl font-bold -rotate-3">Torneo de Sóftbol</h2> <h1 class="text-secondary font-extrabold text-4xl md:text-7xl text-center capitalize -rotate-3 hover:scale-105 transition">${nombre} <br> <span class="text-xl">${a\u00F1o}</span></h1> <img src="/img/logo.svg" alt="logo" class="absolute inset-x-0 top-12 w-full md:w-auto mx-auto text-green opacity-40"> </div> </section>`;
}, "/Users/camilo/Documents/dev/softball/src/sections/Hero.astro", void 0);

const $$Sponsors = createComponent(($$result, $$props, $$slots) => {
  const SPONSORS = [
    {
      id: "RosaPastell",
      nombre: "RosaPastell",
      url: "https://www.rosapastell.com",
      logo: "/img/rosapastell-logo.png"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<sectio class="block mt-80 mb-5"> <h3 class="text-secondary text-2xl text-center mb-6 font-semibold">Patrocinadores</h3> <div class="flex flex-col md:flex-row md:flex-wrap justify-around gap-8"> ${SPONSORS.map(({ id, nombre, url, logo }) => renderTemplate`<a${addAttribute(url, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(`Visita la p\xE1gina del patrocinador ${nombre}`, "title")} class="flex justify-center items-center bg-gradient-to-b from-white/10 via-transparent to-transparent p-2"> <img loading="lazy"${addAttribute(logo, "src")}${addAttribute(nombre, "alt")} class="w-20 rounded-full hover:opacity-70 hover:scale-105 transition mx-20"> </a>`)} </div> </sectio>`;
}, "/Users/camilo/Documents/dev/softball/src/sections/Sponsors.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col md:flex-row justify-between items-center border-t-2 border-secondary p-5 gap-4"> <div> <span class="font-sans text-sm">
© 2024 Desarrollado por <a href="/">@cavb1205</a> </span> </div> <div> <a href="/" target="_blank" rel="noopener noreferrer"> <img src="/img/instagram-white.svg" alt="Logo de la empresa" class="w-14 hover:opacity-70 hover:scale-105 transition"> </a> </div> </section>`;
}, "/Users/camilo/Documents/dev/softball/src/sections/Footer.astro", void 0);

const $$TableResult = createComponent(async ($$result, $$props, $$slots) => {
  const API_URL = process.env.API_URL;
  const response = await fetch(`${API_URL}/Final`).then((res) => res.json());
  return renderTemplate`${maybeRenderHead()}<h1 class="text-2xl font-semibold my-8 text-center">Resultados de los Juegos</h1> <div class=" overflow-x-auto"> <table class="table-auto border-collapse border border-gray-300 w-full"> <thead> <tr> <th class="border px-4 py-2">Equipo</th> <th class="border px-4 py-2">1er Inning</th> <th class="border px-4 py-2">2do Inning</th> <th class="border px-4 py-2">3er Inning</th> <th class="border px-4 py-2">4to Inning</th> <th class="border px-4 py-2">5to Inning</th> <th class="border px-4 py-2">6to Inning</th> <th class="border px-4 py-2">7mo Inning</th> <th class="border px-4 py-2">Total</th> </tr> </thead> <tbody> ${response.map((equipo, index) => renderTemplate`<tr${addAttribute(index, "data-key")}> <td class="border px-4 py-2 ">${equipo.equipo}</td> <td class="border px-4 py-2">${equipo.primer}</td> <td class="border px-4 py-2">${equipo.segundo}</td> <td class="border px-4 py-2">${equipo.tercero}</td> <td class="border px-4 py-2">${equipo.cuarto}</td> <td class="border px-4 py-2">${equipo.quinto}</td> <td class="border px-4 py-2">${equipo.sexto}</td> <td class="border px-4 py-2">${equipo.septimo}</td> <td class="border px-4 py-2 text-red-500">${equipo.total}</td> </tr>`)} </tbody> </table> </div>`;
}, "/Users/camilo/Documents/dev/softball/src/components/TableResult.astro", void 0);

const $$Astro = createAstro();
const $$Countdown = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Countdown;
  const { primeraHora } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col items-center justify-center p-4"> <!-- <LaVeladaLogo class="text-primary" /> --> <div${addAttribute(primeraHora, "data-date")} class="flex md:flex-row flex-col gap-x-2 text-green font-semibold my-3 uppercase gap-y-5"> <div class="flex md:flex-col gap-x-4 justify-center items-center gap-y-3"> <span class="text-lg tabular-nums" data-days>00</span> <span>Días</span> </div> <span class="hidden md:block md:text-xl mt-1">:</span> <div class="flex md:flex-col gap-x-4 justify-center items-center gap-y-3"> <span class="text-lg tabular-nums" data-hours>00</span> <span>Horas</span> </div> <span class="hidden md:block md:text-xl mt-1">:</span> <div class="flex md:flex-col gap-x-4 justify-center items-center gap-y-3"> <span class="text-lg tabular-nums" data-minutes>00</span> <span>Minutos</span> </div> <span class="hidden md:block md:text-xl mt-1">:</span> <div class="flex md:flex-col gap-x-4 justify-center items-center gap-y-3"> <span class="text-lg tabular-nums" data-seconds>00</span> <span>Segundos</span> </div> </div> </section> ${renderScript($$result, "/Users/camilo/Documents/dev/softball/src/sections/Countdown.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/camilo/Documents/dev/softball/src/sections/Countdown.astro", void 0);

const $$Final = createComponent(async ($$result, $$props, $$slots) => {
  const API_URL = process.env.API_URL;
  const status = await fetch(`${API_URL}/Estado`).then((res) => res.json());
  const response = await fetch(`${API_URL}/Final`).then((res) => res.json());
  const angeles = response[0].total;
  const barinas = response[1].total;
  const zorros = response[2].total;
  const phillies = response[3].total;
  return renderTemplate`${maybeRenderHead()}<section class="mt-48"> <h2 class="text-4xl md:text-6xl text-center">Gran final</h2> <div class="mt-6"> <div class="flex md:flex-row items-center justify-center gap-x-5 sm:gap-y-5"> <div class="flex flex-col justify-center items-center gap-y-5"> <img src="/img/equipos/angeles.webp" alt="equipo angeles calama" class="w-40 md:w-60 h-30 md:h-60 rounded-full hover:scale-110"> ${status[0].estado === "offline" ? renderTemplate`<span></span>` : renderTemplate`<span class="text-xl md:text-3xl">${angeles}</span>`} </div> <span class="text-2xl">vs</span> <div class="flex flex-col justify-center items-center gap-y-5"> <img src="/img/equipos/logo-barinas.webp" alt="equipo barinas calama" class="w-40 md:w-60 h-30 md:h-60 rounded-full hover:scale-110"> ${status[0].estado === "offline" ? renderTemplate`<span></span>` : renderTemplate`<span class="text-xl md:text-3xl">${barinas}</span>`} </div> </div> <div class="flex flex-col gap-4 items-center justify-center mb-5 mt-8"> <span>ver juego</span> <a href="https://www.twitch.tv/camilovaron1205" target="_blank" class="ml-2"> <img src="/img/icons/twitch.svg" alt="play icon twitch" class="w-16 h-16 hover:scale-110 hover:opacity-75"> </a> </div> ${renderComponent($$result, "Countdown", $$Countdown, { "primeraHora": 1733070600 })} </div> <div class="mt-10"> <h3 class="text-2xl md:text-4xl text-center mb-8">
Juego para disputar tercer y cuarto lugar
</h3> <div class="flex md:flex-row items-center justify-center gap-x-5 sm:gap-y-5"> <div class="flex flex-col justify-center items-center gap-y-5"> <img src="/img/equipos/zorros.webp" alt="equipo angeles calama" class="w-40 md:w-60 h-30 md:h-60 rounded-full hover:scale-110"> ${status[0].estado === "offline" ? renderTemplate`<span></span>` : renderTemplate`<span class="text-xl md:text-3xl">${zorros}</span>`} </div> <span class="text-2xl">vs</span> <div class="flex flex-col justify-center items-center gap-y-5"> <img src="/img/equipos/phillies.webp" alt="equipo barinas calama" class="w-40 md:w-60 h-30 md:h-60 rounded-full hover:scale-110"> ${status[0].estado === "offline" ? renderTemplate`<span></span>` : renderTemplate`<span class="text-xl md:text-3xl">${phillies}</span>`} </div> </div> </div> ${status[0].estado === "offline" ? renderTemplate`<span></span>` : renderTemplate`${renderComponent($$result, "TableResult", $$TableResult, {})}`} </section>`;
}, "/Users/camilo/Documents/dev/softball/src/sections/Final.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "S\xF3ftBol Calama" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Final", $$Final, {})} <!-- <SelectPlayer /> --> ${renderComponent($$result2, "Sponsors", $$Sponsors, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} </main> ` })}`;
}, "/Users/camilo/Documents/dev/softball/src/pages/index.astro", void 0);

const $$file = "/Users/camilo/Documents/dev/softball/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
