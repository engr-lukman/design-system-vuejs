import type { Meta, StoryObj } from '@storybook/vue3'
import Separator from './Separator.vue'

const meta: Meta<typeof Separator> = {
  title: 'Layout/Separator',
  component: Separator,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    decorative: { control: 'boolean' },
    label: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Separator>

export const Horizontal: Story = {
  render: (args) => ({
    components: { Separator },
    setup: () => ({ args }),
    template: `
      <div class="space-y-4 w-80">
        <p class="text-sm text-gray-700">Content above</p>
        <Separator v-bind="args" />
        <p class="text-sm text-gray-700">Content below</p>
      </div>
    `,
  }),
}

export const Vertical: Story = {
  args: { orientation: 'vertical' },
  render: (args) => ({
    components: { Separator },
    setup: () => ({ args }),
    template: `
      <div class="flex h-6 items-center gap-3">
        <span class="text-sm">Home</span>
        <Separator v-bind="args" />
        <span class="text-sm">About</span>
        <Separator v-bind="args" />
        <span class="text-sm">Contact</span>
      </div>
    `,
  }),
}

export const WithLabel: Story = {
  args: { label: 'OR' },
  render: (args) => ({
    components: { Separator },
    setup: () => ({ args }),
    template: `
      <div class="w-80 space-y-4">
        <button class="w-full rounded-lg bg-blue-600 px-4 py-2 text-white">Continue with Google</button>
        <Separator v-bind="args" />
        <button class="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-700">Sign in with email</button>
      </div>
    `,
  }),
}
