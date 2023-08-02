<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style scoped lang="sass">
.container
  max-width: 1280px
  margin: 0 auto
  padding-left: $padding-l
  padding-right: $padding-l
  @media (max-width: $laptop)
    padding-left: $padding-m
    padding-right: $padding-m
  @media (max-width: $mob-l)
    padding-left: $padding-s
    padding-right: $padding-s
</style>
