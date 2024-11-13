/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
      },
      fontFamily: {
        roboto: ["Roboto Mono", "monospace"],
        oswald: ["Oswald", "sans-serif"],
        frank: ["Frank Ruhl Libre", "serif"],
      },
    },
  },
  plugins: [],
};
