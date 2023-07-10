<script setup lang="ts">
const isAuth = useIsAuth()
</script>

<template>
  <nav class="nav">
    <ul class="nav-list">
      <li class="nav-list__item">
        <nuxt-link to="/" class="nav__link">Главная</nuxt-link>
      </li>
      <li v-if="isAuth" class="nav-list__item">
        <nuxt-link to="/articles" class="nav__link"
          >Сохранённые статьи</nuxt-link
        >
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

<style scoped lang="sass">
.nav
  &-list
    display: flex
    align-items: center
    @include resetList
    &__item:not(:last-of-type)
      margin-right: 80px
  &__link
    @include linkDefault

  .router-link-exact-active
    @include borderUnderline
</style>
