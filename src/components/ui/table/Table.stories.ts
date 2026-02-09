import type { Meta, StoryObj } from '@storybook/vue3'
import Table from './Table.vue'
import type { TableColumn } from './types'

const columns: TableColumn[] = [
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'role', label: 'Role' },
  { key: 'status', label: 'Status', align: 'center' },
]

const data = [
  { name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
  { name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'Active' },
  { name: 'Bob Wilson', email: 'bob@example.com', role: 'Viewer', status: 'Inactive' },
  { name: 'Alice Brown', email: 'alice@example.com', role: 'Editor', status: 'Active' },
]

const meta: Meta<typeof Table> = {
  title: 'Data Display/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    striped: { control: 'boolean' },
    hoverable: { control: 'boolean' },
    bordered: { control: 'boolean' },
    compact: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Table>

export const Default: Story = {
  args: { columns, data },
}

export const Striped: Story = {
  args: { columns, data, striped: true, bordered: true },
}

export const Compact: Story = {
  args: { columns, data, compact: true, bordered: true },
}

export const Empty: Story = {
  args: { columns, data: [] },
}

export const CustomCells: Story = {
  args: { columns, data },
  render: (args) => ({
    components: { Table },
    setup: () => ({ args }),
    template: `
      <Table v-bind="args">
        <template #cell-status="{ value }">
          <span :class="[
            'inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium',
            value === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600',
          ]">{{ value }}</span>
        </template>
      </Table>
    `,
  }),
}
