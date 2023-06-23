<script setup lang="ts">
import { TAuthInfoData, TProfileData } from '@/types'

const { data: authInfoData } = await useApi<TAuthInfoData>('/check-user')

authInfoData.value && (useUser().value.isAuth = authInfoData.value.userIsAuth)

if (useUser().value.isAuth) {
  const { data: profileData } = await useApi<TProfileData>('/users/me')

  profileData.value && (useUser().value.profile = profileData.value)
}
</script>

<template>
  <div class="root">
    <TheHeader />
    <NuxtPage />
    <TheFooter />
  </div>
</template>
