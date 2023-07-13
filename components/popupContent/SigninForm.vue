<script setup lang="ts">
import { ref } from 'vue'
import { useSigninStore } from '@/store/user'

const { signin } = useSigninStore()

const email = ref<string>('')
const password = ref<string>('')

const emit = defineEmits(['switchForm'])
</script>

<template>
  <form class="form signin-form" @submit.prevent="signin({ email, password })">
    <h4 class="title">Вход</h4>
    <div class="field">
      <label class="label label-email" for="email">E-mail</label>
      <input
        v-model="email"
        class="input input-email"
        name="email"
        placeholder="Введите почту"
        type="email"
      />
    </div>
    <div class="field">
      <label class="label label-password" for="password">Пароль</label>
      <input
        v-model="password"
        class="input input-password"
        name="password"
        placeholder="Введите пароль"
        type="password"
        autocomplete="on"
      />
    </div>
    <button class="submit" type="submit">Войти</button>
  </form>
  <div class="switch-form">
    <span
      >Нет аккаунта?
      <button class="switch-form-btn" @click="emit('switchForm')">
        Зарегистрироваться
      </button></span
    >
  </div>
</template>

<style scoped lang="sass">
.signin-form
  @include authForm
</style>
