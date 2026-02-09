<script setup lang="ts">
import { computed } from 'vue'
import type { SpinnerSize, SpinnerVariant } from './types'

interface Props {
  size?: SpinnerSize
  variant?: SpinnerVariant
  label?: string
  overlay?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  variant: 'default',
  label: '',
  overlay: false,
})

const sizeClasses: Record<SpinnerSize, string> = {
  xs: 'h-3 w-3',
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-8 w-8',
  xl: 'h-12 w-12',
}

const variantClasses: Record<SpinnerVariant, string> = {
  default: 'text-gray-900',
  primary: 'text-gray-900',
  secondary: 'text-gray-500',
  danger: 'text-red-500',
  success: 'text-green-600',
}

const trackClasses: Record<SpinnerVariant, string> = {
  default: 'text-gray-200',
  primary: 'text-gray-200',
  secondary: 'text-gray-200',
  danger: 'text-red-200',
  success: 'text-green-200',
}

const labelSizes: Record<SpinnerSize, string> = {
  xs: 'text-xs',
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-sm',
  xl: 'text-base',
}

const spinnerContent = computed(() => ({
  size: sizeClasses[props.size],
  color: variantClasses[props.variant],
  track: trackClasses[props.variant],
  labelSize: labelSizes[props.size],
}))
</script>

<template>
  <div
    v-if="overlay"
    class="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/50"
    role="status"
    :aria-label="label || 'Loading'"
  >
    <div class="flex flex-col items-center gap-3 rounded-lg bg-white p-6 shadow-lg">
      <svg
        :class="['animate-spin', spinnerContent.size]"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle
          :class="spinnerContent.track"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        />
        <path
          :class="spinnerContent.color"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
        />
      </svg>
      <span
        v-if="label"
        :class="['font-medium text-gray-700', spinnerContent.labelSize]"
      >
        {{ label }}
      </span>
    </div>
  </div>

  <div
    v-else
    class="inline-flex items-center gap-2"
    role="status"
    :aria-label="label || 'Loading'"
  >
    <svg
      :class="['animate-spin', spinnerContent.size]"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        :class="spinnerContent.track"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      />
      <path
        :class="spinnerContent.color"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
    <span
      v-if="label"
      :class="['text-gray-700', spinnerContent.labelSize]"
    >
      {{ label }}
    </span>
  </div>
</template>
