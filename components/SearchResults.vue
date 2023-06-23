<script setup lang="ts">
import { TUseSearchValue } from '@/types'

const props = defineProps<{
  searchData: TUseSearchValue
}>()

const showLoader = computed(() => props.searchData.loading)
const showError = computed(() => !showLoader && props.searchData.error)
const showNotFound = computed(
  () => !showError && !props.searchData.articles.length
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
      <ArticleList :articles="searchData.articles" />
    </div>
  </div>
</template>
