<script setup lang="ts">
import { THeadline } from '@/store/headlines'

defineProps<{
  headlines: Ref<THeadline[]>
}>()
</script>

<template>
  <div class="headlines">
    <HeadlineList :headlines="headlines" />
  </div>
</template>
