<script setup lang="ts">
import { ref } from 'vue'
import type { AccordionItem } from './types'

interface Props {
  items: AccordionItem[]
  multiple?: boolean
  bordered?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  multiple: false,
  bordered: false,
})

const openItems = ref<Set<string>>(new Set())

function toggle(value: string) {
  if (openItems.value.has(value)) {
    openItems.value.delete(value)
  } else {
    if (!props.multiple) {
      openItems.value.clear()
    }
    openItems.value.add(value)
  }
  // Trigger reactivity
  openItems.value = new Set(openItems.value)
}

function isOpen(value: string): boolean {
  return openItems.value.has(value)
}
</script>

<template>
  <div
    :class="['w-full divide-y divide-gray-200', bordered && 'rounded-lg border border-gray-200']"
  >
    <div
      v-for="item in items"
      :key="item.value"
    >
      <button
        type="button"
        :disabled="item.disabled"
        :aria-expanded="isOpen(item.value)"
        :class="[
          'flex w-full items-center justify-between py-4 text-left text-sm font-medium transition-colors',
          bordered ? 'px-4' : '',
          item.disabled ? 'cursor-not-allowed text-gray-400' : 'text-gray-900 hover:text-gray-600',
        ]"
        @click="toggle(item.value)"
      >
        <span>{{ item.title }}</span>
        <svg
          :class="[
            'h-4 w-4 shrink-0 text-gray-500 transition-transform duration-200',
            isOpen(item.value) && 'rotate-180',
          ]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>

      <div
        :class="[
          'grid transition-all duration-200',
          isOpen(item.value) ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
        ]"
      >
        <div class="overflow-hidden">
          <div :class="['pb-4 text-sm text-gray-600', bordered ? 'px-4' : '']">
            <slot
              :name="item.value"
              :item="item"
            >
              {{ item.content }}
            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
