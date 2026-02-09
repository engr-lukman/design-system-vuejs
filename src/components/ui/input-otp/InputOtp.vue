<script setup lang="ts">
import { computed, nextTick, ref, useId, watch } from 'vue'

interface Props {
  modelValue?: string
  length?: number
  disabled?: boolean
  error?: string
  label?: string
  hint?: string
  mask?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  length: 6,
  disabled: false,
  error: '',
  label: '',
  hint: '',
  mask: false,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'complete', value: string): void
}>()

const groupId = useId()
const inputRefs = ref<HTMLInputElement[]>([])

const digits = ref<string[]>(Array.from({ length: props.length }, () => ''))

// Sync modelValue → digits
watch(
  () => props.modelValue,
  (val) => {
    const chars = (val || '').split('')
    for (let i = 0; i < props.length; i++) {
      digits.value[i] = chars[i] || ''
    }
  },
  { immediate: true }
)

const currentValue = computed(() => digits.value.join(''))

function emitValue() {
  const val = currentValue.value
  emit('update:modelValue', val)
  if (val.length === props.length) {
    emit('complete', val)
  }
}

function focusInput(index: number) {
  nextTick(() => {
    inputRefs.value[index]?.focus()
    inputRefs.value[index]?.select()
  })
}

function onInput(index: number, event: Event) {
  const target = event.target as HTMLInputElement
  const char = target.value.replace(/\D/g, '').slice(-1)
  digits.value[index] = char

  if (char && index < props.length - 1) {
    focusInput(index + 1)
  }

  emitValue()
}

function onKeydown(index: number, event: KeyboardEvent) {
  if (event.key === 'Backspace') {
    if (!digits.value[index] && index > 0) {
      event.preventDefault()
      digits.value[index - 1] = ''
      focusInput(index - 1)
      emitValue()
    }
  } else if (event.key === 'ArrowLeft' && index > 0) {
    event.preventDefault()
    focusInput(index - 1)
  } else if (event.key === 'ArrowRight' && index < props.length - 1) {
    event.preventDefault()
    focusInput(index + 1)
  }
}

function onPaste(event: ClipboardEvent) {
  event.preventDefault()
  const pasted = (event.clipboardData?.getData('text') || '').replace(/\D/g, '')
  const chars = pasted.slice(0, props.length).split('')

  for (let i = 0; i < props.length; i++) {
    digits.value[i] = chars[i] || ''
  }

  const focusIdx = Math.min(chars.length, props.length - 1)
  focusInput(focusIdx)
  emitValue()
}

function onFocus(event: FocusEvent) {
  ;(event.target as HTMLInputElement)?.select()
}
</script>

<template>
  <div class="flex flex-col gap-1.5">
    <label
      v-if="label"
      :for="`${groupId}-0`"
      class="text-sm font-medium text-gray-700"
    >
      {{ label }}
    </label>

    <div
      class="flex items-center gap-2"
      role="group"
      :aria-label="label || 'One-time password input'"
    >
      <template
        v-for="(_, index) in length"
        :key="index"
      >
        <!-- Separator dash at midpoint -->
        <span
          v-if="index === Math.floor(length / 2) && length > 1"
          class="text-gray-400"
          aria-hidden="true"
        >–</span>

        <input
          :id="`${groupId}-${index}`"
          :ref="
            (el) => {
              if (el) inputRefs[index] = el as HTMLInputElement
            }
          "
          :type="mask ? 'password' : 'text'"
          inputmode="numeric"
          autocomplete="one-time-code"
          maxlength="1"
          :value="digits[index]"
          :disabled="disabled"
          :aria-label="`Digit ${index + 1} of ${length}`"
          :aria-invalid="!!error"
          :class="[
            'h-10 w-10 rounded-md border text-center text-lg font-semibold transition-colors duration-150',
            'focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:outline-none',
            'disabled:cursor-not-allowed disabled:bg-gray-100',
            error ? 'border-red-500' : 'border-gray-300',
          ]"
          @input="onInput(index, $event)"
          @keydown="onKeydown(index, $event)"
          @paste="onPaste"
          @focus="onFocus"
        >
      </template>
    </div>

    <p
      v-if="error"
      :id="`${groupId}-error`"
      class="text-sm text-red-600"
      role="alert"
    >
      {{ error }}
    </p>
    <p
      v-else-if="hint"
      :id="`${groupId}-hint`"
      class="text-sm text-gray-500"
    >
      {{ hint }}
    </p>
  </div>
</template>
