<script setup lang="ts">
import { TSavedArticleData } from '@/types'

defineProps<{
  articles: TSavedArticleData[]
}>()
</script>

<template>
  <ul class="grid-articles">
    <ArticleCard
      v-for="article in articles"
      :key="article.link"
      :date="article.date"
      :link="article.link"
      :source="article.source"
      :text="article.text"
      :title="article.title"
      :image="article.image"
    />
  </ul>
</template>
