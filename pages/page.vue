<template>
  <div>
    <NjTest />
    <NjTextInput
      id="password"
      v-model="password"
      type="password"
      placeholder="Passwort"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: ''
    }
  }
}
</script>

<style lang="postcss" scoped></style>
