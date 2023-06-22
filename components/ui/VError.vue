<script setup lang="ts">
defineProps<{
  errorMessage: string
}>()
</script>

<template>
  <h3 class="error-message">{{ errorMessage }}</h3>
</template>

<style scoped lang="sass">
.error-message
  color: red
</style>
