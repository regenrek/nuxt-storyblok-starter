<template>
  <div>
    <!-- <Hero v-bind="story.content" />
    <Bloks :bloks="story.content.bloks" /> -->
  </div>
</template>
<script>

export default {
  components: {},
  async asyncData ({ $storyblok, error }) {
    try {
      const { story } = await $storyblok.getCurrentStory({
        resolve_links: 'url'
      })

      console.log(story)

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
  }
}
</script>
