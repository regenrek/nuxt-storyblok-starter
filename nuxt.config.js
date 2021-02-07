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
  css: ['@nujek/ui/css/nujek-ui.css', '~assets/styles/main.css'],

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
    '@nuxtjs/router-extras',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
    '@nujek/core',
    ['@nujek/ui', { withConsole: false }],
    [
      '@nujek/storyblok',
      {
        storyblokConfig: storyblokConfig,
        withConsole: process.env.NODE_ENV === 'production' ? false : false,
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
        // {
        //   name: 'bistro',
        //   path: '/bistro',
        //   component: resolve(__dirname, 'pages/_slug/index.vue'),
        //   chunkName: 'pages/bistro',
        //   children: [
        //     {
        //       name: 'bistro-menu-card-slug',
        //       path: '/bistro/menu-card/:slug?',
        //       component: resolve(
        //         __dirname,
        //         'components/organisms/MenuCard/MenuDishCard.vue'
        //       ),
        //       chunkName: 'pages/bistro/menu-card/_slug'
        //     }
        //   ]
        // },
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

  tailwindcss: {
    cssPath: '~/assets/styles/tailwind.css'
  },

  build: {
    transpile: ['@nujek/shared', '@nujek/ui']
  }
}
