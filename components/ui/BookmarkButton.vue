<script setup lang="ts">
defineProps<{
  cardId: string | null
}>()
const isAuth = useIsAuth()
const emit = defineEmits(['saveArticle', 'deleteArticle'])
</script>

<template>
  <button
    v-show="!cardId"
    class="bookmark save"
    :disabled="!isAuth"
    @click.prevent="emit('saveArticle')"
  >
    <img
      src="@/assets/images/notFilledBookmark.svg"
      alt="S"
      title="Сохранить"
    />
  </button>
  <button
    v-show="cardId"
    class="bookmark delete"
    @click.prevent="emit('deleteArticle')"
  >
    <img src="@/assets/images/filledBookmark.svg" alt="D" title="Удалить" />
  </button>
</template>

<style scoped lang="sass">
.bookmark
  @include cardArticleBtn
</style>
