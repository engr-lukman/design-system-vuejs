<script setup lang="ts">
type SpinnerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type SpinnerVariant = 'primary' | 'white' | 'neutral'

interface Props {
  size?: SpinnerSize
  variant?: SpinnerVariant
  label?: string
  overlay?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  variant: 'primary',
  label: 'Loading...',
  overlay: false,
})

const sizeClasses: Record<SpinnerSize, string> = {
  xs: 'h-4 w-4',
  sm: 'h-5 w-5',
  md: 'h-8 w-8',
  lg: 'h-12 w-12',
  xl: 'h-16 w-16',
}

const variantClasses: Record<SpinnerVariant, string> = {
  primary: 'text-blue-600',
  white: 'text-white',
  neutral: 'text-gray-400',
}
</script>

<template>
  <div
    v-if="overlay"
    class="fixed inset-0 z-50 flex items-center justify-center bg-white/80"
    role="status"
    :aria-label="label"
  >
    <div class="flex flex-col items-center gap-3">
      <svg
        :class="['animate-spin', sizeClasses[size], variantClasses[variant]]"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        />
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
        />
      </svg>
      <span
        v-if="label"
        class="text-sm text-gray-600"
      >{{ label }}</span>
    </div>
  </div>
  <div
    v-else
    class="inline-flex items-center gap-2"
    role="status"
    :aria-label="label"
  >
    <svg
      :class="['animate-spin', sizeClasses[size], variantClasses[variant]]"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      />
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
    <span
      v-if="$slots.default"
      class="text-sm text-gray-600"
    >
      <slot />
    </span>
  </div>
</template>
