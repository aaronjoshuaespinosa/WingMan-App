/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  
  theme: {
    extend: {
      fontFamily: {
        'space': ['Space Grotesk'],
      },

      colors: {
        'blk': '#1E1E1E',
        'wht': '#F9F9F9',
        'orng': '#FC5F1C',
        'light-orng': '#FF8A58',
        'light-gry': '#838383',
        'light-lgry': '#D9D9D9'
      }
    },
  },
  plugins: [],
}

