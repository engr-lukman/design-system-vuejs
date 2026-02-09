<script setup lang="ts">
import { computed, useId } from 'vue'

type SliderSize = 'sm' | 'md' | 'lg'

interface Props {
  modelValue?: number
  min?: number
  max?: number
  step?: number
  label?: string
  disabled?: boolean
  size?: SliderSize
  showValue?: boolean
  error?: string
  hint?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: 0,
  min: 0,
  max: 100,
  step: 1,
  label: '',
  disabled: false,
  size: 'md',
  showValue: false,
  error: '',
  hint: '',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
  (e: 'change', value: number): void
}>()

const sliderId = useId()

const trackHeights: Record<SliderSize, string> = {
  sm: 'h-1',
  md: 'h-2',
  lg: 'h-3',
}

const thumbSizes: Record<SliderSize, string> = {
  sm: '[&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:w-3.5 [&::-moz-range-thumb]:h-3.5 [&::-moz-range-thumb]:w-3.5',
  md: '[&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5',
  lg: '[&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:w-6',
}

const progressPercent = computed(() => {
  return ((props.modelValue - props.min) / (props.max - props.min)) * 100
})

const sliderClasses = computed(() => [
  'w-full cursor-pointer appearance-none rounded-full bg-transparent',
  trackHeights[props.size],
  thumbSizes[props.size],
  // Webkit thumb
  '[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-gray-900 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-sm [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:duration-150',
  '[&::-webkit-slider-thumb]:hover:scale-110',
  // Firefox thumb
  '[&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-gray-900 [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:shadow-sm [&::-moz-range-thumb]:transition-transform [&::-moz-range-thumb]:duration-150',
  '[&::-moz-range-thumb]:hover:scale-110',
  // Focus
  'focus-visible:outline-none [&::-webkit-slider-thumb]:focus-visible:ring-2 [&::-webkit-slider-thumb]:focus-visible:ring-gray-950 [&::-webkit-slider-thumb]:focus-visible:ring-offset-2',
  // Disabled
  props.disabled &&
    'cursor-not-allowed opacity-50 [&::-webkit-slider-thumb]:hover:scale-100 [&::-moz-range-thumb]:hover:scale-100',
])

function onInput(event: Event) {
  const target = event.target as HTMLInputElement
  const value = Number(target.value)
  emit('update:modelValue', value)
}

function onChange(event: Event) {
  const target = event.target as HTMLInputElement
  emit('change', Number(target.value))
}
</script>

<template>
  <div class="flex w-full flex-col gap-1.5">
    <div
      v-if="label || showValue"
      class="flex items-center justify-between"
    >
      <label
        v-if="label"
        :for="sliderId"
        class="text-sm font-medium text-gray-700"
      >
        {{ label }}
      </label>
      <span
        v-if="showValue"
        class="text-sm text-gray-500 tabular-nums"
      >
        {{ modelValue }}
      </span>
    </div>

    <div class="relative flex items-center">
      <div :class="['absolute inset-y-0 left-0 flex w-full items-center']">
        <div :class="['w-full rounded-full bg-gray-200', trackHeights[size]]">
          <div
            class="rounded-full bg-gray-900 transition-all duration-100"
            :class="trackHeights[size]"
            :style="{ width: `${progressPercent}%` }"
          />
        </div>
      </div>

      <input
        :id="sliderId"
        type="range"
        :value="modelValue"
        :min="min"
        :max="max"
        :step="step"
        :disabled="disabled"
        :class="sliderClasses"
        :aria-valuenow="modelValue"
        :aria-valuemin="min"
        :aria-valuemax="max"
        :aria-label="label || undefined"
        :aria-invalid="!!error"
        :aria-describedby="error ? `${sliderId}-error` : hint ? `${sliderId}-hint` : undefined"
        @input="onInput"
        @change="onChange"
      >
    </div>

    <p
      v-if="error"
      :id="`${sliderId}-error`"
      class="text-sm text-red-600"
      role="alert"
    >
      {{ error }}
    </p>
    <p
      v-else-if="hint"
      :id="`${sliderId}-hint`"
      class="text-sm text-gray-500"
    >
      {{ hint }}
    </p>
  </div>
</template>
