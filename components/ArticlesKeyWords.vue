<script setup lang="ts">
import { ref } from 'vue'
import { plural } from '@/utils/plural'

const props = defineProps<{
  keywords: string[]
}>()

const forms = ['другому', 'другим', 'другим']
const lastKeywords = ref(props.keywords)
let numberOthers = 0

if (props.keywords.length > 5) {
  lastKeywords.value = props.keywords.slice(0, 5)
  numberOthers = props.keywords.length - 5
}
</script>

<template>
  <div class="keywords">
    <p class="text">По ключевым словам:</p>
    <span v-for="keyword in lastKeywords" :key="keyword" class="keyword">
      {{ keyword }}
    </span>
    <p v-if="numberOthers" class="others">
      и <span class="number-others">{{ numberOthers }}</span>
      {{ plural(numberOthers, forms) }}
    </p>
  </div>
</template>

<style scoped lang="sass">
.keywords
  padding: 0 0 50px
  display: flex
  align-items: center
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
  .others
    margin-left: 10px
  .number-others
    margin: 0
    color: $main-color
    font-weight: 600
</style>
