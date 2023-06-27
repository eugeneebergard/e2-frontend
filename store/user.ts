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
  async function signup(payload: TSignupUser) {
    const { data, error } = await useApi('/signup', {
      method: 'POST',
      body: payload
    })

    if (data.value) {
      console.log(data.value)
    }

    if (error.value) {
      console.log(error.value)
    }
  }

  async function signin(payload: TSigninUser) {
    const { data, error } = await useApi('/signin', {
      method: 'POST',
      body: payload
    })

    if (data.value) {
      window.location.reload()
      console.log(data.value)
    }

    if (error.value) {
      console.log(error.value)
    }
  }

  async function logout() {
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
  }

  return { isAuth, getIsAuthData, signup, signin, logout }
})
