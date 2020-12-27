<template>
  <NjNav :is-fixed="false">
    <template #burger-menu>
      <NjBurger class="burger" />
    </template>

    <template #logo>
      <div class="w-40 lg:w-48">
        <nuxt-link to="/" class="block">
          <!-- TODO -->
          Logo
        </nuxt-link>
      </div>
    </template>

    <template #nav>
      <!-- main nav desktop -->
      <nav class="hidden lg:flex justify-center items-center nj-nav-height">
        <template v-for="nav_item in mainNavigation">
          <nuxt-link
            v-if="nav_item.link && nav_item.link.linktype === 'story'"
            :key="nav_item._uid"
            :to="`/${nav_item.link.cached_url}`"
            class="font-600 cursor-pointer transition-color duration-700 text-sm navbar-item mx-2 lg:mx-4 xl:mx-6 h-20 uppercase letter-space flex items-center"
            :class="navFontColor"
            exact-active-class="navbar-item--active"
          >
            {{ nav_item.name || 'Mehr erfahren' }}
          </nuxt-link>
          <a
            v-else-if="nav_item.link && nav_item.link.linktype === 'url'"
            :key="nav_item._uid"
            :href="nav_item.link.url"
            class="cursor-pointer"
            >{{ nav_item.name || 'Mehr erfahren' }}</a
          >
        </template>
      </nav>
    </template>
  </NjNav>
</template>

<script>
import { mapActions } from 'vuex'

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
  }
}
</script>

<style scoped></style>
