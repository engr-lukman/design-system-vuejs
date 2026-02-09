<script setup lang="ts">
interface Props {
  active?: boolean
}

withDefaults(defineProps<Props>(), {
  active: false,
})
</script>

<template>
  <div
    data-carousel-slide
    class="w-full shrink-0"
  >
    <slot />
  </div>
</template>
