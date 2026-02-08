import type { Meta, StoryObj } from '@storybook/vue3'
import Tooltip from './Tooltip.vue'

const meta: Meta<typeof Tooltip> = {
  title: 'UI/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
    delay: { control: 'number' },
  },
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  args: { content: 'This is a tooltip' },
  render: (args) => ({
    components: { Tooltip },
    setup: () => ({ args }),
    template: `
      <div class="flex items-center justify-center p-20">
        <Tooltip v-bind="args">
          <button class="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white">Hover me</button>
        </Tooltip>
      </div>
    `,
  }),
}

export const Positions: Story = {
  render: () => ({
    components: { Tooltip },
    template: `
      <div class="flex items-center justify-center gap-8 p-20">
        <Tooltip content="Top tooltip" position="top">
          <button class="rounded-lg border border-gray-300 px-4 py-2 text-sm">Top</button>
        </Tooltip>
        <Tooltip content="Bottom tooltip" position="bottom">
          <button class="rounded-lg border border-gray-300 px-4 py-2 text-sm">Bottom</button>
        </Tooltip>
        <Tooltip content="Left tooltip" position="left">
          <button class="rounded-lg border border-gray-300 px-4 py-2 text-sm">Left</button>
        </Tooltip>
        <Tooltip content="Right tooltip" position="right">
          <button class="rounded-lg border border-gray-300 px-4 py-2 text-sm">Right</button>
        </Tooltip>
      </div>
    `,
  }),
}
