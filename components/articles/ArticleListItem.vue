<script setup lang="ts">
import { Ref, ref } from 'vue'
import { storeToRefs } from 'pinia'
import ArticleCard from './ArticleCard.vue'
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
const text = props.article.description || 'Подробнее в источнике'
const cardId = ref<string | null>(null)
const articleCard = ref<InstanceType<typeof ArticleCard> | null>(null)

const isAuth = useIsAuth()

async function saveArticle() {
  if (!isAuth.value) {
    articleCard.value.showCardMessage('Войдите, чтобы сохранять статьи')
    return
  }

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
  cardId.value && articleCard.value.showCardMessage('Статья сохранена')
}

async function deleteArticle() {
  await deleteSavedArticleData(cardId.value!)

  deleteResponse.value && (cardId.value = null)

  !cardId.value && articleCard.value.showCardMessage('Статья удалена')
}
</script>

<template>
  <ArticleCard
    ref="articleCard"
    :date="article.publishedAt"
    :link="article.url"
    :source="article.source.name"
    :text="text"
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
