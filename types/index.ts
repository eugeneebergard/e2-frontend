export type TNewsApiOptions = {
  keyWord: string
  fromDate?: boolean
  sortBy?: 'publishedAt' | 'popularity'
  pageSize?: number
}

export {
  TSavedArticleData,
  TArticleData,
  TProfileData,
  TAuthInfoData
} from './data'

export {
  TUseUserValue,
  TUseSearchValue,
  TUseSavedArticlesValue
} from './states'
