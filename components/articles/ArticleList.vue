<script setup lang="ts">
import { TArticle } from '@/types/articles'

defineProps<{
  articles: TArticle[]
}>()
</script>

<template>
  <ul class="grid-articles">
    <ArticleCard
      v-for="article in articles"
      :key="article.url"
      :date="article.publishedAt"
      :link="article.url"
      :source="article.source.name"
      :text="article.description"
      :title="article.title"
      :image="article.urlToImage"
    />
  </ul>
</template>
