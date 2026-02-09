<script setup lang="ts">
import { computed } from 'vue'
import type { ChartDataPoint, ChartType } from './types'

interface Props {
  data: ChartDataPoint[]
  type?: ChartType
  height?: number
  showLabels?: boolean
  showValues?: boolean
  title?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'bar',
  height: 200,
  showLabels: true,
  showValues: true,
  title: '',
})

const defaultColors = [
  '#3b82f6',
  '#22c55e',
  '#f59e0b',
  '#ef4444',
  '#8b5cf6',
  '#06b6d4',
  '#f97316',
  '#ec4899',
]

const maxValue = computed(() => Math.max(...props.data.map((d) => d.value), 1))

// Bar chart helpers
// Line chart helpers
const linePoints = computed(() => {
  const w = 400
  const h = props.height
  const padding = 40
  const stepX = (w - padding * 2) / Math.max(props.data.length - 1, 1)
  return props.data.map((d, i) => ({
    x: padding + i * stepX,
    y: h - padding - (d.value / maxValue.value) * (h - padding * 2),
    ...d,
  }))
})

const linePath = computed(() => {
  if (linePoints.value.length === 0) return ''
  return linePoints.value.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')
})

const areaPath = computed(() => {
  if (linePoints.value.length === 0) return ''
  const h = props.height
  const padding = 40
  const first = linePoints.value[0]
  const last = linePoints.value[linePoints.value.length - 1]
  return `${linePath.value} L ${last.x} ${h - padding} L ${first.x} ${h - padding} Z`
})

// Donut chart helpers
const total = computed(() => props.data.reduce((sum, d) => sum + d.value, 0))
const donutSegments = computed(() => {
  let startAngle = -90
  const radius = 60
  const cx = 80
  const cy = 80
  return props.data.map((d, i) => {
    const angle = (d.value / total.value) * 360
    const endAngle = startAngle + angle
    const largeArc = angle > 180 ? 1 : 0
    const startRad = (startAngle * Math.PI) / 180
    const endRad = (endAngle * Math.PI) / 180
    const x1 = cx + radius * Math.cos(startRad)
    const y1 = cy + radius * Math.sin(startRad)
    const x2 = cx + radius * Math.cos(endRad)
    const y2 = cy + radius * Math.sin(endRad)
    const path = `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}`
    startAngle = endAngle
    return {
      path,
      color: d.color || defaultColors[i % defaultColors.length],
      ...d,
    }
  })
})

function getColor(index: number, color?: string) {
  return color || defaultColors[index % defaultColors.length]
}
</script>

<template>
  <div class="w-full">
    <h3
      v-if="title"
      class="mb-3 text-sm font-semibold text-gray-900"
    >
      {{ title }}
    </h3>

    <!-- Bar Chart -->
    <svg
      v-if="type === 'bar'"
      :viewBox="`0 0 400 ${height}`"
      class="w-full"
      role="img"
      :aria-label="title || 'Bar chart'"
    >
      <g
        v-for="(item, i) in data"
        :key="i"
      >
        <rect
          :x="40 + i * (320 / data.length) + 4"
          :y="height - 40 - (item.value / maxValue) * (height - 80)"
          :width="320 / data.length - 8"
          :height="(item.value / maxValue) * (height - 80)"
          :fill="getColor(i, item.color)"
          rx="4"
          class="transition-all duration-300"
        />
        <text
          v-if="showLabels"
          :x="40 + i * (320 / data.length) + 320 / data.length / 2"
          :y="height - 20"
          text-anchor="middle"
          class="fill-gray-500 text-[10px]"
        >
          {{ item.label }}
        </text>
        <text
          v-if="showValues"
          :x="40 + i * (320 / data.length) + 320 / data.length / 2"
          :y="height - 44 - (item.value / maxValue) * (height - 80)"
          text-anchor="middle"
          class="fill-gray-600 text-[10px] font-medium"
        >
          {{ item.value }}
        </text>
      </g>
    </svg>

    <!-- Line Chart -->
    <svg
      v-else-if="type === 'line'"
      :viewBox="`0 0 400 ${height}`"
      class="w-full"
      role="img"
      :aria-label="title || 'Line chart'"
    >
      <!-- Area fill -->
      <path
        :d="areaPath"
        fill="#3b82f6"
        opacity="0.1"
      />
      <!-- Line -->
      <path
        :d="linePath"
        fill="none"
        stroke="#3b82f6"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <!-- Points -->
      <circle
        v-for="(p, i) in linePoints"
        :key="i"
        :cx="p.x"
        :cy="p.y"
        r="4"
        fill="white"
        stroke="#3b82f6"
        stroke-width="2"
      />
      <!-- Labels -->
      <text
        v-for="(p, i) in linePoints"
        :key="'l' + i"
        :x="p.x"
        :y="height - 20"
        text-anchor="middle"
        class="fill-gray-500 text-[10px]"
      >
        {{ p.label }}
      </text>
      <!-- Values -->
      <text
        v-for="(p, i) in linePoints"
        :key="'v' + i"
        :x="p.x"
        :y="p.y - 10"
        text-anchor="middle"
        class="fill-gray-600 text-[10px] font-medium"
      >
        {{ p.value }}
      </text>
    </svg>

    <!-- Donut Chart -->
    <div
      v-else-if="type === 'donut'"
      class="flex items-center gap-6"
    >
      <svg
        viewBox="0 0 160 160"
        class="h-40 w-40 shrink-0"
        role="img"
        :aria-label="title || 'Donut chart'"
      >
        <circle
          cx="80"
          cy="80"
          r="60"
          fill="none"
          stroke="#f3f4f6"
          stroke-width="20"
        />
        <path
          v-for="(seg, i) in donutSegments"
          :key="i"
          :d="seg.path"
          fill="none"
          :stroke="seg.color"
          stroke-width="20"
          stroke-linecap="round"
        />
        <text
          x="80"
          y="76"
          text-anchor="middle"
          class="fill-gray-900 text-lg font-bold"
        >
          {{ total }}
        </text>
        <text
          x="80"
          y="92"
          text-anchor="middle"
          class="fill-gray-400 text-[10px]"
        >Total</text>
      </svg>

      <!-- Legend -->
      <div class="min-w-0 space-y-1.5">
        <div
          v-for="(item, i) in data"
          :key="i"
          class="flex items-center gap-2 text-sm"
        >
          <span
            class="h-2.5 w-2.5 shrink-0 rounded-full"
            :style="{ backgroundColor: getColor(i, item.color) }"
          />
          <span class="truncate text-gray-600">{{ item.label }}</span>
          <span class="ml-auto font-medium text-gray-900">{{ item.value }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
