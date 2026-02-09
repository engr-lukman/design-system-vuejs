import type { Meta, StoryObj } from '@storybook/vue3'
import HoverCard from './HoverCard.vue'

const meta: Meta<typeof HoverCard> = {
  title: 'Overlay/HoverCard',
  component: HoverCard,
  tags: ['autodocs'],
  argTypes: {
    side: { control: 'select', options: ['top', 'bottom'] },
    align: { control: 'select', options: ['start', 'center', 'end'] },
    openDelay: { control: 'number' },
    closeDelay: { control: 'number' },
    width: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof HoverCard>

export const Default: Story = {
  render: (args) => ({
    components: { HoverCard },
    setup: () => ({ args }),
    template: `
      <div class="flex h-64 items-center justify-center">
        <HoverCard v-bind="args">
          <template #trigger>
            <a href="#" class="text-sm font-medium text-blue-600 underline hover:text-blue-700">@vuejs</a>
          </template>
          <div class="flex gap-4">
            <div class="h-10 w-10 shrink-0 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold">V</div>
            <div class="space-y-1">
              <h4 class="text-sm font-semibold text-gray-900">Vue.js</h4>
              <p class="text-sm text-gray-500">The Progressive JavaScript Framework. An approachable, performant and versatile framework for building web user interfaces.</p>
              <div class="flex items-center gap-2 pt-1 text-xs text-gray-400">
                <span>Joined December 2013</span>
              </div>
            </div>
          </div>
        </HoverCard>
      </div>
    `,
  }),
}

export const TopAligned: Story = {
  args: { side: 'top' },
  render: (args) => ({
    components: { HoverCard },
    setup: () => ({ args }),
    template: `
      <div class="flex h-64 items-end justify-center pb-8">
        <HoverCard v-bind="args">
          <template #trigger>
            <a href="#" class="text-sm font-medium text-blue-600 underline hover:text-blue-700">Hover me (top)</a>
          </template>
          <p class="text-sm text-gray-600">This hover card appears above the trigger.</p>
        </HoverCard>
      </div>
    `,
  }),
}
