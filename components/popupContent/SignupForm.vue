<script setup lang="ts">
import { ref } from 'vue'
import { useSignupStore } from '@/store/user'

const { signup } = useSignupStore()

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
  <form class="form signup-form" @submit.prevent="submit">
    <h4 class="title">Регистрация</h4>
    <div class="field">
      <label class="label label-name" for="name">Имя</label>
      <input
        v-model="name"
        class="input input-name"
        name="name"
        placeholder="Введите имя"
        type="text"
      />
    </div>
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
    <div class="field">
      <label class="label label-repeat-password" for="repeat-password"
        >Повторите пароль</label
      >
      <input
        v-model="repeatPassword"
        class="input input-repeat-password"
        name="repeat-password"
        placeholder="Повторите пароль"
        type="password"
        autocomplete="on"
      />
    </div>
    <button class="submit" type="submit">Зарегистрироваться</button>
  </form>
  <div class="switch-form">
    <span
      >Уже есть аккаунт?
      <button class="switch-form-btn" @click="emit('switchForm')">
        Войти
      </button></span
    >
  </div>
</template>

<style scoped lang="sass">
.signup-form
  @include authForm
</style>
