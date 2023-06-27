<script setup lang="ts">
import { Ref } from 'vue'
import { storeToRefs } from 'pinia'
import { TArticle } from '@/types/articles'
import { useSearchStore } from '@/store/articles'

defineProps<{
  articles: TArticle[]
}>()

type TSearchRefs = {
  showLoader: Ref<boolean>
  showError: Ref<boolean>
  showNotFound: Ref<boolean>
}

const { showLoader, showError, showNotFound }: TSearchRefs = storeToRefs(
  useSearchStore()
)
</script>

<template>
  <div class="results">
    <VLoader v-if="showLoader" />

    <div v-else-if="showError">
      <h3>Ошибка</h3>
    </div>

    <div v-else-if="showNotFound">
      <h3>Ничего не найдено</h3>
    </div>

    <div v-else>
      <h2 class="articles-grid__heading">Результат поиска</h2>
      <ArticleList :articles="articles" />
    </div>
  </div>
</template>
