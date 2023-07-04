<script setup lang="ts">
const emit = defineEmits(['deleteArticle'])
</script>

<template>
  <button class="trash" @click.prevent="emit('deleteArticle')">D</button>
</template>

<style scoped lang="sass">
.trash
  @include cardArticleBtn
</style>
