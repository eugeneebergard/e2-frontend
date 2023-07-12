<template>
  <header class="header">
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
</style>
