import type { Meta, StoryObj } from '@storybook/vue3'
import AspectRatio from './AspectRatio.vue'

const meta: Meta<typeof AspectRatio> = {
  title: 'Layout/AspectRatio',
  component: AspectRatio,
  tags: ['autodocs'],
  argTypes: {
    ratio: { control: { type: 'number', min: 0.1, max: 4, step: 0.1 } },
  },
}

export default meta
type Story = StoryObj<typeof AspectRatio>

export const Widescreen: Story = {
  args: { ratio: 16 / 9 },
  render: (args) => ({
    components: { AspectRatio },
    setup: () => ({ args }),
    template: `
      <div class="w-96">
        <AspectRatio v-bind="args">
          <div class="flex h-full w-full items-center justify-center rounded-lg bg-gray-100 text-sm text-gray-500">16:9</div>
        </AspectRatio>
      </div>
    `,
  }),
}

export const Square: Story = {
  args: { ratio: 1 },
  render: (args) => ({
    components: { AspectRatio },
    setup: () => ({ args }),
    template: `
      <div class="w-64">
        <AspectRatio v-bind="args">
          <div class="flex h-full w-full items-center justify-center rounded-lg bg-blue-50 text-sm text-blue-600">1:1</div>
        </AspectRatio>
      </div>
    `,
  }),
}

export const Portrait: Story = {
  args: { ratio: 3 / 4 },
  render: (args) => ({
    components: { AspectRatio },
    setup: () => ({ args }),
    template: `
      <div class="w-48">
        <AspectRatio v-bind="args">
          <div class="flex h-full w-full items-center justify-center rounded-lg bg-amber-50 text-sm text-amber-600">3:4</div>
        </AspectRatio>
      </div>
    `,
  }),
}
