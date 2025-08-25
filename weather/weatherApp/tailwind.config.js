/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'weather_bg':'url("./assets/weather.jpg")'
      }
    },
  },
  plugins: [],
}