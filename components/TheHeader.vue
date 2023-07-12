<script setup>
const route = useRoute()
</script>

<template>
  <header class="header" :class="route.name === 'articles' && 'shadow'">
    <VContainer>
      <div class="logo-container">
        <nuxt-link to="/" title="На Главную">
          <img
            src="@/assets/images/logo.svg"
            width="95"
            height="70"
            alt="logo"
          />
        </nuxt-link>
      </div>
      <TheNavigation />
    </VContainer>
  </header>
</template>

<style scoped lang="sass">
.header
  background: inherit
  height: 105px
  .logo-container
    z-index: 1
  .container
    display: flex
    justify-content: space-between
    align-items: center
    padding: 15px 80px
.shadow
  box-shadow: 0 10px 20px 0 #9C9C9C26
</style>
