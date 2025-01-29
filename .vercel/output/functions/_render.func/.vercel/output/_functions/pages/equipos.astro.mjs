/* empty css                                    */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute, e as renderTransition } from '../chunks/astro/server_CVW_p6uL.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CtwgWLCX.mjs';
import { $ as $$Sponsors } from '../chunks/Sponsors_HSh1NXxO.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const EQUIPOS = [
    {
        id: 'barinas',
        nombre: 'Barinas',
        logo: 'barinas',
        manager:'Juan Perez',
    },
        
    {
        id: 'angeles',
        nombre: 'Angeles',
        logo: 'angeles',
        manager:'Pedro Perez',
    },
    {
        id: 'phillies',
        nombre: 'Phillies',
        logo: 'phillies',
        manager:'Maria Perez',
    },
    {
        id: 'zorros',
        nombre: 'Zorros',
        logo: 'zorros',
        manager:'Jose Perez',
    },
    {
        id: 'aguilas',
        nombre: 'Aguilas',
        logo: 'aguilas',
        manager:'Juan Perez',
    }
    
  
 
   
   

];

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Equipos" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="mx-10"> <h1 class="text-center text-4xl text-green mb-10">Equipos</h1> <div class="flex flex-col md:flex-row gap-8 items-center justify-around flex-wrap"> ${EQUIPOS.map(({ id, nombre, logo }) => renderTemplate`<a${addAttribute(`/equipos/${id}`, "href")} class=" bg-gradient-to-b from-white/10 via-transparent to-transparent p-2"> <img loading="lazy"${addAttribute(`/img/equipos/${logo}.webp`, "src")}${addAttribute(`Logo del equipo ${nombre}`, "alt")} class="w-28 md:w-40 rounded-full hover:opacity-70 hover:scale-105 transition mx-20"${addAttribute(renderTransition($$result2, "xmdyznvq", "", `logo-${id}`), "data-astro-transition-scope")}> </a>`)} </div> ${renderComponent($$result2, "Sponsors", $$Sponsors, {})} </main> ` })}`;
}, "/Users/camilo/Documents/dev/softball/src/pages/equipos/index.astro", "self");

const $$file = "/Users/camilo/Documents/dev/softball/src/pages/equipos/index.astro";
const $$url = "/equipos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
