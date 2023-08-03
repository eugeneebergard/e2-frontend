<script setup lang="ts">
import { THeadline } from '@/types/articles'

defineProps<{
  headlines: THeadline[]
}>()
</script>

<template>
  <ul class="headline-list">
    <li
      v-for="headline in headlines"
      :key="headline.url"
      class="headline-list__item"
    >
      <a :href="headline.url" class="headline-list__link">{{
        headline.title
      }}</a>
    </li>
  </ul>
</template>

<style scoped lang="sass">
.headline-list
  @include resetList
  &__item
    display: flex
    align-items: center
    position: relative
    margin-bottom: 20px
    &:before
      position: absolute
      height: 20px
      width: 20px
      @include pseudoIcon('@/assets/images/headlineIcon.svg')
  &__link
    color: $text-color
    font-weight: 500
    padding-left: 30px
    font-family: $text-font-family
    @include cutLines(1)
    @include linkDefault
    @media(max-width: $tablet)
      @include cutLines(2)
</style>
