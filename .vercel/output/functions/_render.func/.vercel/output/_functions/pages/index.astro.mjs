/* empty css                                    */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../chunks/astro/server_CVW_p6uL.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Layout } from '../chunks/Layout_CtwgWLCX.mjs';
import { $ as $$Sponsors } from '../chunks/Sponsors_HSh1NXxO.mjs';
export { renderers } from '../renderers.mjs';

const $$TablePositions = createComponent(async ($$result, $$props, $$slots) => {
  const API_URL = "https://opensheet.elk.sh/10jk4Ll4hjaFLZX1G7G3NO0WtgC5VXJENpg0clGz65ws";
  const response = await fetch(`${API_URL}/Clasificacion`).then((res) => res.json());
  const clasificacion = response.sort((a, b) => b.puntos - a.puntos) && response.sort((a, b) => b.jj - a.jj);
  return renderTemplate`${maybeRenderHead()}<div class=" bg-white/5 rounded-lg p-2 max-w-96"> <h1 class="text-lg my-4 text-center  text-green">
Clasificación
</h1> <div class="grid grid-cols-6 font-roboto font-bold text-xs mb-4 text-slate-300"> <span class="text-center">POS</span> <span class="text-center">EQUIPO</span> <span class="text-center ">JJ</span> <span class="text-center">JG</span> <span class="text-center ">JP</span> <span class="text-center">PUNTOS</span> </div> <div class="grid grid-cols-6 font-roboto capitalize text-sm gap-2"> ${clasificacion.map((equipo, index) => renderTemplate`<div${addAttribute(` font-bold text-center ${index + 1 == 1 ? "text-green" : index + 1 > 4 ? "text-red-300" : "text-white"}`, "class")}>${index + 1}</div>
                <div${addAttribute(`text-green text-center font-bold hover:scale-110 ${index + 1 > 4 ? "text-red-300" : index + 1 == 1 ? "text-green" : "text-white"}`, "class")}>${equipo.equipo}</div>
                <div class="text-center">${equipo.jj}</div>
                <div class="text-center">${equipo.jg}</div>
                <div class="text-red-500 text-center ">${equipo.jp}</div>
                <div class="text-green text-center ">${equipo.puntos}</div>`)} </div> </div>`;
}, "/Users/camilo/Documents/dev/softball/src/components/TablePositions.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const nombre = "verano - oto\xF1o";
  const a\u00F1o = 2025;
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col place-items-center"> <div class="relative"> <h2 class="text-secondary text-center mb-2 text-xl font-bold -rotate-3">
Torneo de Sóftbol
</h2> <h1 class="text-green font-extrabold text-4xl md:text-7xl text-center capitalize -rotate-3 hover:scale-105 transition"> ${nombre} <br> <span class="text-xl text-white">${a\u00F1o}</span> </h1> <img src="/img/logo.svg" alt="logo" class="absolute inset-x-0 top-12 w-full md:w-auto mx-auto text-green opacity-40" style="mask-image: linear-gradient(black 1%, transparent 100%);"> </div> </section>`;
}, "/Users/camilo/Documents/dev/softball/src/sections/Hero.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "S\xF3ftBol Calama" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, {})} <div class="flex flex-col items-center mt-36"> <!-- <h2 class="text-2xl md:text-4xl">El campeonato inicia en</h2> --> <!-- <Countdown primeraHora={1736690400}/> --> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 mx-2"> ${renderComponent($$result2, "TablePositions", $$TablePositions, {})} <!-- <div>
				<h3 class="text-green text-3xl text-center">MVP</h3>
			</div> --> </div> ${renderComponent($$result2, "Sponsors", $$Sponsors, {})} </main> ` })}`;
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
