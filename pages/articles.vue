<script setup lang="ts">
import { Ref } from 'vue'
import { storeToRefs } from 'pinia'
import { TSavedArticle } from '@/types/articles'
import { useSavedArticlesStore } from '@/store/articles'

definePageMeta({ middleware: ['auth'] })
useHead({ title: 'E2 Search' })

type TSavedArticlesRefs = { savedArticles: Ref<TSavedArticle[]> }

const store = useSavedArticlesStore()
const { getSavedArticlesData } = store
const { savedArticles }: TSavedArticlesRefs = storeToRefs(store)

await getSavedArticlesData()
</script>

<template>
  <main>
    Articles Page
    <ArticleSavedList :articles="savedArticles" />
  </main>
</template>
