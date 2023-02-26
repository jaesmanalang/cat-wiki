/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
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
    extend: {
      fontFamily: {
        sans: ['var(--font-montserrat)', ...fontFamily.sans],
      },
      backgroundImage: {
        'hero-cat-lg': "url('~/public/HeroImagelg.png')",
        'hero-cat-md': "url('~/public/HeroImagemd.png')",
        'hero-cat-sm': "url('~/public/HeroImagesm.png')",
      },
    },
  },
  plugins: [],
};
