<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  ratio?: number
}

const props = withDefaults(defineProps<Props>(), {
  ratio: 16 / 9,
})

const paddingBottom = computed(() => `${(1 / props.ratio) * 100}%`)
</script>

<template>
  <div
    class="relative w-full"
    :style="{ paddingBottom }"
  >
    <div class="absolute inset-0">
      <slot />
    </div>
  </div>
</template>
