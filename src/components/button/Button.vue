<script lang="ts" setup>
import { buttonVariants } from '.'

const props = withDefaults(
  defineProps<{
    label?: string
    variant?: 'primary' | 'outline' | 'error' | 'disabled'
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean
    onClick?: () => void
  }>(),
  {
    label: 'Button',
    variant: 'primary',
    type: 'button',
    disabled: false,
  },
)
</script>

<template>
  <button
    :type="props.type"
    :disabled="props.disabled"
    :class="buttonVariants({ variant: props.disabled ? 'disabled' : props.variant })"
    @click="props.onClick"
  >
    {{ props.label }}
  </button>
</template>
