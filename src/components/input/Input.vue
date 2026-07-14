<script setup lang="ts">
import { Search } from '@lucide/vue'
import { inputVariants, fieldVariants } from '.'

const props = withDefaults(
  defineProps<{
    modelValue?: string
    type?: string
    placeholder?: string
    searchIcon?: boolean
  }>(),
  {
    modelValue: '',
    type: 'text',
    searchIcon: true,
  },
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>
<template>
  <div :class="inputVariants()">
    <Search v-if="props.searchIcon" class="w-4 h-4 text-gray-500" />
    <input
      :class="fieldVariants()"
      :type="props.type"
      :value="props.modelValue"
      :placeholder="props.placeholder"
      @input="onInput"
      v-bind="$attrs"
    />
  </div>
</template>
