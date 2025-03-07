/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/*.vue', './src/**/*.vue', './src/**/*.html'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#264653',
				},
				secondary: '#576086',
				tertiary: '#686661',
				light: {
					DEFAULT: '#f5f4f2',
					50: '#fcfcfb',
					100: '#faf9f7',
					200: '#f5f4f2', // base color
					300: '#e2e0dc',
					400: '#ceccc5',
					500: '#bab8ae',
					600: '#a6a499',
					700: '#929084',
					800: '#7e7c6f',
					900: '#6a6860',
				},
				lighter: '#fafaf8',
			},
		},
	},
	plugins: [],
}
