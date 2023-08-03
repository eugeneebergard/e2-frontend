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
  <section>
    <VContainer class="container">
      <ArticlesHeading :name="name" :articles-count="articlesCount" />
      <ArticlesKeyWords v-if="articlesCount" :keywords="articlesKeywords" />
      <ArticleSavedList :articles="articles" />
    </VContainer>
  </section>
</template>

<style scoped lang="sass">
.container
  padding-top: 60px
  padding-bottom: 130px
  @media (max-width: $tablet)
    padding-top: 30px
    padding-bottom: 25px
</style>
