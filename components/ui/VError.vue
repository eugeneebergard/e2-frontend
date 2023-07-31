<template>
  <span class="error-message">
    <slot></slot>
  </span>
</template>

<style scoped lang="sass">
.error-message
  position: absolute
  color: $error-color
  font-family: $text-font-family
  font-size: 12px
</style>
