<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    clickable?: boolean
    expanded?: boolean
  }>(),
  {
    clickable: false,
  },
)

const listClasses = computed(() => [
  'flex w-full flex-row items-center gap-4 rounded-md px-2 py-1 transition-colors',
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
      <li v-if="props.expanded">
        <slot name="expanded" />
      </li>
    </ul>
    <li v-if="$slots.end" class="pl-2">
      <slot class="text-gray-500 text-sm font-bold" name="end" />
    </li>
  </ul>
</template>
