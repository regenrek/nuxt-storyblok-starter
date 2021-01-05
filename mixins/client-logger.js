import consola from 'consola'

export default {
  mounted() {
    // @TODO Put this in nuxt-storyblok-queries
    consola.success('Storyblok Payload', this.story)
  }
}
