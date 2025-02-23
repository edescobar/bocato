/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'racing': {
          50: '#E6F0EB',
          100: '#CCE1D7',
          200: '#99C3AF',
          300: '#66A587',
          400: '#33875F',
          500: '#004225', // British Racing Green
          600: '#003D22',
          700: '#002E1A',
          800: '#001F11',
          900: '#000F09',
        }
      },
      fontFamily: {
        sans: [
          'Inter var',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif'
        ],
      },
      container: {
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        }
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      letterSpacing: {
        'tighter': '-0.065em',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      boxShadow: {
        'elegant': '0 4px 20px -2px rgba(0, 66, 37, 0.1)',
        'elegant-lg': '0 10px 40px -3px rgba(0, 66, 37, 0.2)',
      }
    },
  },
  plugins: [],
}