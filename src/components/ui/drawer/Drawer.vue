<script setup lang="ts">
import { onUnmounted, watch } from 'vue'
import type { DrawerSide, DrawerSize } from './types'

interface Props {
  modelValue?: boolean
  side?: DrawerSide
  size?: DrawerSize
  title?: string
  closable?: boolean
  closeOnOverlay?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  side: 'right',
  size: 'md',
  title: '',
  closable: true,
  closeOnOverlay: true,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'close'): void
}>()

const sizeMap: Record<DrawerSide, Record<DrawerSize, string>> = {
  left: { sm: 'w-64', md: 'w-80', lg: 'w-96', xl: 'w-[480px]', full: 'w-screen' },
  right: { sm: 'w-64', md: 'w-80', lg: 'w-96', xl: 'w-[480px]', full: 'w-screen' },
  top: { sm: 'h-32', md: 'h-48', lg: 'h-64', xl: 'h-96', full: 'h-screen' },
  bottom: { sm: 'h-32', md: 'h-48', lg: 'h-64', xl: 'h-96', full: 'h-screen' },
}

const positionClasses: Record<DrawerSide, string> = {
  left: 'inset-y-0 left-0',
  right: 'inset-y-0 right-0',
  top: 'inset-x-0 top-0',
  bottom: 'inset-x-0 bottom-0',
}

const enterFrom: Record<DrawerSide, string> = {
  left: '-translate-x-full',
  right: 'translate-x-full',
  top: '-translate-y-full',
  bottom: 'translate-y-full',
}

function close() {
  if (props.closable) {
    emit('update:modelValue', false)
    emit('close')
  }
}

function onOverlayClick() {
  if (props.closeOnOverlay) close()
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
        <!-- Overlay -->
        <div
          class="fixed inset-0 bg-gray-950/50"
          aria-hidden="true"
          @click="onOverlayClick"
        />

        <!-- Drawer panel -->
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
            :class="['fixed bg-white shadow-xl', positionClasses[side], sizeMap[side][size]]"
          >
            <div class="flex h-full flex-col">
              <!-- Header -->
              <div
                v-if="title || closable"
                class="flex items-center justify-between border-b border-gray-200 px-6 py-4"
              >
                <h2
                  v-if="title"
                  class="text-lg font-semibold text-gray-900"
                >
                  {{ title }}
                </h2>
                <button
                  v-if="closable"
                  type="button"
                  class="ml-auto rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:outline-none"
                  aria-label="Close"
                  @click="close"
                >
                  <svg
                    class="h-5 w-5"
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

              <!-- Body -->
              <div class="flex-1 overflow-y-auto px-6 py-4">
                <slot />
              </div>

              <!-- Footer -->
              <div
                v-if="$slots.footer"
                class="border-t border-gray-200 px-6 py-4"
              >
                <slot name="footer" />
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>
