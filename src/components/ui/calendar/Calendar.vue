<script setup lang="ts">
import { computed, ref } from 'vue'

interface Props {
  modelValue?: Date
  minDate?: Date | null
  maxDate?: Date | null
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: undefined,
  minDate: null,
  maxDate: null,
})

const emit = defineEmits<{
  (e: 'update:modelValue', date: Date): void
}>()

const today = new Date()
const viewYear = ref(props.modelValue?.getFullYear() ?? today.getFullYear())
const viewMonth = ref(props.modelValue?.getMonth() ?? today.getMonth())

const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
const monthNames = [
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

const calendarDays = computed(() => {
  const firstDay = new Date(viewYear.value, viewMonth.value, 1)
  const lastDay = new Date(viewYear.value, viewMonth.value + 1, 0)
  const startPad = firstDay.getDay()
  const days: { date: Date; currentMonth: boolean }[] = []

  // Previous month padding
  const prevLastDay = new Date(viewYear.value, viewMonth.value, 0)
  for (let i = startPad - 1; i >= 0; i--) {
    days.push({
      date: new Date(viewYear.value, viewMonth.value - 1, prevLastDay.getDate() - i),
      currentMonth: false,
    })
  }

  // Current month
  for (let d = 1; d <= lastDay.getDate(); d++) {
    days.push({
      date: new Date(viewYear.value, viewMonth.value, d),
      currentMonth: true,
    })
  }

  // Next month padding
  const remaining = 42 - days.length
  for (let d = 1; d <= remaining; d++) {
    days.push({
      date: new Date(viewYear.value, viewMonth.value + 1, d),
      currentMonth: false,
    })
  }

  return days
})

function isToday(date: Date) {
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  )
}

function isSelected(date: Date) {
  if (!props.modelValue) return false
  return (
    date.getDate() === props.modelValue.getDate() &&
    date.getMonth() === props.modelValue.getMonth() &&
    date.getFullYear() === props.modelValue.getFullYear()
  )
}

function isDisabled(date: Date) {
  if (props.minDate && date < props.minDate) return true
  if (props.maxDate && date > props.maxDate) return true
  return false
}

function selectDate(date: Date) {
  if (isDisabled(date)) return
  emit('update:modelValue', date)
}

function prevMonth() {
  if (viewMonth.value === 0) {
    viewMonth.value = 11
    viewYear.value--
  } else {
    viewMonth.value--
  }
}

function nextMonth() {
  if (viewMonth.value === 11) {
    viewMonth.value = 0
    viewYear.value++
  } else {
    viewMonth.value++
  }
}

function goToToday() {
  viewYear.value = today.getFullYear()
  viewMonth.value = today.getMonth()
  selectDate(new Date(today.getFullYear(), today.getMonth(), today.getDate()))
}
</script>

<template>
  <div class="w-72 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
    <!-- Header -->
    <div class="mb-4 flex items-center justify-between">
      <button
        type="button"
        class="rounded-md p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
        aria-label="Previous month"
        @click="prevMonth"
      >
        <svg
          class="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.56 10l3.22 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>

      <button
        type="button"
        class="text-sm font-semibold text-gray-900 hover:text-gray-600"
        @click="goToToday"
      >
        {{ monthNames[viewMonth] }} {{ viewYear }}
      </button>

      <button
        type="button"
        class="rounded-md p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
        aria-label="Next month"
        @click="nextMonth"
      >
        <svg
          class="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.44 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>

    <!-- Weekday headers -->
    <div class="mb-1 grid grid-cols-7 text-center text-xs font-medium text-gray-500">
      <div
        v-for="day in weekDays"
        :key="day"
        class="py-1"
      >
        {{ day }}
      </div>
    </div>

    <!-- Days grid -->
    <div class="grid grid-cols-7 text-center text-sm">
      <button
        v-for="(day, index) in calendarDays"
        :key="index"
        type="button"
        :disabled="isDisabled(day.date)"
        :class="[
          'relative h-9 w-9 rounded-md text-sm transition-colors',
          !day.currentMonth && 'text-gray-300',
          day.currentMonth &&
            !isSelected(day.date) &&
            !isDisabled(day.date) &&
            'text-gray-700 hover:bg-gray-100',
          isToday(day.date) && !isSelected(day.date) && 'bg-gray-100 font-semibold text-gray-900',
          isSelected(day.date) && 'bg-gray-900 font-semibold text-white hover:bg-gray-900/90',
          isDisabled(day.date) && 'cursor-not-allowed text-gray-300',
        ]"
        @click="selectDate(day.date)"
      >
        {{ day.date.getDate() }}
      </button>
    </div>
  </div>
</template>
