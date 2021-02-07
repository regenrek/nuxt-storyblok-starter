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
          :key="timestamp"
          v-bind="{
            blok: {
              post_type: postType.fullSlug,
              resolve_relations: 'category',
              posts_per_page: PostsPerPage
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
import { v4 as uuidv4 } from 'uuid'

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
      postType: PostType,
      PostsPerPage: 10,
      timestamp: uuidv4()
    }
  },
  async fetch() {
    try {
      const menuCategories = await this.$storyblok.getStoryCollection(
        'bistro/menu-card/categories'
      )
      this.categories = menuCategories
      this.selectedTab = this.getCategories[0]

      this.PostsPerPage = 9
      this.timestamp = uuidv4()
    } catch (e) {
      console.error('error', e)
    }
  },
  computed: {
    filterQuery() {
      const all = this.selectedTab.name === '-'

      console.log('Filterquers', this.selectedTab.uuid)

      return {
        ...(!all && {
          category: {
            like:
              this.selectedTab.uuid ||
              (this.getCategories?.length && this.getCategories[0].uuid) ||
              ''
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
          fullSlug: category.fullSlug,
          uuid: category.uuid
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
