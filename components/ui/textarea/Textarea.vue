<script setup lang="ts">
import { computed, useId } from 'vue'

type TextareaSize = 'sm' | 'md' | 'lg'
type TextareaResize = 'none' | 'vertical' | 'horizontal' | 'both'

interface Props {
  modelValue?: string
  label?: string
  placeholder?: string
  size?: TextareaSize
  rows?: number
  maxLength?: number
  disabled?: boolean
  readonly?: boolean
  error?: string
  hint?: string
  required?: boolean
  resize?: TextareaResize
  showCount?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  label: '',
  placeholder: '',
  size: 'md',
  rows: 4,
  maxLength: undefined,
  disabled: false,
  readonly: false,
  error: '',
  hint: '',
  required: false,
  resize: 'vertical',
  showCount: false,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'focus', event: FocusEvent): void
  (e: 'blur', event: FocusEvent): void
}>()

const textareaId = useId()

const sizeClasses: Record<TextareaSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-4 py-3 text-lg',
}

const resizeClasses: Record<TextareaResize, string> = {
  none: 'resize-none',
  vertical: 'resize-y',
  horizontal: 'resize-x',
  both: 'resize',
}

const textareaClasses = computed(() => [
  'block w-full rounded-lg border transition-colors duration-150',
  'focus:outline-none focus:ring-2 focus:ring-offset-0',
  'disabled:bg-neutral-100 disabled:cursor-not-allowed',
  'placeholder:text-neutral-400',
  sizeClasses[props.size],
  resizeClasses[props.resize],
  props.error
    ? 'border-danger-500 focus:border-danger-500 focus:ring-danger-500/20'
    : 'border-neutral-300 focus:border-primary-500 focus:ring-primary-500/20',
])

const charCount = computed(() => props.modelValue.length)

function onInput(event: Event) {
  const target = event.target as HTMLTextAreaElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <div class="flex flex-col gap-1.5">
    <label v-if="label" :for="textareaId" class="text-sm font-medium text-neutral-700">
      {{ label }}
      <span v-if="required" class="text-danger-500" aria-hidden="true">*</span>
    </label>

    <textarea
      :id="textareaId"
      :value="modelValue"
      :placeholder="placeholder"
      :rows="rows"
      :maxlength="maxLength"
      :disabled="disabled"
      :readonly="readonly"
      :required="required"
      :class="textareaClasses"
      :aria-invalid="!!error"
      :aria-describedby="error ? `${textareaId}-error` : hint ? `${textareaId}-hint` : undefined"
      @input="onInput"
      @focus="$emit('focus', $event)"
      @blur="$emit('blur', $event)"
    />

    <div class="flex items-center justify-between">
      <div>
        <p v-if="error" :id="`${textareaId}-error`" class="text-sm text-danger-600" role="alert">
          {{ error }}
        </p>
        <p v-else-if="hint" :id="`${textareaId}-hint`" class="text-sm text-neutral-500">
          {{ hint }}
        </p>
      </div>

      <span
        v-if="showCount"
        :class="[
          'text-xs',
          maxLength && charCount >= maxLength ? 'text-danger-600' : 'text-neutral-400',
        ]"
      >
        {{ charCount }}<template v-if="maxLength"> / {{ maxLength }}</template>
      </span>
    </div>
  </div>
</template>
