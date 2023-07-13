<script setup lang="ts">
import { useLogoutStore } from '@/store/user'
const emit = defineEmits(['closePopup'])

const { logout } = useLogoutStore()
</script>

<template>
  <div class="logout-confirm">
    <h4 class="title">Вы уверены, что хотите выйти?</h4>
    <button class="btn cancel" @click="emit('closePopup')">Нет</button>
    <button class="btn confirm" @click="logout">Выйти</button>
  </div>
</template>

<style scoped lang="sass">
.title
  font-family: $heading-font-family
  font-size: 20px
  font-weight: 600
  color: $secondary-color
.btn
  font-family: $text-font-family
  padding: 16px 30px
  border-radius: 30px
  @include buttonDefault
.cancel
  color: $main-color
  background-color: inherit
  @include transitionOpacity
.confirm
  color: #fff
  background-color: $main-color
  @include transitionOpacity
</style>
