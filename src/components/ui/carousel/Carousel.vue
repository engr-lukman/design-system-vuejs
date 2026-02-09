<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

interface Props {
  autoplay?: boolean
  interval?: number
  loop?: boolean
  showArrows?: boolean
  showDots?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  autoplay: false,
  interval: 3000,
  loop: true,
  showArrows: true,
  showDots: true,
})

const containerRef = ref<HTMLElement | null>(null)
const activeIndex = ref(0)
const slideCount = ref(0)
let autoplayTimer: ReturnType<typeof setInterval> | null = null

function updateSlideCount() {
  if (containerRef.value) {
    slideCount.value = containerRef.value.querySelectorAll('[data-carousel-slide]').length
  }
}

function goTo(index: number) {
  if (index < 0) {
    activeIndex.value = props.loop ? slideCount.value - 1 : 0
  } else if (index >= slideCount.value) {
    activeIndex.value = props.loop ? 0 : slideCount.value - 1
  } else {
    activeIndex.value = index
  }
}

function prev() {
  goTo(activeIndex.value - 1)
}

function next() {
  goTo(activeIndex.value + 1)
}

const translateX = computed(() => `-${activeIndex.value * 100}%`)

function startAutoplay() {
  if (props.autoplay && !autoplayTimer) {
    autoplayTimer = setInterval(next, props.interval)
  }
}

function stopAutoplay() {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
    autoplayTimer = null
  }
}

onMounted(() => {
  updateSlideCount()
  startAutoplay()
})

onBeforeUnmount(() => {
  stopAutoplay()
})
</script>

<template>
  <div
    ref="containerRef"
    class="group relative w-full overflow-hidden rounded-lg"
    @mouseenter="stopAutoplay"
    @mouseleave="startAutoplay"
  >
    <!-- Slides -->
    <div
      class="flex transition-transform duration-500 ease-in-out"
      :style="{ transform: `translateX(${translateX})` }"
    >
      <slot />
    </div>

    <!-- Arrows -->
    <template v-if="showArrows && slideCount > 1">
      <button
        type="button"
        class="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-white/80 p-2 opacity-0 shadow-md transition-opacity group-hover:opacity-100 hover:bg-white"
        aria-label="Previous slide"
        @click="prev"
      >
        <svg
          class="h-4 w-4 text-gray-700"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.56 10l3.22 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <button
        type="button"
        class="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-white/80 p-2 opacity-0 shadow-md transition-opacity group-hover:opacity-100 hover:bg-white"
        aria-label="Next slide"
        @click="next"
      >
        <svg
          class="h-4 w-4 text-gray-700"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.44 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </template>

    <!-- Dots -->
    <div
      v-if="showDots && slideCount > 1"
      class="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5"
    >
      <button
        v-for="i in slideCount"
        :key="i"
        type="button"
        :class="[
          'h-2 rounded-full transition-all',
          activeIndex === i - 1 ? 'w-6 bg-white' : 'w-2 bg-white/60 hover:bg-white/80',
        ]"
        :aria-label="`Go to slide ${i}`"
        @click="goTo(i - 1)"
      />
    </div>
  </div>
</template>
