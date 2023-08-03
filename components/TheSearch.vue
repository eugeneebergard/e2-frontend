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
  padding: 165px $padding-l 260px
  max-width: 583px
  margin: 0 auto
  @media (max-width: $tablet)
    padding: 92px $padding-m 154px
  @media (max-width: $mob-l)
    padding: 92px $padding-s 154px
</style>
