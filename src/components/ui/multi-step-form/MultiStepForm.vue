<script setup lang="ts">
import { computed } from 'vue'
import type { MultiStepFormStep, StepStatus } from './types'

interface Props {
  steps: MultiStepFormStep[]
  modelValue?: number
  showNavigation?: boolean
  nextLabel?: string
  prevLabel?: string
  finishLabel?: string
  linear?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: 0,
  showNavigation: true,
  nextLabel: 'Next',
  prevLabel: 'Back',
  finishLabel: 'Finish',
  linear: true,
})

const emit = defineEmits<{
  (e: 'update:modelValue', step: number): void
  (e: 'next', step: number): void
  (e: 'prev', step: number): void
  (e: 'finish'): void
  (e: 'step-click', step: number): void
}>()

const totalSteps = computed(() => props.steps.length)
const isFirstStep = computed(() => props.modelValue === 0)
const isLastStep = computed(() => props.modelValue === totalSteps.value - 1)

function getStepStatus(index: number): StepStatus {
  if (index < props.modelValue) return 'completed'
  if (index === props.modelValue) return 'current'
  return 'upcoming'
}

function goToStep(index: number) {
  if (props.linear && index > props.modelValue) return
  emit('update:modelValue', index)
  emit('step-click', index)
}

function next() {
  if (!isLastStep.value) {
    const nextStep = props.modelValue + 1
    emit('update:modelValue', nextStep)
    emit('next', nextStep)
  } else {
    emit('finish')
  }
}

function prev() {
  if (!isFirstStep.value) {
    const prevStep = props.modelValue - 1
    emit('update:modelValue', prevStep)
    emit('prev', prevStep)
  }
}
</script>

<template>
  <div class="w-full">
    <!-- Step indicator -->
    <nav aria-label="Progress">
      <ol class="flex items-center">
        <li
          v-for="(step, index) in steps"
          :key="index"
          :class="['flex items-center', index < totalSteps - 1 ? 'flex-1' : '']"
        >
          <button
            type="button"
            :class="[
              'group flex items-center',
              !linear || index <= modelValue ? 'cursor-pointer' : 'cursor-not-allowed',
            ]"
            :disabled="linear && index > modelValue"
            :aria-current="getStepStatus(index) === 'current' ? 'step' : undefined"
            @click="goToStep(index)"
          >
            <!-- Step circle -->
            <span
              :class="[
                'flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-medium transition-colors duration-150',
                getStepStatus(index) === 'completed'
                  ? 'bg-gray-900 text-white'
                  : getStepStatus(index) === 'current'
                    ? 'border-2 border-gray-900 bg-white text-gray-900'
                    : 'border-2 border-gray-300 bg-white text-gray-500',
              ]"
            >
              <!-- Checkmark for completed -->
              <svg
                v-if="getStepStatus(index) === 'completed'"
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

            <!-- Step label -->
            <span class="ml-3 hidden sm:block">
              <span
                :class="[
                  'text-sm font-medium',
                  getStepStatus(index) === 'completed'
                    ? 'text-gray-900'
                    : getStepStatus(index) === 'current'
                      ? 'text-gray-900'
                      : 'text-gray-500',
                ]"
              >
                {{ step.label }}
              </span>
              <span
                v-if="step.description"
                :class="[
                  'block text-xs',
                  getStepStatus(index) === 'upcoming' ? 'text-gray-400' : 'text-gray-500',
                ]"
              >
                {{ step.description }}
              </span>
            </span>
          </button>

          <!-- Connector line -->
          <div
            v-if="index < totalSteps - 1"
            :class="[
              'mx-4 h-0.5 flex-1 transition-colors duration-150',
              index < modelValue ? 'bg-gray-900' : 'bg-gray-200',
            ]"
            aria-hidden="true"
          />
        </li>
      </ol>
    </nav>

    <!-- Step content -->
    <div class="mt-8">
      <template
        v-for="(_, index) in steps"
        :key="index"
      >
        <div
          v-show="index === modelValue"
          role="tabpanel"
          :aria-label="steps[index]?.label"
        >
          <slot
            :name="`step-${index + 1}`"
            :step="index"
            :status="getStepStatus(index)"
          />
        </div>
      </template>
    </div>

    <!-- Navigation buttons -->
    <div
      v-if="showNavigation"
      class="mt-8 flex items-center justify-between border-t border-gray-200 pt-4"
    >
      <button
        type="button"
        :class="[
          'inline-flex items-center rounded-md px-4 py-2 text-sm font-medium transition-colors duration-150',
          'border border-gray-200 bg-white text-gray-900 hover:bg-gray-100',
          'focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none',
          'disabled:pointer-events-none disabled:opacity-50',
        ]"
        :disabled="isFirstStep"
        @click="prev"
      >
        <svg
          class="mr-1.5 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
            clip-rule="evenodd"
          />
        </svg>
        {{ prevLabel }}
      </button>

      <span class="text-sm text-gray-500"> Step {{ modelValue + 1 }} of {{ totalSteps }} </span>

      <button
        type="button"
        :class="[
          'inline-flex items-center rounded-md px-4 py-2 text-sm font-medium transition-colors duration-150',
          'bg-gray-900 text-white hover:bg-gray-900/90',
          'focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none',
          'disabled:pointer-events-none disabled:opacity-50',
        ]"
        @click="next"
      >
        {{ isLastStep ? finishLabel : nextLabel }}
        <svg
          v-if="!isLastStep"
          class="ml-1.5 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
