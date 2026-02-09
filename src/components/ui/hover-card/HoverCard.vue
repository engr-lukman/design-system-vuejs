<script setup lang="ts">
import { ref } from 'vue'

type HoverCardSide = 'top' | 'bottom'
type HoverCardAlign = 'start' | 'center' | 'end'

interface Props {
  side?: HoverCardSide
  align?: HoverCardAlign
  openDelay?: number
  closeDelay?: number
  width?: string
}

const props = withDefaults(defineProps<Props>(), {
  side: 'bottom',
  align: 'center',
  openDelay: 200,
  closeDelay: 150,
  width: '320px',
})

const isOpen = ref(false)
let openTimer: ReturnType<typeof setTimeout> | null = null
let closeTimer: ReturnType<typeof setTimeout> | null = null

function onMouseEnter() {
  if (closeTimer) {
    clearTimeout(closeTimer)
    closeTimer = null
  }
  openTimer = setTimeout(() => {
    isOpen.value = true
  }, props.openDelay)
}

function onMouseLeave() {
  if (openTimer) {
    clearTimeout(openTimer)
    openTimer = null
  }
  closeTimer = setTimeout(() => {
    isOpen.value = false
  }, props.closeDelay)
}

const positionClasses: Record<HoverCardSide, string> = {
  top: 'bottom-full mb-2',
  bottom: 'top-full mt-2',
}

const alignClasses: Record<HoverCardAlign, string> = {
  start: 'left-0',
  center: 'left-1/2 -translate-x-1/2',
  end: 'right-0',
}
</script>

<template>
  <div
    class="relative inline-block"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <slot name="trigger" />

    <Transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="scale-95 opacity-0"
      enter-to-class="scale-100 opacity-100"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="scale-100 opacity-100"
      leave-to-class="scale-95 opacity-0"
    >
      <div
        v-if="isOpen"
        :class="[
          'absolute z-50 rounded-md border border-gray-200 bg-white p-4 shadow-md',
          positionClasses[side],
          alignClasses[align],
        ]"
        :style="{ width }"
      >
        <slot />
      </div>
    </Transition>
  </div>
</template>
