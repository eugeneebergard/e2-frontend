<script setup lang="ts">
import { Ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useSavedArticlesStore } from '@/store/articles'

const props = defineProps<{
  date: string
  title: string
  text: string
  source: string
  link: string
  image: string | null
  owner: string
  cardId: string
}>()

type TSavedArticlesRefs = {
  deleteResponse: Ref<string | null>
  deleteLoading: Ref<boolean>
}

const savedArticlesStore = useSavedArticlesStore()
const { getSavedArticlesData, deleteSavedArticleData } = savedArticlesStore
const { deleteLoading, deleteResponse }: TSavedArticlesRefs =
  storeToRefs(savedArticlesStore)

const alternateImageLink =
  'https://deti-i-mama.ru/wp-content/uploads/2020/07/gazeta_212005-132.jpg'
const imageUrl = props.image || alternateImageLink

async function deleteArticle() {
  await deleteSavedArticleData(props.cardId)
  if (deleteResponse.value) await getSavedArticlesData()
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
    <TrashButton :disable="deleteLoading" @delete-article="deleteArticle" />
  </ArticleCard>
</template>
