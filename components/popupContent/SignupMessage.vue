<script setup lang="ts">
const emit = defineEmits(['switchForm'])
</script>

<template>
  <div class="signup-message">
    <h4 class="title">Вы успешно зарегистрировались!</h4>
    <button class="btn" @click="emit('switchForm')">Войти</button>
  </div>
</template>

<style scoped lang="sass">
.title
  margin: 27px 0 30px
  font-family: $heading-font-family
  font-size: 20px
  font-weight: 600
.btn
  font-family: $text-font-family
  margin-bottom: 16px
  padding: 16px 70px
  border-radius: 30px
  color: #fff
  background-color: $main-color
  @include transitionOpacity
  @include buttonDefault
</style>
