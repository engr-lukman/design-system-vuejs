<script setup lang="ts">
import { computed, useId } from 'vue'

interface RadioOption {
  label: string
  value: string | number
  disabled?: boolean
}

interface Props {
  modelValue?: string | number
  name?: string
  label?: string
  options: RadioOption[]
  disabled?: boolean
  error?: string
  orientation?: 'vertical' | 'horizontal'
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  name: '',
  label: '',
  disabled: false,
  error: '',
  orientation: 'vertical',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
}>()

const groupId = useId()
const groupName = computed(() => props.name || `radio-group-${groupId}`)

function onChange(value: string | number) {
  emit('update:modelValue', value)
}
</script>

<template>
  <fieldset
    :disabled="disabled"
    class="flex flex-col gap-2"
  >
    <legend
      v-if="label"
      class="mb-1 text-sm font-medium text-gray-700"
    >
      {{ label }}
    </legend>

    <div
      :class="['flex gap-3', orientation === 'vertical' ? 'flex-col' : 'flex-row flex-wrap']"
      role="radiogroup"
      :aria-label="label"
    >
      <label
        v-for="option in options"
        :key="option.value"
        :class="[
          'inline-flex cursor-pointer items-center gap-2 text-sm text-gray-700',
          (option.disabled || disabled) && 'cursor-not-allowed opacity-50',
        ]"
      >
        <input
          type="radio"
          :name="groupName"
          :value="option.value"
          :checked="modelValue === option.value"
          :disabled="option.disabled || disabled"
          class="h-4 w-4 border-gray-300 accent-gray-900 focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2"
          @change="onChange(option.value)"
        >
        <span>{{ option.label }}</span>
      </label>
    </div>

    <p
      v-if="error"
      class="text-sm text-red-600"
      role="alert"
    >
      {{ error }}
    </p>
  </fieldset>
</template>
