import type { Meta, StoryObj } from '@storybook/vue3'
import Popover from './Popover.vue'

const meta: Meta<typeof Popover> = {
  title: 'Overlay/Popover',
  component: Popover,
  tags: ['autodocs'],
  argTypes: {
    side: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
    align: { control: 'select', options: ['start', 'center', 'end'] },
    width: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Popover>

export const Default: Story = {
  render: (args) => ({
    components: { Popover },
    setup: () => ({ args }),
    template: `
      <div class="flex h-64 items-center justify-center">
        <Popover v-bind="args">
          <template #trigger>
            <button class="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Open popover</button>
          </template>
          <div class="space-y-2">
            <h4 class="font-medium text-gray-900">Dimensions</h4>
            <p class="text-sm text-gray-500">Set the dimensions for the layer.</p>
            <div class="grid gap-2">
              <div class="grid grid-cols-3 items-center gap-4">
                <label class="text-sm text-gray-700">Width</label>
                <input class="col-span-2 rounded border border-gray-300 px-2 py-1 text-sm" value="100%" />
              </div>
              <div class="grid grid-cols-3 items-center gap-4">
                <label class="text-sm text-gray-700">Height</label>
                <input class="col-span-2 rounded border border-gray-300 px-2 py-1 text-sm" value="25px" />
              </div>
            </div>
          </div>
        </Popover>
      </div>
    `,
  }),
}

export const Top: Story = {
  args: { side: 'top' },
  render: (args) => ({
    components: { Popover },
    setup: () => ({ args }),
    template: `
      <div class="flex h-64 items-end justify-center pb-8">
        <Popover v-bind="args">
          <template #trigger>
            <button class="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Top popover</button>
          </template>
          <p class="text-sm text-gray-600">This popover appears above the trigger.</p>
        </Popover>
      </div>
    `,
  }),
}
