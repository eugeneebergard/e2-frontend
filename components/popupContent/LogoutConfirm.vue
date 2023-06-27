<script setup lang="ts">
import { useAuthStore } from '@/store/user'
const emit = defineEmits(['closePopup'])

const { logout } = useAuthStore()
</script>

<template>
  <div class="logout-confirm">
    <h4>Вы уверены, что хотите выйти?</h4>
    <button @click="logout">Да</button>
    <button @click="emit('closePopup')">Нет</button>
  </div>
</template>
