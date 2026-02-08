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
    return ['inline-flex gap-1 rounded-lg bg-neutral-100 p-1', props.fullWidth ? 'w-full' : '']
  }
  return ['flex border-b border-neutral-200', props.fullWidth ? 'w-full' : '']
})

function tabClasses(tab: TabItem) {
  const isActive = props.modelValue === tab.key

  if (props.variant === 'pills') {
    return [
      'rounded-md px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500',
      props.fullWidth ? 'flex-1 text-center' : '',
      tab.disabled
        ? 'text-neutral-400 cursor-not-allowed'
        : isActive
          ? 'bg-white text-neutral-900 shadow-sm'
          : 'text-neutral-600 hover:text-neutral-900',
    ]
  }

  return [
    'border-b-2 px-4 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-inset',
    props.fullWidth ? 'flex-1 text-center' : '',
    tab.disabled
      ? 'border-transparent text-neutral-400 cursor-not-allowed'
      : isActive
        ? 'border-primary-600 text-primary-600'
        : 'border-transparent text-neutral-500 hover:border-neutral-300 hover:text-neutral-700',
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
    <div :class="tabListClasses" role="tablist" :aria-label="'Tabs'">
      <button
        v-for="tab in tabs"
        :key="tab.key"
        :id="`${tabsId}-tab-${tab.key}`"
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
      <template v-for="tab in tabs" :key="tab.key">
        <div
          v-show="modelValue === tab.key"
          :id="`${tabsId}-panel-${tab.key}`"
          role="tabpanel"
          :aria-labelledby="`${tabsId}-tab-${tab.key}`"
        >
          <slot :name="tab.key" :tab="tab" />
        </div>
      </template>
    </div>
  </div>
</template>
