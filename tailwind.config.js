/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            maxHeight: {
                0: "0",
                screen: "100vh",
            },
            fontFamily: {
                sans: ["Comfortaa", "ui-sans-serif", "system-ui"],
            },
        },
    },
    plugins: [],
};
