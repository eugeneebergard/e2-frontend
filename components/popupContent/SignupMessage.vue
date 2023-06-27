<script setup lang="ts">
const emit = defineEmits(['switchForm'])
</script>

<template>
  <div class="signup-message">
    <h4>Вы успешно зарегистрировались!</h4>
    <span><button @click="emit('switchForm')">Войти</button></span>
  </div>
</template>
