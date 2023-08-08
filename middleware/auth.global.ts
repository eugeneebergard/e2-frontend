export default defineNuxtRouteMiddleware(async (to) => {
  const { data, error } = await useApi<{ isAuth: boolean }>('/check-user')

  if (data.value) useIsAuth().value = data.value.isAuth
  else if (!data.value && error.value) {
    throw createError({ statusCode: error.value.statusCode })
  }

  if (to.path === '/articles' && !useIsAuth().value) {
    return navigateTo('/')
  }
})
