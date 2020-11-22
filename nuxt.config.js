import { storyblokConfig } from './config'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

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
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    'nujek-ui/nuxt'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    ['storyblok-nuxt', storyblokConfig],
    ['@wearewondrous/nuxt-storyblok-queries', storyblokConfig]
  ],

  tailwindcss: {
    cssPath: '~/assets/styles/tailwind.css'
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
}
