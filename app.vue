<script setup lang="ts">
import { useUserStore } from '@/store/user'

const { getIsAuthData, getIsAuth, getProfileData } = useUserStore()

const isAuth: Ref<boolean> = getIsAuth

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
