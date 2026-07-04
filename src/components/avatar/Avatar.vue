<script lang="ts" setup>
import { AvatarRoot, AvatarFallback } from 'reka-ui'
import { avatarVariants, avatarFallbackVariants } from '.'

const props = withDefaults(
  defineProps<{
    color?: 'blue' | 'purple'
    size?: 'small' | 'medium'
    initial?: string
  }>(),
  {
    color: 'blue',
    initial: 'ZA',
    size: 'medium',
  },
)
</script>

<template>
  <AvatarRoot :class="avatarVariants({ color: props.color, size: props.size })">
    <AvatarFallback :class="avatarFallbackVariants({ color: props.color, size: props.size })">
      {{ props.initial }}
    </AvatarFallback>
  </AvatarRoot>
</template>
