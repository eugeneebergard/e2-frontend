<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useSearchStore, useHeadlinesStore } from '@/store/articles'

const headlinesStore = useHeadlinesStore()
const { getHeadlinesData } = headlinesStore
const { headlines } = storeToRefs(headlinesStore)

const {
  articles: searchArticles,
  error: searchError,
  pending: searchPending,
  keyWord: searchKeyWord
} = storeToRefs(useSearchStore())

!headlines.value.length && (await getHeadlinesData())

const headingTitle = 'Что творится в мире?'
const headingText =
  'Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.'

useHead({ title: 'E2 Search' })
</script>

<template>
  <main>
    <section class="search">
      <TheHeading :title="headingTitle" :text="headingText" />
      <SearchForm />
    </section>
    <section class="articles">
      <TopHeadlines v-show="!searchKeyWord" :headlines="headlines" />
      <SearchResults
        v-if="searchKeyWord"
        :articles="searchArticles"
        :pending="searchPending"
        :error="searchError"
      />
    </section>
  </main>
</template>
