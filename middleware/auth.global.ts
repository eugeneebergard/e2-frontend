export default defineNuxtRouteMiddleware(async (to) => {
  const { data } = await useApi<{ isAuth: boolean }>('/check-user')

  data.value && (useIsAuth().value = data.value.isAuth)

  if (to.path !== '/' && !useIsAuth().value) {
    return navigateTo('/')
  }
})
