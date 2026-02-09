import type { Meta, StoryObj } from '@storybook/vue3'
import ScrollArea from './ScrollArea.vue'

const meta: Meta<typeof ScrollArea> = {
  title: 'Layout/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
  argTypes: {
    maxHeight: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof ScrollArea>

const items = Array.from({ length: 30 }, (_, i) => `Item ${i + 1}`)

export const Default: Story = {
  args: { maxHeight: '200px' },
  render: (args) => ({
    components: { ScrollArea },
    setup: () => ({ args, items }),
    template: `
      <div class="w-64 rounded-lg border border-gray-200">
        <ScrollArea v-bind="args">
          <div class="p-4 space-y-2">
            <div v-for="item in items" :key="item" class="rounded px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">{{ item }}</div>
          </div>
        </ScrollArea>
      </div>
    `,
  }),
}

export const Tall: Story = {
  args: { maxHeight: '400px' },
  render: (args) => ({
    components: { ScrollArea },
    setup: () => ({ args, items }),
    template: `
      <div class="w-64 rounded-lg border border-gray-200">
        <ScrollArea v-bind="args">
          <div class="p-4 space-y-2">
            <div v-for="item in items" :key="item" class="rounded px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">{{ item }}</div>
          </div>
        </ScrollArea>
      </div>
    `,
  }),
}
