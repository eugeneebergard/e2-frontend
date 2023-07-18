<script setup lang="ts">
defineProps<{
  keywords: string[]
}>()
</script>

<template>
  <div class="keywords">
    <p class="text">
      По ключевым словам:<span
        v-for="keyword in keywords"
        :key="keyword"
        class="keyword"
        >{{ keyword }}</span
      >
    </p>
  </div>
</template>

<style scoped lang="sass">
.keywords
  padding: 0 0 50px
  .text
    font-family: $text-font-family
    font-size: 16px
  .keyword
    padding: 10px 15px
    margin-left: 10px
    background-color: #fff
    border-radius: 30px
    color: $main-color
</style>
