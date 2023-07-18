<script setup lang="ts">
const props = defineProps<{
  link: string
}>()
function copyLink() {
  navigator.clipboard.writeText(props.link)
}
</script>

<template>
  <button
    class="share-btn"
    @click.prevent="copyLink"
    title="Скопировать ссылку"
  />
</template>

<style scoped lang="sass">
.share-btn
  top: 10px
  right: 52px
  @include cardArticleBtn
  &:after
    width: 20px
    height: 20px
    @include pseudoIcon('@/assets/images/share.svg')
  &:active:after
    @include pseudoIcon('@/assets/images/shareСlicked.svg')
</style>
