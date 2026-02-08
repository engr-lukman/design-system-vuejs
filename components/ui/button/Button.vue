<script setup lang="ts">
import { computed } from 'vue'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
type ButtonSize = 'sm' | 'md' | 'lg'

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
  primary: 'bg-primary-600 text-white hover:bg-primary-700 focus-visible:ring-primary-500',
  secondary: 'bg-neutral-200 text-neutral-800 hover:bg-neutral-300 focus-visible:ring-neutral-400',
  outline:
    'border border-primary-600 text-primary-600 hover:bg-primary-50 focus-visible:ring-primary-500',
  ghost: 'text-neutral-700 hover:bg-neutral-100 focus-visible:ring-neutral-400',
  danger: 'bg-danger-600 text-white hover:bg-danger-700 focus-visible:ring-danger-500',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
}

const classes = computed(() => [
  'inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-150',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
  'disabled:opacity-50 disabled:cursor-not-allowed',
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
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
    <slot />
  </button>
</template>
