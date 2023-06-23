import { TNewsApiOptions } from '@/types'

export const newsUrlAll = (options: TNewsApiOptions) => {
  const configPublic = useRuntimeConfig().public

  const apiBase = configPublic.newsApiBase
  const apiKey = configPublic.newsApiKey

  const url =
    'everything?' +
    `q=${options.keyWord}&` +
    `${options.fromDate && `from=${actualDate()}`}&` +
    `sortBy=${options.sortBy || 'publishedAt'}&` +
    `pageSize=${options.pageSize || 50}`

  return `${apiBase}${url}&apiKey=${apiKey}`
}

export const newsUrlTop = (pageSize?: number) => {
  const configPublic = useRuntimeConfig().public

  const apiBase = configPublic.newsApiBase
  const apiKey = configPublic.newsApiKey

  return `${apiBase}top-headlines?country=ru&pageSize=${
    pageSize || 10
  }&apiKey=${apiKey}`
}
