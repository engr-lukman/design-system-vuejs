import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Pagination from './Pagination.vue'

const meta: Meta<typeof Pagination> = {
  title: 'Navigation/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    perPage: { control: 'number' },
    maxVisible: { control: 'number' },
  },
}

export default meta
type Story = StoryObj<typeof Pagination>

export const Default: Story = {
  render: () => ({
    components: { Pagination },
    setup() {
      const page = ref(1)
      return { page }
    },
    template: '<Pagination :total-items="100" v-model:current-page="page" />',
  }),
}

export const ManyPages: Story = {
  render: () => ({
    components: { Pagination },
    setup() {
      const page = ref(5)
      return { page }
    },
    template: '<Pagination :total-items="500" :per-page="10" v-model:current-page="page" />',
  }),
}

export const FewPages: Story = {
  render: () => ({
    components: { Pagination },
    setup() {
      const page = ref(1)
      return { page }
    },
    template: '<Pagination :total-items="25" :per-page="10" v-model:current-page="page" />',
  }),
}

export const CustomPerPage: Story = {
  render: () => ({
    components: { Pagination },
    setup() {
      const page = ref(1)
      return { page }
    },
    template: '<Pagination :total-items="200" :per-page="25" v-model:current-page="page" />',
  }),
}
