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
  <button @click="showPopupSignin = true">Авторизоваться</button>
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
