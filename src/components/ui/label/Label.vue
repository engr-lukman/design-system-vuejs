<script setup lang="ts">
interface Props {
  for?: string
  required?: boolean
  disabled?: boolean
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  for: undefined,
  required: false,
  disabled: false,
  size: 'md',
})

const sizeClasses: Record<string, string> = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
}
</script>

<template>
  <label
    :for="props.for"
    :class="[
      'leading-none font-medium text-gray-700',
      sizeClasses[size],
      disabled && 'cursor-not-allowed opacity-50',
    ]"
  >
    <slot />
    <span
      v-if="required"
      class="ml-0.5 text-red-500"
      aria-hidden="true"
    >*</span>
  </label>
</template>
