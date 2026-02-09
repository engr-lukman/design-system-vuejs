<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, useId, watch } from 'vue'
import type { ComboboxOption } from './types'

type ComboboxSize = 'sm' | 'md' | 'lg'

interface Props {
  modelValue?: string | number
  options: ComboboxOption[]
  placeholder?: string
  label?: string
  size?: ComboboxSize
  disabled?: boolean
  error?: string
  hint?: string
  required?: boolean
  emptyMessage?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  placeholder: 'Search...',
  label: '',
  size: 'md',
  disabled: false,
  error: '',
  hint: '',
  required: false,
  emptyMessage: 'No results found',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
  (e: 'change', value: string | number): void
}>()

const comboboxId = useId()
const listboxId = `${comboboxId}-listbox`
const containerRef = ref<HTMLElement | null>(null)
const inputRef = ref<HTMLInputElement | null>(null)
const listRef = ref<HTMLElement | null>(null)

const isOpen = ref(false)
const query = ref('')
const activeIndex = ref(-1)

const sizeClasses: Record<ComboboxSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm',
  lg: 'px-4 py-3 text-lg',
}

const selectedOption = computed(() => props.options.find((o) => o.value === props.modelValue))

const filteredOptions = computed(() => {
  if (!query.value) return props.options
  const q = query.value.toLowerCase()
  return props.options.filter((o) => o.label.toLowerCase().includes(q))
})

const inputClasses = computed(() => [
  'block w-full rounded-md border transition-colors duration-150',
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-0',
  'disabled:bg-gray-100 disabled:cursor-not-allowed',
  'placeholder:text-gray-400',
  sizeClasses[props.size],
  props.error
    ? 'border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20'
    : 'border-gray-300 focus-visible:ring-gray-950',
])

// Sync display text when value changes externally
watch(
  () => props.modelValue,
  () => {
    if (!isOpen.value) {
      query.value = selectedOption.value?.label || ''
    }
  },
  { immediate: true }
)

function open() {
  if (props.disabled) return
  isOpen.value = true
  query.value = ''
  activeIndex.value = -1
  nextTick(() => inputRef.value?.focus())
}

function close() {
  isOpen.value = false
  query.value = selectedOption.value?.label || ''
  activeIndex.value = -1
}

function selectOption(option: ComboboxOption) {
  if (option.disabled) return
  emit('update:modelValue', option.value)
  emit('change', option.value)
  close()
}

function clearSelection() {
  emit('update:modelValue', '')
  emit('change', '')
  query.value = ''
  nextTick(() => inputRef.value?.focus())
}

function onInputFocus() {
  if (!isOpen.value) open()
}

function onInput(event: Event) {
  const target = event.target as HTMLInputElement
  query.value = target.value
  activeIndex.value = -1
  if (!isOpen.value) isOpen.value = true
}

function scrollToActive() {
  nextTick(() => {
    const list = listRef.value
    if (!list) return
    const activeItem = list.children[activeIndex.value] as HTMLElement
    if (activeItem) {
      activeItem.scrollIntoView({ block: 'nearest' })
    }
  })
}

function onKeydown(event: KeyboardEvent) {
  const opts = filteredOptions.value

  switch (event.key) {
    case 'ArrowDown':
      event.preventDefault()
      if (!isOpen.value) {
        open()
      } else {
        activeIndex.value = Math.min(activeIndex.value + 1, opts.length - 1)
        // Skip disabled
        while (activeIndex.value < opts.length && opts[activeIndex.value]?.disabled) {
          activeIndex.value++
        }
        if (activeIndex.value >= opts.length) activeIndex.value = opts.length - 1
        scrollToActive()
      }
      break
    case 'ArrowUp':
      event.preventDefault()
      activeIndex.value = Math.max(activeIndex.value - 1, 0)
      while (activeIndex.value > 0 && opts[activeIndex.value]?.disabled) {
        activeIndex.value--
      }
      scrollToActive()
      break
    case 'Enter':
      event.preventDefault()
      if (isOpen.value && activeIndex.value >= 0 && opts[activeIndex.value]) {
        selectOption(opts[activeIndex.value])
      }
      break
    case 'Escape':
      event.preventDefault()
      close()
      break
    case 'Tab':
      close()
      break
  }
}

