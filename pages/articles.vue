<script setup lang="ts">
import { Ref } from 'vue'
import { storeToRefs } from 'pinia'
import { TSavedArticle } from '@/types/articles'
import { useSavedArticlesStore } from '@/store/articles'

type TSavedArticlesRefs = { savedArticles: Ref<TSavedArticle[]> }

const store = useSavedArticlesStore()
const { getSavedArticlesData } = store
const { savedArticles }: TSavedArticlesRefs = storeToRefs(store)

await getSavedArticlesData()

useHead({ title: 'E2 Search' })
</script>

<template>
  <main>
    Articles Page
    <ArticleSavedList :articles="savedArticles" />
  </main>
</template>
