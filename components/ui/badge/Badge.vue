<script setup lang="ts">
import { computed } from 'vue'

type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'
type BadgeSize = 'sm' | 'md' | 'lg'

interface Props {
  variant?: BadgeVariant
  size?: BadgeSize
  rounded?: boolean
  dot?: boolean
  removable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  rounded: false,
  dot: false,
  removable: false,
})

defineEmits<{
  (e: 'remove'): void
}>()

const variantClasses: Record<BadgeVariant, string> = {
  primary: 'bg-primary-100 text-primary-700',
  secondary: 'bg-neutral-100 text-neutral-700',
  success: 'bg-success-100 text-success-700',
  warning: 'bg-warning-100 text-warning-700',
  danger: 'bg-danger-100 text-danger-700',
  info: 'bg-info-100 text-info-700',
}

const dotColors: Record<BadgeVariant, string> = {
  primary: 'bg-primary-500',
  secondary: 'bg-neutral-500',
  success: 'bg-success-500',
  warning: 'bg-warning-500',
  danger: 'bg-danger-500',
  info: 'bg-info-500',
}

const sizeClasses: Record<BadgeSize, string> = {
  sm: 'px-1.5 py-0.5 text-xs',
  md: 'px-2 py-0.5 text-xs',
  lg: 'px-2.5 py-1 text-sm',
}

const classes = computed(() => [
  'inline-flex items-center gap-1 font-medium',
  variantClasses[props.variant],
  sizeClasses[props.size],
  props.rounded ? 'rounded-full' : 'rounded',
])
</script>

<template>
  <span :class="classes">
    <span
      v-if="dot"
      :class="['inline-block h-1.5 w-1.5 rounded-full', dotColors[variant]]"
      aria-hidden="true"
    />
    <slot />
    <button
      v-if="removable"
      type="button"
      class="-mr-0.5 ml-0.5 inline-flex h-3.5 w-3.5 items-center justify-center rounded-full hover:bg-black/10 focus-visible:outline-none"
      aria-label="Remove"
      @click="$emit('remove')"
    >
      <svg
        class="h-3 w-3"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"
        />
      </svg>
    </button>
  </span>
</template>
