<script setup lang="ts">
import { computed } from 'vue'
import type { SkeletonVariant } from './types'

interface Props {
  variant?: SkeletonVariant
  width?: string
  height?: string
  lines?: number
  animate?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'text',
  width: '100%',
  height: '',
  lines: 1,
  animate: true,
})

const baseClasses = computed(() => ['bg-gray-200', props.animate && 'animate-pulse'])

const variantStyle = computed(() => {
  switch (props.variant) {
    case 'circular':
      return 'rounded-full aspect-square'
    case 'rectangular':
      return ''
    case 'rounded':
      return 'rounded-lg'
    case 'text':
    default:
      return 'rounded'
  }
})

const defaultHeight = computed(() => {
  if (props.height) return props.height
  switch (props.variant) {
    case 'circular':
      return props.width
    case 'text':
      return '1rem'
    default:
      return '100px'
  }
})
</script>

<template>
  <div
    v-if="variant === 'text' && lines > 1"
    class="flex flex-col gap-2"
    :style="{ width }"
  >
    <div
      v-for="n in lines"
      :key="n"
      :class="[...baseClasses, variantStyle]"
      :style="{
        width: n === lines ? '75%' : '100%',
        height: defaultHeight,
      }"
    />
  </div>
  <div
    v-else
    :class="[...baseClasses, variantStyle]"
    :style="{ width, height: defaultHeight }"
  />
</template>
