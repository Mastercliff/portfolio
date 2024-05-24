/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
	content: [
	  "./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			backgroundSize: {
			  'size-200': '200% 200%',
			},
			backgroundPosition: {
			  'pos-0': '0% 0%',
			  'pos-100': '100% 100%',
			},
			flex: {
				'c': '0 0 70%'
			}
		},
		screens: {
			'mobile': '240px',
			'xs': '460px',
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
		},
		colors: {
			...colors
		}
	},
	plugins: [],
  }