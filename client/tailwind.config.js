/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "media",
	content: ["./src/**/*.{tsx, jsx, html, js, php}"],
	theme: {
		extend: {},
	},
	plugins: ["@tailwindcss/postcss"],
};
