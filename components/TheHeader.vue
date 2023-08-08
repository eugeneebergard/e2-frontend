<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ errorPage?: boolean }>()

const route = useRoute()
const showNav = ref(false)

function closeNav() {
  document.body.classList.remove('no-scroll')
  showNav.value = false
}

function toggleNav() {
  showNav.value = !showNav.value

  if (showNav.value) document.body.classList.add('no-scroll')
  else document.body.classList.remove('no-scroll')
}

watch(route, closeNav)
</script>

<template>
  <header class="header" :class="route.name === 'articles' && 'shadow'">
    <VContainer>
      <div class="logo-container">
        <nuxt-link to="/" title="На Главную">
          <img class="logo" src="@/assets/images/logo.svg" alt="logo" />
        </nuxt-link>
      </div>
      <TheNavigation v-if="!errorPage" class="desktop-nav" />
      <VBurger v-if="!errorPage" @click="toggleNav" />
    </VContainer>
    <div
      v-if="!errorPage"
      v-show="showNav"
      class="overlay"
      @click.self="toggleNav"
    >
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
  display: none
  position: fixed
  width: 100%
  height: 100%
  background: rgba(0, 0, 0, 0.7)
  transition: opacity 500ms
  z-index: 20
  @media(max-width: $tablet)
    display: block
</style>
