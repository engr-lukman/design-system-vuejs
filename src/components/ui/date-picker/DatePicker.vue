<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, useId, watch } from 'vue'

type DatePickerSize = 'sm' | 'md' | 'lg'

interface Props {
  modelValue?: string
  label?: string
  placeholder?: string
  size?: DatePickerSize
  disabled?: boolean
  error?: string
  hint?: string
  required?: boolean
  min?: string
  max?: string
  format?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  label: '',
  placeholder: 'Select a date',
  size: 'md',
  disabled: false,
  error: '',
  hint: '',
  required: false,
  min: '',
  max: '',
  format: 'yyyy-MM-dd',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'change', value: string): void
}>()

const pickerId = useId()
const containerRef = ref<HTMLElement | null>(null)
const isOpen = ref(false)

const currentMonth = ref(new Date().getMonth())
const currentYear = ref(new Date().getFullYear())

const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const sizeClasses: Record<DatePickerSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm',
  lg: 'px-4 py-3 text-lg',
}

const inputClasses = computed(() => [
  'block w-full cursor-pointer rounded-md border transition-colors duration-150',
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-0',
  'disabled:bg-gray-100 disabled:cursor-not-allowed',
  sizeClasses[props.size],
  props.error
    ? 'border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20'
    : 'border-gray-300 focus-visible:ring-gray-950',
])

const selectedDate = computed(() => {
  if (!props.modelValue) return null
  const d = new Date(props.modelValue + 'T00:00:00')
  return isNaN(d.getTime()) ? null : d
})

const displayValue = computed(() => {
  if (!selectedDate.value) return ''
  return formatDate(selectedDate.value)
})

function formatDate(date: Date): string {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

// Initialize calendar to selected date or today
watch(
  () => props.modelValue,
  (val) => {
    if (val) {
      const d = new Date(val + 'T00:00:00')
      if (!isNaN(d.getTime())) {
        currentMonth.value = d.getMonth()
        currentYear.value = d.getFullYear()
      }
    }
  },
  { immediate: true }
)

const calendarDays = computed(() => {
  const firstDay = new Date(currentYear.value, currentMonth.value, 1)
  const startDay = firstDay.getDay()
  const daysInMonth = new Date(currentYear.value, currentMonth.value + 1, 0).getDate()
  const daysInPrevMonth = new Date(currentYear.value, currentMonth.value, 0).getDate()

  const days: { date: Date; currentMonth: boolean; disabled: boolean }[] = []

  // Previous month trailing days
  for (let i = startDay - 1; i >= 0; i--) {
    const date = new Date(currentYear.value, currentMonth.value - 1, daysInPrevMonth - i)
    days.push({ date, currentMonth: false, disabled: isDateDisabled(date) })
  }

  // Current month days
  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(currentYear.value, currentMonth.value, d)
    days.push({ date, currentMonth: true, disabled: isDateDisabled(date) })
  }

  // Next month leading days
  const remaining = 42 - days.length
  for (let d = 1; d <= remaining; d++) {
    const date = new Date(currentYear.value, currentMonth.value + 1, d)
    days.push({ date, currentMonth: false, disabled: isDateDisabled(date) })
  }

  return days
})

function isDateDisabled(date: Date): boolean {
  if (props.min) {
    const minDate = new Date(props.min + 'T00:00:00')
    if (date < minDate) return true
  }
  if (props.max) {
    const maxDate = new Date(props.max + 'T00:00:00')
    if (date > maxDate) return true
  }
  return false
}

function isSelected(date: Date): boolean {
  if (!selectedDate.value) return false
  return (
    date.getFullYear() === selectedDate.value.getFullYear() &&
    date.getMonth() === selectedDate.value.getMonth() &&
    date.getDate() === selectedDate.value.getDate()
  )
}

function isToday(date: Date): boolean {
  const today = new Date()
  return (
    date.getFullYear() === today.getFullYear() &&
    date.getMonth() === today.getMonth() &&
    date.getDate() === today.getDate()
  )
}

function selectDate(day: { date: Date; disabled: boolean }) {
  if (day.disabled) return
  const value = formatDate(day.date)
  emit('update:modelValue', value)
  emit('change', value)
  isOpen.value = false
}

function prevMonth() {
  if (currentMonth.value === 0) {
    currentMonth.value = 11
    currentYear.value--
  } else {
    currentMonth.value--
  }
}

function nextMonth() {
  if (currentMonth.value === 11) {
    currentMonth.value = 0
    currentYear.value++
  } else {
    currentMonth.value++
  }
}

