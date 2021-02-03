<template>
  <div v-if="blok.content" class="w-full">
    <slot name="header">
      <div class="pb-2">
        <div class="relative">
          <SbImage
            :src="image"
            :classes="{
              aspectRatio: 'aspect-ratio-16/9',
              image: 'object-cover'
            }"
          />
        </div>
      </div>
    </slot>
    <slot name="footer">
      <div class="footer border-2 p-6">
        <t-tag tag-name="h2"
          ><nuxt-link :to="'/' + blok.fullSlug">{{
            blok.content.title
          }}</nuxt-link></t-tag
        >
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    image() {
      return this.blok.content?.featuredImage || {}
    }
  }
}
</script>
