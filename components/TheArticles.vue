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
