/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'rock': ['Rock Salt', 'cursive'],
			},
			colors: {
				'primary': '#333',
				'secondary': '#FFFFFF',
				'green': '#D5FF00'
			},
		},
	},
	plugins: [],
}
