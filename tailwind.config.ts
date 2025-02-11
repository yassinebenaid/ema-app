/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/*.vue', './src/**/*.vue', './src/**/*.html'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#f6b595',
					50: '#fef6f2',
					100: '#fcece5',
					200: '#f8d2c0',
					300: '#f4b89b',
					400: '#f09d76',
					500: '#f6b595', // base color
					600: '#d88276',
					700: '#b9645e',
					800: '#995144',
					900: '#793e32',
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
