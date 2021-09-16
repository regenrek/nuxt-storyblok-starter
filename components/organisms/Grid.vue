<template>
  <NjSection variant="section-lg" class="relative">
    <t-button
      v-for="(item, index) in tabs"
      :key="index"
      class="block md:inline-block md:ml-3 md:mt-2 mb:mt-0 w-full md:w-auto mt-2"
      :class="{ active: selectedTab.value === item.value }"
      variant="outlined-black"
      @click="selectTab(item)"
    >
      {{ item.label }}
    </t-button>

    <SbGrid
      v-bind="{
        blok: {
          post_type: fullSlug
        },
        filterQuery
      }"
      :columns="2"
    >
      <template #card="{ item }">
        <component :is="componentName(item)" :blok="item" />
      </template>
    </SbGrid>
  </NjSection>
</template>

<script>
import slugify from 'slugify'

const TABS = [
  {
    label: 'Alle',
    value: 'alle'
  },
  { label: 'Filialen', value: 'shop' },
  { label: 'Shop with Coffee Shop', value: 'shop_with_coffee_shop' }
]

export default {
  props: {
    variant: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    source: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      tabs: TABS,
      scrollPosition: null,
      selectedTab: TABS[0]
    }
  },
  computed: {
    filterQuery () {
      const all = this.selectedTab.value === 'alle'

      return {
        ...(!all && {
          shop_category: {
            like: this.selectedTab.value
          }
        })
      }
    },
    componentName () {
      return item => item?.content?.component || 'Card'
    },
    fullSlug () {
      return this.source?.fullSlug
    }
  },
  methods: {
    selectTab (tab) {
      this.selectedTab = tab
      this.$router.push({
        name: 'cafes',
        query: {
          category: this.slugify(tab.value)
        }
      })
    },
    slugify (string) {
      return slugify(string, {
        lower: true,
        locale: 'de'
      })
    }
  }
}
</script>
