/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/*.html"
  ],
  
  theme: {
    colors: {
      green: '#5ca5a5',
      bodybg: '#effafa',
      white: '#fff',
      black: '#000',
      gray: '#7C8F8F', 
      yellow: '#f5dddd',
      red: '#DE2E54',
      blbl: '#df0'
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
