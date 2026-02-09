import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import MultiStepForm from './MultiStepForm.vue'

const meta: Meta<typeof MultiStepForm> = {
  title: 'Form/MultiStepForm',
  component: MultiStepForm,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: { type: 'number', min: 0, max: 3 } },
    showNavigation: { control: 'boolean' },
    linear: { control: 'boolean' },
    nextLabel: { control: 'text' },
    prevLabel: { control: 'text' },
    finishLabel: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof MultiStepForm>

const defaultSteps = [
  { label: 'Account', description: 'Create your account' },
  { label: 'Profile', description: 'Set up your profile' },
  { label: 'Review', description: 'Review and confirm' },
]

export const Default: Story = {
  render: (args) => ({
    components: { MultiStepForm },
    setup() {
      const step = ref(0)
      return { args, step }
    },
    template: `
      <MultiStepForm v-bind="args" v-model="step" :steps="args.steps">
        <template #step-1>
          <div class="rounded-md border border-gray-200 p-6">
            <h3 class="text-lg font-semibold text-gray-900">Account Information</h3>
            <p class="mt-1 text-sm text-gray-500">Enter your email and password.</p>
            <div class="mt-4 space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" placeholder="you@example.com" class="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950" />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" placeholder="••••••••" class="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950" />
              </div>
            </div>
          </div>
        </template>
        <template #step-2>
          <div class="rounded-md border border-gray-200 p-6">
            <h3 class="text-lg font-semibold text-gray-900">Profile Details</h3>
            <p class="mt-1 text-sm text-gray-500">Tell us about yourself.</p>
            <div class="mt-4 space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" placeholder="John Doe" class="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950" />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700">Bio</label>
                <textarea rows="3" placeholder="A short bio..." class="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950"></textarea>
              </div>
            </div>
          </div>
        </template>
        <template #step-3>
          <div class="rounded-md border border-gray-200 p-6">
            <h3 class="text-lg font-semibold text-gray-900">Review</h3>
            <p class="mt-1 text-sm text-gray-500">Please review your information before submitting.</p>
            <div class="mt-4 rounded-md bg-gray-50 p-4 text-sm text-gray-700">
              All steps completed. Click <strong>Finish</strong> to submit.
            </div>
          </div>
        </template>
      </MultiStepForm>
    `,
  }),
  args: {
    steps: defaultSteps,
    showNavigation: true,
    linear: true,
  },
}

export const MiddleStep: Story = {
  render: Default.render,
  args: {
    steps: defaultSteps,
    modelValue: 1,
    showNavigation: true,
    linear: false,
  },
}

export const LastStep: Story = {
  render: Default.render,
  args: {
    steps: defaultSteps,
    modelValue: 2,
    showNavigation: true,
    linear: false,
  },
}

export const NonLinear: Story = {
  render: Default.render,
  args: {
    steps: defaultSteps,
    showNavigation: true,
    linear: false,
  },
}

export const NoNavigation: Story = {
  render: (args) => ({
    components: { MultiStepForm },
    setup() {
      const step = ref(1)
      return { args, step }
    },
    template: `
      <MultiStepForm v-bind="args" v-model="step" :steps="args.steps">
        <template #step-1>
          <div class="rounded-md border border-gray-200 p-6">
            <p class="text-sm text-gray-700">Step 1 content — navigation is hidden.</p>
          </div>
        </template>
        <template #step-2>
          <div class="rounded-md border border-gray-200 p-6">
            <p class="text-sm text-gray-700">Step 2 content — navigation is hidden.</p>
          </div>
        </template>
        <template #step-3>
          <div class="rounded-md border border-gray-200 p-6">
            <p class="text-sm text-gray-700">Step 3 content — navigation is hidden.</p>
          </div>
        </template>
      </MultiStepForm>
    `,
  }),
  args: {
    steps: defaultSteps,
    showNavigation: false,
  },
}

export const FourSteps: Story = {
  render: Default.render,
  args: {
    steps: [
      { label: 'Cart', description: 'Review items' },
      { label: 'Shipping', description: 'Delivery address' },
      { label: 'Payment', description: 'Payment method' },
      { label: 'Confirm', description: 'Place order' },
    ],
    showNavigation: true,
    linear: true,
  },
}

export const CustomLabels: Story = {
  render: Default.render,
  args: {
    steps: defaultSteps,
    showNavigation: true,
    linear: true,
    nextLabel: 'Continue',
    prevLabel: 'Go Back',
    finishLabel: 'Submit',
  },
}
