<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { useSignupStore } from '@/store/user'

const signupStore = useSignupStore()
const { showSuccessSignupMsg, response: signupResponse } =
  storeToRefs(signupStore)

const showPopupSignin = ref<boolean>(false)
const showPopupSignup = ref<boolean>(false)

function switchForm() {
  showPopupSignin.value = !showPopupSignin.value
  showPopupSignup.value = !showPopupSignup.value
  signupResponse.value && signupStore.$reset()
}

function closePopup() {
  showPopupSignin.value = false
  showPopupSignup.value = false
  signupResponse.value && signupStore.$reset()
}
</script>

<template>
  <button class="auth-btn" @click="showPopupSignin = true">Войти</button>
  <teleport to="body">
    <transition>
      <ThePopup v-if="showPopupSignin" @close-popup="closePopup">
        <SigninForm @switch-form="switchForm" />
      </ThePopup>
    </transition>
  </teleport>
  <teleport to="body">
    <transition>
      <ThePopup v-if="showPopupSignup" @close-popup="closePopup">
        <SignupForm v-if="!showSuccessSignupMsg" @switch-form="switchForm" />
        <SignupMessage v-else @switch-form="switchForm" />
      </ThePopup>
    </transition>
  </teleport>
</template>

<style scoped lang="sass">
.auth-btn
  display: flex
  align-items: center
  position: relative
  padding: 10px 20px
  font-weight: 600
  background-color: #fff
  border-radius: 30px
  color: $secondary-color
  font-family: $text-font-family
  box-shadow: $ui-shadow
  @include buttonDefault
  @include transitionColor($hovered-color)
  &:after
    margin-left: 10px
    width: 24px
    height: 24px
    transition: $transition
    @include pseudoIcon('@/assets/images/authArrow.svg')
  &:hover:after
    background-image: url('@/assets/images/authArrowHovered.svg')
</style>
