<script setup lang="ts">
import { THeadlineData } from '@/types'

defineProps<{
  headlines: THeadlineData[]
}>()
</script>

<template>
  <ul class="headline-list">
    <li v-for="headline in headlines">
      <a :href="headline.url">{{ headline.title }}</a>
    </li>
  </ul>
</template>


