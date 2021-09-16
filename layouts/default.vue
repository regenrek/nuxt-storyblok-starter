<template>
  <div class="bg-noise bg-white">
    <Nav />
    <Sidebar :show.sync="isOpenBurger" :width="'80%'" />
    <Nuxt />
    <!-- footer -->
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      navOpen: state => state.nav.navOpen
    }),
    isOpenBurger: {
      get () {
        return this.navOpen
      },
      set (val) {
        this.$store.dispatch('nav/set', val)
      }
    }
  }
}
</script>
