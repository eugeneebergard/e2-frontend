<script setup lang="ts">
import { TSavedArticle } from '@/types/articles'

defineProps<{
  articles: TSavedArticle[]
}>()
</script>

<template>
  <ul class="grid-articles">
    <ArticleSavedListItem
      v-for="article in articles"
      :key="article.link"
      :article="article"
    />
  </ul>
</template>
