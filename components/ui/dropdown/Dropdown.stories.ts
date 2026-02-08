import type { Meta, StoryObj } from '@storybook/vue3'
import Dropdown from './Dropdown.vue'

const meta: Meta<typeof Dropdown> = {
  title: 'UI/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    align: { control: 'select', options: ['left', 'right'] },
    width: { control: 'select', options: ['auto', 'sm', 'md', 'lg'] },
  },
}

export default meta
type Story = StoryObj<typeof Dropdown>

const defaultItems = [
  { key: 'edit', label: 'Edit' },
  { key: 'duplicate', label: 'Duplicate' },
  { key: 'archive', label: 'Archive' },
  { key: 'sep', label: '', separator: true },
  { key: 'delete', label: 'Delete', danger: true },
]

export const Default: Story = {
  args: { items: defaultItems },
}

export const RightAligned: Story = {
  args: {
    items: defaultItems,
    align: 'right',
  },
  render: (args) => ({
    components: { Dropdown },
    setup: () => ({ args }),
    template: `
      <div class="flex justify-end">
        <Dropdown v-bind="args" />
      </div>
    `,
  }),
}

export const WithDisabledItem: Story = {
  args: {
    items: [
      { key: 'view', label: 'View' },
      { key: 'edit', label: 'Edit', disabled: true },
      { key: 'delete', label: 'Delete', danger: true },
    ],
  },
}

export const CustomTrigger: Story = {
  args: { items: defaultItems },
  render: (args) => ({
    components: { Dropdown },
    setup: () => ({ args }),
    template: `
      <Dropdown v-bind="args">
        <template #trigger>
          <button class="rounded-full p-2 hover:bg-gray-100">
            <svg class="h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM10 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM11.5 15.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
            </svg>
          </button>
        </template>
      </Dropdown>
    `,
  }),
}
