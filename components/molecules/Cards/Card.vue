<template>
  <div class="es-card w-full">
    <slot name="header">
      <div class="pb-2" style="background-color: #003538">
        <div class="relative">
          <nuxt-link :to="blok.fullSlug">
            <SbImage aspect-ratio="16/9" :src="blok.content.image" />
          </nuxt-link>
          <div
            class="rounded-3xl flex justify-center items-center absolute h-12 w-20 bottom-6 left-6"
          >
            <img src="/svg/play.svg" class="h-4 w-4">
          </div>
        </div>
      </div>
    </slot>
    <slot name="footer">
      <div class="footer border-2 p-6">
        <h3 class="text-3xl font-solano text-primary font-bold mb-4">
          {{ blok.content.title }}
        </h3>
        <p class="font-pluto font-light text-gray-500">
          {{ blok.content.description }}
        </p>
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>
