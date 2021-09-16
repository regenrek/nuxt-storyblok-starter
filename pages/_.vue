<template>
  <div>
    <Hero v-bind="story.content" />
    <Bloks :bloks="story.content.bloks" />
  </div>
</template>
<script>
const RELATIONS = [
  'blok_grid.source'
]

export default {
  components: {},
  async asyncData ({ $storyapi, error, route }) {
    try {
      const fullSlug = (route.path === '/' || route.path === '') ? 'home' : route.path

      const currentPage = await $storyapi.getStory(
        fullSlug,
        {
          resolve_relations: RELATIONS.join(','),
          resolve_links: 'url'
        }
      )

      // if you plan to use nuxt-storyblok-queries
      // const { story } = await $storyblok.getCurrentStory({
      //   resolve_links: 'url'
      // })

      return {
        story: currentPage.data.story
      }
    } catch (e) {
      console.error('Exception', e)
      error({
        statusCode: 404,
        message: e.message
      })
    }
  }
}
</script>
