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
        slideBackground: 'slide 400s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, 'z-index': 10 },
          '100%': { opacity: 1, 'z-index': 10 },
        },
        slide: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '2000px -2000px' },
        },
      },
      colors: {
        primary: '#FF1E00',
      },
      backgroundImage: {
        spaceBG: "url('/space.jpeg')",
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
