<script setup lang="ts">
import { THeadline } from '@/types/articles'

defineProps<{
  headlines: THeadline[]
}>()
</script>

<template>
  <div class="headlines">
    <h2 class="title">Популярное сейчас</h2>
    <HeadlineList :headlines="headlines" />
  </div>
</template>

<style scoped lang="sass">
.headlines
  padding: 25px 25px 40px
  background-color: #fff
  border-radius: 15px
  @media (max-width: $mob-l)
    padding: 20px 15px 25px
  .title
    display: inline-block
    margin: 0 0 20px 0
    padding-bottom: 7px
    font-size: 25px
    color: $text-color
    font-family: $heading-font-family
    @include borderUnderline
    @media (max-width: $mob-l)
      font-size: 18px
</style>
