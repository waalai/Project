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
          50: '#f5f3ff',   // Lightest - Used for hover states and subtle backgrounds
          100: '#ede9fe',  // Used for icon backgrounds and subtle highlights
          200: '#ddd6fe',  // Used for secondary text and decorative elements
          300: '#c4b5fd',  // Used for borders and dividers
          400: '#a78bfa',  // Used for accents and highlights
          500: '#8b5cf6',  // Main brand color
          600: '#7c3aed',  // Primary button color
          700: '#6d28d9',  // Button hover states
          800: '#1e1b4b',  // Dark text and headers
          900: '#0f172a',  // Used for dark sections
          950: '#030712',  // Darkest - Used for footer
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px rgba(0, 0, 0, 0.05)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.07)',
      }
    },
  },
  plugins: [],
}