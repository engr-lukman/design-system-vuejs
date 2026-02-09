<script setup lang="ts">
type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'p'
  | 'lead'
  | 'large'
  | 'small'
  | 'muted'
  | 'code'
  | 'blockquote'

interface Props {
  variant?: TypographyVariant
  as?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'p',
  as: '',
})

const variantClasses: Record<TypographyVariant, string> = {
  h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight text-gray-900',
  h2: 'scroll-m-20 text-3xl font-semibold tracking-tight text-gray-900',
  h3: 'scroll-m-20 text-2xl font-semibold tracking-tight text-gray-900',
  h4: 'scroll-m-20 text-xl font-semibold tracking-tight text-gray-900',
  p: 'leading-7 text-gray-700',
  lead: 'text-xl text-gray-600',
  large: 'text-lg font-semibold text-gray-900',
  small: 'text-sm font-medium leading-none text-gray-700',
  muted: 'text-sm text-gray-500',
  code: 'relative rounded bg-gray-100 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-gray-900',
  blockquote: 'border-l-4 border-gray-300 pl-4 italic text-gray-600',
}

const defaultTags: Record<TypographyVariant, string> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  p: 'p',
  lead: 'p',
  large: 'p',
  small: 'small',
  muted: 'p',
  code: 'code',
  blockquote: 'blockquote',
}

const tag = props.as || defaultTags[props.variant]
</script>

<template>
  <component
    :is="tag"
    :class="variantClasses[variant]"
  >
    <slot />
  </component>
</template>
