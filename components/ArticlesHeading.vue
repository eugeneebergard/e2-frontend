<script setup lang="ts">
defineProps<{
  name: string
  articlesCount: number
}>()
</script>

<template>
  <h1 class="heading">
    {{ name }}, у вас <span class="count">{{ articlesCount }}</span> сохранённых
    статьей
  </h1>
</template>

<style scoped lang="sass">
.heading
  padding: 0 0 40px
  margin: 0
  font-family: $heading-font-family
  color: $text-color
  font-size: 40px
  font-weight: 600
  .count
    color: $main-color
</style>
