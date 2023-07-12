<script setup lang="ts">
import { THeadline, TArticle } from '@/types/articles'

defineProps<{
  keyword: string
  headlines: THeadline[]
  articles: TArticle[]
}>()
</script>

<template>
  <section class="articles">
    <VContainer>
      <TopHeadlines v-show="!keyword" :headlines="headlines" />
      <SearchResults v-if="keyword" :articles="articles" />
    </VContainer>
  </section>
</template>

<style scoped lang="sass">
.articles
  background-color: #F5F5F5
  padding: 60px 20px
</style>
