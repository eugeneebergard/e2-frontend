<script setup lang="ts">
import { TArticle } from '@/types/articles'

const props = defineProps<{
  articles: TArticle[]
  pending: boolean
  error: any
}>()

const showLoader = computed(() => props.pending)
const showError = computed(() => !showLoader && props.error)
const showNotFound = computed(() => !props.error && !props.articles.length)
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
