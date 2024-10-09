/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode : "class",
  theme: {
    extend: {
      colors:{
        primary: "#f8981f",
        secondary: "#e54416",
        tertiary: "#f5ede3",
        // backgroundColor : "#F0F0F6",
        backgroundColor : "#fff",
      },
      // container:{
      //   center:true ,
      //   padding:{
      //     DEFAULT: "1rem",
      //     sm: "3rem",
      //   },
      // }
      container:{
         padding : ""
      }
    },
  },
  plugins: [],
}