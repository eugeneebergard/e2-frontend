<template>
  <div class="cover" />
</template>

<style scoped lang="sass">
.cover
  min-width: 100%
  min-height: 653px
  background-image: url('@/assets/images/cover.png')
  background-repeat: no-repeat
  background-size: cover
  background-position: 50%
  position: absolute
  background-attachment: fixed
  top: 0
  @media (max-width: $tablet)
    min-height: 430px
  @media (max-width: $mob-l)
    min-height: 409px
</style>
