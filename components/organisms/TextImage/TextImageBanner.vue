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
import TextImage from '~/mixins/components/organisms/TextImage'

export default {
  name: 'TextImageBanner',
  mixins: [TextImage]
}
</script>
