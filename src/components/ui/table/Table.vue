<script setup lang="ts">
import type { TableColumn } from './types'

interface Props {
  columns: TableColumn[]
  data: Record<string, unknown>[]
  striped?: boolean
  hoverable?: boolean
  bordered?: boolean
  compact?: boolean
}

withDefaults(defineProps<Props>(), {
  striped: false,
  hoverable: true,
  bordered: false,
  compact: false,
})

const alignClass: Record<string, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
}
</script>

<template>
  <div class="w-full overflow-x-auto rounded-lg border border-gray-200">
    <table class="w-full text-left text-sm text-gray-700">
      <thead
        class="border-b border-gray-200 bg-gray-50 text-xs font-medium tracking-wider text-gray-500 uppercase"
      >
        <tr>
          <th
            v-for="col in columns"
            :key="col.key"
            :class="[compact ? 'px-4 py-2' : 'px-6 py-3', alignClass[col.align || 'left']]"
            :style="col.width ? { width: col.width } : {}"
          >
            <slot
              :name="`header-${col.key}`"
              :column="col"
            >
              {{ col.label }}
            </slot>
          </th>
        </tr>
      </thead>
      <tbody :class="bordered ? 'divide-y divide-gray-200' : ''">
        <tr
          v-for="(row, index) in data"
          :key="index"
          :class="[
            hoverable && 'hover:bg-gray-50',
            striped && index % 2 === 1 && 'bg-gray-50/50',
            bordered && 'border-b border-gray-200 last:border-b-0',
          ]"
        >
          <td
            v-for="col in columns"
            :key="col.key"
            :class="[compact ? 'px-4 py-2' : 'px-6 py-4', alignClass[col.align || 'left']]"
          >
            <slot
              :name="`cell-${col.key}`"
              :row="row"
              :value="row[col.key]"
            >
              {{ row[col.key] }}
            </slot>
          </td>
        </tr>
        <tr v-if="data.length === 0">
          <td
            :colspan="columns.length"
            class="px-6 py-12 text-center text-gray-400"
          >
            <slot name="empty">
              No data available
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
