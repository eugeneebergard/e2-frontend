<script setup lang="ts">
import { ref } from 'vue'

const showPopupSignin = ref<boolean>(false)
const showPopupSignup = ref<boolean>(false)

function switchForm() {
  showPopupSignin.value = !showPopupSignin.value
  showPopupSignup.value = !showPopupSignup.value
}
</script>

<template>
  <button @click="showPopupSignin = true">Авторизоваться</button>
  <teleport to="body">
    <ThePopup v-if="showPopupSignin" @close-popup="showPopupSignin = false">
      <SigninForm @switch-form="switchForm" />
    </ThePopup>
  </teleport>
  <teleport to="body">
    <ThePopup v-if="showPopupSignup" @close-popup="showPopupSignup = false">
      <SignupForm @switch-form="switchForm" />
    </ThePopup>
  </teleport>
</template>
