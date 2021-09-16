<template>
  <div class="flex justify-center w-full">
    <div class="max-w-screen-xl w-full px-6">
      <NjNav class="py-2" :is-fixed="false">
        <template #burger-menu>
          <NjBurger :open.sync="isOpenBurger" />
        </template>

        <template #logo>
          <div class="w-40 lg:w-48">
            <nuxt-link to="/" class="block">
              Bakery
            </nuxt-link>
          </div>
        </template>

        <template #nav>
          <div
            class="hidden sm:flex items-center flex-grow justify-between space-x-4"
          >
            <!-- main nav desktop -->
            <div class="hidden sm:flex justify-center items-center space-x-4">
              <nav v-for="(nav_item, index) in mainNavigation" :key="index">
                <component
                  :is="getLinkType(nav_item)"
                  v-bind="getLink(nav_item)"
                  class="flex items-center"
                >
                  {{ nav_item.name }}
                </component>
              </nav>
            </div>
            <!-- nav-right -->
            <div class="flex items-center space-x-4">
              <div
                v-for="(nav_item, index) in mainNavigationRight"
                :key="index"
              >
                <component
                  :is="getLinkType(nav_item)"
                  v-bind="getLink(nav_item)"
                  class="flex items-center"
                >
                  <span>{{ nav_item.name }}</span>
                </component>
              </div>
            </div>
          </div>
        </template>
      </NjNav>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      dummyMainNavigation: [
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
      navOpen: state => state.nav.navOpen,
      mainNavigationRight: state => state.nav.settings.navigation_right
    }),
    ...mapGetters({
      mainNavigation: 'nav/main'
    }),
    isOpenBurger: {
      get () {
        return this.navOpen
      },
      set (val) {
        this.$store.dispatch('nav/set', val)
      }
    }
  },
  methods: {
    ...mapActions({
      toggleSidebar: 'nav/toggle',
      closeSidebar: 'nav/close'
    }),
    getLinkType (navItem) {
      if (navItem.link?.linktype === 'url') {
        return 'a'
      } else {
        return 'nuxt-link'
      }
    },
    getLink (navItem) {
      if (navItem.link?.linktype === 'url') {
        return { href: navItem.link.url, target: '_blank' }
      } else if (navItem.link?.linktype === 'story') {
        return {
          to: '/' + navItem.link?.story?.full_slug,
          'exact-active-class': 'navbar-item--active'
        }
      } else {
        return { to: '/', 'exact-active-class': 'navbar-item--active' }
      }
    }
  }
}
</script>

<style scoped>
.nj-burger.active {
  z-index: 999;
}
</style>
