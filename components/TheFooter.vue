<script setup lang="ts">
const date = new Date()
const year = date.getFullYear()
</script>

<template>
  <footer class="footer">
    <VContainer>
      <div>
        <span class="text">&#169; Evgeniy Ebergard {{ year }}</span>
      </div>
      <ul class="contact-list">
        <li class="contact-list__item">
          <a
            href="https://github.com/eugeneebergard"
            target="_blank"
            class="text"
            >GitHub</a
          >
        </li>
        <li class="contact-list__item">
          <a
            href="https://www.linkedin.com/in/evgeny-ebergard/"
            target="_blank"
            class="text"
            >LinkedIn</a
          >
        </li>
      </ul>
    </VContainer>
  </footer>
</template>

<style scoped lang="sass">
.footer
  min-height: 120px
  background-color: $secondary-color
  .container
    display: flex
    justify-content: space-between
    padding: 15px 80px
  .contact-list
    display: flex
    @include resetList
    &__item:not(:last-of-type)
      margin-right: 10px
  .text
    color: #fff
    font-style: normal
</style>
