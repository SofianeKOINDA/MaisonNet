/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eef5ff',
          100: '#d9e7ff',
          200: '#bcd4ff',
          300: '#8eb8ff',
          400: '#5a93ff',
          500: '#3b70ff',
          600: '#0F52BA',  // Main primary color
          700: '#1e40af',
          800: '#1e3a8a',
          900: '#1e3a6f',
        },
        secondary: {
          50: '#eefbfb',
          100: '#d5f3f3',
          200: '#aeecec',
          300: '#75dcdc',
          400: '#43c6c6',
          500: '#20B2AA',  // Main secondary color
          600: '#188f88',
          700: '#176c66',
          800: '#175654',
          900: '#194847',
        },
        accent: {
          500: '#FFD700',  // Gold accent
        }
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};