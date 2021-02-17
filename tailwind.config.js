module.exports = {
  darkMode: 'class',
  purge: {
    enabled: false,
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
      '@nujek/ui/css/nujek-ui.css',
      '@nujek/ui/css/components/video-background.css',
      '@nujek/ui/css/components/burger.css'
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
