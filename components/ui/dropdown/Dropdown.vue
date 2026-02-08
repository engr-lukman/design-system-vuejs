<script setup lang="ts">
import { onUnmounted, ref, watch } from 'vue'
import type { DropdownItem } from './types'

interface Props {
  items: DropdownItem[]
  align?: 'left' | 'right'
  width?: 'auto' | 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  align: 'left',
  width: 'auto',
})

const emit = defineEmits<{
  (e: 'select', item: DropdownItem): void
}>()

const open = ref(false)
const triggerRef = ref<HTMLElement>()

const widthClasses: Record<string, string> = {
  auto: 'min-w-[160px]',
  sm: 'w-40',
  md: 'w-56',
  lg: 'w-72',
}

function toggle() {
  open.value = !open.value
}

function close() {
  open.value = false
}

function selectItem(item: DropdownItem) {
  if (item.disabled) return
  emit('select', item)
  close()
}

function onClickOutside(event: MouseEvent) {
  const target = event.target as Node
  if (triggerRef.value && !triggerRef.value.contains(target)) {
    close()
  }
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') close()
}

watch(open, (isOpen) => {
  if (isOpen) {
    document.addEventListener('click', onClickOutside)
    document.addEventListener('keydown', onKeydown)
  } else {
    document.removeEventListener('click', onClickOutside)
    document.removeEventListener('keydown', onKeydown)
  }
})

onUnmounted(() => {
  document.removeEventListener('click', onClickOutside)
  document.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <div ref="triggerRef" class="relative inline-block">
    <div @click="toggle">
      <slot name="trigger">
        <button
          type="button"
          class="focus-visible:ring-primary-500 rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50 focus-visible:ring-2 focus-visible:outline-none"
        >
          Actions
          <svg
            class="ml-1 inline-block h-4 w-4"
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
      </slot>
    </div>

    <Transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="open"
        :class="[
          'absolute z-50 mt-1 rounded-lg border border-neutral-200 bg-white py-1 shadow-lg',
          widthClasses[width],
          align === 'right' ? 'right-0' : 'left-0',
        ]"
        role="menu"
      >
        <template v-for="item in items" :key="item.key">
          <div v-if="item.separator" class="my-1 border-t border-neutral-200" role="separator" />
          <button
            v-else
            type="button"
            role="menuitem"
            :disabled="item.disabled"
            :class="[
              'flex w-full items-center px-3 py-2 text-left text-sm transition-colors',
              item.disabled
                ? 'cursor-not-allowed text-neutral-400'
                : item.danger
                  ? 'text-danger-600 hover:bg-danger-50'
                  : 'text-neutral-700 hover:bg-neutral-100',
            ]"
            @click="selectItem(item)"
          >
            {{ item.label }}
          </button>
        </template>
      </div>
    </Transition>
  </div>
</template>
