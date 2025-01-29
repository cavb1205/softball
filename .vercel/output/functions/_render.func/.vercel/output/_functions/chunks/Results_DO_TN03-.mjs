/* empty css                            */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as createAstro } from './astro/server_CVW_p6uL.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$Results = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Results;
  const { resultado } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col items-center gap-y-10 md:my-20"> <h2 class="text-xl md:text-2xl">Resultados del Juego</h2> ${resultado == "pendiente" ? renderTemplate`<span class="text-xl md:text-xl text-red-400">Pendiente</span>` : renderTemplate`<span class="text-3xl md:text-5xl text-green">${resultado} </span>`} </section>`;
}, "/Users/camilo/Documents/dev/softball/src/pages/juegos/Results.astro", void 0);

const $$file = "/Users/camilo/Documents/dev/softball/src/pages/juegos/Results.astro";
const $$url = "/juegos/Results";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Results,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Results as $, _page as _ };
