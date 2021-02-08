<template>
  <NjSection variant="section-lg">
    <div class="flex items-center">
      <div class="px-8 lg:px-20">
        <h1 class="text-2xl lg:text-5xl xl:text-6xl">
          {{ title }}
        </h1>
      </div>
      <div class="image-stack">
        <div class="image-stack__item image-stack__item--top">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/110238/portrait1.jpeg"
            alt=""
          />
        </div>
        <div class="image-stack__item image-stack__item--bottom">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/110238/texture-waves-cropped.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  </NjSection>
</template>

<script>
export default {}
</script>

<style lang="postcss" scoped>
.image-stack {
  display: grid;
  position: relative;
  grid-template-columns: repeat(12, 1fr);
}

.image-stack__item--bottom {
  grid-column: 4 / -1;
  grid-row: 1;
}

.image-stack__item--top {
  grid-row: 1;
  grid-column: 1 / span 6;
  padding-top: 20%;
  z-index: 1;
}

img {
  width: 100%;
  display: block;
}
</style>
