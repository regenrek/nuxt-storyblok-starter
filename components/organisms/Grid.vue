<template>
  <NjSection variant="boxed" class="relative">
    <t-tag tag-name="h2">{{ title }}</t-tag>

    <SbGrid
      v-bind="{
        blok: {
          post_type: fullSlug
        },
        columns: gridCols,
        tag: 'div'
      }"
    >
      <template #card="{ item }">
        <component :is="componentName(item)" :blok="item" />
      </template>
    </SbGrid>
  </NjSection>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    source: {
      type: Object,
      default: () => {}
    }
  },

  computed: {
    componentName() {
      return (item) => item?.content?.component || 'Card'
    },
    fullSlug() {
      return this.source?.fullSlug
    },
    // TODO: Add field in storyblok for columns
    gridCols() {
      switch (this.variant) {
        case 'equipmentGrid':
          return
        default:
          return 2
      }
    }
  }
}
</script>
