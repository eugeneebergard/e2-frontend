<template>
  <header class="header">
    <div class="container">
      <div class="logo-container">
        <nuxt-link to="/" title="На Главную">
          <img src="@/assets/images/logo.svg" alt="logo" />
        </nuxt-link>
      </div>
      <TheNavigation />
    </div>
  </header>
</template>

<style scoped lang="sass">
.header
  background: inherit
  .container
    display: flex
    justify-content: space-between
    padding: 15px 80px
    margin: 0 auto
    @include container
</style>
