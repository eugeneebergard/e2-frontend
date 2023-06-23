<script setup lang="ts">
import { useArticlesStore } from '@/store/articles'

const { getSearch, getSearchData } = useArticlesStore()

const inputVal: Ref<string> = ref(getSearch.keyWord)
</script>

<template>
  <form class="search-form">
    <input
      v-model="inputVal"
      class="search-form__field"
      placeholder="Введите тему новости"
    />
    <button
      class="search-form__submit"
      @click.prevent="getSearchData(inputVal)"
    >
      Искать
    </button>
  </form>
</template>
