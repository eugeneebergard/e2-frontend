<script setup lang="ts">
import { Ref, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useSavedArticlesStore, useSearchStore } from '@/store/articles'
import { TArticle } from '@/types/articles'

const props = defineProps<{
  article: TArticle
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
const imageUrl = props.article.urlToImage || alternateImageLink
const cardId = ref<string | null>(null)

async function saveArticle() {
  const payload = {
    keyword: searchKeyWord.value,
    date: props.article.publishedAt,
    title: props.article.title,
    text: props.article.description,
    source: props.article.source.name,
    link: props.article.url,
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
    :date="article.publishedAt"
    :link="article.url"
    :source="article.source.name"
    :text="article.description"
    :title="article.title"
    :image="imageUrl"
    :alternate-image-link="alternateImageLink"
  >
    <BookmarkButton
      :card-id="cardId"
      @save-article="saveArticle"
      @delete-article="deleteArticle"
    />
  </ArticleCard>
</template>
