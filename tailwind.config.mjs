/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'rock': ['Rock Salt', 'cursive'],
				'roboto': ['Roboto', 'sans-serif'],
			},
			colors: {
				'primary': '#333',
				'secondary': '#FFFFFF',
				'green': '#DEF90C'
				
			},
		},
	},
	plugins: [],
}
