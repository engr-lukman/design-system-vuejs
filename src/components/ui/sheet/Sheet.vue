<script setup lang="ts">
import { onUnmounted, watch } from 'vue'
import type { SheetSide } from './types'

interface Props {
  modelValue?: boolean
  side?: SheetSide
  title?: string
  description?: string
  closable?: boolean
  closeOnOverlay?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  side: 'right',
  title: '',
  description: '',
  closable: true,
  closeOnOverlay: true,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'close'): void
}>()

const sideClasses: Record<SheetSide, string> = {
  top: 'inset-x-0 top-0 max-h-[80vh] rounded-b-lg',
  bottom: 'inset-x-0 bottom-0 max-h-[80vh] rounded-t-lg',
  left: 'inset-y-0 left-0 w-full max-w-md',
  right: 'inset-y-0 right-0 w-full max-w-md',
}

const enterFrom: Record<SheetSide, string> = {
  top: '-translate-y-full',
  bottom: 'translate-y-full',
  left: '-translate-x-full',
  right: 'translate-x-full',
}

function close() {
  if (props.closable) {
    emit('update:modelValue', false)
    emit('close')
  }
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') close()
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
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="modelValue"
        class="fixed inset-0 z-50"
      >
        <div
          class="fixed inset-0 bg-gray-950/50"
          @click="closeOnOverlay && close()"
        />

        <Transition
          enter-active-class="transform transition duration-300 ease-out"
          :enter-from-class="enterFrom[side]"
          enter-to-class="translate-x-0 translate-y-0"
          leave-active-class="transform transition duration-200 ease-in"
          leave-from-class="translate-x-0 translate-y-0"
          :leave-to-class="enterFrom[side]"
        >
          <div
            v-if="modelValue"
            :class="['fixed overflow-y-auto bg-white shadow-xl', sideClasses[side]]"
          >
            <!-- Header -->
            <div class="flex items-start justify-between p-6">
              <div>
                <h2
                  v-if="title"
                  class="text-lg font-semibold text-gray-900"
                >
                  {{ title }}
                </h2>
                <p
                  v-if="description"
                  class="mt-1 text-sm text-gray-500"
                >
                  {{ description }}
                </p>
              </div>
              <button
                v-if="closable"
                type="button"
                class="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:outline-none"
                aria-label="Close"
                @click="close"
              >
                <svg
                  class="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"
                  />
                </svg>
              </button>
            </div>

            <!-- Content -->
            <div class="px-6 pb-6">
              <slot />
            </div>

            <!-- Footer -->
            <div
              v-if="$slots.footer"
              class="border-t border-gray-200 p-6"
            >
              <slot name="footer" />
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>
