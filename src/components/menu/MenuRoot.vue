<script setup lang="ts">
import { DropdownMenuRoot } from 'reka-ui'
import { ref } from 'vue'

const toggleState = ref(false)
</script>
<template>
  <DropdownMenuRoot v-model:open="toggleState">
    <slot />
  </DropdownMenuRoot>
</template>
