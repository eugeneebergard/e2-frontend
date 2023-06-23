<script setup lang="ts">
import { TArticleData, TNewsApiOptions } from '@/types'

const keyWord = ref(useSearch().value.keyWord)

async function getArticles() {
  const options: TNewsApiOptions = {
    keyWord: keyWord.value,
    fromDate: true
  }

  const { data, error } = await useFetch<{ articles: TArticleData[] }>(
    newsUrlAll(options)
  )

  if (data.value) {
    useSearch().value.articles = data.value.articles
  }

  if (error.value) {
    useSearch().value.error = error.value
  }
}

async function submit() {
  if (!keyWord.value) {
    useSearch().value.articles = []
    useSearch().value.keyWord = ''
    return
  }

  useSearch().value.loading = true
  useSearch().value.keyWord = keyWord.value

  await getArticles()

  useSearch().value.loading = false
}
</script>

<template>
  <form class="search-form">
    <input
      v-model="keyWord"
      class="search-form__field"
      placeholder="Введите тему новости"
    />
    <button class="search-form__submit" @click.prevent="submit">Искать</button>
  </form>
</template>
