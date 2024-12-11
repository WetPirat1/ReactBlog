/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        '150': '150px',
        '600': '600px'
      }
    },
  },
  plugins: [],
}