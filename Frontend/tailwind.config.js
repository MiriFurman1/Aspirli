/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#FFFFFF',
        'mint': '#64AE7A',
        'green': '#396949',
        'grey': '#F9F9F9',
        'lightOlive': '#aec6b3'
      },
    },
  },
  plugins: [],
}

