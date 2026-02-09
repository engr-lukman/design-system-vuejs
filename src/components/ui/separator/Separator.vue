<script setup lang="ts">
type SeparatorOrientation = 'horizontal' | 'vertical'

interface Props {
  orientation?: SeparatorOrientation
  decorative?: boolean
  label?: string
}

const props = withDefaults(defineProps<Props>(), {
  orientation: 'horizontal',
  decorative: true,
  label: '',
})
</script>

<template>
  <div
    :role="decorative ? 'none' : 'separator'"
    :aria-orientation="decorative ? undefined : orientation"
    :class="[
      orientation === 'horizontal'
        ? 'flex w-full items-center'
        : 'inline-flex h-full flex-col items-center',
    ]"
  >
    <template v-if="label && orientation === 'horizontal'">
      <div class="h-px flex-1 bg-gray-200" />
      <span class="px-3 text-sm text-gray-500">{{ label }}</span>
      <div class="h-px flex-1 bg-gray-200" />
    </template>
    <template v-else>
      <div
        :class="['bg-gray-200', orientation === 'horizontal' ? 'h-px w-full' : 'w-px self-stretch']"
      />
    </template>
  </div>
</template>
