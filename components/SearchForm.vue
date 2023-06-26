<script setup lang="ts">
import { ref } from 'vue'
import { useSearchStore } from '@/store/articles'

const { keyWord, getSearchData } = useSearchStore()

const inputVal = ref(keyWord)
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
