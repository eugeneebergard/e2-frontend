<script setup lang="ts">
import { TUseHeadlinesValue } from '@/types'

defineProps<{
  headlinesData: TUseHeadlinesValue
}>()
</script>

<template>
  <div class="headlines">
    <HeadlineList :headlines="headlinesData.headlines" />
  </div>
</template>
