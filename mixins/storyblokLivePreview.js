export default {
  mounted () {
    this.$storybridge(
      () => {
        const { StoryblokBridge } = window
        if (typeof StoryblokBridge !== 'undefined') {
          const storyblokInstance = new StoryblokBridge()

          storyblokInstance.on(['input', 'published', 'change'], (event) => {
            if (event.action === 'input') {
              if (event.story.id === this.story.id) {
                this.story.content = event.story.content
              }
            } else {
              this.$nuxt.$router.go({
                path: this.$nuxt.$router.currentRoute,
                force: true
              })
            }
          })
        }
      },
      (error) => {
        console.error(error)
      }
    )
  }
}
