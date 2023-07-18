<script setup lang="ts">
const emit = defineEmits(['closePopup'])
</script>

<template>
  <div class="overlay" @click.self="emit('closePopup')">
    <div class="popup">
      <button class="close-btn" @click="emit('closePopup')" />
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
.overlay
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  display: flex
  align-items: center
  justify-content: center
  background: rgba(0, 0, 0, 0.7)
  transition: opacity 500ms
  z-index: 99

.popup
  padding: 30px
  background: #fff
  border-radius: 15px
  width: 320px
  position: relative

.close-btn
  width: 32px
  height: 32px
  padding: 0
  margin: 0
  position: absolute
  top: 10px
  right: 10px
  background-color: inherit
  background-image: url('@/assets/images/cross.svg')
  @include buttonDefault
  @include transitionOpacity

.content
  overflow: auto
</style>
