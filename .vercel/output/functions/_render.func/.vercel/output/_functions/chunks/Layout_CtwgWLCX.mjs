import { c as createComponent, r as renderTemplate, b as addAttribute, a as createAstro, m as maybeRenderHead, d as renderComponent, f as renderHead, g as renderSlot } from './astro/server_CVW_p6uL.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                            */

const $$Astro$1 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/camilo/Documents/dev/softball/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col md:flex-row justify-between items-center border-t-2 border-secondary p-5 gap-4"> <div> <span class="font-sans text-sm">
© 2024 Desarrollado por <a href="https://github.com/cavb1205" target="_blank">@cavb1205</a> </span> </div> <div> <a href="/" target="_blank" rel="noopener noreferrer"> <img src="/img/instagram-white.svg" alt="Logo de la empresa" class="w-14 hover:opacity-70 hover:scale-105 transition"> </a> </div> </section>`;
}, "/Users/camilo/Documents/dev/softball/src/sections/Footer.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="mb-10 border-b-2 border-b-white/20"> <nav class="flex flex-row justify-evenly font-roboto font-semibold text-lg uppercase"> <a href="/" class="hover:bg-green/10 px-5 py-5">Inicio</a> <a href="/juegos" class="hover:bg-green/10 px-5 py-5">Juegos</a> <a href="/equipos" class="hover:bg-green/10 px-5 py-5">Equipos</a> </nav> </header>`;
}, "/Users/camilo/Documents/dev/softball/src/components/Header.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content="Torneo de softball calama - chile"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap" rel="stylesheet">${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}<title>${title}</title>${renderHead()}</head> <body> <div class=""> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </div> </body></html>`;
}, "/Users/camilo/Documents/dev/softball/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
