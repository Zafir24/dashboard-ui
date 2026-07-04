<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    clickable?: boolean
  }>(),
  {
    clickable: false,
  },
)

const listClasses = computed(() => [
  'flex w-full flex-row items-center gap-2 rounded-md px-2 py-1 transition-colors',
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
    <li class="min-w-0 flex-1">
      <slot />
    </li>
    <li v-if="$slots.end" class="pl-2">
      <slot name="end" />
    </li>
  </ul>
</template>
