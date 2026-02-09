import type { Meta, StoryObj } from '@storybook/vue3'
import Resizable from './Resizable.vue'
import type { ResizablePanel } from './types'

const meta: Meta<typeof Resizable> = {
  title: 'Layout/Resizable',
  component: Resizable,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Resizable>

const twoPanels: ResizablePanel[] = [
  { id: 'left', defaultSize: 50, minSize: 20 },
  { id: 'right', defaultSize: 50, minSize: 20 },
]

const threePanels: ResizablePanel[] = [
  { id: 'sidebar', defaultSize: 25, minSize: 15, maxSize: 40 },
  { id: 'main', defaultSize: 50, minSize: 30 },
  { id: 'detail', defaultSize: 25, minSize: 15, maxSize: 40 },
]

export const Horizontal: Story = {
  args: { panels: twoPanels, direction: 'horizontal' },
  render: (args) => ({
    components: { Resizable },
    setup: () => ({ args }),
    template: `
      <div class="h-48">
        <Resizable v-bind="args">
          <template #left>
            <div class="flex h-full items-center justify-center bg-gray-50 p-4 text-sm text-gray-600">Left Panel</div>
          </template>
          <template #right>
            <div class="flex h-full items-center justify-center bg-gray-50 p-4 text-sm text-gray-600">Right Panel</div>
          </template>
        </Resizable>
      </div>
    `,
  }),
}

export const Vertical: Story = {
  args: { panels: twoPanels, direction: 'vertical' },
  render: (args) => ({
    components: { Resizable },
    setup: () => ({ args }),
    template: `
      <div class="h-80">
        <Resizable v-bind="args">
          <template #left>
            <div class="flex h-full items-center justify-center bg-gray-50 p-4 text-sm text-gray-600">Top Panel</div>
          </template>
          <template #right>
            <div class="flex h-full items-center justify-center bg-gray-50 p-4 text-sm text-gray-600">Bottom Panel</div>
          </template>
        </Resizable>
      </div>
    `,
  }),
}

export const ThreePanels: Story = {
  args: { panels: threePanels, direction: 'horizontal' },
  render: (args) => ({
    components: { Resizable },
    setup: () => ({ args }),
    template: `
      <div class="h-64">
        <Resizable v-bind="args">
          <template #sidebar>
            <div class="flex h-full items-center justify-center bg-blue-50 p-4 text-sm text-blue-600">Sidebar</div>
          </template>
          <template #main>
            <div class="flex h-full items-center justify-center bg-gray-50 p-4 text-sm text-gray-600">Main Content</div>
          </template>
          <template #detail>
            <div class="flex h-full items-center justify-center bg-green-50 p-4 text-sm text-green-600">Detail</div>
          </template>
        </Resizable>
      </div>
    `,
  }),
}
