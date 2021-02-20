module.exports = {
  darkMode: 'class',
  exposeConfig: true,
  purge: {
    options: {
      safelist: [
        '/aspect-ratio-/',
        '/nj-video-background/',
        '/nj-burger/',
        '/swiper/',
        '/has-aspect-ratio/',
        'nj-video-background'
      ]
    },
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      './node_modules/@nujek/ui/dist/runtime/**/*.{vue,js}',
      './node_modules/@nujek/ui/dist/*.css',
      './node_modules/@nujek/storyblok/dist/runtime/**/*.vue'
    ]
  },
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
        '9/16': [9, 16],
        '4/3': [4, 3],
        '3/4': [3, 4],
        '2/3': [2, 3]
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
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              letterSpacing: '-1.2367px'
            },
            h2: {
              letterSpacing: '-1.2367px'
            },
            h4: {
              fontWeight: 500,
              letterSpacing: '-1.2367px'
            }
          }
        },
        '3xl': {
          css: {
            fontSize: '1.875rem',
            p: {
              fontSize: '1.2rem'
            },
            a: {
              fontSize: '1.2rem'
            },
            span: {
              fontSize: '1.2rem'
            },
            li: {
              fontSize: '1.2rem'
            }
            // ...
          }
        }
      }
    }
  },
  variants: {
    aspectRatio: ['responsive']
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('./tailwind-plugins/aspect-ratio.js')()
  ]
}
