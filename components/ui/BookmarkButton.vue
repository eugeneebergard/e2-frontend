<script setup lang="ts">
defineProps<{
  cardId: string | null
}>()

const emit = defineEmits(['saveArticle', 'deleteArticle'])
</script>

<template>
  <button
    v-show="!cardId"
    class="bookmark save"
    @click.prevent="emit('saveArticle')"
  >
    <img src="@/assets/images/bookmark.svg" alt="S" title="Сохранить" />
  </button>
  <button
    v-show="cardId"
    class="bookmark delete"
    @click.prevent="emit('deleteArticle')"
  >
    <img src="@/assets/images/bookmarkFilled.svg" alt="D" title="Удалить" />
  </button>
</template>

<style scoped lang="sass">
.bookmark
  right: 10px
  top: 10px
  @include cardArticleUiElem
  @include cardArticleBtn
</style>
