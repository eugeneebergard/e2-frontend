<script setup lang="ts">
import { ref } from 'vue'
import { useSearchStore } from '@/store/articles'

const { keyWord, getSearchData } = useSearchStore()

const inputVal = ref<string>(keyWord)
</script>

<template>
  <form class="search-form">
    <input
      v-model="inputVal"
      class="search-form__field"
      placeholder="Поищем что-нибудь?"
    />
    <button
      class="search-form__submit"
      @click.prevent="getSearchData(inputVal)"
    >
      Искать
    </button>
  </form>
</template>

<style scoped lang="sass">
.search-form
  display: flex
  position: relative
  &:after
    position: absolute
    left: 20px
    top: 17px
    width: 20px
    height: 20px
    @include pseudoIcon('@/assets/images/loupe.svg')
  &__field
    position: relative
    height: 32px
    width: 100%
    padding: 10px 0 10px 50px
    box-shadow: $ui-shadow
    @include inputDefault
  &__submit
    position: absolute
    right: 0
    padding: 17px 30px
    background-color: $main-color
    color: #fff
    z-index: 2
    box-shadow: $ui-shadow
    @include buttonDefault
</style>
