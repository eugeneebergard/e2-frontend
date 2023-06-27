<script setup lang="ts">
import { Ref, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { TProfile } from '@/types/user'
import { useProfileStore } from '@/store/user'
type TProfileRefs = { profile: Ref<TProfile> }

const profileStore = useProfileStore()
const { profile }: TProfileRefs = storeToRefs(profileStore)

const showPopupConfirm = ref<boolean>(false)
</script>

<template>
  <button @click="showPopupConfirm = true">{{ profile.name }} Выйти</button>
  <teleport to="body">
    <ThePopup v-if="showPopupConfirm" @close-popup="showPopupConfirm = false">
      <LogoutConfirm @close-popup="showPopupConfirm = false" />
    </ThePopup>
  </teleport>
</template>
