/** @type {import('tailwindcss').Config} */
import WindiCSS from "vite-plugin-windicss";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [WindiCSS()],
};
