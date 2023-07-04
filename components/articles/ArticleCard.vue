<script setup lang="ts">
defineProps<{
  date: string
  title: string
  text: string
  source: string
  link: string
  image: string | null
  alternateImageLink: string
}>()
</script>

<template>
  <li class="article-card">
    <a :href="link" target="_blank" class="link">
      <div class="content">
        <slot></slot>
        <img
          class="image"
          :src="image"
          alt="image"
          loading="lazy"
          @error="$event.target.src = alternateImageLink"
        />
        <span class="date">{{ correctDate(date) }}</span>
        <h4 class="title">{{ title }}</h4>
        <p v-if="text" class="text">{{ text }}</p>
        <span v-if="source" class="source">{{ source }}</span>
      </div>
    </a>
  </li>
</template>

<style scoped lang="sass">
.article-card
  display: block
  max-width: 256px
  position: relative
  background-color: #f8f8f8
  margin-bottom: 20px
  .title
    @include cutLines(3)
  .text
    @include cutLines(5)
  .link
    color: black
    text-decoration: none
    cursor: pointer
  .image
    height: 272px
    width: 100%
    background-size: cover
    border-top-left-radius: 10px
    border-top-right-radius: 10px
    color: black
</style>
