<script setup lang="ts">
import { computed, provide, readonly } from 'vue'
import { MULTI_STEP_FORM_KEY, type StepDefinition } from './types'

interface Props {
  steps: StepDefinition[]
  modelValue?: number
  linear?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: 0,
  linear: false,
})

const emit = defineEmits<{
  (e: 'update:modelValue', step: number): void
  (e: 'step-change', step: number, direction: 'next' | 'prev' | 'jump'): void
  (e: 'complete'): void
}>()

const currentStep = computed(() => props.modelValue)
const totalSteps = computed(() => props.steps.length)
const isFirstStep = computed(() => currentStep.value === 0)
const isLastStep = computed(() => currentStep.value === totalSteps.value - 1)

function goTo(step: number) {
  if (step < 0 || step >= totalSteps.value) return
  if (props.linear && step > currentStep.value + 1) return

  const direction = step > currentStep.value ? 'next' : step < currentStep.value ? 'prev' : 'jump'
  emit('update:modelValue', step)
  emit('step-change', step, direction)
}

function next() {
  if (!isLastStep.value) {
    goTo(currentStep.value + 1)
  } else {
    emit('complete')
  }
}

function prev() {
  if (!isFirstStep.value) {
    goTo(currentStep.value - 1)
  }
}

provide(MULTI_STEP_FORM_KEY, {
  currentStep: readonly(currentStep),
  totalSteps: readonly(totalSteps),
  isFirstStep: readonly(isFirstStep),
  isLastStep: readonly(isLastStep),
  next,
  prev,
  goTo,
})

defineExpose({ next, prev, goTo })
</script>

<template>
  <div class="flex flex-col gap-8">
    <!-- Step Indicator -->
    <nav aria-label="Progress">
      <ol class="flex items-center">
        <li
          v-for="(step, index) in steps"
          :key="index"
          :class="['relative flex items-center', index < steps.length - 1 ? 'flex-1' : '']"
        >
          <!-- Connector line -->
          <div
            v-if="index > 0"
            :class="[
              'absolute top-4 right-1/2 -left-full h-0.5 transition-colors duration-200',
              index <= currentStep ? 'bg-gray-900' : 'bg-gray-200',
            ]"
            aria-hidden="true"
          />

          <button
            type="button"
            :class="[
              'group relative z-10 flex flex-col items-center gap-2',
              !linear || index <= currentStep + 1 ? 'cursor-pointer' : 'cursor-not-allowed',
            ]"
            :disabled="linear && index > currentStep + 1"
            :aria-current="index === currentStep ? 'step' : undefined"
            @click="goTo(index)"
          >
            <!-- Circle -->
            <span
              :class="[
                'flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition-colors duration-200',
                index < currentStep
                  ? 'bg-gray-900 text-white'
                  : index === currentStep
                    ? 'border-2 border-gray-900 bg-white text-gray-900'
                    : 'border-2 border-gray-300 bg-white text-gray-500',
              ]"
            >
              <!-- Check icon for completed steps -->
              <svg
                v-if="index < currentStep"
                class="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span v-else>{{ index + 1 }}</span>
            </span>

            <!-- Label -->
            <span class="flex flex-col items-center">
              <span
                :class="[
                  'text-xs font-medium whitespace-nowrap',
                  index <= currentStep ? 'text-gray-900' : 'text-gray-500',
                ]"
              >
                {{ step.title }}
              </span>
              <span
                v-if="step.description"
                class="hidden text-xs text-gray-400 sm:block"
              >
                {{ step.description }}
              </span>
            </span>
          </button>
        </li>
      </ol>
    </nav>

    <!-- Step Content -->
    <div class="min-h-0">
      <template
        v-for="(step, index) in steps"
        :key="index"
      >
        <div
          v-show="index === currentStep"
          role="tabpanel"
        >
          <slot
            :name="`step-${index}`"
            :step="step"
            :index="index"
          />
        </div>
      </template>
    </div>

    <!-- Navigation -->
    <div
      v-if="$slots.actions"
      class="flex items-center justify-between border-t border-gray-200 pt-6"
    >
      <slot
        name="actions"
        :current-step="currentStep"
        :is-first-step="isFirstStep"
        :is-last-step="isLastStep"
        :next="next"
        :prev="prev"
        :go-to="goTo"
      />
    </div>
    <div
      v-else
      class="flex items-center justify-between border-t border-gray-200 pt-6"
    >
      <button
        type="button"
        :disabled="isFirstStep"
        :class="[
          'rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors',
          isFirstStep ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-50',
        ]"
        @click="prev"
      >
        Previous
      </button>
      <button
        type="button"
        class="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-900/90"
        @click="next"
      >
        {{ isLastStep ? 'Complete' : 'Next' }}
      </button>
    </div>
  </div>
</template>
