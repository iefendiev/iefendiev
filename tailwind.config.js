module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 1s linear forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, 'z-index': 10 },
          '100%': { opacity: 1, 'z-index': 10 },
        },
      },
      colors: {
        primary: '#FF1E00',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
