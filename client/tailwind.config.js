module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'nav-blue': "#499de9",
        'text-color': "#4a413b",
        "green-app": "#5ca064",
        "orange-app":"#fe8359"
      },
      fontFamily: {
        sans: [
          'Nunito',
          'sans-serif',
        ],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
