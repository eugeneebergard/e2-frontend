<script setup lang="ts">
import { useUserStore } from '@/store/user'
import { TProfile } from '@/types/user'

const { getIsAuth, getProfile, signin, logout } = useUserStore()

const isAuth: Ref<boolean> = getIsAuth
const profile: Ref<TProfile> = getProfile
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
