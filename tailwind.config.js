/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'usap-blue': '#0055B9',
        'usap-orange': '#ff8243'
      }
    },
  },
  plugins: [],
}

