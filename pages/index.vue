<script setup lang="ts">
import { THeadlineData, TUseHeadlinesValue, TUseSearchValue } from '@/types'

const searchData: TUseSearchValue = useSearch().value
const headlinesData: TUseHeadlinesValue = useHeadlines().value

if (!useHeadlines().value.headlines.length) {
  const { data } = await useFetch<{ articles: THeadlineData[] }>(
    newsUrl({ pageSize: 10 })
  )

  data.value && (useHeadlines().value.headlines = data.value.articles)
}

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
      <TopHeadlines
        v-show="!searchData.keyWord"
        :headlines-data="headlinesData"
      />
      <SearchResults v-if="searchData.keyWord" :search-data="searchData" />
    </section>
  </main>
</template>
