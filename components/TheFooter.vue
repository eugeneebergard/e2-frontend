<script setup lang="ts">
const date = new Date()
const year = date.getFullYear()
</script>

<template>
  <footer class="footer">
    <VContainer>
      <address class="author text">
        &#169;2E {{ year }}, Powered by News API
      </address>
      <ul class="contact-list">
        <li class="contact-list__item">
          <a
            href="https://github.com/eugeneebergard"
            target="_blank"
            class="link"
          >
            <img
              class="icon"
              src="@/assets/images/github-icon.svg"
              alt="GitHub"
              width="32"
              height="32"
            />
          </a>
        </li>
        <li class="contact-list__item">
          <a
            href="https://www.linkedin.com/in/evgeny-ebergard/"
            target="_blank"
            class="link"
          >
            <img
              class="icon"
              src="@/assets/images/linkedin-icon.svg"
              alt="LinkedIn"
              width="32"
              height="32"
            />
          </a>
        </li>
      </ul>
    </VContainer>
  </footer>
</template>

<style scoped lang="sass">
.footer
  min-height: 120px
  background-color: $text-color
  .container
    display: flex
    justify-content: space-between
    align-items: center
    padding-top: 15px
    padding-bottom: 15px
    @media(max-width: $mob-l)
      flex-direction: column
      align-items: start
  .author
    @media(max-width: $mob-l)
      margin-bottom: 15px
  .contact-list
    display: flex
    align-items: center
    height: 32px
    @include resetList
    &__item
      height: 100%
      &:not(:last-of-type)
        margin-right: 10px
  .text
    color: #fff
    font-style: normal
  .link
    display: block
    height: 100%
    @include transitionOpacity
</style>
