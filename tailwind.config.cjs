const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Jetbrains Mono", ...defaultTheme.fontFamily.sans],
            },
            animation: {
                'heart-pulse': 'heartPulse 1s ease-in-out infinite',
            },
            keyframes: {
                heartPulse: {
                    "0%": { transform: "scale(1)" },
                    "75%": { transform: "scale(1.3)" },
                    "100%": { transform: "scale(1)" },
                },
            },
        },
    },
    plugins: [],
};
