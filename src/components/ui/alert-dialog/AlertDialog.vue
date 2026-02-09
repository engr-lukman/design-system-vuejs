<script setup lang="ts">
import { onUnmounted, watch } from 'vue'
import type { AlertDialogVariant } from './types'

interface Props {
  modelValue?: boolean
  title?: string
  description?: string
  confirmLabel?: string
  cancelLabel?: string
  variant?: AlertDialogVariant
  closable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  title: 'Are you sure?',
  description: '',
  confirmLabel: 'Continue',
  cancelLabel: 'Cancel',
  variant: 'default',
  closable: true,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'confirm'): void
  (e: 'cancel'): void
}>()

function close() {
  emit('update:modelValue', false)
  emit('cancel')
}

function confirm() {
  emit('update:modelValue', false)
  emit('confirm')
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape' && props.closable) close()
}

watch(
  () => props.modelValue,
  (open) => {
    if (open) {
      document.body.style.overflow = 'hidden'
      document.addEventListener('keydown', onKeydown)
    } else {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKeydown)
    }
  }
)

onUnmounted(() => {
  document.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})

const confirmClasses: Record<AlertDialogVariant, string> = {
  default: 'bg-gray-900 text-white hover:bg-gray-900/90 focus-visible:ring-gray-950',
  danger: 'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-gray-950',
}
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="modelValue"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        <!-- Overlay -->
        <div
          class="fixed inset-0 bg-gray-950/50"
          aria-hidden="true"
        />

        <!-- Dialog -->
        <Transition
          enter-active-class="duration-200 ease-out"
          enter-from-class="scale-95 opacity-0"
          enter-to-class="scale-100 opacity-100"
          leave-active-class="duration-150 ease-in"
          leave-from-class="scale-100 opacity-100"
          leave-to-class="scale-95 opacity-0"
        >
          <div
            v-if="modelValue"
            class="relative w-full max-w-md rounded-lg bg-white p-6 shadow-lg"
            role="alertdialog"
            aria-modal="true"
            :aria-labelledby="title ? 'alert-dialog-title' : undefined"
            :aria-describedby="description ? 'alert-dialog-description' : undefined"
          >
            <h2
              v-if="title"
              id="alert-dialog-title"
              class="text-lg font-semibold text-gray-900"
            >
              {{ title }}
            </h2>

            <p
              v-if="description"
              id="alert-dialog-description"
              class="mt-2 text-sm text-gray-500"
            >
              {{ description }}
            </p>

            <slot />

            <div class="mt-6 flex justify-end gap-3">
              <button
                type="button"
                class="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none"
                @click="close"
              >
                {{ cancelLabel }}
              </button>
              <button
                type="button"
                :class="[
                  'rounded-md px-4 py-2 text-sm font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
                  confirmClasses[variant],
                ]"
                @click="confirm"
              >
                {{ confirmLabel }}
              </button>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>
