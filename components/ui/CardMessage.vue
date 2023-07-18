<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <div class="message">
    <span class="text">{{ text }}</span>
  </div>
</template>

<style scoped lang="sass">
.message
  padding: 0 10px
  top: 10px
  left: 10px
  @include cardArticleUiElem
  .text
    font-family: $text-font-family
    font-size: 10px
    color: $text-color
</style>
