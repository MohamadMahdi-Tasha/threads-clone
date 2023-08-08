// Configs Of Tailwind CSS

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './app/*.{tsx,ts,js,jsx}',
    './app/**/*.{tsx,ts,js,jsx}',
    './app/**/**/*.{tsx,ts,js,jsx}',
    './chunks/*.{tsx,ts,js,jsx}',
    './components/*.{tsx,ts,js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {primary: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'},
      colors: {
        themeColor: '#242526',
        barcelonaMediaOutline: 'rgba(243, 245, 247, 0.15)'
      }
    },
  },
  plugins: [],
}
