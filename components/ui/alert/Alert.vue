<script setup lang="ts">
import { computed } from 'vue'

type AlertVariant = 'info' | 'success' | 'warning' | 'danger'

interface Props {
  variant?: AlertVariant
  title?: string
  dismissible?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'info',
  title: '',
  dismissible: false,
})

const emit = defineEmits<{
  (e: 'dismiss'): void
}>()

const variantConfig: Record<
  AlertVariant,
  { bg: string; border: string; text: string; icon: string }
> = {
  info: {
    bg: 'bg-info-50',
    border: 'border-info-500',
    text: 'text-info-700',
    icon: 'M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z',
  },
  success: {
    bg: 'bg-success-50',
    border: 'border-success-500',
    text: 'text-success-700',
    icon: 'M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z',
  },
  warning: {
    bg: 'bg-warning-50',
    border: 'border-warning-500',
    text: 'text-warning-700',
    icon: 'M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495ZM10 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 5Zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z',
  },
  danger: {
    bg: 'bg-danger-50',
    border: 'border-danger-500',
    text: 'text-danger-700',
    icon: 'M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z',
  },
}

const config = computed(() => variantConfig[props.variant])

const containerClasses = computed(() => [
  'flex gap-3 rounded-lg border-l-4 p-4',
  config.value.bg,
  config.value.border,
])
</script>

<template>
  <div :class="containerClasses" role="alert">
    <svg
      :class="['h-5 w-5 shrink-0 mt-0.5', config.text]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path fill-rule="evenodd" :d="config.icon" clip-rule="evenodd" />
    </svg>

    <div class="flex-1">
      <h3 v-if="title" :class="['text-sm font-semibold', config.text]">
        {{ title }}
      </h3>
      <div :class="['text-sm', config.text, title ? 'mt-1' : '']">
        <slot />
      </div>
    </div>

    <button
      v-if="dismissible"
      type="button"
      :class="[
        'ml-auto shrink-0 rounded-lg p-1 transition-colors',
        'hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1',
        config.text,
      ]"
      aria-label="Dismiss"
      @click="$emit('dismiss')"
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
  </div>
</template>
