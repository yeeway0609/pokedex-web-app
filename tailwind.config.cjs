/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'white': '#ffffff',
        'black': '#000000',
        'red': '#CD3131',
        'gray': {
          1: '#F2F2F2',
          2: '#808080',
          3: '#333333',
        },
        // the 18 colors below are based on pokemon's type
        'water': {
          1: '#EBF1F8',
          2: '#0B6DC3',
        },
        'dragon': {
          1: '#E4EEF6',
          2: '#0B6DC3',
        },
        'electric': {
          1: '#FBF8E9 ',
          2: '#F4D23C',
        },
        'fairy': {
          1: '#FBF1FA',
          2: '#EC8FE6',
        },
        'ghost': {
          1: '#EBEDF4',
          2: '#5269AD',
        },
        'fire': {
          1: '#FCF3EB',
          2: '#FF9D55',
        },
        'ice': {
          1: '#F1FBF9',
          2: '#73CEC0',
        },
        'grass': {
          1: '#EDF6EC',
          2: '#63BC5A',
        },
        'bug': {
          1: '#F1F6E8 ',
          2: '#91C12F',
        },
        'fighting': {
          1: '#F8E9EE',
          2: '#CE416B',
        },
        'normal': {
          1: '#F1F2F3',
          2: '#919AA2',
        },
        'dark': {
          1: '#ECEBED',
          2: '#5A5465',
        },
        'steel': {
          1: '#ECF1F3',
          2: '#5A8EA2',
        },
        'rock': {
          1: '#F7F5F1',
          2: '#C5B78C',
        },
        'psychic': {
          1: '#FCEEEF',
          2: '#FA7179',
        },
        'ground': {
          1: '#F9EFEA',
          2: '#D97845',
        },
        'poison': {
          1: '#F5EDF8',
          2: '#B567CE',
        },
        'flying': {
          1: '#F1F4FA',
          2: '#89AAE3',
        },
      },
    },
  },
  plugins: [],
}
