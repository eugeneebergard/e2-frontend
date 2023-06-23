<script setup lang="ts">
defineProps<{
  date: string
  title: string
  text: string
  source: string
  link: string
  image: string | null
}>()
</script>

<template>
  <li class="card-article">
    <a :href="link" class="card-article__link">
      <div>
        <img class="card-article__image" :src="image" alt="image" />
        <span>{{ correctDate(date) }}</span>
        <h4>{{ title }}</h4>
        <p v-if="text">{{ text }}</p>
        <span v-if="source">{{ source }}</span>
      </div>
    </a>
  </li>
</template>

<style scoped lang="sass">
.card-article
  display: block
  max-width: 256px
  background-color: #f8f8f8
  margin-bottom: 20px
  &__link
    color: black
    text-decoration: none
    cursor: pointer
  &__image
    height: 272px
    width: 100%
    background-size: cover
    border-top-left-radius: 10px
    border-top-right-radius: 10px
    color: black
</style>
