/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      tablet: '960px',
      desktop: '1240px',
    },
    fontSize: {
      xs: ['14px', { lineHeight: '24px', letterSpacing: '-0.03em'}],
      sm: ['16px', { lineHeight: '28px', letterSpacing: '-0.03em'}],
      lg: ['18px', { lineHeight: '28px', letterSpacing: '-0.03em'}],
      xl: ['24px', { lineHeight: '36px', letterSpacing: '-0.03em'}],
      '2xl': ['36px', { lineHeight: '48px', letterSpacing: '-0.032em'}],
      '3xl': ['48px', { lineHeight: '56px', letterSpacing: '-0.032em'}],
      '4xl': ['56px', { lineHeight: '64px', letterSpacing: '-0.032em'}],
      '5xl': ['80px', { lineHeight: '80px', letterSpacing: '-0.032em'}],
    },
    fontFamily: {
      notosansjp: ['"Noto Sans JP"', 'sans-serif'],
    },
    extend: {
      fontWeight: {
      normal: 400,
      medium: 500,
      bold: 700,
      },
      colors:{
        
      },
      filter: {
        'white': 'invert(100%) sepia(100%) saturate(0%) hue-rotate(185deg) brightness(106%) contrast(106%)',
      },
    },
  },
  plugins: [
    require('daisyui'), require('tailwindcss-filters')
  ],
  daisyui: {
    themes: ["lofi", "night"], // Enable specific daisyUI themes
  },
}

