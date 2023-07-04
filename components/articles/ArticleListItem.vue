<script setup lang="ts">
import { Ref, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useSavedArticlesStore, useSearchStore } from '@/store/articles'

const props = defineProps<{
  date: string
  title: string
  text: string
  source: string
  link: string
  image: string | null
}>()

// searchStore
const { keyWord: searchKeyWord }: { keyWord: Ref<string> } = storeToRefs(
  useSearchStore()
)

// articlesStore
const savedArticlesStore = useSavedArticlesStore()
const { postSavedArticleData, deleteSavedArticleData } = savedArticlesStore
const { getNewSavedArticleId, deleteResponse } = storeToRefs(savedArticlesStore)

const alternateImageLink =
  'https://deti-i-mama.ru/wp-content/uploads/2020/07/gazeta_212005-132.jpg'
const imageUrl = props.image || alternateImageLink
const cardId = ref<string | null>(null)

async function saveArticle() {
  const payload = {
    keyword: searchKeyWord.value,
    date: props.date,
    title: props.title,
    text: props.text,
    source: props.source,
    link: props.link,
    image: imageUrl
  }
  await postSavedArticleData(payload)
  cardId.value = getNewSavedArticleId.value
}

async function deleteArticle() {
  await deleteSavedArticleData(cardId.value!)
  deleteResponse.value && (cardId.value = null)
}
</script>

<template>
  <ArticleCard
    :title="title"
    :date="date"
    :image="imageUrl"
    :link="link"
    :text="text"
    :source="source"
    :alternate-image-link="alternateImageLink"
  >
    <BookmarkButton
      :card-id="cardId"
      @save-article="saveArticle"
      @delete-article="deleteArticle"
    />
  </ArticleCard>
</template>
