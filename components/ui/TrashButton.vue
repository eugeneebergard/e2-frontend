<script setup lang="ts">
const emit = defineEmits(['deleteArticle'])
</script>

<template>
  <button
    class="trash"
    title="Убрать из сохранённых"
    @click.prevent="emit('deleteArticle')"
  />
</template>

<style scoped lang="sass">
.trash
  right: 10px
  top: 10px
  @include cardArticleUiElem
  @include cardArticleBtn
  &:after
    width: 20px
    height: 20px
    @include pseudoIcon('@/assets/images/trash.svg')
</style>
