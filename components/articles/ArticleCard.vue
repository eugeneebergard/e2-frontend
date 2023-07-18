<script setup lang="ts">
import ShareButton from '~/components/ui/ShareButton.vue'

const props = defineProps<{
  date: string
  title: string
  text: string
  source: string
  link: string
  image: string
  alternateImageLink: string
}>()

const localeDate = useLocaleDate(props.date)
</script>

<template>
  <li class="article-card">
    <a :href="link" target="_blank" class="link">
      <slot></slot>
      <ShareButton :link="link" />
      <img
        class="image"
        :src="image"
        alt="image"
        loading="lazy"
        @error="$event.target.src = alternateImageLink"
      />
      <div class="content">
        <span class="date">{{ localeDate }}</span>
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
  width: 305px
  height: 530px
  position: relative
  background-color: #fff
  border-radius: 15px
  box-shadow: $card-shadow
  .content
    margin: 15px
  .title
    margin: 12px 0 10px
    font-family: $heading-font-family
    font-size: 20px
    font-weight: 600
    @include cutLines(3)
  .text
    margin: 10px 0
    font-family: $text-font-family
    font-size: 15px
    @include cutLines(5)
  .link
    display: block
    height: 100%
    color: black
    text-decoration: none
    cursor: pointer
  .image
    height: 200px
    width: 100%
    background-size: cover
    border-top-left-radius: 10px
    border-top-right-radius: 10px
    color: black
  .source
    font-family: $text-font-family
    color: #ABABAB
    font-size: 13px
  .date
    font-family: $text-font-family
    color: #ABABAB
    font-size: 13px
  .share-btn
    top: 10px
    right: 52px
    @include cardArticleBtn
    &:after
      width: 20px
      height: 20px
      @include pseudoIcon('@/assets/images/share.svg')
    &:active:after
      @include pseudoIcon('@/assets/images/shareСlicked.svg')
</style>
