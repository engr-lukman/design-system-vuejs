<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

type PopoverAlign = 'start' | 'center' | 'end'
type PopoverSide = 'top' | 'bottom' | 'left' | 'right'

interface Props {
  side?: PopoverSide
  align?: PopoverAlign
  width?: string
}

const props = withDefaults(defineProps<Props>(), {
  side: 'bottom',
  align: 'center',
  width: '320px',
})

const isOpen = ref(false)
const containerRef = ref<HTMLElement | null>(null)

function toggle() {
  isOpen.value = !isOpen.value
}

function close() {
  isOpen.value = false
}

function onClickOutside(event: MouseEvent) {
  if (containerRef.value && !containerRef.value.contains(event.target as Node)) {
    close()
  }
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') close()
}

onMounted(() => {
  document.addEventListener('mousedown', onClickOutside)
  document.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  document.removeEventListener('mousedown', onClickOutside)
  document.removeEventListener('keydown', onKeydown)
})

const positionClasses: Record<PopoverSide, string> = {
  top: 'bottom-full mb-2',
  bottom: 'top-full mt-2',
  left: 'right-full mr-2 top-0',
  right: 'left-full ml-2 top-0',
}

const alignClasses: Record<string, Record<PopoverAlign, string>> = {
  vertical: { start: 'left-0', center: 'left-1/2 -translate-x-1/2', end: 'right-0' },
  horizontal: { start: 'top-0', center: 'top-1/2 -translate-y-1/2', end: 'bottom-0' },
}

function getPositionClasses() {
  const isVertical = props.side === 'top' || props.side === 'bottom'
  return [
    positionClasses[props.side],
    isVertical ? alignClasses.vertical[props.align] : alignClasses.horizontal[props.align],
  ]
}
</script>

<template>
  <div
    ref="containerRef"
    class="relative inline-block"
  >
    <div @click="toggle">
      <slot name="trigger" />
    </div>

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
        :class="[
          'absolute z-50 rounded-md border border-gray-200 bg-white p-4 shadow-md',
          ...getPositionClasses(),
        ]"
        :style="{ width }"
      >
        <slot />
      </div>
    </Transition>
  </div>
</template>
