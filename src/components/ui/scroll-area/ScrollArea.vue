<script setup lang="ts">
import type { ScrollAreaSize } from './types'

interface Props {
  maxHeight?: string
  size?: ScrollAreaSize
}

withDefaults(defineProps<Props>(), {
  maxHeight: '300px',
  size: 'md',
})
</script>

<template>
  <div
    class="relative overflow-hidden rounded-lg"
    :style="{ maxHeight }"
  >
    <div
      :class="[
        'h-full overflow-y-auto',
        'scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent hover:scrollbar-thumb-gray-400',
        '[&::-webkit-scrollbar]:w-2',
        '[&::-webkit-scrollbar-track]:bg-transparent',
        '[&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300',
        '[&::-webkit-scrollbar-thumb]:hover:bg-gray-400',
      ]"
    >
      <slot />
    </div>
  </div>
</template>
