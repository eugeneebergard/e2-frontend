<script setup lang="ts">
defineProps({
  title: {
    type: String as PropType<string>,
    require: true
  },
  text: {
    type: String as PropType<string>,
    default: ''
  }
})
</script>

<template>
  <h1 class="heading">{{ title }}</h1>
  <p v-if="text" class="text">{{ text }}</p>
</template>
