/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'bgImage':'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs-Zs1jAhbmypFTiTem5s6YzJpLB4tyD2F_Q&s")' ,
        'second':'url("https://img.freepik.com/free-vector/paper-style-smooth-background_52683-63751.jpg?semt=ais_hybrid&w=740&q=80")'
      }
    },
  },
  plugins: [],
}