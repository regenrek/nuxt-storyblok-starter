<template>
  <div>
    <NjSection class="min-h-screen items-center" variant="boxed">
      <div>
        <h1 class="text-lg">boxed</h1>
      </div>
    </NjSection>
    <div
      class="min-h-screen items-center"
      :classes="{
        wrapper: 'bg-yellow-600'
      }"
      :variants="{
        cool: {
          wrapper: 'bg-green-800'
        }
      }"
      variant="cool"
    >
      <div>
        <h1 class="text-lg">boxed</h1>
      </div>
    </div>
  </div>
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
