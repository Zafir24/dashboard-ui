<script setup lang="ts">
import { iconVariants } from '.'

const props = withDefaults(
  defineProps<{
    size?: 'medium' | 'small'
    filled?: 'blue' | 'purple' | 'green' | 'yellow' | 'non'
    clickable?: boolean
  }>(),
  {
    size: 'medium',
    filled: 'non',
    clickable: false,
  },
)
</script>

<template>
  <div
    :class="iconVariants({ size: props.size, filled: props.filled, clickable: props.clickable })"
  >
    <slot />
  </div>
</template>
