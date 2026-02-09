<script setup lang="ts">
import { computed, useId } from 'vue'
import type { DatePickerMode, DatePickerSize } from './types'

interface Props {
  modelValue?: string
  /** For date-range mode: end value */
  modelValueEnd?: string
  mode?: DatePickerMode
  label?: string
  /** For date-range mode: label for the end input */
  labelEnd?: string
  placeholder?: string
  size?: DatePickerSize
  disabled?: boolean
  error?: string
  hint?: string
  required?: boolean
  min?: string
  max?: string
  /** Step attribute for time/datetime inputs (in seconds) */
  step?: number
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  modelValueEnd: '',
  mode: 'date',
  label: '',
  labelEnd: '',
  placeholder: '',
  size: 'md',
  disabled: false,
  error: '',
  hint: '',
  required: false,
  min: '',
  max: '',
  step: undefined,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'update:modelValueEnd', value: string): void
  (e: 'change', value: string, valueEnd?: string): void
}>()

const inputId = useId()
const inputEndId = useId()

const inputType = computed(() => {
  const map: Record<DatePickerMode, string> = {
    date: 'date',
    'date-range': 'date',
    month: 'month',
    week: 'week',
    time: 'time',
    datetime: 'datetime-local',
  }
  return map[props.mode]
})

const defaultPlaceholder = computed(() => {
  if (props.placeholder) return props.placeholder
  const map: Record<DatePickerMode, string> = {
    date: 'Select date',
    'date-range': 'Start date',
    month: 'Select month',
    week: 'Select week',
    time: 'Select time',
    datetime: 'Select date & time',
  }
  return map[props.mode]
})

const sizeClasses: Record<DatePickerSize, string> = {
  sm: 'h-8 px-3 py-1.5 text-sm',
  md: 'h-9 px-3 py-2 text-sm',
  lg: 'h-10 px-3 py-2.5 text-base',
}

const inputClasses = computed(() => [
  'block w-full rounded-md border bg-white transition-colors duration-150',
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-0',
  'disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50',
  sizeClasses[props.size],
  props.error
    ? 'border-red-500 focus-visible:ring-red-500/20'
    : 'border-gray-300 focus-visible:ring-gray-950',
])

function onInput(event: Event) {
  const value = (event.target as HTMLInputElement).value
  emit('update:modelValue', value)
  emit('change', value, props.mode === 'date-range' ? props.modelValueEnd : undefined)
}

function onInputEnd(event: Event) {
  const value = (event.target as HTMLInputElement).value
  emit('update:modelValueEnd', value)
  emit('change', props.modelValue, value)
}
</script>

<template>
  <div class="flex flex-col gap-1.5">
    <!-- Single input modes -->
    <template v-if="mode !== 'date-range'">
      <label
        v-if="label"
        :for="inputId"
        class="text-sm font-medium text-gray-700"
      >
        {{ label }}
        <span
          v-if="required"
          class="text-red-500"
          aria-hidden="true"
        >*</span>
      </label>
      <input
        :id="inputId"
        :type="inputType"
        :value="modelValue"
        :class="inputClasses"
        :placeholder="defaultPlaceholder"
        :disabled="disabled"
        :required="required"
        :min="min || undefined"
        :max="max || undefined"
        :step="step || undefined"
        :aria-invalid="!!error"
        :aria-describedby="error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined"
        @input="onInput"
      >
    </template>

    <!-- Date range mode -->
    <template v-else>
      <div class="flex flex-col gap-3 sm:flex-row sm:items-end sm:gap-2">
        <div class="flex flex-1 flex-col gap-1.5">
          <label
            v-if="label"
            :for="inputId"
            class="text-sm font-medium text-gray-700"
          >
            {{ label || 'Start date' }}
            <span
              v-if="required"
              class="text-red-500"
              aria-hidden="true"
            >*</span>
          </label>
          <input
            :id="inputId"
            type="date"
            :value="modelValue"
            :class="inputClasses"
            placeholder="Start date"
            :disabled="disabled"
            :required="required"
            :min="min || undefined"
            :max="modelValueEnd || max || undefined"
            :aria-invalid="!!error"
            @input="onInput"
          >
        </div>
        <span class="hidden text-sm text-gray-500 sm:block sm:pb-2">to</span>
        <div class="flex flex-1 flex-col gap-1.5">
          <label
            v-if="labelEnd || label"
            :for="inputEndId"
            class="text-sm font-medium text-gray-700"
          >
            {{ labelEnd || 'End date' }}
            <span
              v-if="required"
              class="text-red-500"
              aria-hidden="true"
            >*</span>
          </label>
          <input
            :id="inputEndId"
            type="date"
            :value="modelValueEnd"
            :class="inputClasses"
            placeholder="End date"
            :disabled="disabled"
            :required="required"
            :min="modelValue || min || undefined"
            :max="max || undefined"
            @input="onInputEnd"
          >
        </div>
      </div>
    </template>

    <p
      v-if="error"
      :id="`${inputId}-error`"
      class="text-sm text-red-600"
      role="alert"
    >
      {{ error }}
    </p>
    <p
      v-else-if="hint"
      :id="`${inputId}-hint`"
      class="text-sm text-gray-500"
    >
      {{ hint }}
    </p>
  </div>
</template>
