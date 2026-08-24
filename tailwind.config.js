/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        // Matches the editorial design system in index.css
        ink: {
          DEFAULT: '#1A1916',
          mid: '#3A3530',
          muted: '#4A4740',
        },
        parchment: {
          DEFAULT: '#F7F4EF',
          light: '#FDFCFA',
          border: '#D4CFC8',
          mid: '#C9C5BC',
        },
        crimson: {
          DEFAULT: '#8B1A1A',
          muted: '#8B8480',
        },
      },
    },
  },
  plugins: [],
};
