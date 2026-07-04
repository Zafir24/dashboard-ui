<script setup lang="ts">
import {
  tableCellVariants,
  tableHeaderCellVariants,
  tableRowVariants,
  tableVariants,
  tableWrapperVariants,
} from '.'

type TableCellValue = string | number

withDefaults(
  defineProps<{
    headers?: string[]
    rows?: TableCellValue[][]
    caption?: string
  }>(),
  {
    headers: () => [],
    rows: () => [],
    caption: '',
  },
)
</script>

<template>
  <div :class="tableWrapperVariants()">
    <table :class="tableVariants()">
      <caption v-if="caption" class="px-4 py-3 text-left text-sm font-medium text-gray-700">
        {{
          caption
        }}
      </caption>

      <thead v-if="headers.length">
        <tr class="border-b border-gray-200">
          <th
            v-for="header in headers"
            :key="header"
            scope="col"
            :class="tableHeaderCellVariants()"
          >
            {{ header }}
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(row, rowIndex) in rows" :key="rowIndex" :class="tableRowVariants()">
          <slot name="row" :row="row" :row-index="rowIndex">
            <td
              v-for="(cell, cellIndex) in row"
              :key="`${rowIndex}-${cellIndex}`"
              :class="tableCellVariants()"
            >
              <slot
                name="cell"
                :value="cell"
                :row="row"
                :row-index="rowIndex"
                :cell-index="cellIndex"
              >
                {{ cell }}
              </slot>
            </td>
          </slot>
        </tr>

        <tr v-if="!rows.length" :class="tableRowVariants()">
          <td :class="tableCellVariants()" :colspan="headers.length || 1">No data available.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
