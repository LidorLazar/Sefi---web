/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'header': "url('../public/images/header.png')",
        'header-blur': "url('../public/images/header-blur.png')"
      },
      keyframes:{
        'trans-right':{
          '0%, 100%': {transform: 'rotate(15deg)'},
          '50%': {transform: 'translateX(0)'}
        }
      },
      animation:{
        'trans-right': 'trans-right 0.5s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}
