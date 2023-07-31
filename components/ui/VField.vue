<script setup lang="ts">
const props = defineProps<{
  name: string
  label?: string
  type?: string
  placeholder: string
}>()

const { value, errorMessage } = useField(() => props.name, undefined, {
  validateOnValueUpdate: false
})
</script>

<template>
  <div>
    <label v-if="label" class="label" :class="`label-${name}`" :for="name">
      {{ label }}
    </label>
    <input
      v-model="value"
      class="input"
      :class="`input-${name}`"
      :name="name"
      :placeholder="placeholder"
      :type="type ? type : 'text'"
      :autocomplete="name === 'password' ? 'on' : 'off'"
    />
    <VError v-show="errorMessage" class="error">{{ errorMessage }}</VError>
  </div>
</template>

<style scoped lang="sass">
.label
  padding: 5px
  position: absolute
  background-color: #fff
  top: -12px
  left: 15px
  color: $main-color
  font-family: $text-font-family
  font-size: 12px
.input
  width: 100%
  height: 52px
  padding: 15px 20px
  border: 1px solid #ABABAB
  border-radius: 30px
  font-family: $text-font-family
  font-size: 14px
  color: $text-color
  outline: none
  box-sizing: border-box
  -webkit-box-sizing: border-box
  -moz-box-sizing: border-box
  &:focus-visible
    border: 1px solid $main-color
.error
  width: 258px
  top: 54px
  left: 20px
</style>
