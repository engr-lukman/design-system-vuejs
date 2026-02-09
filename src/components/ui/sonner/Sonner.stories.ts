import type { Meta, StoryObj } from '@storybook/vue3'
import Sonner from './Sonner.vue'
import { useSonner } from './useSonner'

const meta: Meta<typeof Sonner> = {
  title: 'Feedback/Sonner',
  component: Sonner,
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: [
        'top-right',
        'top-left',
        'bottom-right',
        'bottom-left',
        'top-center',
        'bottom-center',
      ],
    },
  },
}

export default meta
type Story = StoryObj<typeof Sonner>

export const Default: Story = {
  args: { position: 'bottom-right' },
  render: (args) => ({
    components: { Sonner },
    setup() {
      const { toast, success, error, warning, info } = useSonner()
      return { args, toast, success, error, warning, info }
    },
    template: `
      <div>
        <Sonner v-bind="args" />
        <div class="flex flex-wrap gap-2">
          <button class="rounded-lg bg-gray-100 px-3 py-2 text-sm" @click="toast('Event has been created')">Default</button>
          <button class="rounded-lg bg-green-100 px-3 py-2 text-sm text-green-700" @click="success('Saved successfully')">Success</button>
          <button class="rounded-lg bg-red-100 px-3 py-2 text-sm text-red-700" @click="error('Something went wrong')">Error</button>
          <button class="rounded-lg bg-amber-100 px-3 py-2 text-sm text-amber-700" @click="warning('Please review your input')">Warning</button>
          <button class="rounded-lg bg-blue-100 px-3 py-2 text-sm text-blue-700" @click="info('New version available')">Info</button>
        </div>
      </div>
    `,
  }),
}

export const WithDescription: Story = {
  args: { position: 'bottom-right' },
  render: (args) => ({
    components: { Sonner },
    setup() {
      const { success, error } = useSonner()
      return {
        args,
        showSuccess: () =>
          success('Changes saved', { description: 'Your profile has been updated successfully.' }),
        showError: () =>
          error('Upload failed', { description: 'The file exceeds the maximum size of 10MB.' }),
      }
    },
    template: `
      <div>
        <Sonner v-bind="args" />
        <div class="flex gap-2">
          <button class="rounded-lg bg-green-100 px-3 py-2 text-sm text-green-700" @click="showSuccess">Success + Description</button>
          <button class="rounded-lg bg-red-100 px-3 py-2 text-sm text-red-700" @click="showError">Error + Description</button>
        </div>
      </div>
    `,
  }),
}

export const WithAction: Story = {
  args: { position: 'bottom-right' },
  render: (args) => ({
    components: { Sonner },
    setup() {
      const { toast } = useSonner()
      return {
        args,
        showToast: () =>
          toast('Event deleted', {
            description: 'The event "Team meeting" was removed.',
            action: { label: 'Undo', onClick: () => {} },
          }),
      }
    },
    template: `
      <div>
        <Sonner v-bind="args" />
        <button class="rounded-lg bg-gray-100 px-3 py-2 text-sm" @click="showToast">Toast with Action</button>
      </div>
    `,
  }),
}
