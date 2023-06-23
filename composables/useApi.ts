export const useApi: typeof useFetch = (request, opts?) => {
  const config = useRuntimeConfig()

  return useFetch(request, {
    baseURL: config.public.apiBase,
    credentials: 'include',
    ...opts
  })
}
