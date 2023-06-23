import { TUseUserValue, TUseSearchValue, TUseSavedArticlesValue } from '@/types'
export const useSearch = () => {
  return useState<TUseSearchValue>('searchData', () => {
    return {
      keyWord: '',
      loading: false,
      error: null,
      articles: []
    }
  })
}

export const useSavedArticles = () => {
  return useState<TUseSavedArticlesValue>('savedArticlesData', () => {
    return {
      articles: []
    }
  })
}

export const useHeadlines = () => {
  return useState('headlinesData', () => {
    return {
      headlines: []
    }
  })
}

export const useUser = () => {
  return useState<TUseUserValue>('userData', () => {
    return {
      profile: null,
      isAuth: false
    }
  })
}
