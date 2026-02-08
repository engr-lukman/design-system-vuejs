import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Modal from './Modal.vue'

const meta: Meta<typeof Modal> = {
  title: 'UI/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    closable: { control: 'boolean' },
    closeOnOverlay: { control: 'boolean' },
    closeOnEscape: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Modal>

export const Default: Story = {
  args: {
    title: 'Modal Title',
    modelValue: false,
  },
  render: (args) => ({
    components: { Modal },
    setup() {
      const open = ref(args.modelValue)
      return { args, open }
    },
    template: `
      <div>
        <button
          class="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          @click="open = true"
        >
          Open Modal
        </button>
        <Modal v-bind="args" v-model="open">
          <p class="text-gray-600">This is the modal body content.</p>
          <template #footer>
            <button
              class="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
              @click="open = false"
            >
              Cancel
            </button>
            <button
              class="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
              @click="open = false"
            >
              Confirm
            </button>
          </template>
        </Modal>
      </div>
    `,
  }),
}

export const Small: Story = {
  args: {
    title: 'Small Modal',
    size: 'sm',
    modelValue: false,
  },
  render: (args) => ({
    components: { Modal },
    setup() {
      const open = ref(args.modelValue)
      return { args, open }
    },
    template: `
      <div>
        <button
          class="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          @click="open = true"
        >
          Open Small Modal
        </button>
        <Modal v-bind="args" v-model="open">
          <p class="text-gray-600">Small modal content.</p>
        </Modal>
      </div>
    `,
  }),
}

export const Large: Story = {
  args: {
    title: 'Large Modal',
    size: 'lg',
    modelValue: false,
  },
  render: (args) => ({
    components: { Modal },
    setup() {
      const open = ref(args.modelValue)
      return { args, open }
    },
    template: `
      <div>
        <button
          class="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          @click="open = true"
        >
          Open Large Modal
        </button>
        <Modal v-bind="args" v-model="open">
          <p class="text-gray-600">Large modal with more room for content. You can add forms, tables, or any complex layout here.</p>
        </Modal>
      </div>
    `,
  }),
}

export const NonClosable: Story = {
  args: {
    title: 'Non-closable Modal',
    closable: false,
    closeOnOverlay: false,
    closeOnEscape: false,
    modelValue: false,
  },
  render: (args) => ({
    components: { Modal },
    setup() {
      const open = ref(args.modelValue)
      return { args, open }
    },
    template: `
      <div>
        <button
          class="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          @click="open = true"
        >
          Open Non-closable Modal
        </button>
        <Modal v-bind="args" v-model="open">
          <p class="text-gray-600">You can only close this modal with the button below.</p>
          <template #footer>
            <button
              class="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
              @click="open = false"
            >
              I understand
            </button>
          </template>
        </Modal>
      </div>
    `,
  }),
}
