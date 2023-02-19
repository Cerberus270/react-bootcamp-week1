/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:
      {
        'hero_pattern': "url('../public/eldenRing.jpg')",
        'hero_pattern_error': "url('../public/gg.webp')",
      }

    },
  },
  plugins: [],
}
