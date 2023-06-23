<script setup lang="ts">
import { TSearch, useArticlesStore } from '@/store/articles'
import { THeadline } from '@/types/articles'

const { getSearch, getHeadlinesData, getHeadlines } = useArticlesStore()

const headlines: Ref<THeadline[]> = getHeadlines
const search: TSearch = getSearch

!headlines.value.length && (await getHeadlinesData())

useHead({
  title: 'E2 Search'
})
</script>

<template>
  <main>
    <section class="search">
      <TheHeading
        :title="'Что творится в мире?'"
        :text="'Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.'"
      />
      <SearchForm />
    </section>
    <section class="articles">
      <TopHeadlines v-show="!search.keyWord" :headlines="headlines" />
      <SearchResults v-if="search.keyWord" :search="search" />
    </section>
  </main>
</template>
