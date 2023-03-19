/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    fontFamily: {
      'Tilt Neon': ['cursive'],
    },
    extend: {
      backgroundImage: {
         'hero-pattern': "linear-gradient(to right bottom, rgba('#7ed56f',0.8), rgba('#28b485',0.8)), url('https://www.xtrafondos.com/descargar.php?id=4047&resolucion=3840x2400')",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")]
}