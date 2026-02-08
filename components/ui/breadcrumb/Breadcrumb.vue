<script setup lang="ts">
import type { BreadcrumbItem } from './types'

interface Props {
  items: BreadcrumbItem[]
  separator?: 'slash' | 'chevron'
}

withDefaults(defineProps<Props>(), {
  separator: 'chevron',
})

defineEmits<{
  (e: 'navigate', item: BreadcrumbItem, index: number): void
}>()
</script>

<template>
  <nav aria-label="Breadcrumb">
    <ol class="flex flex-wrap items-center gap-1.5 text-sm">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="inline-flex items-center gap-1.5"
      >
        <!-- Separator -->
        <span
          v-if="index > 0"
          class="text-gray-400"
          aria-hidden="true"
        >
          <svg
            v-if="separator === 'chevron'"
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
          <span v-else>/</span>
        </span>

        <!-- Link or current page -->
        <a
          v-if="item.href && !item.active"
          :href="item.href"
          class="text-gray-500 transition-colors hover:text-gray-700"
          @click.prevent="$emit('navigate', item, index)"
        >
          {{ item.label }}
        </a>
        <span
          v-else
          :class="item.active ? 'font-medium text-gray-900' : 'text-gray-500'"
          :aria-current="item.active ? 'page' : undefined"
        >
          {{ item.label }}
        </span>
      </li>
    </ol>
  </nav>
</template>
