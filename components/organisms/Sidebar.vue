<template>
  <NjSidebar v-bind="{ ...$props, ...$attrs }">
    <template #header>
      <div class="flex items-center justify-between py-4 px-6">
        <div class="">Logo Here</div>
      </div>
    </template>
    <div class="px-6">
      <div class="flex justify-end pt-4 pb-8">
        <div class="nav-icos flex" />
      </div>
      <nav class="mb-8">
        <div
          v-for="nav_item in mobileNavigation"
          :key="nav_item._uid"
          class="mb-4"
        >
          <a
            v-if="nav_item.link.linktype === 'url'"
            href="getNavItemLink(nav_item)"
            target="_blank"
            class="relative inline-block hover:text-hre-red letter-space mb-2 text-h2 font-dmsans text-white"
            >{{ nav_item.name }}</a
          >
          <NjNavItem
            v-else
            :type="nav_item.link.linktype"
            :to="getNavItemLink(nav_item)"
            class="relative inline-block hover:text-hre-red letter-space mb-2 text-h2 font-dmsans text-white"
            @onClick="closeSidebar"
          >
            {{ nav_item.name }}
          </NjNavItem>
        </div>
      </nav>

      <!-- sub mobile -->
      <nav class="sidebar-items grid sm:grid-cols-2 w-full">
        <div
          v-for="nav_item in mobileSubNavigation"
          :key="nav_item._uid"
          class=""
        >
          <div class="pb-2">
            <a
              v-if="nav_item.link.linktype === 'url'"
              :href="getNavItemLink(nav_item)"
              target="_blank"
              class="relative inline mb-0 text-paragraph font-dmsans text-white text-opacity-75"
              >{{ nav_item.name }}</a
            >
            <NjNavItem
              v-else
              :type="nav_item.link.linktype"
              class="relative inline mb-0 text-paragraph font-dmsans text-white text-opacity-75"
              :to="getNavItemLink(nav_item)"
              @onClick="closeSidebar"
            >
              {{ nav_item.name }}
            </NjNavItem>
          </div>
        </div>
      </nav>
    </div>
  </NjSidebar>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      mobileNavigation: 'nav/mobile',
      mobileSubNavigation: 'nav/mobileSub'
    })
  },
  methods: {
    ...mapActions({
      closeSidebar: 'nav/closeSidebar'
    }),
    getNavItemLink(navItem) {
      return navItem.link?.story?.full_slug
        ? navItem.link.story.full_slug
        : navItem.link?.url
        ? navItem.link?.url
        : null
    }
  }
}
</script>
