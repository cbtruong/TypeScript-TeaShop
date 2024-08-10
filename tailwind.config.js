/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				headerHome: "url('./assets/SlideHome.jpg')",
			},
			backgroundPosition: {
				"center-470": "center 470px",
			},
			colors: {
				transparent: 'transparent',
				white: "white",
				black: "rgba(36,42,53,1)",
				lightGray:'#9F9F9F',
				blackHeader:"rgba(36,42,53,0.55)",
				gray:"#414141",
				lightBlack: "#242A35",
				darkWhite:"rgba(255,255,255,0.4)",

			},
			height: {
				header: "8.375rem",
			},
			fontFamily: {
				main: `"Neuton", serif`,
				extra:`"Noto Serif Devanagari", serif`,
			},
			margin: {
				big: "3rem",
				h1: "2.75rem",
				h2: "1.5rem",
				h3: "1.25rem",
				normal: "1rem",
				small: "0.875rem",
				smaller: "0.75rem",
				tiny: "0.625rem,",
			},
			fontSize: {
				bigger:"4rem",
				big: "3rem",
				h1: "2.5rem",
				h2: "1.5rem",
				h3: "1.25rem",
				normal: "1rem",
				small: "0.875rem",
				smaller: "0.75rem",
				tiny: "0.625rem",
			},
			fontWeight: {
				tiny:"100",
				small:"300",
				normal: "400",
				medium: "600",
				semiBold: "700",
			},
		},
	},
	plugins: [
		function ({ addUtilities }) {
			addUtilities({
				".displayCenter": {
					display: "flex",
					alignItems: "center",
					flexDirection:"column",
					justifyContent: "center",
				},
				".transitionMain":{
					transition:'all .3s ease-in-out',
				}
			});
		},
	],
};
