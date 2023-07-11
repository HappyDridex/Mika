/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/*.html"],
    theme: {
        container: {
            center: true,
            padding: "3%",
        },
        colors: {
            ...colors,
            dark: "#000000",
            darkMuted: "#272626",
            light: "#ffffff",
            gray68: "#686868",
            gray16: "#161616",
            gray2B: "#2B2B2B",
            grayBB: "#BBBBBB",
        },
    },
    plugins: [],
};
