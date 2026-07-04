<script setup lang="ts">
import { DateRangePickerField } from 'reka-ui'
</script>

<template>
  <DateRangePickerField
    v-slot="{ segments }"
    class="flex select-none bg-white items-center rounded-lg text-center text-green10 border shadow-sm p-1 data-[invalid]:border-red-500"
  >
    <slot />
  </DateRangePickerField>
</template>
