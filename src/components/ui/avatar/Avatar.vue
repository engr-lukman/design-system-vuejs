<script setup lang="ts">
import { computed } from 'vue'

type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type AvatarShape = 'circle' | 'square'

interface Props {
  src?: string
  alt?: string
  name?: string
  size?: AvatarSize
  shape?: AvatarShape
  status?: 'online' | 'offline' | 'away' | 'busy'
}

const props = withDefaults(defineProps<Props>(), {
  src: '',
  alt: '',
  name: '',
  size: 'md',
  shape: 'circle',
  status: undefined,
})

const sizeClasses: Record<AvatarSize, string> = {
  xs: 'h-6 w-6 text-xs',
  sm: 'h-8 w-8 text-sm',
  md: 'h-10 w-10 text-base',
  lg: 'h-12 w-12 text-lg',
  xl: 'h-16 w-16 text-xl',
}

const statusSizes: Record<AvatarSize, string> = {
  xs: 'h-1.5 w-1.5',
  sm: 'h-2 w-2',
  md: 'h-2.5 w-2.5',
  lg: 'h-3 w-3',
  xl: 'h-3.5 w-3.5',
}

const statusColors: Record<string, string> = {
  online: 'bg-green-500',
  offline: 'bg-gray-400',
  away: 'bg-amber-500',
  busy: 'bg-red-500',
}

const initials = computed(() => {
  if (!props.name) return ''
  return props.name
    .split(' ')
    .map((word) => word.charAt(0))
    .slice(0, 2)
    .join('')
    .toUpperCase()
})

const containerClasses = computed(() => [
  'relative inline-flex items-center justify-center overflow-hidden bg-gray-200 text-gray-600 font-medium shrink-0',
  sizeClasses[props.size],
  props.shape === 'circle' ? 'rounded-full' : 'rounded-lg',
])
</script>

<template>
  <span :class="containerClasses">
    <img
      v-if="src"
      :src="src"
      :alt="alt || name"
      class="h-full w-full object-cover"
      @error="($event.target as HTMLImageElement).style.display = 'none'"
    >
    <span
      v-else-if="initials"
      aria-hidden="true"
    >{{ initials }}</span>
    <svg
      v-else
      class="h-[60%] w-[60%] text-gray-400"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z"
      />
    </svg>

    <!-- Status indicator -->
    <span
      v-if="status"
      :class="[
        'absolute right-0 bottom-0 block rounded-full ring-2 ring-white',
        statusSizes[size],
        statusColors[status],
      ]"
      :aria-label="status"
    />
  </span>
</template>
