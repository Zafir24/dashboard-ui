<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    clickable?: boolean
    expanded?: boolean
    active?: boolean
  }>(),
  {
    clickable: false,
    active: false,
  },
)

const listClasses = computed(() => [
  'flex w-full flex-row items-center gap-4 rounded-md px-2 py-1 transition-colors',
  props.active ? 'bg-purple-100 text-purple-700 [&_div]:text-purple-700 [&_svg]:text-purple-700' : '',
  props.clickable
    ? 'cursor-pointer select-none hover:bg-purple-50 active:bg-purple-100'
    : 'cursor-default',
])
</script>

<template>
  <ul :class="listClasses">
    <li v-if="$slots.start">
      <slot name="start" />
    </li>
    <ul class="min-w-0 flex-1">
      <li >
        <slot />
      </li>
      <li v-if="expanded" class="text-xs text-gray-500">
        <slot name="expanded" />
      </li>
    </ul>
    <li v-if="$slots.end" class="pl-2 text-xs text-bold">
      <slot class="" name="end" />
    </li>
  </ul>
</template>
