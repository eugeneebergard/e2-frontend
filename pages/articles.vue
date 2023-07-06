<script setup lang="ts">
import { Ref } from 'vue'
import { storeToRefs } from 'pinia'
import { TSavedArticle } from '@/types/articles'
import { useSavedArticlesStore } from '@/store/articles'

useHead({ title: 'E2 - Сохраненные статьи' })

type TSavedArticlesRefs = { actualSavedArticles: Ref<TSavedArticle[]> }

const store = useSavedArticlesStore()
const { getSavedArticlesData } = store

const { actualSavedArticles }: TSavedArticlesRefs = storeToRefs(store)
await getSavedArticlesData()
</script>

<template>
  <main>
    Articles Page
    <ArticleSavedList :articles="actualSavedArticles" />
  </main>
</template>
