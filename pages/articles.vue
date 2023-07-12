<script setup lang="ts">
import { Ref } from 'vue'
import { storeToRefs } from 'pinia'
import { TSavedArticle } from '@/types/articles'
import { TProfile } from '@/types/user'
import { useSavedArticlesStore } from '@/store/articles'
import { useProfileStore } from '@/store/user'
import SavedArticles from '~/components/SavedArticles.vue'

useHead({ title: '2E - Сохраненные статьи' })
type TProfileRefs = { profile: Ref<TProfile> }
type TSavedArticlesRefs = {
  actualSavedArticles: Ref<TSavedArticle[]>
  countSavedArticles: Ref<number>
}

const profileStore = useProfileStore()
const { profile }: TProfileRefs = storeToRefs(profileStore)

const savedArticlesStore = useSavedArticlesStore()
const { getSavedArticlesData } = savedArticlesStore

const { actualSavedArticles, countSavedArticles }: TSavedArticlesRefs =
  storeToRefs(savedArticlesStore)

await getSavedArticlesData()
</script>

<template>
  <main class="main">
    <SavedArticles
      :name="profile.name"
      :articles-count="countSavedArticles"
      :articles="actualSavedArticles"
    />
  </main>
</template>
