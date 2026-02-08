<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  totalItems: number
  currentPage: number
  perPage?: number
  maxVisible?: number
}

const props = withDefaults(defineProps<Props>(), {
  perPage: 10,
  maxVisible: 5,
})

const emit = defineEmits<{
  (e: 'update:currentPage', page: number): void
}>()

const totalPages = computed(() => Math.max(1, Math.ceil(props.totalItems / props.perPage)))
const isFirstPage = computed(() => props.currentPage === 1)
const isLastPage = computed(() => props.currentPage === totalPages.value)

const visiblePages = computed(() => {
  const total = totalPages.value
  const current = props.currentPage
  const max = props.maxVisible

  if (total <= max) {
    return Array.from({ length: total }, (_, i) => i + 1)
  }

  const half = Math.floor(max / 2)
  let start = Math.max(1, current - half)
  let end = start + max - 1

  if (end > total) {
    end = total
    start = Math.max(1, end - max + 1)
  }

  const pages: (number | 'ellipsis-start' | 'ellipsis-end')[] = []

  if (start > 1) {
    pages.push(1)
    if (start > 2) pages.push('ellipsis-start')
  }

  for (let i = start; i <= end; i++) {
    if (!pages.includes(i)) pages.push(i)
  }

  if (end < total) {
    if (end < total - 1) pages.push('ellipsis-end')
    if (!pages.includes(total)) pages.push(total)
  }

  return pages
})

const startItem = computed(() => (props.currentPage - 1) * props.perPage + 1)
const endItem = computed(() => Math.min(props.currentPage * props.perPage, props.totalItems))

function goTo(page: number) {
  if (page >= 1 && page <= totalPages.value && page !== props.currentPage) {
    emit('update:currentPage', page)
  }
}
</script>

<template>
  <nav
    class="flex flex-col items-center gap-3 sm:flex-row sm:justify-between"
    aria-label="Pagination"
  >
    <p class="text-sm text-neutral-600">
      Showing <span class="font-medium">{{ startItem }}</span> to
      <span class="font-medium">{{ endItem }}</span> of
      <span class="font-medium">{{ totalItems }}</span> results
    </p>

    <div class="flex items-center gap-1">
      <!-- Previous -->
      <button
        type="button"
        :disabled="isFirstPage"
        class="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-300 text-neutral-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed hover:bg-neutral-50"
        aria-label="Previous page"
        @click="goTo(currentPage - 1)"
      >
        <svg
          class="h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>

      <!-- Pages -->
      <template v-for="page in visiblePages" :key="page">
        <span
          v-if="page === 'ellipsis-start' || page === 'ellipsis-end'"
          class="inline-flex h-9 w-9 items-center justify-center text-sm text-neutral-400"
        >
          &hellip;
        </span>
        <button
          v-else
          type="button"
          :class="[
            'inline-flex h-9 w-9 items-center justify-center rounded-lg text-sm font-medium transition-colors',
            page === currentPage
              ? 'bg-primary-600 text-white'
              : 'border border-neutral-300 text-neutral-700 hover:bg-neutral-50',
          ]"
          :aria-current="page === currentPage ? 'page' : undefined"
          @click="goTo(page as number)"
        >
          {{ page }}
        </button>
      </template>

      <!-- Next -->
      <button
        type="button"
        :disabled="isLastPage"
        class="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-300 text-neutral-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed hover:bg-neutral-50"
        aria-label="Next page"
        @click="goTo(currentPage + 1)"
      >
        <svg
          class="h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  </nav>
</template>
