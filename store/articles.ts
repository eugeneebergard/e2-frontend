import { TArticle, THeadline, TSavedArticle } from '@/types/articles'

export type TSearch = {
  articles: TArticle[]
  pending: boolean
  error: any
  keyWord: string
}

export const useArticlesStore = defineStore('articles-store', () => {
  const savedArticles: Ref<TSavedArticle[]> = ref([])
  const headlines: Ref<THeadline[]> = ref([])
  const search: TSearch = reactive({
    articles: [],
    pending: false,
    error: null,
    keyWord: ''
  })

  const getHeadlines = computed(() => headlines)
  const getSavedArticles = computed(() => savedArticles)
  const getSearch = computed(() => search)

  async function getHeadlinesData() {
    const { data } = await useFetch<{ articles: THeadline[] }>(newsUrlTop())

    data.value && (headlines.value = data.value.articles)
  }

  async function getSavedArticlesData() {
    const { data } = await useApi<{ articles: TSavedArticle[] }>('/articles')

    data.value && (savedArticles.value = data.value.articles)
  }

  async function getSearchData(value: string) {
    search.pending = true
    search.keyWord = value

    if (!search.keyWord) {
      search.articles = []
      return
    }

    const options = {
      keyWord: search.keyWord,
      fromDate: true
    }

    const { data, error } = await useFetch<{ articles: TArticle[] }>(
      newsUrlAll(options)
    )

    data.value && (search.articles = data.value.articles)
    error.value && (search.error = error.value)

    search.pending = false
  }

  return {
    headlines,
    getHeadlines,
    getHeadlinesData,

    savedArticles,
    getSavedArticles,
    getSavedArticlesData,

    search,
    getSearch,
    getSearchData
  }
})
