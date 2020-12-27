<template>
  <div />
</template>

<script>
export default {
  asyncData({ error }) {
    error({
      statusCode: 404
    })
  }
}
</script>
