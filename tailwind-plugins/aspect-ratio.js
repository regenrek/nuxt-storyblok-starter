const _ = require('lodash')

module.exports = function () {
  return ({ theme, variants, e, addUtilities }) => {
    const defaultAspectRatioTheme = {}
    const defaultAspectRatioVariants = ['responsive']

    const aspectRatioTheme = theme('aspectRatio', defaultAspectRatioTheme)
    const aspectRatioVariants = variants(
      'aspectRatio',
      defaultAspectRatioVariants
    )

    const aspectRatioUtilities = _.fromPairs(
      _.map(aspectRatioTheme, (value, modifier) => {
        const aspectRatio = _.isArray(value) ? value[0] / value[1] : value
        return [
          `.${e(`aspect-ratio-${modifier}`)}`,
          {
            '&:before': {
              content: "''",
              float: 'left',
              paddingBottom: `${(1 / aspectRatio) * 100}%`
            },
            '&:after': {
              content: "''",
              display: 'table',
              clear: 'both'
            }
          }
        ]
      })
    )

    addUtilities(aspectRatioUtilities, aspectRatioVariants)
  }
}
