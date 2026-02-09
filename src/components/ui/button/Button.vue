<script setup lang="ts">
import { computed } from 'vue'
import type { ButtonSize, ButtonVariant } from './types'

interface Props {
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  loading?: boolean
  type?: 'button' | 'submit' | 'reset'
  fullWidth?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
  type: 'button',
  fullWidth: false,
})

defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-gray-900 text-white hover:bg-gray-900/90 focus-visible:ring-gray-950',
  secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-100/80 focus-visible:ring-gray-950',
  outline:
    'border border-gray-200 bg-white text-gray-900 hover:bg-gray-100 focus-visible:ring-gray-950',
  ghost: 'text-gray-700 hover:bg-gray-100 focus-visible:ring-gray-950',
  danger: 'bg-red-500 text-white hover:bg-red-500/90 focus-visible:ring-gray-950',
  link: 'text-gray-900 underline-offset-4 hover:underline bg-transparent',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-lg',
}

const classes = computed(() => [
  'inline-flex items-center justify-center font-medium rounded-md transition-colors duration-150',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
  'disabled:opacity-50 disabled:pointer-events-none',
  variantClasses[props.variant],
  sizeClasses[props.size],
  props.fullWidth ? 'w-full' : '',
])
</script>

<template>
  <button
    :type="type"
    :class="classes"
    :disabled="disabled || loading"
    @click="$emit('click', $event)"
  >
    <svg
      v-if="loading"
      class="mr-2 h-4 w-4 animate-spin"
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
    <slot />
  </button>
</template>
