<template>
  <div class="nj-hero h-40 bg-red-200 flex justify-center items-center">
    <h1 class="text-lg">{{ blok.title }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="postcss" scoped></style>
