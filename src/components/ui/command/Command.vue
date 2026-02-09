<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import type { CommandItem } from './types'

interface Props {
  modelValue?: boolean
  items: CommandItem[]
  placeholder?: string
  emptyMessage?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  placeholder: 'Type a command or search...',
  emptyMessage: 'No results found.',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'select', item: CommandItem): void
}>()

const searchQuery = ref('')
const inputRef = ref<HTMLInputElement | null>(null)

const filteredItems = computed(() => {
  if (!searchQuery.value) return props.items
  const q = searchQuery.value.toLowerCase()
  return props.items.filter(
    (item) =>
      item.label.toLowerCase().includes(q) ||
      item.value.toLowerCase().includes(q) ||
      (item.group && item.group.toLowerCase().includes(q))
  )
})

const groupedItems = computed(() => {
  const groups: Record<string, CommandItem[]> = {}
  for (const item of filteredItems.value) {
    const group = item.group || 'Actions'
    if (!groups[group]) groups[group] = []
    groups[group].push(item)
  }
  return groups
})

function close() {
  emit('update:modelValue', false)
  searchQuery.value = ''
}

function selectItem(item: CommandItem) {
  if (item.disabled) return
  emit('select', item)
  close()
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') close()
}

watch(
  () => props.modelValue,
  async (open) => {
    if (open) {
      document.body.style.overflow = 'hidden'
      document.addEventListener('keydown', onKeydown)
      await nextTick()
      inputRef.value?.focus()
    } else {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKeydown)
    }
  }
)

onMounted(() => {
  function onGlobalKeydown(event: KeyboardEvent) {
    if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
      event.preventDefault()
      emit('update:modelValue', !props.modelValue)
    }
  }
  document.addEventListener('keydown', onGlobalKeydown)
  onBeforeUnmount(() => {
    document.removeEventListener('keydown', onGlobalKeydown)
    document.removeEventListener('keydown', onKeydown)
    document.body.style.overflow = ''
  })
})
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
        class="fixed inset-0 z-50 flex items-start justify-center pt-[20vh]"
      >
        <!-- Overlay -->
        <div
          class="fixed inset-0 bg-gray-950/50"
          @click="close"
        />

        <!-- Command palette -->
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
            class="relative w-full max-w-lg overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg"
          >
            <!-- Search input -->
            <div class="flex items-center border-b border-gray-200 px-4">
              <svg
                class="mr-2 h-4 w-4 shrink-0 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.45 4.39l3.58 3.58a.75.75 0 1 1-1.06 1.06l-3.58-3.58A7 7 0 0 1 2 9Z"
                  clip-rule="evenodd"
                />
              </svg>
              <input
                ref="inputRef"
                v-model="searchQuery"
                type="text"
                :placeholder="placeholder"
                class="w-full py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none"
              >
            </div>

            <!-- Results -->
            <div class="max-h-72 overflow-y-auto p-2">
              <template v-if="filteredItems.length === 0">
                <p class="px-3 py-6 text-center text-sm text-gray-400">
                  {{ emptyMessage }}
                </p>
              </template>

              <template
                v-for="(groupItems, groupName) in groupedItems"
                :key="groupName"
              >
                <p class="px-3 py-1.5 text-xs font-medium text-gray-400">
                  {{ groupName }}
                </p>
                <button
                  v-for="item in groupItems"
                  :key="item.value"
                  type="button"
                  :disabled="item.disabled"
                  :class="[
                    'flex w-full items-center justify-between rounded-sm px-3 py-2 text-left text-sm transition-colors',
                    item.disabled
                      ? 'cursor-not-allowed text-gray-400'
                      : 'text-gray-700 hover:bg-gray-100',
                  ]"
                  @click="selectItem(item)"
                >
                  <span>{{ item.label }}</span>
                  <kbd
                    v-if="item.shortcut"
                    class="rounded bg-gray-100 px-1.5 py-0.5 text-xs text-gray-500"
                  >
                    {{ item.shortcut }}
                  </kbd>
                </button>
              </template>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>
