import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Drawer from './Drawer.vue'

const meta: Meta<typeof Drawer> = {
  title: 'Overlay/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  argTypes: {
    side: { control: 'select', options: ['left', 'right', 'top', 'bottom'] },
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl', 'full'] },
    title: { control: 'text' },
    closable: { control: 'boolean' },
    closeOnOverlay: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Drawer>

export const Right: Story = {
  args: { title: 'Settings', side: 'right' },
  render: (args) => ({
    components: { Drawer },
    setup() {
      const open = ref(false)
      return { args, open }
    },
    template: `
      <div>
        <button class="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700" @click="open = true">Open Right Drawer</button>
        <Drawer v-bind="args" v-model="open">
          <p class="text-sm text-gray-600">Drawer content goes here. Slide in from the right side.</p>
        </Drawer>
      </div>
    `,
  }),
}

export const Left: Story = {
  args: { title: 'Navigation', side: 'left' },
  render: (args) => ({
    components: { Drawer },
    setup() {
      const open = ref(false)
      return { args, open }
    },
    template: `
      <div>
        <button class="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700" @click="open = true">Open Left Drawer</button>
        <Drawer v-bind="args" v-model="open">
          <nav class="space-y-2">
            <a href="#" class="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">Dashboard</a>
            <a href="#" class="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">Projects</a>
            <a href="#" class="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
          </nav>
        </Drawer>
      </div>
    `,
  }),
}

export const Bottom: Story = {
  args: { title: 'Filters', side: 'bottom', size: 'md' },
  render: (args) => ({
    components: { Drawer },
    setup() {
      const open = ref(false)
      return { args, open }
    },
    template: `
      <div>
        <button class="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700" @click="open = true">Open Bottom Drawer</button>
        <Drawer v-bind="args" v-model="open">
          <p class="text-sm text-gray-600">Bottom drawer content for mobile-friendly interactions.</p>
        </Drawer>
      </div>
    `,
  }),
}

export const WithFooter: Story = {
  args: { title: 'Edit Profile', side: 'right', size: 'lg' },
  render: (args) => ({
    components: { Drawer },
    setup() {
      const open = ref(false)
      return { args, open }
    },
    template: `
      <div>
        <button class="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700" @click="open = true">Open Drawer</button>
        <Drawer v-bind="args" v-model="open">
          <div class="space-y-4">
            <div><label class="text-sm font-medium text-gray-700">Name</label><input class="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm" value="John Doe" /></div>
            <div><label class="text-sm font-medium text-gray-700">Email</label><input class="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm" value="john@example.com" /></div>
          </div>
          <template #footer>
            <div class="flex justify-end gap-2">
              <button class="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700" @click="open = false">Cancel</button>
              <button class="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white">Save</button>
            </div>
          </template>
        </Drawer>
      </div>
    `,
  }),
}
