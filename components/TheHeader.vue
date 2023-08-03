<script setup>
import { ref } from 'vue'
const route = useRoute()
const showNav = ref(false)

function closeNav() {
  showNav.value = false
}

function toggleNav() {
  showNav.value = !showNav.value

  const body = document.body

  if (showNav.value) body.classList.add('no-scroll')
  else body.classList.remove('no-scroll')
}

watch(route, closeNav, { deep: true, immediate: true })
</script>

<template>
  <header class="header" :class="route.name === 'articles' && 'shadow'">
    <VContainer>
      <div class="logo-container">
        <nuxt-link to="/" title="На Главную">
          <img class="logo" src="@/assets/images/logo.svg" alt="logo" />
        </nuxt-link>
      </div>
      <TheNavigation class="desktop-nav" />
      <VBurger @click="toggleNav" />
    </VContainer>
    <div v-show="showNav" class="overlay" @click.self="toggleNav">
      <TheNavigation class="mobile-nav" />
    </div>
  </header>
</template>

<style scoped lang="sass">
.header
  background: inherit
  height: 105px
  @media (max-width: $tablet)
    height: 84px
  @media (max-width: $mob-l)
    height: 72px
  .logo-container
    z-index: 1
    .logo
      width: 95px
      height: 70px
      @media (max-width: $tablet)
        width: 65px
        height: 48px
  .container
    display: flex
    justify-content: space-between
    align-items: center
    height: 100%
  .desktop-nav
    display: block
    @media(max-width: $tablet)
      display: none
  .mobile-nav
    display: none
    @media(max-width: $tablet)
      display: block
      position: relative
.shadow
  box-shadow: 0 10px 20px 0 #9C9C9C26
.overlay
  position: fixed
  width: 100%
  height: 100%
  background: rgba(0, 0, 0, 0.7)
  transition: opacity 500ms
  z-index: 99
</style>
