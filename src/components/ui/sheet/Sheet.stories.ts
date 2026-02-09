import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Sheet from './Sheet.vue'

const meta: Meta<typeof Sheet> = {
  title: 'Overlay/Sheet',
  component: Sheet,
  tags: ['autodocs'],
  argTypes: {
    side: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
    title: { control: 'text' },
    description: { control: 'text' },
    closable: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Sheet>

export const Right: Story = {
  args: { title: 'Edit Profile', description: 'Make changes to your profile here.', side: 'right' },
  render: (args) => ({
    components: { Sheet },
    setup() {
      const open = ref(false)
      return { args, open }
    },
    template: `
      <div>
        <button class="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700" @click="open = true">Open Sheet</button>
        <Sheet v-bind="args" v-model="open">
          <div class="space-y-4">
            <div><label class="text-sm font-medium text-gray-700">Name</label><input class="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm" value="Lukman" /></div>
            <div><label class="text-sm font-medium text-gray-700">Username</label><input class="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm" value="@lukman" /></div>
          </div>
          <template #footer>
            <button class="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white" @click="open = false">Save changes</button>
          </template>
        </Sheet>
      </div>
    `,
  }),
}

export const Bottom: Story = {
  args: { title: 'Share', description: 'Share this document with others.', side: 'bottom' },
  render: (args) => ({
    components: { Sheet },
    setup() {
      const open = ref(false)
      return { args, open }
    },
    template: `
      <div>
        <button class="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700" @click="open = true">Open Bottom Sheet</button>
        <Sheet v-bind="args" v-model="open">
          <p class="text-sm text-gray-600">Bottom sheet content for mobile-friendly interactions.</p>
        </Sheet>
      </div>
    `,
  }),
}

export const Left: Story = {
  args: { title: 'Menu', side: 'left' },
  render: (args) => ({
    components: { Sheet },
    setup() {
      const open = ref(false)
      return { args, open }
    },
    template: `
      <div>
        <button class="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700" @click="open = true">Open Left Sheet</button>
        <Sheet v-bind="args" v-model="open">
          <nav class="space-y-1">
            <a href="#" class="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">Home</a>
            <a href="#" class="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">About</a>
            <a href="#" class="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">Contact</a>
          </nav>
        </Sheet>
      </div>
    `,
  }),
}
