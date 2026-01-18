/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#0000ff',
        'surface': '#f7f7f8',
        'surface-dark': '#121217',
        'text-primary': '#1d1d22',
        'text-secondary': '#6b6b70',
        'gray': {
          50: '#f7f7f8',
          100: '#ececed',
          200: '#d9d9db',
          300: '#b3b3b7',
          400: '#8c8c92',
          500: '#6b6b70',
          600: '#55555a',
          700: '#404044',
          800: '#1d1d22',
          900: '#121217',
        },
      },
      fontFamily: {
        sans: ['Aktiv Grotesk', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
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
