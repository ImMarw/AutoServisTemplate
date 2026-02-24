/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif']
			},
			colors: {
				primary: {
					DEFAULT: '#dc2626',
					hover: '#b91c1c'
				},
				dark: '#0a0a0a'
			},
			animation: {
				'slow-zoom': 'slow-zoom 15s ease-out forwards',
				marquee: 'marquee 30s linear infinite'
			},
			keyframes: {
				'slow-zoom': {
					'0%': { transform: 'scale(1)' },
					'100%': { transform: 'scale(1.1)' }
				},
				marquee: {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-100%)' }
				}
			}
		}
	},
	plugins: []
};
