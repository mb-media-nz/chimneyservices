/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			screens: {
				xmd: '999px'
			},
			colors: {
				redTheme: '#e21d24',
				redThemeDark: '#cf171d'
			},
			fontFamily: {
				sans: ['Roboto', 'sans-serif'],
				heading: ['Oswald', 'sans-serif']
			}
		}
	},
	plugins: []
};
