<script setup lang="ts">
const emit = defineEmits(['deleteArticle'])
</script>

<template>
  <button class="trash" @click.prevent="emit('deleteArticle')">
    <img src="@/assets/images/filledBookmark.svg" alt="D" title="Удалить" />
  </button>
</template>

<style scoped lang="sass">
.trash
  right: 10px
  top: 10px
  @include cardArticleBtn
</style>
