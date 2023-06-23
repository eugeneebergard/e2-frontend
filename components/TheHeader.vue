<script setup lang="ts">
import { TUseUserValue } from '@/types'

const user: TUseUserValue = useUser().value
async function signin() {
  const { data } = await useApi('/signin', {
    method: 'POST',
    body: {
      email: '*',
      password: '*'
    }
  })

  if (data.value) {
    window.location.reload()
  }
}

async function logout() {
  const { data } = await useApi<{ message: string }>('/logout', {
    method: 'POST'
  })

  if (data.value) {
    window.location.reload()
  }
}
</script>

<template>
  <header class="header">
    <div v-if="user.isAuth && user.profile">Name: {{ user.profile.name }}</div>

    <button v-if="!user.isAuth" @click="signin">Авторизоваться</button>
    <button v-if="user.isAuth" @click="logout">Выйти</button>

    <nuxt-link to="/">Главная</nuxt-link>
    <nuxt-link to="/articles">Статьи</nuxt-link>
  </header>
</template>
