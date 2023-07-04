<script setup lang="ts">
import { Ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/store/user'

defineProps<{
  cardId: string | null
}>()

const { isAuth }: { isAuth: Ref<boolean> } = storeToRefs(useAuthStore())

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
