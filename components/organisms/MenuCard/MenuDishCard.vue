<template>
  <div v-if="blok.content" class="w-full">
    Dish Name: {{ blok.content.title }}
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
