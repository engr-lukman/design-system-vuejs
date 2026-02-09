import type { Meta, StoryObj } from '@storybook/vue3'
import Spinner from './Spinner.vue'

const meta: Meta<typeof Spinner> = {
  title: 'Feedback/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'danger', 'success'],
    },
    label: { control: 'text' },
    overlay: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Spinner>

export const Default: Story = {
  args: {},
}

export const WithLabel: Story = {
  args: {
    label: 'Loading...',
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Loading',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Please wait',
  },
}

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
    label: 'Loading data',
  },
}

export const Danger: Story = {
  args: {
    variant: 'danger',
    label: 'Error occurred',
  },
}

export const Success: Story = {
  args: {
    variant: 'success',
    label: 'Processing',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Syncing',
  },
}

export const AllSizes: Story = {
  render: () => ({
    components: { Spinner },
    template: `
      <div class="flex items-end gap-6">
        <Spinner size="xs" label="xs" />
        <Spinner size="sm" label="sm" />
        <Spinner size="md" label="md" />
        <Spinner size="lg" label="lg" />
        <Spinner size="xl" label="xl" />
      </div>
    `,
  }),
}

export const AllVariants: Story = {
  render: () => ({
    components: { Spinner },
    template: `
      <div class="flex items-end gap-6">
        <Spinner variant="default" label="Default" />
        <Spinner variant="primary" label="Primary" />
        <Spinner variant="secondary" label="Secondary" />
        <Spinner variant="danger" label="Danger" />
        <Spinner variant="success" label="Success" />
      </div>
    `,
  }),
}

export const InlineUsage: Story = {
  render: () => ({
    components: { Spinner },
    template: `
      <div class="space-y-4">
        <div class="flex items-center gap-3 rounded-md border border-gray-200 p-4">
          <Spinner size="sm" />
          <span class="text-sm text-gray-700">Saving changes...</span>
        </div>
        <div class="flex items-center gap-3 rounded-md border border-gray-200 p-4">
          <Spinner size="sm" variant="success" />
          <span class="text-sm text-gray-700">Uploading file...</span>
        </div>
        <button
          class="inline-flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white disabled:opacity-50"
          disabled
        >
          <Spinner size="xs" variant="secondary" />
          Processing
        </button>
      </div>
    `,
  }),
}
