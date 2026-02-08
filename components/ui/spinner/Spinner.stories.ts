import type { Meta, StoryObj } from '@storybook/vue3'
import Spinner from './Spinner.vue'

const meta: Meta<typeof Spinner> = {
  title: 'UI/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    variant: { control: 'select', options: ['primary', 'white', 'neutral'] },
    overlay: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Spinner>

export const Default: Story = {
  args: {},
}

export const Sizes: Story = {
  render: () => ({
    components: { Spinner },
    template: `
      <div class="flex items-center gap-4">
        <Spinner size="xs" />
        <Spinner size="sm" />
        <Spinner size="md" />
        <Spinner size="lg" />
        <Spinner size="xl" />
      </div>
    `,
  }),
}

export const WithText: Story = {
  render: () => ({
    components: { Spinner },
    template: '<Spinner>Loading data...</Spinner>',
  }),
}

export const OnDark: Story = {
  render: () => ({
    components: { Spinner },
    template: `
      <div class="flex items-center justify-center rounded-lg bg-gray-800 p-8">
        <Spinner variant="white" size="lg" />
      </div>
    `,
  }),
}

export const InButton: Story = {
  render: () => ({
    components: { Spinner },
    template: `
      <button class="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm text-white" disabled>
        <Spinner size="xs" variant="white" label="" />
        Processing...
      </button>
    `,
  }),
}
