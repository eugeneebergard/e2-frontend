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
  .container
    display: flex
    justify-content: space-between
    padding: 15px 80px
</style>
