import { storyblokConfig } from './config'
import path from 'path'

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
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: [
    { path: '~/components/bloks', global: true, extensions: ['vue', 'js'] },
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
      { storyblokConfig: storyblokConfig, withConsole: true, debug: true }
    ]
  ],

  googleFonts: {
    families: {
      Manrope: [300, 400, 500, 600]
    }
  },

  colorMode: {
    // works with tailwindcss 2.0
    classSuffix: ''
  },

  router: {
    extendRoutes(routes, resolve) {
      // const posts = ['blog']
      // routes.push(
      //   ...posts.map((name) => ({
      //     name: `${name}-slug`,
      //     path: `/${name}/:slug`,
      //     meta: {
      //       parent: `/${name}`
      //     },
      //     component: resolve(__dirname, 'pages/post/_slug.vue')
      //   })),
      //   {
      //     name: 'index',
      //     path: '/',
      //     component: resolve(__dirname, 'pages/_slug/index.vue')
      //   }
      // )
    }
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    [
      'nuxt-i18n',
      {
        locales: ['en', 'es'],
        defaultLocale: 'en',
        vueI18n: {
          fallbackLocale: 'en',
          messages: {
            en: {
              greeting: 'Hello world!'
            },
            es: {
              greeting: '¡Hola mundo!'
            }
          }
        }
      }
    ]
  ],

  tailwindcss: {
    cssPath: '~/assets/styles/tailwind.css'
  },

  build: {
    transpile: ['@nujek/shared']
    // postcss: {
    //   parser: 'postcss-scss',
    //   plugins: {
    //     'postcss-import': {},
    //     'postcss-mixins': {},
    //     tailwindcss: path.resolve(__dirname, './tailwind.config.js'),
    //     'postcss-nested': {},
    //     'postcss-hexrgba': {}
    //   }
    // }
  }

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  // build: {
  //   extend(config, { isDev }) {
  //     // do not resolve symlinks
  //     if (isDev) config.resolve.symlinks = false
  //   }
  // }
}
