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
    <VInput
      v-model="name"
      class="field"
      :name="'name'"
      :placeholder="'Введите имя'"
      :label="'Имя'"
    />
    <VInput
      v-model="email"
      class="field"
      :name="'email'"
      :type="'email'"
      :placeholder="'Введите адрес электронной почты'"
      :label="'E-mail'"
    />
    <VInput
      v-model="password"
      class="field"
      :name="'password'"
      :type="'password'"
      :placeholder="'Введите пароль'"
      :label="'Пароль'"
    />
    <VInput
      v-model="repeatPassword"
      class="field"
      :name="'repeat-password'"
      :type="'password'"
      :placeholder="'Повторите пароль'"
      :label="'Повторите пароль'"
    />
    <button class="submit" type="submit">Зарегистрироваться</button>
  </form>
  <div class="switch-form">
    <span>
      Уже есть аккаунт?
      <button class="switch-form-btn" @click="emit('switchForm')">Войти</button>
    </span>
  </div>
</template>

<style scoped lang="sass">
.signup-form
  @include authForm
</style>
