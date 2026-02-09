import type { Meta, StoryObj } from '@storybook/vue3'
import Progress from './Progress.vue'

const meta: Meta<typeof Progress> = {
  title: 'Other/Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'number', min: 0, max: 100 } },
    max: { control: 'number' },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'success', 'warning', 'danger'] },
    showValue: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    label: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Progress>

export const Default: Story = {
  args: { value: 60 },
  render: (args) => ({
    components: { Progress },
    setup: () => ({ args }),
    template: '<div class="w-80"><Progress v-bind="args" /></div>',
  }),
}

export const WithLabel: Story = {
  args: { value: 45, label: 'Upload progress', showValue: true },
  render: (args) => ({
    components: { Progress },
    setup: () => ({ args }),
    template: '<div class="w-80"><Progress v-bind="args" /></div>',
  }),
}

export const Small: Story = {
  args: { value: 70, size: 'sm' },
  render: (args) => ({
    components: { Progress },
    setup: () => ({ args }),
    template: '<div class="w-80"><Progress v-bind="args" /></div>',
  }),
}

export const Large: Story = {
  args: { value: 55, size: 'lg', showValue: true, label: 'Storage' },
  render: (args) => ({
    components: { Progress },
    setup: () => ({ args }),
    template: '<div class="w-80"><Progress v-bind="args" /></div>',
  }),
}

export const Success: Story = {
  args: { value: 100, variant: 'success', label: 'Complete', showValue: true },
  render: (args) => ({
    components: { Progress },
    setup: () => ({ args }),
    template: '<div class="w-80"><Progress v-bind="args" /></div>',
  }),
}

export const Warning: Story = {
  args: { value: 75, variant: 'warning', label: 'Disk usage', showValue: true },
  render: (args) => ({
    components: { Progress },
    setup: () => ({ args }),
    template: '<div class="w-80"><Progress v-bind="args" /></div>',
  }),
}

export const Danger: Story = {
  args: { value: 90, variant: 'danger', label: 'CPU usage', showValue: true },
  render: (args) => ({
    components: { Progress },
    setup: () => ({ args }),
    template: '<div class="w-80"><Progress v-bind="args" /></div>',
  }),
}

export const Indeterminate: Story = {
  args: { indeterminate: true, label: 'Loading...' },
  render: (args) => ({
    components: { Progress },
    setup: () => ({ args }),
    template: '<div class="w-80"><Progress v-bind="args" /></div>',
  }),
}
