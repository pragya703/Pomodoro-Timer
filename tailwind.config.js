/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    boxShadow: {
      grayShadow: '-5px 10px 10px gray',
      clockOuterShadow: '6px 6px 10px -1px black 15%',
      clockInnerShadow: 'inset 4px 4px 6px -1px black 20%',
    },
    fontFamily: {
      Righteous: ['Righteous'],
      Audiowide: ['Audiowide'],
    },
    hover: {
      'default': 'rgb(255 255 255)',
    },
    extend: {},
  },
  plugins: [],
}

