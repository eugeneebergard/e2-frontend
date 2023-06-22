<script setup lang="ts">
import { TSavedArticleData, TUseSavedArticlesValue } from '@/types'

const savedArticlesData: TUseSavedArticlesValue = useSavedArticles().value

const { data: savedArticles } = await useApi<{ data: TSavedArticleData[] }>('/articles')

if (savedArticles.value) {
  useSavedArticles().value.articles = savedArticles.value.data
}

useHead({
  title: 'E2 Search',
})
</script>

<template>
  <main>
    Articles Page
    <ArticleSavedList :articles="savedArticlesData.articles" />
  </main>
</template>


