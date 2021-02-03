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
        <t-tag tag-name="h2">{{ title }}</t-tag>
        <div class="mb-4 md:mb-6 lg:mb-12">
          <SbRichtext v-if="description" :text="description" />
        </div>
        <t-button :to="btnLink">{{ btn.label }}</t-button>
      </div>
      <div
        v-if="hasTwoImages"
        class="image-stack"
        :class="{
          'md:order-1': isVariant(VARIANTS.IMAGE_LEFT_TEXT_RIGHT)
        }"
      >
        <div class="image-stack__item image-stack__item--top">
          <SbImage v-bind="bindImage(image, 'image')" />
        </div>
        <div class="image-stack__item image-stack__item--bottom">
          <SbImage v-bind="bindImage(image2, 'image2')" />
        </div>
      </div>
      <div
        v-else
        :class="{ 'md:order-1': isVariant(VARIANTS.IMAGE_LEFT_TEXT_RIGHT) }"
      >
        <div>
          <SbImage v-bind="bindImage(image, 'image')" />
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
    Object.keys(VARIANTS).find((key) => VARIANTS[key].key === value) ||
    VARIANTS[value]
  )
}

export default {
  name: 'TextImageGrid',
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
  },
  data() {
    return {
      VARIANTS: VARIANTS,
      DEFAULTS: DEFAULTS
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
  },
  methods: {
    bindImage(image, propName) {
      const currentVariant =
        VARIANTS[_getKey(this.variant)]?.[propName || 'image']
      const currentDefault = DEFAULTS[propName || 'image']

      return {
        src: image,
        classes: currentVariant?.classes || currentDefault.classes,
        resize: currentVariant?.resize || currentDefault.resize
      }
    },
    isVariant(v) {
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
/* 
img {
  width: 100%;
  display: block;
} */
</style>
