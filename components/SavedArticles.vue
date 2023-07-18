<script setup lang="ts">
import { TSavedArticle } from '@/types/articles'

defineProps<{
  name: string
  articles: TSavedArticle[]
  articlesCount: number
  articlesKeywords: string[]
}>()
</script>

<template>
  <section class="saved-articles">
    <VContainer>
      <ArticlesHeading :name="name" :articles-count="articlesCount" />
      <ArticlesKeyWords :keywords="articlesKeywords" />
      <ArticleSavedList :articles="articles" />
    </VContainer>
  </section>
</template>

<style scoped lang="sass">
.saved-articles
  padding: 60px 20px 80px
</style>
