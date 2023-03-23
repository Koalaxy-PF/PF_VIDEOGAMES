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
    },
  },
  plugins: [require("tw-elements/dist/plugin")]
}