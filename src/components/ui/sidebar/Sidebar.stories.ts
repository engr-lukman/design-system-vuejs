import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Sidebar from './Sidebar.vue'
import type { SidebarSection } from './types'

const sections: SidebarSection[] = [
  {
    title: 'Main',
    items: [
      { label: 'Dashboard', value: 'dashboard', active: true, badge: 'New' },
      { label: 'Projects', value: 'projects', badge: 5 },
      { label: 'Tasks', value: 'tasks' },
    ],
  },
  {
    title: 'Management',
    items: [
      {
        label: 'Users',
        value: 'users',
        children: [
          { label: 'All Users', value: 'all-users' },
          { label: 'Roles', value: 'roles' },
          { label: 'Permissions', value: 'permissions' },
        ],
      },
      { label: 'Settings', value: 'settings' },
      { label: 'Analytics', value: 'analytics' },
    ],
  },
]

const meta: Meta<typeof Sidebar> = {
  title: 'Navigation/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  argTypes: {
    collapsed: { control: 'boolean' },
    width: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Sidebar>

export const Default: Story = {
  args: { sections },
  render: (args) => ({
    components: { Sidebar },
    setup() {
      const collapsed = ref(false)
      return { args, collapsed }
    },
    template: `
      <div class="h-96 rounded-lg border border-gray-200">
        <Sidebar v-bind="args" v-model:collapsed="collapsed" />
      </div>
    `,
  }),
}

export const Collapsed: Story = {
  args: { sections },
  render: (args) => ({
    components: { Sidebar },
    setup() {
      const collapsed = ref(true)
      return { args, collapsed }
    },
    template: `
      <div class="h-96 rounded-lg border border-gray-200">
        <Sidebar v-bind="args" v-model:collapsed="collapsed" />
      </div>
    `,
  }),
}

export const WithFooter: Story = {
  args: { sections },
  render: (args) => ({
    components: { Sidebar },
    setup() {
      const collapsed = ref(false)
      return { args, collapsed }
    },
    template: `
      <div class="h-[500px] rounded-lg border border-gray-200">
        <Sidebar v-bind="args" v-model:collapsed="collapsed">
          <template #footer="{ collapsed: c }">
            <div class="flex items-center gap-3">
              <div class="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-700">JD</div>
              <div v-if="!c" class="min-w-0">
                <p class="truncate text-sm font-medium text-gray-900">John Doe</p>
                <p class="truncate text-xs text-gray-500">john@example.com</p>
              </div>
            </div>
          </template>
        </Sidebar>
      </div>
    `,
  }),
}
