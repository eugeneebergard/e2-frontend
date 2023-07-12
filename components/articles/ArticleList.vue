<script setup lang="ts">
import { TArticle } from '@/types/articles'

defineProps<{
  articles: TArticle[]
}>()
</script>

<template>
  <ul class="article-list">
    <ArticleListItem
      v-for="article in articles"
      :key="article.url"
      :article="article"
    />
  </ul>
</template>

<style scoped lang="sass">
.article-list
  @include articleList
</style>
