type TNewsUrlOptions = {
  keyWord: string
  fromDate?: boolean
  sortBy?: 'publishedAt' | 'popularity'
  pageSize?: number
}

export const newsUrlAll = (options: TNewsUrlOptions) => {
  const { newsApiBase, newsApiKey } = useRuntimeConfig().public

  const url =
    'everything?' +
    `q=${options.keyWord}&` +
    `${options.fromDate && `from=${actualDate()}`}&` +
    `sortBy=${options.sortBy || 'publishedAt'}&` +
    `pageSize=${options.pageSize || 50}`

  return `${newsApiBase}${url}&apiKey=${newsApiKey}`
}

export const newsUrlTop = (pageSize?: number) => {
  const { newsApiBase, newsApiKey } = useRuntimeConfig().public

  return `${newsApiBase}top-headlines?country=ru&pageSize=${
    pageSize || 10
  }&apiKey=${newsApiKey}`
}
