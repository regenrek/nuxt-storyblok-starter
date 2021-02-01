<template>
  <div class="bg-white dark:bg-gray-500">
    <Nav />
    <Sidebar :show.sync="isOpenBurger" :width="'80%'" />
    <Nuxt />
    <!-- footer -->
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      mainNavigation: [
        {
          link: { cached_url: '/' },
          name: 'Home',
          linktype: 'url',
          _uid: '0'
        }
      ]
    }
  },
  computed: {
    ...mapState({
      navOpen: (state) => state.nav.navOpen
    }),
    isOpenBurger: {
      get: function () {
        return this.navOpen
      },
      set: function (val) {
        this.$store.dispatch('nav/set', val)
      }
    }
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

body {
  font-family: 'Manrope';
}
</style>