// Click outside
function onClickOutside(event: MouseEvent) {
  if (containerRef.value && !containerRef.value.contains(event.target as Node)) {
    close()
  }
}

onMounted(() => document.addEventListener('mousedown', onClickOutside))
onBeforeUnmount(() => document.removeEventListener('mousedown', onClickOutside))
</script>

<template>
  <div
    ref="containerRef"
    class="relative flex flex-col gap-1.5"
  >
    <label
      v-if="label"
      :for="comboboxId"
      class="text-sm font-medium text-gray-700"
    >
      {{ label }}
      <span
        v-if="required"
        class="text-red-500"
        aria-hidden="true"
      >*</span>
    </label>

    <div class="relative">
      <input
        :id="comboboxId"
        ref="inputRef"
        type="text"
        role="combobox"
        :value="query"
        :placeholder="placeholder"
        :disabled="disabled"
        :required="required"
        :class="inputClasses"
        :aria-expanded="isOpen"
        :aria-controls="listboxId"
        :aria-activedescendant="
          activeIndex >= 0 ? `${comboboxId}-option-${activeIndex}` : undefined
        "
        :aria-invalid="!!error"
        :aria-describedby="error ? `${comboboxId}-error` : hint ? `${comboboxId}-hint` : undefined"
        autocomplete="off"
        @input="onInput"
        @focus="onInputFocus"
        @keydown="onKeydown"
      >

      <!-- Clear button -->
      <button
        v-if="selectedOption && !disabled"
        type="button"
        class="absolute inset-y-0 right-8 flex items-center px-1 text-gray-400 hover:text-gray-600"
        tabindex="-1"
        aria-label="Clear selection"
        @mousedown.prevent="clearSelection"
      >
        <svg
          class="h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"
          />
        </svg>
      </button>

      <!-- Chevron -->
      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
        <svg
          class="h-4 w-4 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>

    <!-- Dropdown list -->
    <Transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="scale-95 opacity-0"
      enter-to-class="scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="scale-100 opacity-100"
      leave-to-class="scale-95 opacity-0"
    >
      <ul
        v-if="isOpen"
        :id="listboxId"
        ref="listRef"
        role="listbox"
        class="absolute top-full z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border border-gray-200 bg-white py-1 shadow-md"
      >
        <li
          v-if="filteredOptions.length === 0"
          class="px-4 py-2 text-sm text-gray-500"
        >
          {{ emptyMessage }}
        </li>
        <li
          v-for="(option, index) in filteredOptions"
          :id="`${comboboxId}-option-${index}`"
          :key="option.value"
          role="option"
          :aria-selected="option.value === modelValue"
          :aria-disabled="option.disabled"
          :class="[
            'flex cursor-pointer items-center px-4 py-2 text-sm transition-colors',
            option.disabled
              ? 'cursor-not-allowed text-gray-400'
              : index === activeIndex
                ? 'bg-gray-100 text-gray-900'
                : option.value === modelValue
                  ? 'bg-gray-50 text-gray-900'
                  : 'text-gray-700 hover:bg-gray-50',
          ]"
          @mousedown.prevent="selectOption(option)"
          @mouseenter="activeIndex = index"
        >
          <span class="flex-1">{{ option.label }}</span>
          <svg
            v-if="option.value === modelValue"
            class="h-4 w-4 text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
              clip-rule="evenodd"
            />
          </svg>
        </li>
      </ul>
    </Transition>

    <p
      v-if="error"
      :id="`${comboboxId}-error`"
      class="text-sm text-red-600"
      role="alert"
    >
      {{ error }}
    </p>
    <p
      v-else-if="hint"
      :id="`${comboboxId}-hint`"
      class="text-sm text-gray-500"
    >
      {{ hint }}
    </p>
  </div>
</template>
