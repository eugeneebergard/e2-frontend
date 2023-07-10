<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <h1 class="heading">{{ title }}</h1>
</template>

<style scoped lang="sass">
.heading
  margin: 0 0 20px
  color: $secondary-color
  font-size: 40px
  font-weight: 600
  @include headingFontFamily
</style>
