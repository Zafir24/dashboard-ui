<script setup lang="ts">
import type { ApexAxisChartSeries, ApexOptions } from 'apexcharts'
import VueApexCharts from 'vue3-apexcharts'

withDefaults(
  defineProps<{
    type?: 'line' | 'area' | 'bar'
    height?: number | string
    options: ApexOptions
    series: ApexAxisChartSeries
  }>(),
  {
    type: 'line',
    height: 240,
  },
)
</script>

<template>
  <div class="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
    <VueApexCharts :type="type" :height="height" :options="options" :series="series" />
  </div>
</template>
