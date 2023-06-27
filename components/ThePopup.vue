<script setup lang="ts">
const emit = defineEmits(['closePopup'])
</script>

<template>
  <div class="overlay" @click.self="emit('closePopup')">
    <div class="popup">
      <button class="close" @click="emit('closePopup')">&times;</button>
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
  bottom: 0
  left: 0
  right: 0
  background: rgba(0, 0, 0, 0.7)
  transition: opacity 500ms

.popup
  margin: 70px auto
  padding: 20px
  background: #fff
  border-radius: 5px
  width: 30%
  position: relative
  transition: all 5s ease-in-out

.close
  position: absolute
  top: 20px
  right: 30px
  font-size: 30px
  font-weight: bold
  text-decoration: none
  color: #333
  cursor: pointer

.content
  overflow: auto
</style>
