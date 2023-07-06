export default defineNuxtRouteMiddleware(async (to) => {
  const { data } = await useApi<{ isAuth: boolean }>('/check-user')

  data.value && (useIsAuth().value = data.value.isAuth)

  if (to.path === '/articles' && !useIsAuth().value) {
    return navigateTo('/')
  }
})
