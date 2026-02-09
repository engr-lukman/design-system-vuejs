<script setup lang="ts">
import { computed } from 'vue'
import type { ToggleGroupItem } from './types'

type ToggleGroupVariant = 'outline' | 'solid'
type ToggleGroupSize = 'sm' | 'md' | 'lg'

interface Props {
  modelValue?: string | string[]
  items: ToggleGroupItem[]
  multiple?: boolean
  variant?: ToggleGroupVariant
  size?: ToggleGroupSize
  disabled?: boolean
  fullWidth?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  multiple: false,
  variant: 'outline',
  size: 'md',
  disabled: false,
  fullWidth: false,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | string[]): void
}>()

const sizeClasses: Record<ToggleGroupSize, string> = {
  sm: 'px-2.5 py-1 text-xs',
  md: 'px-3.5 py-1.5 text-sm',
  lg: 'px-5 py-2.5 text-base',
}

function isActive(value: string): boolean {
  if (props.multiple && Array.isArray(props.modelValue)) {
    return props.modelValue.includes(value)
  }
  return props.modelValue === value
}

function getItemClasses(item: ToggleGroupItem) {
  const active = isActive(item.value)
  const itemDisabled = props.disabled || item.disabled

  return [
    'inline-flex items-center justify-center font-medium transition-colors duration-150',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2',
    'first:rounded-l-lg last:rounded-r-lg',
    'border-y first:border-l last:border-r',
    sizeClasses[props.size],
    props.fullWidth ? 'flex-1' : '',
    itemDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
    // Active / inactive styles based on variant
    active && props.variant === 'solid'
      ? 'bg-gray-900 text-white border-gray-900'
      : active && props.variant === 'outline'
        ? 'bg-gray-100 text-gray-900 border-gray-300'
        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50',
  ]
}

function onToggle(item: ToggleGroupItem) {
  if (props.disabled || item.disabled) return

  if (props.multiple) {
    const current = Array.isArray(props.modelValue) ? [...props.modelValue] : []
    const idx = current.indexOf(item.value)
    if (idx >= 0) {
      current.splice(idx, 1)
    } else {
      current.push(item.value)
    }
    emit('update:modelValue', current)
  } else {
    emit('update:modelValue', isActive(item.value) ? '' : item.value)
  }
}

const groupClasses = computed(() => ['inline-flex', props.fullWidth ? 'w-full' : ''])
</script>

<template>
  <div
    :class="groupClasses"
    role="group"
  >
    <button
      v-for="item in items"
      :key="item.value"
      type="button"
      :class="getItemClasses(item)"
      :aria-pressed="isActive(item.value)"
      :disabled="disabled || item.disabled"
      @click="onToggle(item)"
    >
      {{ item.label }}
    </button>
  </div>
</template>
