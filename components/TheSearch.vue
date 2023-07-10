<script setup lang="ts">
defineProps<{
  title: string
  text?: string
}>()
</script>

<template>
  <section class="search">
    <div class="container">
      <TheHeading :title="title" :text="text" />
      <SearchForm />
    </div>
  </section>
</template>

<style scoped lang="sass">
.container
  padding: 165px 0 260px
  max-width: 583px
  margin: 0 auto
</style>
