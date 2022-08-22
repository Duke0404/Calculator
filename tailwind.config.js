/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"accent-prime": "#eb5380",
				"accent-sec": "#473e9e",
				"accent-tert": "#4A89BC",
				"background-1": "#fff",
				"background-1-dark": "#000",
				"background-2": "#fff",
				"background-2-dark": "#424242",
				"background-3": "#e0c8ff",
				"background-3-dark": "#212121",
			}
		}
	},
	plugins: []
}
