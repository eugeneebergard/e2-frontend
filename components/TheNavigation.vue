<script setup lang="ts">
const isAuth = useIsAuth()
</script>

<template>
  <nav class="nav">
    <ul class="nav-list">
      <li class="nav-list__item">
        <nuxt-link to="/">Главная</nuxt-link>
      </li>
      <li v-if="isAuth" class="nav-list__item">
        <nuxt-link to="/articles">Статьи</nuxt-link>
      </li>
      <li v-if="!isAuth" class="nav-list__item">
        <AuthButton />
      </li>
      <li v-else class="nav-list__item">
        <LogoutButton />
      </li>
    </ul>
  </nav>
</template>
