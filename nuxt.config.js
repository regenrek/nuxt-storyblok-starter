import { storyblokConfig } from './config'
import { sortRoutes } from '@nuxt/utils'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'server',
  ssr: true,
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Bakery | Nujek Starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~assets/styles/main.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/nujek-ui.js' },
    { src: '~/plugins/vue-tailwind.js' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: [{ path: '~/components', pathPrefix: false, prefix: '' }],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/composition-api',
    '@nuxtjs/tailwindcss',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
    [
      '@nujek/ui',
      {
        withConsole: true
      }
    ],
    [
      '@nujek/storyblok',
      {
        storyblokConfig: storyblokConfig,
        withConsole: true,
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
      const routesToAdd = [
        {
          name: 'index',
          path: '/',
          component: resolve(__dirname, 'pages/_slug/index.vue'),
          chunkName: 'pages/index'
        },
        {
          name: 'cafes',
          path: '/cafes',
          component: resolve(__dirname, 'pages/_slug/index.vue'),
          chunkName: 'pages/cafe/index'
        }
      ]

      const existingRoutesToRemove = routesToAdd.map((route) => route.name)

      const generateRoutes = routes.filter((route) => {
        return !existingRoutesToRemove.includes(route.name)
      })

      routesToAdd.forEach(({ name, path, component, chunkName }) => {
        generateRoutes.push({
          name,
          path,
          component,
          chunkName
        })
      })

      routes.splice(0, routes.length, ...generateRoutes) // set new array

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

  build: {
    extractCss: true
  }
}
