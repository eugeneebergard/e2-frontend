<script setup lang="ts">
import { ref } from 'vue'
import { useSigninStore } from '@/store/user'

const { signin } = useSigninStore()

const email = ref<string>('')
const password = ref<string>('')

const emit = defineEmits(['switchForm'])

function submit() {
  signin({ email: email.value, password: password.value })
}
</script>

<template>
  <form class="form signin-form" @submit.prevent="submit">
    <h4 class="title">Вход</h4>
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
    <button class="submit" type="submit">Войти</button>
  </form>
  <div class="switch-form">
    <span>
      Нет аккаунта?
      <button class="switch-form-btn" @click="emit('switchForm')">
        Зарегистрироваться
      </button>
    </span>
  </div>
</template>

<style scoped lang="sass">
.signin-form
  @include authForm
</style>
