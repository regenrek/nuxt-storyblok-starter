import { storyblokConfig } from './config'
import { sortRoutes } from '@nuxt/utils'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  ssr: true,
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nuxt-nujek-starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@nujek/ui/css/nujek-ui.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/nujek-ui.js' },
    { src: '~/plugins/vue-tailwind.js' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: [
    { path: '~/components/bloks', global: true, extensions: ['vue', 'js'] },
    {
      path: '~/components/molecules/cards',
      global: true,
      extensions: ['vue', 'js']
    },
    {
      path: '~/node_modules/@nujek/ui/components/bloks',
      global: true,
      extensions: ['vue', 'js']
    },
    '~/components'
  ],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/composition-api',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
    '@nujek/core',
    ['@nujek/ui', { withConsole: true }],
    [
      '@nujek/storyblok',
      {
        storyblokConfig: storyblokConfig,
        withConsole: process.env.NODE_ENV === 'production' ? false : true,
        debug: process.env.NODE_ENV === 'production' ? false : true,
        storyblokQueries: {
          formatResponse: true
        }
      }
    ]
  ],

  /**
   * Nuxt custom router config
   */
  router: {
    extendRoutes(routes, resolve) {
      // We use the same template for frontpage and landingpages
      routes.push({
        name: 'index',
        path: '/',
        component: resolve(__dirname, 'pages/_slug/index.vue')
      })

      routes.push({
        name: 'cafe-custom',
        path: '/cafes',
        component: resolve(__dirname, 'pages/_slug/index.vue')
      })

      sortRoutes(routes)
    }
  },

  googleFonts: {
    families: {
      Manrope: [300, 400, 500, 600]
    }
  },

  colorMode: {
    // works with tailwindcss 2.0
    classSuffix: ''
  },

  tailwindcss: {
    cssPath: '~/assets/styles/tailwind.css'
  },

  build: {
    transpile: ['@nujek/shared', '@nujek/ui']
  }
}
