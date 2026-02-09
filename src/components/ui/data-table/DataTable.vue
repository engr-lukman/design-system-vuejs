<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { DataTableColumn, SortDirection } from './types'

interface Props {
  columns: DataTableColumn[]
  data: Record<string, unknown>[]
  searchable?: boolean
  searchPlaceholder?: string
  pageSize?: number
  pageSizeOptions?: number[]
  striped?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  searchable: false,
  searchPlaceholder: 'Search...',
  pageSize: 10,
  pageSizeOptions: () => [10, 25, 50, 100],
  striped: false,
})

const emit = defineEmits<{
  (e: 'row-click', row: Record<string, unknown>): void
}>()

const searchQuery = ref('')
const sortKey = ref<string | null>(null)
const sortDir = ref<SortDirection>(null)
const currentPage = ref(1)
const perPage = ref(props.pageSize)

watch(
  () => props.pageSize,
  (val) => {
    perPage.value = val
  }
)

function changePageSize(size: number) {
  perPage.value = size
  currentPage.value = 1
}

function toggleSort(col: DataTableColumn) {
  if (!col.sortable) return
  if (sortKey.value !== col.key) {
    sortKey.value = col.key
    sortDir.value = 'asc'
  } else if (sortDir.value === 'asc') {
    sortDir.value = 'desc'
  } else {
    sortKey.value = null
    sortDir.value = null
  }
  currentPage.value = 1
}

const filteredData = computed(() => {
  if (!searchQuery.value) return props.data
  const q = searchQuery.value.toLowerCase()
  return props.data.filter((row) =>
    props.columns.some((col) => {
      if (col.filterable === false) return false
      const val = row[col.key]
      return val != null && String(val).toLowerCase().includes(q)
    })
  )
})

const sortedData = computed(() => {
  if (!sortKey.value || !sortDir.value) return filteredData.value
  const key = sortKey.value
  const dir = sortDir.value === 'asc' ? 1 : -1
  return [...filteredData.value].sort((a, b) => {
    const aVal = a[key]
    const bVal = b[key]
    if (aVal == null) return 1
    if (bVal == null) return -1
    if (typeof aVal === 'number' && typeof bVal === 'number') return (aVal - bVal) * dir
    return String(aVal).localeCompare(String(bVal)) * dir
  })
})

const totalPages = computed(() => Math.max(1, Math.ceil(sortedData.value.length / perPage.value)))
const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * perPage.value
  return sortedData.value.slice(start, start + perPage.value)
})

function goToPage(page: number) {
  currentPage.value = Math.max(1, Math.min(page, totalPages.value))
}

const alignClass: Record<string, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
}
</script>

<template>
  <div class="w-full space-y-4">
    <!-- Search -->
    <div
      v-if="searchable"
      class="relative"
    >
      <svg
        class="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.45 4.39l3.58 3.58a.75.75 0 1 1-1.06 1.06l-3.58-3.58A7 7 0 0 1 2 9Z"
          clip-rule="evenodd"
        />
      </svg>
      <input
        v-model="searchQuery"
        type="text"
        :placeholder="searchPlaceholder"
        class="w-full rounded-md border border-gray-300 py-2 pr-4 pl-10 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950"
        @input="currentPage = 1"
      >
    </div>

    <!-- Table -->
    <div class="overflow-x-auto rounded-lg border border-gray-200">
      <table class="w-full text-left text-sm text-gray-700">
        <thead
          class="border-b border-gray-200 bg-gray-50 text-xs font-medium tracking-wider text-gray-500 uppercase"
        >
          <tr>
            <th
              v-for="col in columns"
              :key="col.key"
              :class="[
                'px-6 py-3',
                alignClass[col.align || 'left'],
                col.sortable && 'cursor-pointer select-none hover:text-gray-700',
              ]"
              :style="col.width ? { width: col.width } : {}"
              @click="toggleSort(col)"
            >
              <div class="flex items-center gap-1">
                <slot
                  :name="`header-${col.key}`"
                  :column="col"
                >
                  {{ col.label }}
                </slot>
                <span
                  v-if="col.sortable"
                  class="text-gray-400"
                >
                  <svg
                    v-if="sortKey === col.key && sortDir === 'asc'"
                    class="h-3.5 w-3.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 3l7 7H3z" />
                  </svg>
                  <svg
                    v-else-if="sortKey === col.key && sortDir === 'desc'"
                    class="h-3.5 w-3.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 17l-7-7h14z" />
                  </svg>
                  <svg
                    v-else
                    class="h-3.5 w-3.5 opacity-40"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 3l5 5H5zm0 14l-5-5h10z" />
                  </svg>
                </span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <tr
            v-for="(row, index) in paginatedData"
            :key="index"
            :class="[
              'cursor-pointer hover:bg-gray-50',
              striped && index % 2 === 1 && 'bg-gray-50/50',
            ]"
            @click="emit('row-click', row)"
          >
            <td
              v-for="col in columns"
              :key="col.key"
              :class="['px-6 py-4', alignClass[col.align || 'left']]"
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
          <tr v-if="paginatedData.length === 0">
            <td
              :colspan="columns.length"
              class="px-6 py-12 text-center text-gray-400"
            >
              <slot name="empty">
                No results found
              </slot>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Pagination -->
    <div
      v-if="sortedData.length > 0"
      class="flex items-center justify-between text-sm text-gray-600"
    >
      <div class="flex items-center gap-2">
        <span>Rows per page</span>
        <select
          :value="perPage"
          class="rounded-md border border-gray-300 bg-white px-2 py-1 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950"
          @change="changePageSize(Number(($event.target as HTMLSelectElement).value))"
        >
          <option
            v-for="size in pageSizeOptions"
            :key="size"
            :value="size"
          >
            {{ size }}
          </option>
        </select>
        <span class="text-gray-500">
          {{ (currentPage - 1) * perPage + 1 }}-{{
            Math.min(currentPage * perPage, sortedData.length)
          }}
          of {{ sortedData.length }}
        </span>
      </div>
      <div
        v-if="totalPages > 1"
        class="flex items-center gap-1"
      >
        <button
          :disabled="currentPage === 1"
          class="rounded-md px-3 py-1.5 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
          @click="goToPage(currentPage - 1)"
        >
          Previous
        </button>
        <template
          v-for="page in totalPages"
          :key="page"
        >
          <button
            v-if="
              page === 1 ||
                page === totalPages ||
                (page >= currentPage - 1 && page <= currentPage + 1)
            "
            :class="[
              'rounded-md px-3 py-1.5',
              currentPage === page ? 'bg-gray-900 text-white' : 'hover:bg-gray-100',
            ]"
            @click="goToPage(page)"
          >
            {{ page }}
          </button>
          <span
            v-else-if="page === currentPage - 2 || page === currentPage + 2"
            class="px-1"
          >...</span>
        </template>
        <button
          :disabled="currentPage === totalPages"
          class="rounded-md px-3 py-1.5 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
          @click="goToPage(currentPage + 1)"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>
