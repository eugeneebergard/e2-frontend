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
  <button class="logout-btn" @click="showPopupConfirm = true">
    {{ profile.name }}
  </button>
  <teleport to="body">
    <ThePopup v-if="showPopupConfirm" @close-popup="showPopupConfirm = false">
      <LogoutConfirm @close-popup="showPopupConfirm = false" />
    </ThePopup>
  </teleport>
</template>

<style scoped lang="sass">
.logout-btn
  display: flex
  align-items: center
  position: relative
  padding: 10px 20px
  font-weight: 600
  background-color: #fff
  color: $secondary-color
  font-family: $text-font-family
  @include buttonDefault
  @include boxShadowDefault
  &:after
    margin-left: 10px
    width: 24px
    height: 24px
    @include pseudoIcon('@/assets/images/logoutArrow.svg')
</style>
