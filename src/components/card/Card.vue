<script setup lang="ts">
import { ArrowUp, ArrowDown } from '@lucide/vue'
const props = withDefaults(
  defineProps<{
    title?: string
    value?: string
    leading?: string
    up?: string
    down?: string
    upIcon?: boolean
    downIcon?: boolean
  }>(),
  {
    upIcon: false,
    downIcon: false,
  },
)
</script>
<template>
  <div class="w-60 border rounded-lg border-gray-300 pt-6 pb-4 px-6 shadow-lg">
    <div class="flex gap-6">
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
        <li class="text-sm flex items-center">
          <span
            v-if="props.up"
            class="inline-flex items-center text-green-600"
          >
            <ArrowUp :size="14" />
            <span>{{props.up}}</span>
            <span v-if="props.upIcon">Icon</span>
          </span>
          <span
            v-if="props.down"
            class="inline-flex items-center text-red-600"
          >
            <ArrowDown :size="14" />
            <span>{{props.down}}</span>
            <span v-if="props.downIcon">Icon</span>
          </span>
          <span
            v-if="props.leading"
            class="text-gray-400 ml-1"
          >{{ props.leading }}</span>
        </li>
      </ul>


    </div>

    <div class="w-full">
      <slot name="chart" />
    </div>
  </div>
</template>
