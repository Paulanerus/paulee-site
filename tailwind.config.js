module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'default-dark': '#1a1b1f',
        'default-white': '#fafafa',
      },
      fontFamily: {
        roboto: ['Roboto Serif'],
        maven: ['Maven Pro'],
      },
    },
  },
  plugins: [],
}
