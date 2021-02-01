<template>
  <NjSection variant="header" class="py-16 prose md:prose-lg lg:prose-xl">
    <div class="grid grid-cols-1 md:grid-cols-2 items-center">
      <div class="px-8 lg:px-20" :class="{ 'md:order-2': textRight }">
        <t-tag tag-name="h2">{{ title }}</t-tag>
        <div class="mb-4 md:mb-6 lg:mb-12">
          <SbRichtext v-if="description" :text="description" />
        </div>
        <t-button v-if="btn" :to="btnLink">{{ btn.label }}</t-button>
      </div>
      <div
        v-if="hasTwoImages"
        class="image-stack"
        :class="{ 'md:order-1': textRight }"
      >
        <div class="image-stack__item image-stack__item--top">
          <SbImage :src="image" :resize="{ width: '398', height: '409' }" />
        </div>
        <div class="image-stack__item image-stack__item--bottom">
          <SbImage
            :src="image2"
            :resize="{ width: '355', height: '483' }"
            :classes="{
              aspectRatio: 'w-full',
              image: 'object-cover w-full'
            }"
          />
        </div>
      </div>
      <div v-else class="image-stack" :class="{ 'md:order-1': textRight }">
        <div class="image-stack__item image-stack__item--bottom w-full">
          <SbImage
            :resize="{ width: '514', height: '531' }"
            :src="image"
            :classes="{
              aspectRatio: 'w-full',
              image: 'w-full object-cover'
            }"
          />
        </div>
      </div>
    </div>
  </NjSection>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    image: {
      type: [Object, String],
      default: () => {}
    },
    image2: {
      type: [Object, String],
      default: () => {}
    },
    bgImage: {
      type: Object,
      default: () => {}
    },
    description: {
      type: [Object, String],
      default: ''
    },
    textRight: {
      type: Boolean,
      default: false
    },
    bgImageClass: {
      type: String,
      default: ''
    },
    button: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    btn() {
      return this.button.length && this.button[0]
    },
    btnLink() {
      return (
        this.btn &&
        (this.btn.link?.url || '/' + this.btn.link?.story?.fullSlug || '')
      )
    },
    hasTwoImages() {
      return this.image2?.filename
    }
  }
}
</script>

<style lang="postcss" scoped>
.image-stack {
  display: grid;
  position: relative;
  grid-template-columns: repeat(12, 1fr);
  /* grid-template-rows: repeat(2, 1fr); */
}

.image-stack__item--bottom {
  grid-column: 6 / -1;
  grid-row: 1;
  z-index: 1;
}

.image-stack__item--top {
  grid-row: 2;
  margin-top: -50%;
  grid-column: 1 / span 6;
}
/* 
img {
  width: 100%;
  display: block;
} */
</style>
