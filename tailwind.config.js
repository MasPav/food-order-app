/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#FFD370',
        'accent': '#00C9B1'
      }
    },
    fontFamily: {
      sans: ['Belanosima'] 
    }
  },
  plugins: [],
}

