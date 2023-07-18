<script setup lang="ts">
defineProps<{
  link: string
}>()

const emit = defineEmits(['shareArticle'])
</script>

<template>
  <button
    class="share-btn"
    title="Скопировать ссылку"
    @click.prevent="emit('shareArticle')"
  />
</template>

<style scoped lang="sass">
.share-btn
  top: 10px
  right: 52px
  @include cardArticleUiElem
  @include cardArticleBtn
  &:after
    width: 20px
    height: 20px
    @include pseudoIcon('@/assets/images/share.svg')
  &:active:after
    @include pseudoIcon('@/assets/images/shareСlicked.svg')
</style>
