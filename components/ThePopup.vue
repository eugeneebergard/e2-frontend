<script setup lang="ts">
const emit = defineEmits(['closePopup'])
</script>

<template>
  <div class="popup">
    <button @click="emit('closePopup')">Крестик типа</button>
    <slot></slot>
  </div>
</template>
