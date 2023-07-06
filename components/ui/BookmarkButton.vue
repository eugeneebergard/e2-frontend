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
    S
  </button>
  <button
    v-show="cardId"
    class="bookmark delete"
    @click.prevent="emit('deleteArticle')"
  >
    D
  </button>
</template>

<style scoped lang="sass">
.bookmark
  @include cardArticleBtn
</style>
