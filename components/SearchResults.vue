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
  <div id="results" class="results">
    <div v-if="!articles.length" class="container">
      <VLoader v-if="showLoader" />
      <VError v-else-if="showError" class="error">Неизвестная ошибка</VError>
      <NotFound v-else-if="showNotFound" class="not-found" />
    </div>

    <div v-else>
      <h2 class="articles-grid__heading">Результат поиска</h2>
      <ArticleList :articles="articles" />
    </div>
  </div>
</template>

<style scoped lang="sass">
.container
  display: flex
  justify-content: center
.error
  font-size: 14px
.articles-grid__heading
  margin: 0 0 35px
  padding: 0
  font-family: $heading-font-family
  font-size: 25px
  @media(max-width: $mob-l)
    margin: 0 0 20px
    text-align: center
    font-size: 18px
</style>
