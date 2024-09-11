/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'primary': '#449B8B',
      'secondary': '#026F20',
      'neutral-dark-gray':"#171717",
      'neutral-gray':"#262626",
      'neutral-light-gray':"#716B66",
      'little-gray':"#707070",
      'neutral-light':"#D4D4D4",
      'light-gray':"#FAFAFA",
      'divi-gray':"#18130f",
      'divi-gray-300':"#716B66",
      'white':"#FFFFFF",
      'black':"#000000",
      'light-black':"#1E1E1E",
      'pink':"#9E1F66",
      'copyRight':"#9F9F9F",

    },
    fontFamily: {
      primary: ['var(--font-poppins)', 'sans-serif'],
      secondary: ['var(--font-inter)', 'sans-serif'],
      arial: ['Arial', 'sans-serif'],
      nohemi: ['Nohemi','serif'],
    },
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      screens: {
        'xs': {'min': '10px', 'max': '576px'},
        // Customize screen size for all mobile devices min-width: 10px and max-width:576px
        },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern":"url('../public/images/slider1.svg')",  
        'CTA':"url('../public/images/CTA.svg')",
        // 'mCTA':"url('../public/images/mCTA.svg')",
        'custom-gradient': 'linear-gradient(90deg, #1B7F75 100%, #4EA291 100%)',
      },
    },
  },
  plugins: [],
};