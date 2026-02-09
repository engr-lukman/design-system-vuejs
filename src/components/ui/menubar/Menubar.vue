<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import type { MenubarDropdownItem, MenubarItem } from './types'

interface Props {
  items: MenubarItem[]
}

defineProps<Props>()

const emit = defineEmits<{
  (e: 'select', item: MenubarDropdownItem): void
}>()

const openMenu = ref<string | null>(null)

function toggleMenu(value: string) {
  openMenu.value = openMenu.value === value ? null : value
}

function enterMenu(value: string) {
  if (openMenu.value !== null) {
    openMenu.value = value
  }
}

function selectItem(item: MenubarDropdownItem) {
  if (item.disabled || item.separator) return
  emit('select', item)
  openMenu.value = null
}

function onClickOutside() {
  openMenu.value = null
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') openMenu.value = null
}

onMounted(() => {
  document.addEventListener('click', onClickOutside)
  document.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', onClickOutside)
  document.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <div
    class="flex items-center rounded-lg border border-gray-200 bg-white p-1"
    role="menubar"
    @click.stop
  >
    <div
      v-for="menu in items"
      :key="menu.value"
      class="relative"
    >
      <button
        type="button"
        role="menuitem"
        :class="[
          'rounded-md px-3 py-1.5 text-sm font-medium transition-colors',
          openMenu === menu.value
            ? 'bg-gray-100 text-gray-900'
            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
        ]"
        @click="toggleMenu(menu.value)"
        @mouseenter="enterMenu(menu.value)"
      >
        {{ menu.label }}
      </button>

      <Transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="scale-95 opacity-0"
        enter-to-class="scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="scale-100 opacity-100"
        leave-to-class="scale-95 opacity-0"
      >
        <div
          v-if="openMenu === menu.value && menu.items?.length"
          class="absolute top-full left-0 z-50 mt-1 min-w-[180px] rounded-md border border-gray-200 bg-white py-1 shadow-md"
          role="menu"
        >
          <template
            v-for="item in menu.items"
            :key="item.value"
          >
            <div
              v-if="item.separator"
              class="my-1 border-t border-gray-200"
              role="separator"
            />
            <button
              v-else
              type="button"
              role="menuitem"
              :disabled="item.disabled"
              :class="[
                'flex w-full items-center justify-between px-3 py-1.5 text-left text-sm transition-colors',
                item.disabled
                  ? 'cursor-not-allowed text-gray-400'
                  : 'text-gray-700 hover:bg-gray-100',
              ]"
              @click="selectItem(item)"
            >
              <span>{{ item.label }}</span>
              <kbd
                v-if="item.shortcut"
                class="text-xs text-gray-400"
              >
                {{ item.shortcut }}
              </kbd>
            </button>
          </template>
        </div>
      </Transition>
    </div>
  </div>
</template>
