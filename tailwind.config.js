module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: 'manrope',
      colors: {
        primary: '#FFE152',
        'gray-lightest': '#efefef'
      },
      aspectRatio: {
        '1/1': [1, 1],
        '16/9': [16, 9],
        '4/3': [4, 3],
        '3/4': [3, 4]
      },
      maxWidth: {
        container: '1400px'
      }
    }
  },
  variants: {
    aspectRatio: ['responsive']
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('./tailwind-plugins/aspect-ratio.js')()
  ]
}
