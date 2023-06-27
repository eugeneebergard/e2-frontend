<script setup lang="ts">
import { useLogoutStore } from '@/store/user'
const emit = defineEmits(['closePopup'])

const { logout } = useLogoutStore()
</script>

<template>
  <div class="logout-confirm">
    <h4>Вы уверены, что хотите выйти?</h4>
    <button @click="logout">Да</button>
    <button @click="emit('closePopup')">Нет</button>
  </div>
</template>
