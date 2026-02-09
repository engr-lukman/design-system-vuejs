import type { Meta, StoryObj } from '@storybook/vue3'
import Skeleton from './Skeleton.vue'

const meta: Meta<typeof Skeleton> = {
  title: 'Data Display/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'circular', 'rectangular', 'rounded'],
    },
    width: { control: 'text' },
    height: { control: 'text' },
    lines: { control: { type: 'number', min: 1, max: 10 } },
    animate: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Skeleton>

export const Text: Story = {
  args: { variant: 'text', width: '200px' },
  render: (args) => ({
    components: { Skeleton },
    setup: () => ({ args }),
    template: '<Skeleton v-bind="args" />',
  }),
}

export const MultiLine: Story = {
  args: { variant: 'text', lines: 4, width: '300px' },
  render: (args) => ({
    components: { Skeleton },
    setup: () => ({ args }),
    template: '<Skeleton v-bind="args" />',
  }),
}

export const Circular: Story = {
  args: { variant: 'circular', width: '48px' },
  render: (args) => ({
    components: { Skeleton },
    setup: () => ({ args }),
    template: '<Skeleton v-bind="args" />',
  }),
}

export const Rectangular: Story = {
  args: { variant: 'rectangular', width: '300px', height: '150px' },
  render: (args) => ({
    components: { Skeleton },
    setup: () => ({ args }),
    template: '<Skeleton v-bind="args" />',
  }),
}

export const Rounded: Story = {
  args: { variant: 'rounded', width: '300px', height: '150px' },
  render: (args) => ({
    components: { Skeleton },
    setup: () => ({ args }),
    template: '<Skeleton v-bind="args" />',
  }),
}

export const CardSkeleton: Story = {
  render: () => ({
    components: { Skeleton },
    template: `
      <div class="w-72 rounded-lg border border-gray-200 p-4 space-y-3">
        <Skeleton variant="rounded" width="100%" height="120px" />
        <Skeleton variant="text" width="70%" />
        <Skeleton variant="text" lines="2" />
        <div class="flex items-center gap-3 pt-2">
          <Skeleton variant="circular" width="32px" />
          <Skeleton variant="text" width="100px" />
        </div>
      </div>
    `,
  }),
}
