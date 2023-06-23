<script setup lang="ts">
import { TSearch } from '@/store/articles'

const props = defineProps<{
  search: TSearch
}>()

const showLoader = computed(() => props.search.pending)
const showError = computed(() => !showLoader && props.search.error)
const showNotFound = computed(
  () => !props.search.error && !props.search.articles.length
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
      <ArticleList :articles="search.articles" />
    </div>
  </div>
</template>
