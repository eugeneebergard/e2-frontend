<script setup lang="ts">
import { Ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useSavedArticlesStore } from '@/store/articles'
import { TSavedArticle } from '@/types/articles'

const props = defineProps<{
  article: TSavedArticle
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
const imageUrl = props.article.image || alternateImageLink

async function deleteArticle() {
  await deleteSavedArticleData(props.article._id)
  if (deleteResponse.value) await getSavedArticlesData()
}
</script>

<template>
  <ArticleCard
    :date="article.date"
    :link="article.link"
    :source="article.source"
    :text="article.text"
    :title="article.title"
    :image="imageUrl"
    :alternate-image-link="alternateImageLink"
  >
    <TrashButton :disable="deleteLoading" @delete-article="deleteArticle" />
  </ArticleCard>
</template>
