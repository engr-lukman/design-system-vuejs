<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import type { ContextMenuItem } from './types'

interface Props {
  items: ContextMenuItem[]
}

defineProps<Props>()

const emit = defineEmits<{
  (e: 'select', item: ContextMenuItem): void
}>()

const isOpen = ref(false)
const menuX = ref(0)
const menuY = ref(0)
const containerRef = ref<HTMLElement | null>(null)

function onContextMenu(event: MouseEvent) {
  event.preventDefault()
  menuX.value = event.clientX
  menuY.value = event.clientY
  isOpen.value = true
}

function close() {
  isOpen.value = false
}

function selectItem(item: ContextMenuItem) {
  if (item.disabled || item.separator) return
  emit('select', item)
  close()
}

function onClickOutside() {
  close()
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') close()
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
    ref="containerRef"
    @contextmenu="onContextMenu"
  >
    <slot />

    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="scale-95 opacity-0"
        enter-to-class="scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="scale-100 opacity-100"
        leave-to-class="scale-95 opacity-0"
      >
        <div
          v-if="isOpen"
          class="fixed z-50 min-w-[160px] rounded-md border border-gray-200 bg-white py-1 shadow-md"
          :style="{ left: `${menuX}px`, top: `${menuY}px` }"
          role="menu"
        >
          <template
            v-for="item in items"
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
                  : item.danger
                    ? 'text-red-600 hover:bg-red-50'
                    : 'text-gray-700 hover:bg-gray-100',
              ]"
              @click="selectItem(item)"
            >
              <span>{{ item.label }}</span>
              <span
                v-if="item.shortcut"
                class="ml-6 text-xs text-gray-400"
              >
                {{ item.shortcut }}
              </span>
            </button>
          </template>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>
