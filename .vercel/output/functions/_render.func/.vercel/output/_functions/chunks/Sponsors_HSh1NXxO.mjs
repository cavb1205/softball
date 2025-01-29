import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from './astro/server_CVW_p6uL.mjs';
import 'kleur/colors';
import 'clsx';

const $$Sponsors = createComponent(($$result, $$props, $$slots) => {
  const SPONSORS = [
    {
      id: "RosaPastell",
      nombre: "RosaPastell",
      url: "https://www.rosapastell.com",
      logo: "/img/rosapastell-logo.png"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<sectio class="block mt-40 mb-10"> <h3 class=" text-2xl text-center mb-6 font-semibold ">Patrocinadores</h3> <div class="flex flex-col md:flex-row md:flex-wrap justify-around gap-8"> ${SPONSORS.map(({ id, nombre, url, logo }) => renderTemplate`<a${addAttribute(url, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(`Visita la p\xE1gina del patrocinador ${nombre}`, "title")} class="flex justify-center items-center bg-gradient-to-b from-white/10 via-transparent to-transparent p-2"> <img loading="lazy"${addAttribute(logo, "src")}${addAttribute(nombre, "alt")} class="w-20 rounded-full hover:opacity-70 hover:scale-105 transition mx-20"> </a>`)} </div> </sectio>`;
}, "/Users/camilo/Documents/dev/softball/src/sections/Sponsors.astro", void 0);

export { $$Sponsors as $ };
