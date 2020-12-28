<template>
  <n-section
    class="min-h-screen items-center"
    position="center"
    variant="boxed"
  >
    <div>
      <h1 class="text-lg">boxed</h1>
    </div>
  </n-section>
</template>

<script>
//import NjSection from '@nujek/ui/components/atoms/NjSection.vue'

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
