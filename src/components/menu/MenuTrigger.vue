<script setup lang="ts">
import { DropdownMenuTrigger } from 'reka-ui'
</script>
<template>
  <DropdownMenuTrigger
    class="rounded-full w-10 h-10 inline-flex items-center justify-center text-gray-500 bg-white outline-none hover:bg-stone-50"
  >
    <slot />
  </DropdownMenuTrigger>
</template>
