<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useSavedArticlesStore } from '@/store/articles'

const store = useSavedArticlesStore()
const { getSavedArticlesData } = store
const { savedArticles } = storeToRefs(store)

await getSavedArticlesData()

useHead({ title: 'E2 Search' })
</script>

<template>
  <main>
    Articles Page
    <ArticleSavedList :articles="savedArticles" />
  </main>
</template>
