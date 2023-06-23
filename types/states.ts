import {
  TArticleData,
  THeadlineData,
  TProfileData,
  TSavedArticleData
} from './'

export type TUseUserValue = {
  profile: TProfileData | null
  isAuth: boolean
}

export type TUseSearchValue = {
  keyWord: string
  loading: boolean
  error: any
  articles: TArticleData[]
}

export type TUseSavedArticlesValue = {
  articles: TSavedArticleData[]
}

export type TUseHeadlinesValue = {
  headlines: THeadlineData[]
}
