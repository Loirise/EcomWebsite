/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'outline': '0 0 0 1px grey',
        'outline-white': '0 0 0 1px white'
      },
      screens : {
        'xs': '200px'
      }
    },
  },
  plugins: [],
}
