<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import type { ResizablePanel } from './types'

interface Props {
  panels: ResizablePanel[]
  direction?: 'horizontal' | 'vertical'
}

const props = withDefaults(defineProps<Props>(), {
  direction: 'horizontal',
})

const containerRef = ref<HTMLElement | null>(null)
const panelSizes = ref<number[]>([])
const isDragging = ref(false)
const dragIndex = ref(-1)

onMounted(() => {
  panelSizes.value = props.panels.map((p) => p.defaultSize ?? 100 / props.panels.length)
})

const containerClasses = computed(() => [
  'flex h-full w-full overflow-hidden rounded-lg border border-gray-200',
  props.direction === 'horizontal' ? 'flex-row' : 'flex-col',
])

function onPointerDown(index: number, event: PointerEvent) {
  event.preventDefault()
  isDragging.value = true
  dragIndex.value = index

  document.addEventListener('pointermove', onPointerMove)
  document.addEventListener('pointerup', onPointerUp)
}

function onPointerMove(event: PointerEvent) {
  if (!isDragging.value || !containerRef.value) return

  const rect = containerRef.value.getBoundingClientRect()
  const isHorizontal = props.direction === 'horizontal'
  const totalSize = isHorizontal ? rect.width : rect.height
  const offset = isHorizontal ? event.clientX - rect.left : event.clientY - rect.top

  const percent = (offset / totalSize) * 100
  const idx = dragIndex.value

  // Calculate the cumulative size before the handle
  let prevTotal = 0
  for (let i = 0; i < idx; i++) {
    prevTotal += panelSizes.value[i]
  }

  const newLeftSize = percent - prevTotal
  const newRightSize = panelSizes.value[idx] + panelSizes.value[idx + 1] - newLeftSize

  const leftPanel = props.panels[idx]
  const rightPanel = props.panels[idx + 1]

  const minLeft = leftPanel.minSize ?? 10
  const maxLeft = leftPanel.maxSize ?? 90
  const minRight = rightPanel.minSize ?? 10
  const maxRight = rightPanel.maxSize ?? 90

  if (
    newLeftSize >= minLeft &&
    newLeftSize <= maxLeft &&
    newRightSize >= minRight &&
    newRightSize <= maxRight
  ) {
    panelSizes.value[idx] = newLeftSize
    panelSizes.value[idx + 1] = newRightSize
  }
}

function onPointerUp() {
  isDragging.value = false
  dragIndex.value = -1
  document.removeEventListener('pointermove', onPointerMove)
  document.removeEventListener('pointerup', onPointerUp)
}

onBeforeUnmount(() => {
  document.removeEventListener('pointermove', onPointerMove)
  document.removeEventListener('pointerup', onPointerUp)
})
</script>

<template>
  <div
    ref="containerRef"
    :class="containerClasses"
  >
    <template
      v-for="(panel, index) in panels"
      :key="panel.id"
    >
      <div
        :style="{
          [direction === 'horizontal' ? 'width' : 'height']: `${panelSizes[index]}%`,
        }"
        class="overflow-auto"
      >
        <slot :name="panel.id" />
      </div>

      <!-- Handle -->
      <div
        v-if="index < panels.length - 1"
        :class="[
          'group relative flex shrink-0 items-center justify-center bg-gray-100 transition-colors hover:bg-gray-200',
          direction === 'horizontal' ? 'w-1.5 cursor-col-resize' : 'h-1.5 cursor-row-resize',
          isDragging && dragIndex === index ? 'bg-gray-200' : '',
        ]"
        @pointerdown="onPointerDown(index, $event)"
      >
        <div
          :class="[
            'rounded-full bg-gray-400 transition-colors group-hover:bg-gray-600',
            direction === 'horizontal' ? 'h-6 w-0.5' : 'h-0.5 w-6',
          ]"
        />
      </div>
    </template>
  </div>
</template>
