import type { Meta, StoryObj } from '@storybook/vue3'
import DataTable from './DataTable.vue'
import type { DataTableColumn } from './types'

const columns: DataTableColumn[] = [
  { key: 'id', label: 'ID', sortable: true, width: '80px' },
  { key: 'name', label: 'Name', sortable: true },
  { key: 'email', label: 'Email', sortable: true },
  { key: 'role', label: 'Role', sortable: true },
  { key: 'status', label: 'Status', align: 'center' },
]

const data = Array.from({ length: 55 }, (_, i) => ({
  id: i + 1,
  name: ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve'][i % 5] + ` ${i + 1}`,
  email: `user${i + 1}@example.com`,
  role: ['Admin', 'Editor', 'Viewer'][i % 3],
  status: i % 4 === 0 ? 'Inactive' : 'Active',
}))

const meta: Meta<typeof DataTable> = {
  title: 'Data Display/DataTable',
  component: DataTable,
  tags: ['autodocs'],
  argTypes: {
    searchable: { control: 'boolean' },
    pageSize: { control: 'number' },
    striped: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof DataTable>

export const Default: Story = {
  args: { columns, data, searchable: true, pageSize: 10 },
}

export const Striped: Story = {
  args: { columns, data, searchable: true, pageSize: 10, striped: true },
}

export const SmallPage: Story = {
  args: { columns, data, searchable: true, pageSize: 5 },
}

export const CustomCells: Story = {
  args: { columns, data, searchable: true, pageSize: 10 },
  render: (args) => ({
    components: { DataTable },
    setup: () => ({ args }),
    template: `
      <DataTable v-bind="args">
        <template #cell-status="{ value }">
          <span :class="[
            'inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium',
            value === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600',
          ]">{{ value }}</span>
        </template>
      </DataTable>
    `,
  }),
}
