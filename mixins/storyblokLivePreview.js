const assign = {
  'reale-haus-der-digitalisierung': 'landing'
}

export default {
  mounted() {
    this.$storybridge.on(['input'], (event) => {
      if (event.story.id === this.story.id) {
        this.story.content = event.story.content

        const storyName = assign[this.story.slug] || this.story.slug

        this.$store.dispatch(
          'header/setHeader',
          this.$pageHelper.parseHeader(this.story, storyName)
        )
      }
    })

    this.$storybridge.on(['published', 'change'], (event) => {
      // window.location.reload()
      if (!event.slugChanged) {
        // Reload the page on save events (publish, save button or autosave)
        this.$nuxt.$router.go({
          path: this.$nuxt.$router.currentRoute,
          force: true
        })
      }
    })
  }
}
