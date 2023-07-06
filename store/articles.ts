import {
  TArticle,
  THeadline,
  TSavedCard,
  TSavedArticle
} from '@/types/articles'

/**
 * Сохраненные статьи пользователя
 */
export const useSavedArticlesStore = defineStore('saved-articles-store', () => {
  const savedArticles = ref<TSavedArticle[]>([])

  const newSavedArticle = ref<TSavedArticle | null>(null)
  const saveError = ref<any>(null)
  const saveLoading = ref<boolean>(false)

  const deleteResponse = ref<string | null>(null)
  const deleteError = ref<any>(null)
  const deleteLoading = ref<boolean>(false)

  const getNewSavedArticleId = computed(() => {
    return newSavedArticle.value && newSavedArticle.value._id
  })

  const actualSavedArticles = computed(() => {
    return savedArticles.value.slice().reverse()
  })

  async function getSavedArticlesData() {
    const { data } = await useApi<{ articles: TSavedArticle[] }>('/articles')

    data.value && (savedArticles.value = data.value.articles)
  }

  async function postSavedArticleData(payload: TSavedCard) {
    saveLoading.value = true

    const { data, error } = await useApi<{ article: TSavedArticle }>(
      '/articles',
      {
        method: 'POST',
        body: payload
      }
    )

    data.value && (newSavedArticle.value = data.value.article)
    error.value && (saveError.value = error.value)

    saveLoading.value = false
  }

  async function deleteSavedArticleData(id: string) {
    deleteLoading.value = true

    const { data, error } = await useApi<{ message: string }>(
      `/articles/${id}`,
      { method: 'DELETE' }
    )

    data.value && (deleteResponse.value = data.value.message)
    error.value && (deleteError.value = error.value)

    deleteLoading.value = false
  }

  return {
    savedArticles,

    newSavedArticle,
    saveError,
    saveLoading,

    deleteResponse,
    deleteError,
    deleteLoading,

    actualSavedArticles,
    getNewSavedArticleId,

    getSavedArticlesData,
    postSavedArticleData,
    deleteSavedArticleData
  }
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
