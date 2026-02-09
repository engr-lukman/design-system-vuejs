<script setup lang="ts">
import { computed, useId } from 'vue'

type ToggleSize = 'sm' | 'md' | 'lg'

interface Props {
  modelValue?: boolean
  label?: string
  disabled?: boolean
  size?: ToggleSize
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  label: '',
  disabled: false,
  size: 'md',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const toggleId = useId()

const trackSizes: Record<ToggleSize, string> = {
  sm: 'h-5 w-9',
  md: 'h-6 w-11',
  lg: 'h-7 w-[52px]',
}

const thumbSizes: Record<ToggleSize, string> = {
  sm: 'h-3.5 w-3.5',
  md: 'h-4 w-4',
  lg: 'h-5 w-5',
}

const thumbTranslate: Record<ToggleSize, string> = {
  sm: 'translate-x-4',
  md: 'translate-x-5',
  lg: 'translate-x-6',
}

const trackClasses = computed(() => [
  'relative inline-flex shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2',
  'disabled:opacity-50 disabled:cursor-not-allowed',
  trackSizes[props.size],
  props.modelValue ? 'bg-gray-900' : 'bg-gray-200',
])

const thumbClasses = computed(() => [
  'pointer-events-none inline-block rounded-full bg-white shadow-sm ring-0 transition-transform duration-200 ease-in-out',
  thumbSizes[props.size],
  props.modelValue ? thumbTranslate[props.size] : 'translate-x-0.5',
])

function toggle() {
  if (!props.disabled) {
    emit('update:modelValue', !props.modelValue)
  }
}
</script>

<template>
  <div class="inline-flex items-center gap-3">
    <button
      :id="toggleId"
      type="button"
      role="switch"
      :aria-checked="modelValue"
      :aria-label="label"
      :disabled="disabled"
      :class="trackClasses"
      @click="toggle"
    >
      <span
        :class="thumbClasses"
        aria-hidden="true"
      />
    </button>

    <label
      v-if="label"
      :for="toggleId"
      :class="[
        'cursor-pointer text-sm text-gray-700 select-none',
        disabled && 'cursor-not-allowed opacity-50',
      ]"
    >
      {{ label }}
    </label>
  </div>
</template>
