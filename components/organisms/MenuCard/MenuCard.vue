<template>
  <NjSection variant="section-lg">
    <div>
      <t-tag tag-name="h2">{{ title }}</t-tag>
      <p>{{ description }}</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div>
        <t-button
          v-for="(item, index) in getCategories"
          :key="index"
          class="block w-full pb-4"
          :class="{ active: selectedTab.name === item.name }"
          variant="outlined-black"
          @click="selectTab(item)"
        >
          {{ item.title }}
        </t-button>
      </div>

      <div>
        <SbGrid
          v-bind="{
            blok: {
              post_type: postType.fullSlug,
              resolve_relations: 'category'
            },
            filterQuery
          }"
          :columns="1"
        >
          <template #card="{ item }">
            <component :is="postType.dishComponentName" :blok="item" />
          </template>
        </SbGrid>
      </div>
    </div>
  </NjSection>
</template>

<script>
import MenuDishCard from './MenuDishCard'
import slugify from 'slugify'

const PostType = {
  name: 'Dish',
  fullSlug: 'bistro/menu-card',
  dishComponentName: 'MenuDishCard'
}

export default {
  name: 'MenuCard',
  components: {
    MenuDishCard
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      categories: [],
      selectedTab: {},
      postType: PostType
    }
  },
  async fetch() {
    try {
      const menuCategories = await this.$storyblok.getStoryCollection(
        'bistro/menu-card/categories'
      )
      this.categories = menuCategories
      this.selectedTab = this.getCategories[0]

      console.log(this.categories)
    } catch (e) {
      console.error('error', e)
    }
  },
  computed: {
    filterQuery() {
      const all = this.selectedTab.name === '-'

      return {
        ...(!all && {
          category: {
            like: this.selectedTab.name
          },
          component: {
            in: 'Dish'
          }
        })
      }
    },
    getCategories() {
      return this.categories?.stories?.map((category) => {
        return {
          title: category?.content?.title,
          name: category.name,
          slug: category.slug,
          fullSlug: category.fullSlug
        }
      })
    }
  },
  methods: {
    selectTab(tab) {
      console.log('selected before', this.selectedTab)
      this.selectedTab = tab
      console.log('selected before', this.selectedTab)
      this.$router.push({
        name: 'slug',
        query: {
          kategorien: this.slugify(tab.name)
        },
        params: {
          slug: 'bistro'
        }
      })
    },
    slugify(string) {
      return slugify(string, {
        lower: true,
        locale: 'de'
      })
    }
  }
}
</script>
