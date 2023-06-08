/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/*.html"],
    theme: {
        container: {
            center: true,
            padding: "2.5rem",
        },
        colors: {
            dark: "#000000",
            darkMuted: "#272626",
            light: "#ffffff",
            ...colors,
        },
        extend: {},
    },
    plugins: [],
};
