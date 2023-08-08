<script setup lang="ts">
const error = useError()

const message = computed(() => {
  let text

  // @ts-ignore
  switch (error.value.statusCode) {
    case 404:
      text = 'Страница не найдена'
      break
    case 429:
      text = 'Превышено количество запросов'
      break
    case 500:
      text = 'Ошибка сервера'
      break
    default:
      text = 'Неизвестная ошибка'
  }

  return text
})
</script>

<template>
  <div class="root">
    <TheHeader :error-page="true" />
    <main class="main">
      <TheHeading class="heading" :title="error.statusCode.toString()" />
      <span class="text">{{ message }} :(</span>
      <nuxt-link to="/" class="link">Вернуться на главную</nuxt-link>
    </main>
    <TheFooter />
  </div>
</template>

<style scoped lang="sass">
.main
  display: flex
  align-items: center
  flex-direction: column
  justify-content: center
  height: 100%
  .heading
    font-size: 150px
    color: $main-color
    @media(max-width: $tablet)
      font-size: 75px
  .text
    font-family: $heading-font-family
    font-size: 40px
    font-weight: 600
    @media(max-width: $tablet)
      font-size: 20px
  .link
    margin-top: 30px
    font-size: 16px
    font-family: $text-font-family
    color: $main-color
</style>
