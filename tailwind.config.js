/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      display:['Poppins' ,'sans-serif']
    },
    
    extend: {
      colors:{
        primary:'#3F51B5',
        secondary:'#FF4081',
      },
      backgroundImage:{
        'login-bg-img':"url('./src/assets/images/login.jpg')",

      },
    
    },
  },
  plugins: [],
}
