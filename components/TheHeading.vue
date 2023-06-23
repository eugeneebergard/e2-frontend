<script setup lang="ts">
defineProps<{
  title: string
  text?: string
}>()
</script>

<template>
  <h1 class="heading">{{ title }}</h1>
  <p v-if="text" class="text">{{ text }}</p>
</template>
