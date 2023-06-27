import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/store/user'

export default defineNuxtRouteMiddleware((to) => {
  const { isAuth } = storeToRefs(useAuthStore())

  if (to.path !== '/' && !isAuth.value) {
    return navigateTo('/')
  }
})
