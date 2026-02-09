import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import AlertDialog from './AlertDialog.vue'

const meta: Meta<typeof AlertDialog> = {
  title: 'Feedback/AlertDialog',
  component: AlertDialog,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'danger'] },
    title: { control: 'text' },
    description: { control: 'text' },
    confirmLabel: { control: 'text' },
    cancelLabel: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof AlertDialog>

export const Default: Story = {
  args: {
    title: 'Are you sure?',
    description:
      'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
  },
  render: (args) => ({
    components: { AlertDialog },
    setup() {
      const open = ref(false)
      return { args, open }
    },
    template: `
      <div>
        <button class="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700" @click="open = true">Open Dialog</button>
        <AlertDialog v-bind="args" v-model="open" />
      </div>
    `,
  }),
}

export const Danger: Story = {
  args: {
    title: 'Delete Account',
    description:
      'Are you sure you want to delete your account? All of your data will be permanently removed. This action cannot be undone.',
    variant: 'danger',
    confirmLabel: 'Delete',
  },
  render: (args) => ({
    components: { AlertDialog },
    setup() {
      const open = ref(false)
      return { args, open }
    },
    template: `
      <div>
        <button class="rounded-lg bg-red-600 px-4 py-2 text-sm text-white hover:bg-red-700" @click="open = true">Delete Account</button>
        <AlertDialog v-bind="args" v-model="open" />
      </div>
    `,
  }),
}
