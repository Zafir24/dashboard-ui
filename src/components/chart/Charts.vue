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
  <div>
    <VueApexCharts :type="type" :height="height" :options="options" :series="series" />
  </div>
</template>
