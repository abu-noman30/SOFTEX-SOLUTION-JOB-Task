/** @type {import('tailwindcss').Config} */
module.exports = {
	module: {
		rules: [
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader'
					}
				]
			}
		]
	},
	content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/flowbite/**/*.js'],
	theme: {
		extend: {}
	},
	daisyui: {
		themes: ['light']
	},
	plugins: [require('daisyui'), require('flowbite/plugin')]
};
