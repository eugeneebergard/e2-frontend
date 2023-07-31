<script setup lang="ts">
import * as yup from 'yup'
import { storeToRefs } from 'pinia'
import { useSignupStore } from '@/store/user'
import { TSignupUser } from '@/types/user'

const signupStore = useSignupStore()
const { signup } = signupStore
const { error: signupError } = storeToRefs(signupStore)

const { errors } = useMessages().value

const { handleSubmit } = useForm({
  validationSchema: yup.object({
    name: yup.string().required(errors.required),
    email: yup.string().email(errors.email).required(errors.required),
    password: yup
      .string()
      .min(8, errors.passwordMinLength)
      .required(errors.required),
    repeatPassword: yup
      .string()
      .required(errors.required)
      .min(8, errors.passwordMinLength)
      .oneOf([yup.ref('password')], errors.repeatPassword)
  })
})

const emit = defineEmits(['switchForm'])

const onSubmit = handleSubmit(async (values) => {
  const payload: TSignupUser = {
    name: values.name,
    email: values.email,
    password: values.password
  }

  await signup(payload)
})
</script>

<template>
  <form class="form signup-form" @submit="onSubmit">
    <h4 class="title">Регистрация</h4>
    <VField
      class="field"
      :name="'name'"
      :placeholder="'Введите имя'"
      :label="'Имя'"
    />
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
    <VField
      class="field"
      :name="'repeatPassword'"
      :type="'password'"
      :placeholder="'Повторите пароль'"
      :label="'Повторите пароль'"
    />
    <div class="button-container">
      <VError v-show="signupError" class="submit-error">
        {{ signupError }}
      </VError>
      <button class="submit" type="submit">Зарегистрироваться</button>
    </div>
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
