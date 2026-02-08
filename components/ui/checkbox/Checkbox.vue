<script setup lang="ts">
import { useId } from 'vue'

interface Props {
  modelValue?: boolean
  label?: string
  disabled?: boolean
  error?: string
  indeterminate?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  label: '',
  disabled: false,
  error: '',
  indeterminate: false,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const checkboxId = useId()

function onChange(event: Event) {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.checked)
}
</script>

<template>
  <div class="flex flex-col gap-1">
    <label
      :for="checkboxId"
      :class="[
        'inline-flex items-center gap-2 cursor-pointer text-sm text-gray-700',
        disabled && 'opacity-50 cursor-not-allowed',
      ]"
    >
      <input
        :id="checkboxId"
        type="checkbox"
        :checked="modelValue"
        :disabled="disabled"
        :indeterminate="indeterminate"
        class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 disabled:cursor-not-allowed"
        :aria-invalid="!!error"
        @change="onChange"
      >
      <span v-if="label">{{ label }}</span>
      <slot v-else />
    </label>

    <p
      v-if="error"
      class="ml-6 text-sm text-red-600"
      role="alert"
    >
      {{ error }}
    </p>
  </div>
</template>
