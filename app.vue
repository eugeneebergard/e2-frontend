<script setup lang="ts">
import { useProfileStore } from '@/store/user'

const { getProfileData } = useProfileStore()

useIsAuth().value && (await getProfileData())
</script>

<template>
  <div class="root">
    <TheHeader />
    <NuxtPage />
    <TheFooter />
  </div>
</template>
