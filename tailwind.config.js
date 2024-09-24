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
        'geyser': '#DEE2E6',
        'codgray': '#151515',
        'bostonblue': '##488AC6'
      }
    },
  },
  plugins: [],
};
