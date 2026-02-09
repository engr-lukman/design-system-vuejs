<script setup lang="ts">
import { useSonner } from './useSonner'

type Position =
  | 'top-right'
  | 'top-left'
  | 'bottom-right'
  | 'bottom-left'
  | 'top-center'
  | 'bottom-center'

interface Props {
  position?: Position
  maxVisible?: number
}

const props = withDefaults(defineProps<Props>(), {
  position: 'bottom-right',
  maxVisible: 5,
})

const { toasts, dismiss } = useSonner()

function handleAction(toast: { id: string; action?: { label: string; onClick: () => void } }) {
  toast.action?.onClick()
  dismiss(toast.id)
}

const positionClasses: Record<Position, string> = {
  'top-right': 'top-4 right-4',
  'top-left': 'top-4 left-4',
  'bottom-right': 'bottom-4 right-4',
  'bottom-left': 'bottom-4 left-4',
  'top-center': 'top-4 left-1/2 -translate-x-1/2',
  'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2',
}

const variantStyles: Record<
  string,
  { bg: string; border: string; icon: string; iconColor: string }
> = {
  default: { bg: 'bg-white', border: 'border-gray-200', icon: '', iconColor: '' },
  success: {
    bg: 'bg-white',
    border: 'border-green-200',
    icon: '✓',
    iconColor: 'text-green-600 bg-green-100',
  },
  error: {
    bg: 'bg-white',
    border: 'border-red-200',
    icon: '✕',
    iconColor: 'text-red-600 bg-red-100',
  },
  warning: {
    bg: 'bg-white',
    border: 'border-amber-200',
    icon: '!',
    iconColor: 'text-amber-600 bg-amber-100',
  },
  info: {
    bg: 'bg-white',
    border: 'border-blue-200',
    icon: 'i',
    iconColor: 'text-blue-600 bg-blue-100',
  },
}
</script>

<template>
  <Teleport to="body">
    <div
      :class="['fixed z-[100] flex w-80 flex-col gap-2', positionClasses[position]]"
      role="region"
      aria-label="Notifications"
    >
      <TransitionGroup
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="translate-y-2 scale-95 opacity-0"
        enter-to-class="translate-y-0 scale-100 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="translate-y-0 scale-100 opacity-100"
        leave-to-class="translate-y-2 scale-95 opacity-0"
        move-class="transition duration-200 ease-in-out"
      >
        <div
          v-for="toast in toasts.slice(-maxVisible)"
          :key="toast.id"
          :class="[
            'flex items-start gap-3 rounded-md border p-4 shadow-lg',
            variantStyles[toast.variant || 'default'].bg,
            variantStyles[toast.variant || 'default'].border,
          ]"
          role="alert"
        >
          <!-- Icon -->
          <span
            v-if="variantStyles[toast.variant || 'default'].icon"
            :class="[
              'flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold',
              variantStyles[toast.variant || 'default'].iconColor,
            ]"
          >
            {{ variantStyles[toast.variant || 'default'].icon }}
          </span>

          <!-- Content -->
          <div class="min-w-0 flex-1">
            <p class="text-sm font-medium text-gray-900">
              {{ toast.title }}
            </p>
            <p
              v-if="toast.description"
              class="mt-0.5 text-sm text-gray-500"
            >
              {{ toast.description }}
            </p>
            <button
              v-if="toast.action"
              type="button"
              class="mt-2 text-sm font-medium text-gray-900 hover:text-gray-700"
              @click="handleAction(toast)"
            >
              {{ toast.action.label }}
            </button>
          </div>

          <!-- Close -->
          <button
            type="button"
            class="shrink-0 rounded p-0.5 text-gray-400 hover:text-gray-600"
            aria-label="Dismiss"
            @click="dismiss(toast.id)"
          >
            <svg
              class="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"
              />
            </svg>
          </button>
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template>
