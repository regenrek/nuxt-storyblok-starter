<template>
  <div class="bg-yellow-500 grid grid-cols-1 gap-y-6 md:gap-y-12 xxl:gap-y-16">
    <div class="h-12 w-12" />
    <component
      :is="blok.component | dashify"
      v-for="blok in bloks"
      :key="blok._uid"
      :blok="blok"
    />
  </div>
</template>

<script>
import BlokHero from '~/components/bloks/BlokHero'

export default {
  name: 'SbBloks',
  components: {
    BlokHero
  },
  props: {
    bloks: {
      type: Array,
      default: () => []
    }
  }
}
</script>
