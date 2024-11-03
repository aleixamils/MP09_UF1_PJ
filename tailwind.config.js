/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        accentuacio: '#6AD4B9',
        secundari: '#01664D',
        terciari: '#566360',
        fondocamps: '#E6F6F2',
      },
    },
  },
  plugins: [],
};
