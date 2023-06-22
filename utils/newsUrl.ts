import { TNewsApiOptions } from '@/types';

/**
 * Если переданы опции и в них присутствует запрос, то генерируется url для поиска статьей по этому запросу,
 * иначе генерируется url для запроса популярных заголовков
 * @function
 * @param {object} options - Настройки для поиска статьей
 * @returns {string} - url
 */
export const newsUrl = (options?: TNewsApiOptions) => {
  const configPublic = useRuntimeConfig().public

  const apiBase = configPublic.newsApiBase
  const apiKey = configPublic.newsApiKey

  let url: string

  if (options && options.keyWord) {
    url = 'everything?'
      + `q=${options.keyWord}&`
      + `${options.fromDate && `from=${actualDate()}`}&`
      + `sortBy=${options.sortBy ? options.sortBy : 'publishedAt'}&`
      + `pageSize=${options.pageSize ? options.pageSize : 100}`
  } else {
    url = `top-headlines?country=ru&pageSize=${options && options.pageSize ? options.pageSize : 10}`
  }

  return `${apiBase}${url}&apiKey=${apiKey}`
}
