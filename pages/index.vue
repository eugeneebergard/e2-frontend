<script setup lang="ts">
import { Ref } from 'vue'
import { storeToRefs } from 'pinia'
import { TArticle, THeadline } from '@/types/articles'
import { useSearchStore, useHeadlinesStore } from '@/store/articles'
import TheSearch from '~/components/TheSearch.vue'
import TheArticles from '~/components/TheArticles.vue'

useHead({ title: 'E2 - Главная' })

const headingTitle = 'Что творится в мире?'

type THeadlinesRefs = { headlines: Ref<THeadline[]> }
type TSearchRefs = {
  articles: Ref<TArticle[]>
  keyWord: Ref<string>
}

const headlinesStore = useHeadlinesStore()
const { getHeadlinesData } = headlinesStore
const { headlines }: THeadlinesRefs = storeToRefs(headlinesStore)

const { articles: searchArticles, keyWord: searchKeyWord }: TSearchRefs =
  storeToRefs(useSearchStore())

!headlines.value.length && (await getHeadlinesData())
</script>

<template>
  <main class="main">
    <TheCover />
    <TheSearch :title="headingTitle" />
    <TheArticles
      :keyword="searchKeyWord"
      :headlines="headlines"
      :articles="searchArticles"
    />
  </main>
</template>
