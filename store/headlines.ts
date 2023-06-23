export type THeadline = {
  author: string
  content: null
  description: null
  publishedAt: string
  source: {
    id: string
    name: string
  }
  title: string
  url: string
  urlToImage: null
}

export const useHeadlinesStore = defineStore('headlines-store', () => {
  const headlines: Ref<THeadline[]> = ref([])
  const getHeadlines = computed(() => headlines)
  async function getHeadlinesData() {
    const { data } = await useFetch<{ articles: THeadline[] }>(newsUrlTop())

    data.value && (headlines.value = data.value.articles)
  }

  return { headlines, getHeadlines, getHeadlinesData }
})
