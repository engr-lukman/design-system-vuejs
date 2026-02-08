<script setup lang="ts">
import { computed, useId } from 'vue'
import type { TabItem } from './types'

interface Props {
  tabs: TabItem[]
  modelValue: string
  variant?: 'underline' | 'pills'
  fullWidth?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'underline',
  fullWidth: false,
})

const emit = defineEmits<{
  (e: 'update:modelValue', key: string): void
}>()

const tabsId = useId()

const tabListClasses = computed(() => {
  if (props.variant === 'pills') {
    return ['inline-flex gap-1 rounded-lg bg-gray-100 p-1', props.fullWidth ? 'w-full' : '']
  }
  return ['flex border-b border-gray-200', props.fullWidth ? 'w-full' : '']
})

function tabClasses(tab: TabItem) {
  const isActive = props.modelValue === tab.key

  if (props.variant === 'pills') {
    return [
      'rounded-md px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
      props.fullWidth ? 'flex-1 text-center' : '',
      tab.disabled
        ? 'text-gray-400 cursor-not-allowed'
        : isActive
          ? 'bg-white text-gray-900 shadow-sm'
          : 'text-gray-600 hover:text-gray-900',
    ]
  }

  return [
    'border-b-2 px-4 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset',
    props.fullWidth ? 'flex-1 text-center' : '',
    tab.disabled
      ? 'border-transparent text-gray-400 cursor-not-allowed'
      : isActive
        ? 'border-blue-600 text-blue-600'
        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
  ]
}

function selectTab(tab: TabItem) {
  if (!tab.disabled) {
    emit('update:modelValue', tab.key)
  }
}
</script>

<template>
  <div>
    <div
      :class="tabListClasses"
      role="tablist"
      :aria-label="'Tabs'"
    >
      <button
        v-for="tab in tabs"
        :id="`${tabsId}-tab-${tab.key}`"
        :key="tab.key"
        type="button"
        role="tab"
        :aria-selected="modelValue === tab.key"
        :aria-controls="`${tabsId}-panel-${tab.key}`"
        :class="tabClasses(tab)"
        :disabled="tab.disabled"
        @click="selectTab(tab)"
      >
        {{ tab.label }}
      </button>
    </div>

    <div class="mt-4">
      <template
        v-for="tab in tabs"
        :key="tab.key"
      >
        <div
          v-show="modelValue === tab.key"
          :id="`${tabsId}-panel-${tab.key}`"
          role="tabpanel"
          :aria-labelledby="`${tabsId}-tab-${tab.key}`"
        >
          <slot
            :name="tab.key"
            :tab="tab"
          />
        </div>
      </template>
    </div>
  </div>
</template>
