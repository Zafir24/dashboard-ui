<script setup lang="ts">
import { Search } from '@lucide/vue'
import { inputVariants, fieldVariants } from '.'

const props = withDefaults(
  defineProps<{
    placeholder?: string
  }>(),
  {},
)
</script>
<template>
  <div :class="inputVariants()">
    <Search class="w-4 h-4 text-gray-500" />
    <input :class="fieldVariants()" :placeholder="props.placeholder" />
  </div>
</template>
