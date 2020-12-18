module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: 'manrope',
      colors: {
        primary: '#FFE152',
        'gray-lightest': '#efefef'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
    // ...
  ]
}
