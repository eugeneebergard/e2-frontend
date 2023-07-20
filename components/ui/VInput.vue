<script setup lang="ts">
defineProps<{
  name: string
  modelValue: string
  label?: string
  type?: string
  placeholder: string
}>()

const emit = defineEmits(['update:modelValue'])

const updateValue = (event: { target: HTMLInputElement }) => {
  emit('update:modelValue', event.target.value)
}
</script>

<template>
  <div>
    <label v-if="label" class="label" :class="`label-${name}`" :for="name">
      {{ label }}
    </label>
    <input
      class="input"
      :class="`input-${name}`"
      :value="modelValue"
      :name="name"
      :placeholder="placeholder"
      :type="type ? type : 'text'"
      :autocomplete="name === 'password' ? 'on' : 'off'"
      @input="updateValue"
    />
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
</style>
