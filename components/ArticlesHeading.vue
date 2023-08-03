<script setup lang="ts">
import { plural } from '@/utils/plural'

defineProps<{
  name: string
  articlesCount: number
}>()

const forms = [
  'сохранённая статья',
  'сохранённых статьи',
  'сохранённых статьей'
]
</script>

<template>
  <h1 class="heading">
    {{ name }}, у вас <span class="count">{{ articlesCount }}</span>
    {{ plural(articlesCount, forms) }}
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
  @media (max-width: $tablet)
    font-size: 32px
    padding: 0 0 20px
  @media (max-width: $mob-l)
    font-size: 25px
  .count
    color: $main-color
</style>