function goToToday() {
  const today = new Date()
  currentMonth.value = today.getMonth()
  currentYear.value = today.getFullYear()
}

function toggleOpen() {
  if (props.disabled) return
  isOpen.value = !isOpen.value
}

function clearDate() {
  emit('update:modelValue', '')
  emit('change', '')
}

// Close on click outside
function onClickOutside(event: MouseEvent) {
  if (containerRef.value && !containerRef.value.contains(event.target as Node)) {
    isOpen.value = false
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
      :for="pickerId"
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
      <button
        :id="pickerId"
        type="button"
        :class="[...inputClasses, 'flex items-center text-left', !displayValue && 'text-gray-400']"
        :disabled="disabled"
        :aria-expanded="isOpen"
        :aria-invalid="!!error"
        :aria-describedby="error ? `${pickerId}-error` : hint ? `${pickerId}-hint` : undefined"
        @click="toggleOpen"
      >
        <svg
          class="mr-2 h-4 w-4 shrink-0 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75Z"
            clip-rule="evenodd"
          />
        </svg>
        <span class="flex-1">{{ displayValue || placeholder }}</span>

        <button
          v-if="displayValue && !disabled"
          type="button"
          class="ml-1 shrink-0 text-gray-400 hover:text-gray-600"
          tabindex="-1"
          aria-label="Clear date"
          @click.stop="clearDate"
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
      </button>
    </div>

    <!-- Calendar dropdown -->
    <Transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="scale-95 opacity-0"
      enter-to-class="scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="scale-100 opacity-100"
      leave-to-class="scale-95 opacity-0"
    >
      <div
        v-if="isOpen"
        class="absolute top-full z-50 mt-1 w-72 rounded-md border border-gray-200 bg-white p-3 shadow-md"
      >
        <!-- Header -->
        <div class="mb-2 flex items-center justify-between">
          <button
            type="button"
            class="rounded p-1 text-gray-600 hover:bg-gray-100"
            aria-label="Previous month"
            @click="prevMonth"
          >
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>

          <button
            type="button"
            class="rounded px-2 py-1 text-sm font-semibold text-gray-800 hover:bg-gray-100"
            @click="goToToday"
          >
            {{ MONTHS[currentMonth] }} {{ currentYear }}
          </button>

          <button
            type="button"
            class="rounded p-1 text-gray-600 hover:bg-gray-100"
            aria-label="Next month"
            @click="nextMonth"
          >
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>

        <!-- Day headers -->
        <div class="mb-1 grid grid-cols-7 text-center">
          <div
            v-for="day in DAYS"
            :key="day"
            class="py-1 text-xs font-medium text-gray-500"
          >
            {{ day }}
          </div>
        </div>

        <!-- Days grid -->
        <div class="grid grid-cols-7 text-center">
          <button
            v-for="(day, index) in calendarDays"
            :key="index"
            type="button"
            :disabled="day.disabled"
            :class="[
              'mx-auto flex h-8 w-8 items-center justify-center rounded-md text-sm transition-colors',
              day.disabled
                ? 'cursor-not-allowed text-gray-300'
                : isSelected(day.date)
                  ? 'bg-gray-900 font-semibold text-white'
                  : isToday(day.date)
                    ? 'border border-gray-900 font-semibold text-gray-900 hover:bg-gray-100'
                    : day.currentMonth
                      ? 'text-gray-700 hover:bg-gray-100'
                      : 'text-gray-400 hover:bg-gray-50',
            ]"
            @click="selectDate(day)"
          >
            {{ day.date.getDate() }}
          </button>
        </div>

        <!-- Footer -->
        <div class="mt-2 flex items-center justify-between border-t border-gray-100 pt-2">
          <button
            type="button"
            class="text-xs text-gray-900 hover:text-gray-700"
            @click="goToToday"
          >
            Today
          </button>
          <button
            v-if="displayValue"
            type="button"
            class="text-xs text-gray-500 hover:text-gray-700"
            @click="clearDate"
          >
            Clear
          </button>
        </div>
      </div>
    </Transition>

    <p
      v-if="error"
      :id="`${pickerId}-error`"
      class="text-sm text-red-600"
      role="alert"
    >
      {{ error }}
    </p>
    <p
      v-else-if="hint"
      :id="`${pickerId}-hint`"
      class="text-sm text-gray-500"
    >
      {{ hint }}
    </p>
  </div>
</template>
