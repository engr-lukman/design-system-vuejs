<script setup lang="ts">
import { computed, useId } from 'vue'

type InputSize = 'sm' | 'md' | 'lg'

interface Props {
  modelValue?: string
  label?: string
  placeholder?: string
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search'
  size?: InputSize
  disabled?: boolean
  readonly?: boolean
  error?: string
  hint?: string
  required?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  label: '',
  placeholder: '',
  type: 'text',
  size: 'md',
  disabled: false,
  readonly: false,
  error: '',
  hint: '',
  required: false,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'focus', event: FocusEvent): void
  (e: 'blur', event: FocusEvent): void
}>()

const inputId = useId()

const sizeClasses: Record<InputSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-4 py-3 text-lg',
}

const inputClasses = computed(() => [
  'block w-full rounded-lg border transition-colors duration-150',
  'focus:outline-none focus:ring-2 focus:ring-offset-0',
  'disabled:bg-neutral-100 disabled:cursor-not-allowed',
  'placeholder:text-neutral-400',
  sizeClasses[props.size],
  props.error
    ? 'border-danger-500 focus:border-danger-500 focus:ring-danger-500/20'
    : 'border-neutral-300 focus:border-primary-500 focus:ring-primary-500/20',
])

function onInput(event: Event) {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <div class="flex flex-col gap-1.5">
    <label v-if="label" :for="inputId" class="text-sm font-medium text-neutral-700">
      {{ label }}
      <span v-if="required" class="text-danger-500" aria-hidden="true">*</span>
    </label>

    <input
      :id="inputId"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :required="required"
      :class="inputClasses"
      :aria-invalid="!!error"
      :aria-describedby="error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined"
      @input="onInput"
      @focus="$emit('focus', $event)"
      @blur="$emit('blur', $event)"
    />

    <p v-if="error" :id="`${inputId}-error`" class="text-sm text-danger-600" role="alert">
      {{ error }}
    </p>
    <p v-else-if="hint" :id="`${inputId}-hint`" class="text-sm text-neutral-500">
      {{ hint }}
    </p>
  </div>
</template>
