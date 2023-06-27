<script setup lang="ts">
import { ref } from 'vue'
import { useSigninStore } from '@/store/user'

const { signin } = useSigninStore()

const email = ref<string>('')
const password = ref<string>('')

const emit = defineEmits(['switchForm'])
</script>

<template>
  <form class="signin-form" @submit.prevent="signin({ email, password })">
    <h4>Авторизация</h4>
    <label for="email">Почта</label>
    <input
      v-model="email"
      name="email"
      placeholder="Введите почту"
      type="email"
    />
    <label for="password">Пароль</label>
    <input
      v-model="password"
      name="password"
      placeholder="Введите пароль"
      type="password"
      autocomplete="on"
    />
    <button type="submit">Войти</button>
  </form>
  <div class="switch-from">
    <span
      >Или <button @click="emit('switchForm')">Зарегистрироваться</button></span
    >
  </div>
</template>
