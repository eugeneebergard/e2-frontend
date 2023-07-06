<script setup lang="ts">
import { Ref } from 'vue'
import { storeToRefs } from 'pinia'
import { TArticle, THeadline } from '@/types/articles'
import { useSearchStore, useHeadlinesStore } from '@/store/articles'

useHead({ title: 'E2 - Главная' })

const headingTitle = 'Что творится в мире?'
const headingText =
  'Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.'

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
  <main>
    <section class="search">
      <TheHeading :title="headingTitle" :text="headingText" />
      <SearchForm />
    </section>
    <section class="articles">
      <TopHeadlines v-show="!searchKeyWord" :headlines="headlines" />
      <SearchResults v-if="searchKeyWord" :articles="searchArticles" />
    </section>
  </main>
</template>
