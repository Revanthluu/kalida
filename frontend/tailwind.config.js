/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#a38071',
          600: '#8c6b5d',
          700: '#715348',
          800: '#5c433a',
          900: '#42302a',
        },
        secondary: {
          DEFAULT: '#8b9d83', // sage green
          light: '#a9bca1',
          dark: '#6e8066'
        },
        accent: '#e6b981', // warm gold
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      }
    },
  },
  plugins: [],
}
