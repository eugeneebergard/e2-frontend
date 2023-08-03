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
  font-family: $heading-font-family
  color: $text-color
  font-size: 40px
  font-weight: 600
  position: relative
  z-index: 1
  @media (max-width: $tablet)
    font-size: 32px
    text-align: center
  @media (max-width: $mob-l)
    font-size: 25px
</style>
