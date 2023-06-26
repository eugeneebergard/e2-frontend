<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useProfileStore, useAuthStore } from '@/store/user'

const profileStore = useProfileStore()
const { profile } = storeToRefs(profileStore)

const authStore = useAuthStore()
const { isAuth } = storeToRefs(authStore)
const { signin, logout } = authStore
</script>

<template>
  <header class="header">
    <div v-if="isAuth && profile">Name: {{ profile.name }}</div>

    <button v-if="!isAuth" @click="signin({ email: '', password: '' })">
      Авторизоваться
    </button>
    <button v-if="isAuth" @click="logout">Выйти</button>

    <nuxt-link to="/">Главная</nuxt-link>
    <nuxt-link to="/articles">Статьи</nuxt-link>
  </header>
</template>
