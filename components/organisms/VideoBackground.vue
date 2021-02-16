<template>
  <div class="py-24 bg-red-500">
    <NjVideoBackground :src="url.url" class="min-h-520" />
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style lang="postcss" scoped></style>
