/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		extend: {
			backgroundImage: {
				main: "url('https://strapi.senseinode.com/uploads/bg_eeb063be38.svg')",
			},
			colors: {
				'brand-blue-primary': '#3f3ff9',
				'brand-blue-secondary': '#e8e8f6',
				'brand-green-primary': '#34c55d',
			},
		},
	},
	plugins: [],
};
