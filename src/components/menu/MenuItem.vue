<script setup lang="ts">
import { DropdownMenuItem } from 'reka-ui'
</script>

<template>
  <DropdownMenuItem
    class="cursor-pointer gap-2 group active:bg-purple-300 text-sm leading-none text-gray-500 rounded-[3px] flex items-center h-[35px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-gray-100 data-[disabled]:pointer-events-none data-[highlighted]:bg-purple-100 data-[highlighted]:text-purple-500"
  >
    <slot />
  </DropdownMenuItem>
</template>
