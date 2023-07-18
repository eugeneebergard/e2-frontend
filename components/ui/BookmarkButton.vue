<script setup lang="ts">
defineProps<{
  cardId: string | null
}>()
const isAuth = useIsAuth()
const emit = defineEmits(['saveArticle', 'deleteArticle'])

function saveArticle() {
  if (isAuth.value) {
    emit('saveArticle')
    return
  }

  console.log('Авторизуйтесь, чтобы сохранять статьи')
}
</script>

<template>
  <button v-show="!cardId" class="bookmark save" @click.prevent="saveArticle">
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
  @include cardArticleBtn
</style>
