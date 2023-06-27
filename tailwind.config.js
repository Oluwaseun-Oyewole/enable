/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        clash: ["Clash Grotesk", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        purple: "#530054",
      },
    },
  },
  plugins: [],
};
