<template>
  <NjSection class="bg-red-500" position="center" width="boxed">
    <h1 class="text-lg">{{ $props }}</h1>
  </NjSection>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="postcss" scoped></style>
