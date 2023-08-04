<script setup lang="ts">
import { computed } from 'vue'
import { plural } from '@/utils/plural'

const props = defineProps<{
  keywords: string[]
}>()

const forms = ['другому', 'другим', 'другим']

const lastKeywords = computed(() => {
  return props.keywords.length > 4 ? props.keywords.slice(0, 4) : props.keywords
})
const numberOthers = computed(() => {
  return props.keywords.length > 4 ? props.keywords.length - 4 : 0
})
</script>

<template>
  <div class="keywords">
    <p class="text">По ключевым словам:</p>
    <div class="keyword-container">
      <span v-for="keyword in lastKeywords" :key="keyword" class="keyword">
        {{ keyword }}
      </span>
      <p v-if="numberOthers" class="others">
        и <span class="number-others">{{ numberOthers }}</span>
        {{ plural(numberOthers, forms) }}
      </p>
    </div>
  </div>
</template>

<style scoped lang="sass">
.keywords
  margin: 0 0 35px
  display: flex
  align-items: center
  @media (max-width: $tablet)
    flex-direction: column
    align-items: start
  .text
    margin: 0
    font-family: $text-font-family
    font-size: 16px
  .keyword
    padding: 10px 15px
    margin-left: 10px
    background-color: #fff
    border-radius: 30px
    color: $main-color
    @media (max-width: $tablet)
      margin-left: 0
      margin-right: 10px
    &-container
      display: flex
      align-items: center
      overflow: auto
      @media (max-width: $tablet)
        margin-top: 10px
        padding-bottom: 15px
        width: 100%
  .others
    padding: 0
    margin: 0 0 0 10px
    white-space: nowrap
    @media (max-width: $tablet)
      margin-left: 0
  .number-others
    margin: 0
    color: $main-color
    font-weight: 600
</style>
