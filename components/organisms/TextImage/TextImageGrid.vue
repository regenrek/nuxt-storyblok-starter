<template>
  <NjSection variant="section-xl">
    <div
      class="grid grid-cols-1 items-center"
      :class="[
        !isVariant(VARIANTS.STACKED_IMAGE_BANNER) ? 'md:grid-cols-2' : ''
      ]"
    >
      <div
        class="px-8 lg:px-20"
        :class="{
          'md:order-2': isVariant(VARIANTS.IMAGE_LEFT_TEXT_RIGHT)
        }"
      >
        <t-tag tag-name="h2">
          {{ blok.title }}
        </t-tag>
        <div class="mb-4 md:mb-6 lg:mb-12">
          <SbRichtext v-if="blok.description" :text="blok.description" />
        </div>
        <t-button v-if="blok.button.length" :to="btnLink">
          {{ btn.label }}
        </t-button>
      </div>
      <div
        v-if="hasTwoImages"
        class="image-stack"
        :class="{
          'md:order-1': isVariant(VARIANTS.IMAGE_LEFT_TEXT_RIGHT)
        }"
      >
        <div class="image-stack__item image-stack__item--top">
          <SbImage v-bind="bindImage(blok.image, 'image')" />
        </div>
        <div class="image-stack__item image-stack__item--bottom">
          <SbImage v-bind="bindImage(blok.image2, 'image2')" />
        </div>
      </div>
      <div
        v-else
        :class="{ 'md:order-1': isVariant(VARIANTS.IMAGE_LEFT_TEXT_RIGHT) }"
      >
        <div>
          <SbImage v-bind="bindImage(blok.image, 'image')" />
        </div>
      </div>
    </div>
  </NjSection>
</template>

<script>
import { VARIANTS } from './const'

const DEFAULTS = {
  image: {
    classes: {
      aspectRatio: 'w-full',
      image: 'object-cover w-full'
    },
    resize: { width: '355', height: '483' }
  },
  image2: {
    classes: {
      aspectRatio: 'w-full',
      image: 'object-cover w-full'
    },
    resize: { width: '398', height: '409' }
  }
}

const _getKey = (value) => {
  return (
    Object.keys(VARIANTS).find(key => VARIANTS[key].key === value) ||
    VARIANTS[value]
  )
}

export default {
  name: 'TextImageGrid',
  props: {
    blok: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      VARIANTS,
      DEFAULTS
    }
  },
  computed: {
    btn () {
      return this.blok.button.length && this.blok.button[0]
    },
    btnLink () {
      return (
        this.blok.btn &&
        (this.blok.btn.link?.url || '/' + this.blok.btn.link?.story?.fullSlug || '')
      )
    },
    hasTwoImages () {
      return this.blok.image2?.filename
    }
  },
  methods: {
    bindImage (image, propName) {
      const currentVariant =
        VARIANTS[_getKey(this.variant)]?.[propName || 'image']
      const currentDefault = DEFAULTS[propName || 'image']

      return {
        src: image,
        classes: currentVariant?.classes || currentDefault.classes,
        resize: currentVariant?.resize || currentDefault.resize
      }
    },
    isVariant (v) {
      return this.variant === v?.key || this.variant === v
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
</style>
