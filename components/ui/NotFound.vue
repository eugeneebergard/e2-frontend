<template>
  <div class="not-found">
    <div class="not-found-icon" />
    <h3>Ничего не найдено</h3>
  </div>
</template>

<style scoped lang="sass">
.not-found
  display: flex
  flex-direction: column
  align-items: center
  &-icon
    width: 96px
    height: 96px
    background-repeat: no-repeat
    background-position: center
    background-image: url('@/assets/images/not-found-icon.svg')
</style>
