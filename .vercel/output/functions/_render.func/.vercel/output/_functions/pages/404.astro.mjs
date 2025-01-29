/* empty css                                    */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CVW_p6uL.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<h1>404 personalizado</h1>`;
}, "/Users/camilo/Documents/dev/softball/src/pages/404.astro", void 0);

const $$file = "/Users/camilo/Documents/dev/softball/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
