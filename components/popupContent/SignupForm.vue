<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/store/user'

const { signup } = useAuthStore()

const name = ref<string>('')
const email = ref<string>('')
const password = ref<string>('')
const repeatPassword = ref<string>('')

const emit = defineEmits(['switchForm'])
async function submit() {
  if (password.value === repeatPassword.value) {
    const payload = {
      name: name.value,
      email: email.value,
      password: password.value
    }
    await signup(payload)
    return
  }
  console.log('Пароли не совпадают')
}
</script>

<template>
  <form class="signin-form" @submit.prevent="submit">
    <h4>Регистрация</h4>
    <label for="name">Имя</label>
    <input v-model="name" name="name" placeholder="Введите имя" type="text" />
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
    <label for="repeatPassword">Повторите пароль</label>
    <input
      v-model="repeatPassword"
      name="repeatPassword"
      placeholder="Повторите пароль"
      type="password"
      autocomplete="on"
    />
    <button type="submit">Зарегистрироваться</button>
  </form>
  <div class="switch-from">
    <span>Или <button @click="emit('switchForm')">Войти</button></span>
  </div>
</template>
