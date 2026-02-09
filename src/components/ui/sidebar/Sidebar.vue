<script setup lang="ts">
import { ref } from 'vue'
import type { SidebarItem, SidebarSection } from './types'

interface Props {
  sections: SidebarSection[]
  collapsed?: boolean
  width?: string
  collapsedWidth?: string
}

const props = withDefaults(defineProps<Props>(), {
  collapsed: false,
  width: '256px',
  collapsedWidth: '64px',
})

const emit = defineEmits<{
  (e: 'navigate', item: SidebarItem): void
  (e: 'update:collapsed', value: boolean): void
}>()

const expandedItems = ref<Set<string>>(new Set())

function toggleExpand(value: string) {
  if (expandedItems.value.has(value)) {
    expandedItems.value.delete(value)
  } else {
    expandedItems.value.add(value)
  }
}

function navigate(item: SidebarItem) {
  emit('navigate', item)
}

function toggleCollapse() {
  emit('update:collapsed', !props.collapsed)
}
</script>

<template>
  <aside
    class="flex h-full flex-col border-r border-gray-200 bg-white transition-all duration-200"
    :style="{ width: collapsed ? collapsedWidth : width }"
  >
    <!-- Header -->
    <div class="flex items-center justify-between border-b border-gray-200 p-4">
      <slot
        name="header"
        :collapsed="collapsed"
      >
        <span
          v-if="!collapsed"
          class="text-sm font-semibold text-gray-900"
        > Menu </span>
      </slot>
      <button
        type="button"
        class="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
        aria-label="Toggle sidebar"
        @click="toggleCollapse"
      >
        <svg
          :class="['h-4 w-4 transition-transform', collapsed && 'rotate-180']"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.56 10l3.22 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>

    <!-- Sections -->
    <nav class="flex-1 overflow-y-auto p-2">
      <div
        v-for="(section, sIndex) in sections"
        :key="sIndex"
        :class="sIndex > 0 && 'mt-4'"
      >
        <p
          v-if="section.title && !collapsed"
          class="mb-1 px-3 text-xs font-medium tracking-wider text-gray-400 uppercase"
        >
          {{ section.title }}
        </p>

        <ul class="space-y-0.5">
          <li
            v-for="item in section.items"
            :key="item.value"
          >
            <!-- Parent item -->
            <button
              type="button"
              :class="[
                'flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors',
                item.active
                  ? 'bg-gray-100 font-medium text-gray-900'
                  : 'text-gray-700 hover:bg-gray-100',
                collapsed && 'justify-center',
              ]"
              :title="collapsed ? item.label : undefined"
              @click="item.children ? toggleExpand(item.value) : navigate(item)"
            >
              <!-- Icon slot by value -->
              <slot
                :name="`icon-${item.value}`"
                :item="item"
              >
                <span class="h-4 w-4 shrink-0 rounded bg-gray-200" />
              </slot>

              <template v-if="!collapsed">
                <span class="flex-1 truncate text-left">{{ item.label }}</span>

                <span
                  v-if="item.badge"
                  class="rounded-full bg-gray-100 px-1.5 py-0.5 text-xs font-medium text-gray-700"
                >
                  {{ item.badge }}
                </span>

                <svg
                  v-if="item.children"
                  :class="[
                    'h-3.5 w-3.5 shrink-0 transition-transform',
                    expandedItems.has(item.value) && 'rotate-90',
                  ]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.44 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </template>
            </button>

            <!-- Children -->
            <ul
              v-if="item.children && expandedItems.has(item.value) && !collapsed"
              class="mt-0.5 ml-6 space-y-0.5 border-l border-gray-200 pl-3"
            >
              <li
                v-for="child in item.children"
                :key="child.value"
              >
                <button
                  type="button"
                  :class="[
                    'flex w-full items-center gap-2 rounded-lg px-3 py-1.5 text-sm transition-colors',
                    child.active
                      ? 'font-medium text-gray-900'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900',
                  ]"
                  @click="navigate(child)"
                >
                  {{ child.label }}
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Footer -->
    <div
      v-if="$slots.footer"
      class="border-t border-gray-200 p-4"
    >
      <slot
        name="footer"
        :collapsed="collapsed"
      />
    </div>
  </aside>
</template>
