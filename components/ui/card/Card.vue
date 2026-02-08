<script setup lang="ts">
interface Props {
  padding?: boolean
}

withDefaults(defineProps<Props>(), {
  padding: true,
})
</script>

<template>
  <div class="rounded-xl border border-neutral-200 bg-white shadow-sm overflow-hidden">
    <div v-if="$slots.header" class="border-b border-neutral-200 px-6 py-4">
      <slot name="header" />
    </div>

    <div :class="padding ? 'px-6 py-4' : ''">
      <slot />
    </div>

    <div v-if="$slots.footer" class="border-t border-neutral-200 px-6 py-4">
      <slot name="footer" />
    </div>
  </div>
</template>
