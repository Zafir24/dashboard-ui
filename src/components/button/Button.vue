<script lang="ts" setup>
import { buttonVariants } from '.'

const props = withDefaults(
  defineProps<{
    label?: string
    variant?: 'primary' | 'outline' | 'error'
    onClick?: () => void
  }>(),
  {
    label: 'Button',
    variant: 'primary',
  },
)
</script>

<template>
  <button type="button" :class="buttonVariants({ variant: props.variant })" @click="props.onClick">
    {{ props.label }}
  </button>
</template>
