/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['roboto', 'sans-serif']
      },
      colors: {
        primary: '#303965',
        secondary: '#f0680a'
      }
    }
  },
  plugins: []
}
