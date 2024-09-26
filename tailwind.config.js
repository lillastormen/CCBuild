/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        'zodiac': '#112F5F',
        'seashell': '#F1F1F1',
        'lightblue': '#F5F9FC',
        'bostonblue': "##488AC6",
        'geyser': '#DEE2E6',
        'codgray': '#151515',
        'bostonblue': '#488AC6',
        'athensgrey': "#F8F9FA",
        'loblolly': "#BDC5CD",
        'abbey': "#495057",
        'boulder': "#767676"
      },
      textUnderlineOffset: {
        4: '4px', 
        6: '6px'
      },
    },
  },
  plugins: [],
};
