// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Pretendard: ['Pretendard', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        black: '#000000',
        '00be9b': '#00be9b',
        '1e1e1e': '#1e1e1e',
        '1e211d': '#1e211d',
        '212121': '#212121',
        '222124': '#222124',
        '4b4b4b': '#4b4b4b',
        '57b99c': '#57b99c',
        '70dcbc': '#70dcbc',
        '87888c': '#87888c',
        '8b898a': '#8b898a',
        '96b4f4': '#96b4f4',
        'a1a1a1': '#a1a1a1',
        'afb3b6': '#afb3b6',
        'ebfff8': '#ebfff8',
        'ecfff9': '#ecfff9',
        'f3678d': '#f3678d',
        'ffee9a': '#ffee9a',
        white: '#ffffff',
      },
      animation: {
        'fade-in-out': 'fadeInOut 3s ease-in-out',
      },
      keyframes: {
        fadeInOut: {
          '0%': { opacity: 0 },
          '20%, 80%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
}