/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./resources/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                Outfit: ["Outfit", "sans-serif"],
                Nunito: ["Nunito", "sans-serif"],
            },
            container: {
                center: true,
                padding: "1rem",
                screens: {
                    sm: "640px",
                    md: "768px",
                    lg: "1024px",
                    xl: "1280px",
                    "2xl": "1400px",
                },
            }
        },
    },
    plugins: [],
}