import { TArticle, THeadline, TSavedArticle } from '@/types/articles'

/**
 * Сохраненные статьи пользователя
 */
export const useSavedArticlesStore = defineStore('saved-articles-store', () => {
  const savedArticles = ref<TSavedArticle[]>([])

  async function getSavedArticlesData() {
    const { data } = await useApi<{ articles: TSavedArticle[] }>('/articles')

    data.value && (savedArticles.value = data.value.articles)
  }

  return { savedArticles, getSavedArticlesData }
})

/**
 * Популярные заголовки
 */
export const useHeadlinesStore = defineStore('headlines-store', () => {
  const headlines = ref<THeadline[]>([])

  async function getHeadlinesData() {
    const { data } = await useFetch<{ articles: THeadline[] }>(newsUrlTop())

    data.value && (headlines.value = data.value.articles)
  }

  return { headlines, getHeadlinesData }
})

/**
 * Поиск новостей
 */
export const useSearchStore = defineStore('search-store', () => {
  const articles = ref<TArticle[]>([])
  const pending = ref(false)
  const error = ref<any>(null)
  const keyWord = ref('')

  const showLoader = computed(() => pending.value)
  const showError = computed(() => !showLoader && error.value)
  const showNotFound = computed(() => !error.value && !articles.value.length)

  async function getSearchData(value: string) {
    pending.value = true
    keyWord.value = value

    if (!keyWord.value) {
      articles.value = []
      return
    }

    const options = {
      keyWord: keyWord.value,
      fromDate: true
    }

    const { data, error: errorData } = await useFetch<{ articles: TArticle[] }>(
      newsUrlAll(options)
    )

    data.value && (articles.value = data.value.articles)
    errorData.value && (error.value = errorData.value)

    pending.value = false
  }

  return {
    articles,
    pending,
    error,
    keyWord,
    showLoader,
    showError,
    showNotFound,
    getSearchData
  }
})
