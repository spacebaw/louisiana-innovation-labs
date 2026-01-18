/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-navy': '#040F49',
        'accent-teal': '#00BFA6',
        'background-slate': '#0A2F30',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        tighten: {
          '0%': {
            letterSpacing: '0.1em',
            opacity: '0',
          },
          '100%': {
            letterSpacing: '-0.02em',
            opacity: '1',
          },
        },
      },
      animation: {
        tighten: 'tighten 1.2s ease-out forwards',
      },
    },
  },
  plugins: [],
}
