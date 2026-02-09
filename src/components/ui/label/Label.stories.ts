import type { Meta, StoryObj } from '@storybook/vue3'
import Label from './Label.vue'

const meta: Meta<typeof Label> = {
  title: 'Form/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Label>

export const Default: Story = {
  render: (args) => ({
    components: { Label },
    setup: () => ({ args }),
    template: '<Label v-bind="args">Email address</Label>',
  }),
}

export const Required: Story = {
  args: { required: true },
  render: (args) => ({
    components: { Label },
    setup: () => ({ args }),
    template: '<Label v-bind="args">Full name</Label>',
  }),
}

export const Small: Story = {
  args: { size: 'sm' },
  render: (args) => ({
    components: { Label },
    setup: () => ({ args }),
    template: '<Label v-bind="args">Small label</Label>',
  }),
}

export const Large: Story = {
  args: { size: 'lg' },
  render: (args) => ({
    components: { Label },
    setup: () => ({ args }),
    template: '<Label v-bind="args">Large label</Label>',
  }),
}

export const Disabled: Story = {
  args: { disabled: true },
  render: (args) => ({
    components: { Label },
    setup: () => ({ args }),
    template: '<Label v-bind="args">Disabled label</Label>',
  }),
}

export const WithInput: Story = {
  args: { for: 'email-input', required: true },
  render: (args) => ({
    components: { Label },
    setup: () => ({ args }),
    template: `
      <div class="flex flex-col gap-1.5">
        <Label v-bind="args">Email</Label>
        <input id="email-input" type="email" placeholder="you@example.com" class="rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20" />
      </div>
    `,
  }),
}
