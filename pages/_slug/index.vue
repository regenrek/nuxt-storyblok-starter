<template>
  <Bloks :class="componentClass" :bloks="story.content.bloks" />
</template>
<script>
import ClientLogger from '~/mixins/client-logger'

export default {
  components: {},
  mixins: [ClientLogger],
  async asyncData ({ $storyblok, error }) {
    try {
      const { story } = await $storyblok.getCurrentStory({
        resolve_links: 'url',
        // resolve grid relations
        resolve_relations: 'blok_grid.source'
      })

      return {
        story
      }
    } catch (e) {
      console.error('Exception', e)
      error({
        statusCode: 404,
        message: e.message
      })
    }
  },
  computed: {
    componentClass () {
      switch (this.story.content.component) {
        case 'content-page':
          return ['my-12']
        case 'landing-page':
          return false
        default:
          return false
      }
    }
  }
}
</script>
