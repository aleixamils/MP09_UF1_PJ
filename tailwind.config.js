/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./public/*.html", // Scan HTML files in public folder
    "./src/**/*.{html,js}", // Scan HTML and JS files in src
  ],
  theme: {
    extend: {
      colors: {
        accentuacio: '#6AD4B9',
        secundari: '#01664D',
        terciari: '#566360',
        fondocamps:'#E6F6F2',
      },
    }
  },
  plugins: []
}

