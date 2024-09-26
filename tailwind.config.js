/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#3498db',
        secondary: '#DB4444',
        accent: '#212121',
        white: '#ffffff',
        black: '#000000',
        gray: '#f5f5f5',
      }
    },
  },
  plugins: [],
}

