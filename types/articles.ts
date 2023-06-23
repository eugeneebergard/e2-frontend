export type TArticle = {
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

export type TSavedArticle = {
  keyword: string
  title: string
  text: string
  date: string
  source: string
  link: string
  image: string
}

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
