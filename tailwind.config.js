/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text-muted': '#c5c5c5',
      },
      fill: {
        'text-muted': '#c5c5c5',
      },
    },
  },
  plugins: [],
}
