<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useProfileStore, useAuthStore } from '@/store/user'

const authStore = useAuthStore()
const { getIsAuthData } = authStore
const { isAuth } = storeToRefs(authStore)

const { getProfileData } = useProfileStore()

await getIsAuthData()
isAuth.value && (await getProfileData())
</script>

<template>
  <div class="root">
    <TheHeader />
    <NuxtPage />
    <TheFooter />
  </div>
</template>
