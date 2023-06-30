/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/*.html"],
    theme: {
        container: {
            center: true,
            padding: "200px",
        },
        colors: {
            ...colors,
            dark: "#000000",
            darkMuted: "#272626",
            light: "#ffffff",
            darkGray: "#363636",
            gray: "#959595",
            "gray-dark": "#2B2B2B",
        },
    },
    plugins: [],
};
