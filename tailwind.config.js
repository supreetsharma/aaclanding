/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#B4C6B9',
        secondary: '#E6D1C0',
        accent: '#C98860',
        background: '#FAF3F0',
        text: {
          primary: '#1C160C',
          secondary: '#4B4639'
        }
      },
      fontFamily: {
        tenor: ['Tenor Sans', 'sans-serif']
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
      },
    },
  },
  plugins: [],
};