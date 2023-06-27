<script setup lang="ts">
import { THeadline } from '@/types/articles'

defineProps<{
  headlines: THeadline[]
}>()
</script>

<template>
  <div class="headlines">
    <HeadlineList :headlines="headlines" />
  </div>
</template>
