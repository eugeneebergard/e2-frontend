export type TSavedArticleData = {
  keyword: string
  title: string
  text: string
  date: string
  source: string
  link: string
  image: string
}

export type TArticleData = {
  author: string
  content: string
  description: string
  publishedAt: string
  source: {
    id: string | null
    name: string
  }
  title: string
  url: string
  urlToImage: string | null
}

export type THeadlineData = {
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

export type TProfileData = {
  email: string
  name: string
}

export type TAuthInfoData = {
  userIsAuth: boolean
}
