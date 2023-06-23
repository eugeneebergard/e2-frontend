<script setup lang="ts">
import { THeadline } from '@/types/articles'

defineProps<{
  headlines: Ref<THeadline[]>
}>()
</script>

<template>
  <ul class="headline-list">
    <li v-for="headline in headlines" :key="headline.url">
      <a :href="headline.url">{{ headline.title }}</a>
    </li>
  </ul>
</template>
