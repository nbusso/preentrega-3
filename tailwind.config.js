/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.html"],
  theme: {
    extend: {
      colors: {
        'cyberpunk-fucsia': '#980BBF',
        'cyberpunk-azul': '#024059',
        'cyberpunk-turquesa': '#2BF0FB',
        'cyberpunk-amarillo-1': '#F2E307',
        'cyberpunk-amarillo-2': '#F2CC0F'
      },
      backgroundImage: {
        'header': "url('/src/img/shop-full.jpg')"
      }
    },
    
  },
  plugins: [],
}