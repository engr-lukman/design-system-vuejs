<script setup lang="ts">
import { Button } from '../components'
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-50 p-8">
    <div class="text-center">
      <h1 class="mb-4 text-2xl font-bold text-gray-900">
        Design System — Vue.js
      </h1>
      <p class="mb-6 text-gray-600">
        Run <code class="rounded bg-gray-200 px-1.5 py-0.5 text-sm">pnpm storybook</code> to browse
        all components.
      </p>
      <Button variant="primary">
        Get Started
      </Button>
    </div>
  </div>
</template>
