module.exports = {
  darkMode: 'class',
  purge: {
    enabled: false
  },
  theme: {
    extend: {
      fontFamily: 'manrope',
      colors: {
        primary: '#FFE152',
        'gray-lightest': '#efefef'
      },
      minHeight: {
        520: '520px'
      },
      maxWidth: {
        container: '1400px'
      },
      zIndex: {
        // Needed for NjSidebar
        400: 400,
        500: 500
      }
    }
  }
}
