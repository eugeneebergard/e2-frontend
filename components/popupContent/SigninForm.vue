<script setup lang="ts">
import * as yup from 'yup'
import { storeToRefs } from 'pinia'
import { useSigninStore } from '@/store/user'
import { TSigninUser } from '@/types/user'

const signinStore = useSigninStore()
const { signin } = signinStore
const { error: signinError } = storeToRefs(signinStore)

const { errors } = useMessages().value

const { handleSubmit } = useForm<TSigninUser>({
  validationSchema: yup.object({
    email: yup.string().email(errors.email).required(errors.required),
    password: yup
      .string()
      .min(8, errors.passwordMinLength)
      .required(errors.required)
  })
})

const emit = defineEmits(['switchForm'])

const onSubmit = handleSubmit((values) => {
  signin(values)
})
</script>

<template>
  <form class="form signin-form" @submit="onSubmit">
    <h4 class="title">Вход</h4>
    <VField
      class="field"
      :name="'email'"
      :placeholder="'Введите адрес электронной почты'"
      :label="'E-mail'"
    />
    <VField
      class="field"
      :name="'password'"
      :type="'password'"
      :placeholder="'Введите пароль'"
      :label="'Пароль'"
    />
    <div class="button-container">
      <VError v-show="signinError" class="submit-error">
        {{ signinError }}
      </VError>
      <button class="submit" type="submit">Войти</button>
    </div>
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
