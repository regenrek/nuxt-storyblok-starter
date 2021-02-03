<template>
  <NjSection variant="section-lg">
    <div class="text-center">
      <t-tag tag-name="h2">{{ title }}</t-tag>
      <SbRichtext v-if="description" :text="description" />
    </div>
    <SbImage
      :src="image"
      :classes="{
        aspectRatio: 'aspect-ratio-16/9',
        image: 'object-cover w-full'
      }"
    />
    <NjSection variant="spacer" class="flex justify-center">
      <t-button to="#">Get Partner</t-button>
    </NjSection>
  </NjSection>
</template>

<script>
export default {
  name: 'TextImageBanner',
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
      type: Object,
      default() {
        return {}
      }
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
    },
    variant: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="postcss" scoped></style>
