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
  <button
    class="logout-btn"
    title="Выйти из аккаунта"
    @click="showPopupConfirm = true"
  >
    {{ profile.name }}
  </button>
  <Teleport to="body">
    <Transition>
      <ThePopup v-if="showPopupConfirm" @close-popup="showPopupConfirm = false">
        <LogoutConfirm @close-popup="showPopupConfirm = false" />
      </ThePopup>
    </Transition>
  </Teleport>
</template>

<style scoped lang="sass">
.logout-btn
  display: flex
  align-items: center
  position: relative
  padding: 10px 20px
  font-weight: 600
  background-color: #fff
  color: $text-color
  border-radius: 30px
  font-family: $text-font-family
  box-shadow: $ui-shadow
  @include buttonDefault
  @include transitionColor($hovered-color)
  &:after
    margin-left: 10px
    width: 24px
    height: 24px
    transition: $transition
    @include pseudoIcon('@/assets/images/logoutArrow.svg')
  &:hover:after
    background-image: url('@/assets/images/logoutArrowHovered.svg')
</style>
