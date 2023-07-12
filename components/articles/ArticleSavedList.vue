<script setup lang="ts">
import { TSavedArticle } from '@/types/articles'

defineProps<{
  articles: TSavedArticle[]
}>()
</script>

<template>
  <ul class="article-saved-list">
    <ArticleSavedListItem
      v-for="article in articles"
      :key="article.link"
      :article="article"
    />
  </ul>
</template>

<style scoped lang="sass">
.article-saved-list
  @include articleList
</style>
