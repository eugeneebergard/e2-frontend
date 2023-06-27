import { TProfile, TSignupUser, TSigninUser } from '@/types/user'

export const useProfileStore = defineStore('profile-store', () => {
  const profile = ref<TProfile>({ email: '', name: '' })

  async function getProfileData() {
    const { data } = await useApi<{ user: TProfile }>('/users/me')

    data.value && (profile.value = data.value.user)
  }

  return { profile, getProfileData }
})

export const useAuthStore = defineStore('auth-store', () => {
  const isAuth = ref(false)

  async function getIsAuthData() {
    const { data } = await useApi<{ isAuth: boolean }>('/check-user')

    data.value && (isAuth.value = data.value.isAuth)
  }

  return { isAuth, getIsAuthData }
})

export const useSignupStore = defineStore('signup-store', () => {
  const response = ref<any>(null)
  const pending = ref(false)
  const error = ref<any>(null)

  const showSuccessSignupMsg = computed(() => !!response.value)

  async function signup(payload: TSignupUser) {
    pending.value = true

    const { data, error: errorData } = await useApi('/signup', {
      method: 'POST',
      body: payload
    })

    if (data.value) {
      response.value = data.value
    }

    if (errorData.value) {
      error.value = errorData.value
    }

    pending.value = false
  }

  function $reset() {
    response.value = null
    pending.value = false
    error.value = null
  }

  return { response, pending, error, showSuccessSignupMsg, signup, $reset }
})

export const useSigninStore = defineStore('signin-store', () => {
  const pending = ref(false)
  const error = ref<any>(null)
  async function signin(payload: TSigninUser) {
    pending.value = true

    const { data, error: errorData } = await useApi('/signin', {
      method: 'POST',
      body: payload
    })

    if (data.value) {
      window.location.reload()
    }

    if (errorData.value) {
      error.value = errorData.value
    }

    pending.value = false
  }

  return { pending, error, signin }
})

export const useLogoutStore = defineStore('logout-store', () => {
  const pending = ref(false)
  async function logout() {
    pending.value = true

    const { data, error } = await useApi('/logout', {
      method: 'POST'
    })

    if (data.value) {
      window.location.reload()
      console.log(data.value)
    }

    if (error.value) {
      console.log(error.value)
    }

    pending.value = false
  }

  return { pending, logout }
})
