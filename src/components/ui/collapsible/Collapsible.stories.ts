import type { Meta, StoryObj } from '@storybook/vue3'
import Collapsible from './Collapsible.vue'

const meta: Meta<typeof Collapsible> = {
  title: 'Overlay/Collapsible',
  component: Collapsible,
  tags: ['autodocs'],
  argTypes: {
    defaultOpen: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Collapsible>

export const Default: Story = {
  render: (args) => ({
    components: { Collapsible },
    setup: () => ({ args }),
    template: `
      <div class="w-80">
        <Collapsible v-bind="args">
          <template #trigger="{ isOpen }">
            <button class="flex w-full items-center justify-between rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              <span>3 items tagged</span>
              <svg :class="['h-4 w-4 transition-transform', isOpen && 'rotate-180']" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>
            </button>
          </template>
          <div class="mt-2 space-y-2">
            <div class="rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-600">@radix-ui/primitives</div>
            <div class="rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-600">@radix-ui/colors</div>
            <div class="rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-600">@stitches/react</div>
          </div>
        </Collapsible>
      </div>
    `,
  }),
}

export const DefaultOpen: Story = {
  args: { defaultOpen: true },
  render: (args) => ({
    components: { Collapsible },
    setup: () => ({ args }),
    template: `
      <div class="w-80">
        <Collapsible v-bind="args">
          <template #trigger="{ isOpen }">
            <button class="flex w-full items-center justify-between rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              <span>Show details</span>
              <svg :class="['h-4 w-4 transition-transform', isOpen && 'rotate-180']" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>
            </button>
          </template>
          <div class="mt-2 rounded-lg bg-gray-50 p-4 text-sm text-gray-600">
            This content is visible by default. You can toggle it by clicking the button above.
          </div>
        </Collapsible>
      </div>
    `,
  }),
}
