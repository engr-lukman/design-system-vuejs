import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import MultiStepForm from './MultiStepForm.vue'

const meta: Meta<typeof MultiStepForm> = {
  title: 'Form/MultiStepForm',
  component: MultiStepForm,
  tags: ['autodocs'],
  argTypes: {
    linear: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof MultiStepForm>

const defaultSteps = [
  { title: 'Account', description: 'Basic info' },
  { title: 'Profile', description: 'Personal details' },
  { title: 'Settings', description: 'Preferences' },
  { title: 'Review', description: 'Confirm' },
]

export const Default: Story = {
  args: {
    steps: defaultSteps,
  },
  render: (args) => ({
    components: { MultiStepForm },
    setup() {
      const step = ref(0)
      return { args, step }
    },
    template: `
      <MultiStepForm v-bind="args" v-model="step">
        <template #step-0>
          <div class="rounded-lg border border-gray-200 p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Account Information</h3>
            <div class="flex flex-col gap-4">
              <input class="w-full rounded-lg border border-gray-300 px-4 py-2" placeholder="Email address" />
              <input class="w-full rounded-lg border border-gray-300 px-4 py-2" type="password" placeholder="Password" />
            </div>
          </div>
        </template>
        <template #step-1>
          <div class="rounded-lg border border-gray-200 p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Profile Details</h3>
            <div class="flex flex-col gap-4">
              <input class="w-full rounded-lg border border-gray-300 px-4 py-2" placeholder="Full name" />
              <input class="w-full rounded-lg border border-gray-300 px-4 py-2" placeholder="Phone number" />
            </div>
          </div>
        </template>
        <template #step-2>
          <div class="rounded-lg border border-gray-200 p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Settings</h3>
            <label class="inline-flex items-center gap-2">
              <input type="checkbox" class="rounded" />
              <span>Receive email notifications</span>
            </label>
          </div>
        </template>
        <template #step-3>
          <div class="rounded-lg border border-gray-200 p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Review</h3>
            <p class="text-gray-600">Please review your information before submitting.</p>
          </div>
        </template>
      </MultiStepForm>
    `,
  }),
}

export const Linear: Story = {
  args: {
    steps: defaultSteps,
    linear: true,
  },
  render: (args) => ({
    components: { MultiStepForm },
    setup() {
      const step = ref(0)
      return { args, step }
    },
    template: `
      <MultiStepForm v-bind="args" v-model="step">
        <template #step-0>
          <div class="rounded-lg border border-gray-200 p-6">
            <p class="text-gray-600">Step 1: You must go in order (linear mode).</p>
          </div>
        </template>
        <template #step-1>
          <div class="rounded-lg border border-gray-200 p-6">
            <p class="text-gray-600">Step 2: Continue forward.</p>
          </div>
        </template>
        <template #step-2>
          <div class="rounded-lg border border-gray-200 p-6">
            <p class="text-gray-600">Step 3: Almost there.</p>
          </div>
        </template>
        <template #step-3>
          <div class="rounded-lg border border-gray-200 p-6">
            <p class="text-gray-600">Step 4: Complete!</p>
          </div>
        </template>
      </MultiStepForm>
    `,
  }),
}

export const CustomActions: Story = {
  args: {
    steps: [{ title: 'Step 1' }, { title: 'Step 2' }, { title: 'Step 3' }],
  },
  render: (args) => ({
    components: { MultiStepForm },
    setup() {
      const step = ref(0)
      return { args, step }
    },
    template: `
      <MultiStepForm v-bind="args" v-model="step">
        <template #step-0>
          <div class="rounded-lg border border-gray-200 p-6">
            <p class="text-gray-600">Custom action buttons below.</p>
          </div>
        </template>
        <template #step-1>
          <div class="rounded-lg border border-gray-200 p-6">
            <p class="text-gray-600">Step 2 content.</p>
          </div>
        </template>
        <template #step-2>
          <div class="rounded-lg border border-gray-200 p-6">
            <p class="text-gray-600">Final step.</p>
          </div>
        </template>
        <template #actions="{ isFirstStep, isLastStep, next, prev }">
          <button
            v-if="!isFirstStep"
            class="rounded-lg border border-gray-300 px-4 py-2 text-sm"
            @click="prev"
          >
            ← Back
          </button>
          <span v-else />
          <div class="flex gap-2">
            <button
              v-if="!isLastStep"
              class="rounded-lg bg-gray-200 px-4 py-2 text-sm"
              @click="next"
            >
              Skip
            </button>
            <button
              class="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white"
              @click="next"
            >
              {{ isLastStep ? 'Submit' : 'Continue →' }}
            </button>
          </div>
        </template>
      </MultiStepForm>
    `,
  }),
}
