<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import type { NavMenuItem } from './types'

interface Props {
  items: NavMenuItem[]
}

defineProps<Props>()

const emit = defineEmits<{
  (e: 'navigate', href: string): void
}>()

const openMenu = ref<string | null>(null)
let closeTimer: ReturnType<typeof setTimeout> | null = null

function openDropdown(label: string) {
  if (closeTimer) {
    clearTimeout(closeTimer)
    closeTimer = null
  }
  openMenu.value = label
}

function scheduleClose() {
  closeTimer = setTimeout(() => {
    openMenu.value = null
  }, 150)
}

function navigate(href: string) {
  emit('navigate', href)
  openMenu.value = null
}

function onClickOutside() {
  openMenu.value = null
}

onMounted(() => {
  document.addEventListener('click', onClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', onClickOutside)
  if (closeTimer) clearTimeout(closeTimer)
})
</script>

<template>
  <nav
    class="flex items-center gap-1"
    @click.stop
  >
    <div
      v-for="item in items"
      :key="item.label"
      class="relative"
      @mouseenter="item.children && openDropdown(item.label)"
      @mouseleave="scheduleClose"
    >
      <!-- Trigger -->
      <button
        v-if="item.children"
        type="button"
        :class="[
          'flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
          item.active || openMenu === item.label
            ? 'bg-gray-100 text-gray-900'
            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
        ]"
        @click="openDropdown(item.label)"
      >
        {{ item.label }}
        <svg
          :class="['h-3.5 w-3.5 transition-transform', openMenu === item.label && 'rotate-180']"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>

      <a
        v-else
        :href="item.href || '#'"
        :class="[
          'block rounded-lg px-3 py-2 text-sm font-medium transition-colors',
          item.active
            ? 'bg-gray-100 text-gray-900'
            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
        ]"
        @click.prevent="navigate(item.href || '#')"
      >
        {{ item.label }}
      </a>

      <!-- Dropdown -->
      <Transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="scale-95 opacity-0"
        enter-to-class="scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="scale-100 opacity-100"
        leave-to-class="scale-95 opacity-0"
      >
        <div
          v-if="openMenu === item.label && item.children?.length"
          class="absolute top-full left-0 z-50 mt-1 w-80 rounded-md border border-gray-200 bg-white p-3 shadow-md"
        >
          <a
            v-for="child in item.children"
            :key="child.href"
            :href="child.href"
            class="block rounded-lg p-3 transition-colors hover:bg-gray-50"
            @click.prevent="navigate(child.href)"
          >
            <div class="text-sm font-medium text-gray-900">
              {{ child.label }}
            </div>
            <p
              v-if="child.description"
              class="mt-0.5 text-xs text-gray-500"
            >
              {{ child.description }}
            </p>
          </a>
        </div>
      </Transition>
    </div>
  </nav>
</template>
