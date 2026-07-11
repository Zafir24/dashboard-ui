<script setup lang="ts">

const props = withDefaults(
  defineProps<{
    title?: string
    value?: string
    leading?: string
  }>(),
  {

  },
)
</script>
<template>
  <div class="w-fit border rounded border-gray-300 p-4">
    <div class="flex gap-4">
      <div>
        <slot name="icon" />
      </div>

      <ul class="flex-row gap-4">
        <li class="text-sm text-gray-500">
          {{ props.title }}
        </li>
        <li class="text-lg font-bold">
          {{ props.value }}
        </li>
        <li class="text-sm text-gray-400">
          {{ props.leading }}
        </li>
      </ul>


    </div>

    <div class="w-full">
      <slot name="chart" />
    </div>
  </div>
</template>
