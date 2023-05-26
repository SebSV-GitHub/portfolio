/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		`./src/pages/**/*.{js,jsx,ts,tsx}`,
		`./src/components/**/*.{js,jsx,ts,tsx}`,
	],
	theme: {
		extend: {
			strokeWidth: {
				medium: "3px",
			},
			colors: {
				primary: {
					DEFAULT: "#6C63FF",
				},
				muted: {
					DEFAULT: "#7E839C",
				},
			},
		},
	},
	plugins: [],
};
