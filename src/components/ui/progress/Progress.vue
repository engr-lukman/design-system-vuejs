<script setup lang="ts">
import { computed } from 'vue'

type ProgressSize = 'sm' | 'md' | 'lg'
type ProgressVariant = 'default' | 'success' | 'warning' | 'danger'

interface Props {
  value?: number
  max?: number
  size?: ProgressSize
  variant?: ProgressVariant
  showValue?: boolean
  indeterminate?: boolean
  label?: string
}

const props = withDefaults(defineProps<Props>(), {
  value: 0,
  max: 100,
  size: 'md',
  variant: 'default',
  showValue: false,
  indeterminate: false,
  label: '',
})

const percentage = computed(() => Math.min(100, Math.max(0, (props.value / props.max) * 100)))

const trackSizes: Record<ProgressSize, string> = {
  sm: 'h-1.5',
  md: 'h-2.5',
  lg: 'h-4',
}

const barColors: Record<ProgressVariant, string> = {
  default: 'bg-blue-600',
  success: 'bg-green-600',
  warning: 'bg-amber-500',
  danger: 'bg-red-600',
}
</script>

<template>
  <div class="w-full">
    <div
      v-if="label || showValue"
      class="mb-1.5 flex items-center justify-between"
    >
      <span
        v-if="label"
        class="text-sm font-medium text-gray-700"
      >
        {{ label }}
      </span>
      <span
        v-if="showValue && !indeterminate"
        class="text-sm text-gray-500 tabular-nums"
      >
        {{ Math.round(percentage) }}%
      </span>
    </div>
    <div
      :class="['w-full overflow-hidden rounded-full bg-gray-200', trackSizes[size]]"
      role="progressbar"
      :aria-valuenow="indeterminate ? undefined : value"
      :aria-valuemin="0"
      :aria-valuemax="max"
      :aria-label="label || 'Progress'"
    >
      <div
        :class="[
          'rounded-full transition-all duration-300',
          trackSizes[size],
          barColors[variant],
          indeterminate && 'animate-indeterminate w-1/3',
        ]"
        :style="indeterminate ? undefined : { width: `${percentage}%` }"
      />
    </div>
  </div>
</template>

<style scoped>
@keyframes indeterminate {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(400%);
  }
}

.animate-indeterminate {
  animation: indeterminate 1.5s ease-in-out infinite;
}
</style>
