<template>
  <NjSection variant="section-lg">
    <div class="text-center">
      <t-tag tag-name="h2">
        {{ blok.title }}
      </t-tag>
      <SbRichtext v-if="blok.description" :text="blok.description" />
    </div>
    <SbImage
      :src="blok.image"
      :classes="{
        aspectRatio: 'aspect-ratio-16/9',
        image: 'object-cover w-full'
      }"
    />
    <NjSection variant="spacer" class="flex justify-center">
      <t-button to="#">
        Get Partner
      </t-button>
    </NjSection>
  </NjSection>
</template>

<script>
export default {
  name: 'TextImageBanner',
  props: {
    blok: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
