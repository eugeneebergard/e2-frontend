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
  z-index: 1
  @media (max-width: $tablet)
    border-top: 1px solid #F1F1F1
    padding: 30px $padding-m 40px
    background-color: #fff
    z-index: 20
  @media (max-width: $mob-l)
    padding: 30px $padding-s 40px
  &-list
    display: flex
    align-items: center
    @include resetList
    &__item
      &:not(:last-of-type)
        margin-right: 80px
        @media (max-width: $tablet)
          margin-right: 40px
      @media (max-width: $tablet - 1px)
        width: 100%
    @media (max-width: $tablet - 1px)
      flex-direction: column
      align-items: start
      &__item:not(:last-of-type)
        margin-right: 0
        margin-bottom: 35px
  &__link
    @include linkDefault

  .router-link-exact-active
    @include borderUnderline
</style>
