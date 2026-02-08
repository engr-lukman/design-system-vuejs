import type { Meta, StoryObj } from '@storybook/vue3'
import Card from './Card.vue'

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    padding: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: () => ({
    components: { Card },
    template: `
      <Card>
        <p class="text-gray-600">This is a basic card with default padding.</p>
      </Card>
    `,
  }),
}

export const WithHeader: Story = {
  render: () => ({
    components: { Card },
    template: `
      <Card>
        <template #header>
          <h3 class="text-lg font-semibold text-gray-900">Card Title</h3>
        </template>
        <p class="text-gray-600">Card body content goes here.</p>
      </Card>
    `,
  }),
}

export const WithHeaderAndFooter: Story = {
  render: () => ({
    components: { Card },
    template: `
      <Card>
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-semibold text-gray-900">Order #12345</h3>
            <span class="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">Completed</span>
          </div>
        </template>
        <div class="space-y-2">
          <p class="text-sm text-gray-600">Customer: Mohammad Lukman</p>
          <p class="text-sm text-gray-600">Total: $99.00</p>
        </div>
        <template #footer>
          <div class="flex justify-end gap-2">
            <button class="rounded-lg border border-gray-300 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50">Details</button>
            <button class="rounded-lg bg-blue-600 px-3 py-1.5 text-sm text-white hover:bg-blue-700">Action</button>
          </div>
        </template>
      </Card>
    `,
  }),
}

export const NoPadding: Story = {
  args: { padding: false },
  render: (args) => ({
    components: { Card },
    setup: () => ({ args }),
    template: `
      <Card v-bind="args">
        <img src="https://picsum.photos/600/200" alt="Card image" class="w-full h-48 object-cover" />
        <div class="px-6 py-4">
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Image Card</h3>
          <p class="text-sm text-gray-600">Card with image and no body padding.</p>
        </div>
      </Card>
    `,
  }),
}
