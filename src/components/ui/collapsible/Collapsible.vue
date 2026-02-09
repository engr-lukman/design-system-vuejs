<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  defaultOpen?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  defaultOpen: false,
})

const isOpen = ref(props.defaultOpen)

function toggle() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="w-full">
    <div @click="toggle">
      <slot
        name="trigger"
        :is-open="isOpen"
        :toggle="toggle"
      />
    </div>
    <div
      :class="[
        'grid transition-all duration-200',
        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
      ]"
    >
      <div class="overflow-hidden">
        <slot :is-open="isOpen" />
      </div>
    </div>
  </div>
</template>
