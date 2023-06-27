<script setup lang="ts">
import { Ref } from 'vue'
import { storeToRefs } from 'pinia'
import { TProfile } from '@/types/user'
import { useProfileStore, useAuthStore } from '@/store/user'

type TProfileRefs = { profile: Ref<TProfile> }
type TAuthRefs = { isAuth: Ref<boolean> }

const profileStore = useProfileStore()
const { profile }: TProfileRefs = storeToRefs(profileStore)

const authStore = useAuthStore()
const { signin, logout } = authStore
const { isAuth }: TAuthRefs = storeToRefs(authStore)
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
