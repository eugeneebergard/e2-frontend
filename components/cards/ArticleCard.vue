<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  date: string
  title: string
  text: string
  source: string
  link: string
  image: string
  alternateImageLink: string
}>()

const showMessage = ref(false)
const textMessage = ref('')

const localeDate = useLocaleDate(props.date)
let timeOut: undefined | NodeJS.Timeout

function showCardMessage(text: string) {
  timeOut && clearTimeout(timeOut)

  textMessage.value = text
  showMessage.value = true

  timeOut = setTimeout(() => {
    showMessage.value = false
  }, 3000)
}

function shareArticle() {
  navigator.clipboard.writeText(props.link)
  showCardMessage('Ссылка скопирована')
}

defineExpose({ showCardMessage })
</script>

<template>
  <li class="article-card">
    <a :href="link" target="_blank" class="link">
      <Transition>
        <CardMessage v-show="showMessage" :text="textMessage" />
      </Transition>
      <slot></slot>
      <ShareButton :link="link" @share-article="shareArticle" />
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
  height: 490px
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
    border-top-left-radius: 15px
    border-top-right-radius: 15px
    color: black
  .source
    position: absolute
    bottom: 15px
    left: 15px
    font-family: $text-font-family
    color: #ABABAB
    font-weight: 600
    font-size: 13px
  .date
    font-family: $text-font-family
    color: #ABABAB
    font-size: 13px
  .share-btn
    top: 10px
    right: 52px
    @include cardArticleUiElem
    @include cardArticleBtn
    &:after
      width: 20px
      height: 20px
      @include pseudoIcon('@/assets/images/share.svg')
    &:active:after
      @include pseudoIcon('@/assets/images/shareСlicked.svg')
</style>
