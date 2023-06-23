<script setup lang="ts">
import { THeadline, useHeadlinesStore } from '@/store/headlines'
import { TUseSearchValue } from '@/types'

const { getHeadlinesData } = useHeadlinesStore()
const { getHeadlines } = useHeadlinesStore()

const headlines: Ref<THeadline[]> = getHeadlines
const searchData: TUseSearchValue = useSearch().value

!getHeadlines.value.length && (await getHeadlinesData())

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
      <TopHeadlines v-show="!searchData.keyWord" :headlines="headlines" />
      <SearchResults v-if="searchData.keyWord" :search-data="searchData" />
    </section>
  </main>
</template>
