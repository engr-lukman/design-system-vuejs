<script setup lang="ts">
import { computed } from 'vue'
import type { ButtonGroupItem } from './types'

type ButtonGroupVariant = 'primary' | 'secondary' | 'outline'
type ButtonGroupSize = 'sm' | 'md' | 'lg'

interface Props {
  modelValue?: string
  items: ButtonGroupItem[]
  variant?: ButtonGroupVariant
  size?: ButtonGroupSize
  disabled?: boolean
  fullWidth?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  variant: 'outline',
  size: 'md',
  disabled: false,
  fullWidth: false,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'click', value: string): void
}>()

const sizeClasses: Record<ButtonGroupSize, string> = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-5 py-2.5 text-base',
}

const variantStyles = {
  primary: {
    active: 'bg-gray-900 text-white border-gray-900',
    inactive: 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100 hover:text-gray-900',
  },
  secondary: {
    active: 'bg-gray-800 text-white border-gray-800',
    inactive: 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100',
  },
  outline: {
    active: 'bg-gray-100 text-gray-900 border-gray-300',
    inactive: 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50',
  },
}

function getItemClasses(item: ButtonGroupItem) {
  const active = props.modelValue === item.value
  const itemDisabled = props.disabled || item.disabled
  const style = variantStyles[props.variant]

  return [
    'inline-flex items-center justify-center font-medium transition-colors duration-150',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:z-10',
    'first:rounded-l-lg last:rounded-r-lg',
    '-ml-px first:ml-0',
    'border',
    sizeClasses[props.size],
    props.fullWidth ? 'flex-1' : '',
    itemDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
    active ? style.active : style.inactive,
  ]
}

function onClick(item: ButtonGroupItem) {
  if (props.disabled || item.disabled) return
  emit('update:modelValue', item.value)
  emit('click', item.value)
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
      :aria-pressed="modelValue === item.value"
      :disabled="disabled || item.disabled"
      @click="onClick(item)"
    >
      {{ item.label }}
    </button>
  </div>
</template>
