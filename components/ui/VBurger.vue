<script setup lang="ts">
const emit = defineEmits(['click'])
</script>

<template>
  <button class="burger" @click="emit('click')" />
</template>

<style scoped lang="sass">
.burger
  display: none
  position: relative
  width: 32px
  height: 32px
  background-position: center
  background-repeat: no-repeat
  background-image: url('@/assets/images/burger.svg')
  background-color: inherit
  z-index: 10
  @include buttonDefault
  @media(max-width: $tablet)
    display: block
</style>
