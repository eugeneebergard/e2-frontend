<script setup lang="ts">
import { useArticlesStore } from '@/store/articles'
import { TSavedArticle } from '@/types/articles'

const { getSavedArticlesData, getSavedArticles } = useArticlesStore()

const savedArticles: Ref<TSavedArticle[]> = getSavedArticles

await getSavedArticlesData()

useHead({
  title: 'E2 Search'
})
</script>

<template>
  <main>
    Articles Page
    <ArticleSavedList :articles="savedArticles" />
  </main>
</template>
