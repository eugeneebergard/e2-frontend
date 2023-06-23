export type TNewsApiOptions = {
  keyWord?: string
  fromDate?: boolean
  sortBy?: 'publishedAt' | 'popularity'
  pageSize?: number
}

export {
  TSavedArticleData,
  TArticleData,
  THeadlineData,
  TProfileData,
  TAuthInfoData
} from './data'

export {
  TUseUserValue,
  TUseSearchValue,
  TUseHeadlinesValue,
  TUseSavedArticlesValue
} from './states'
