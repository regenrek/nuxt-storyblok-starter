<template>
  <div>
    <h1 class="text-3xl mb-4 mt-12">Posts</h1>

    <BlokContent />

    <Bloks :class="componentClass" :bloks="story.content.bloks" />
  </div>
</template>
<script>
export default {
  components: {},
  async asyncData({ $storyblok, error, route }) {
    try {
      const { story } = await $storyblok.getCurrentStory({
        resolve_links: 'url'
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
    componentClass() {
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
