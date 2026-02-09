import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Calendar from './Calendar.vue'

const meta: Meta<typeof Calendar> = {
  title: 'Data Display/Calendar',
  component: Calendar,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Calendar>

export const Default: Story = {
  render: () => ({
    components: { Calendar },
    setup() {
      const date = ref<Date | undefined>(undefined)
      return { date }
    },
    template: `
      <div>
        <Calendar v-model="date" />
        <p class="mt-2 text-sm text-gray-500">Selected: {{ date?.toLocaleDateString() ?? 'None' }}</p>
      </div>
    `,
  }),
}

export const WithSelectedDate: Story = {
  render: () => ({
    components: { Calendar },
    setup() {
      const date = ref(new Date())
      return { date }
    },
    template: '<Calendar v-model="date" />',
  }),
}

export const WithMinMaxDates: Story = {
  render: () => ({
    components: { Calendar },
    setup() {
      const date = ref<Date | undefined>(undefined)
      const today = new Date()
      const minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 5)
      const maxDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 10)
      return { date, minDate, maxDate }
    },
    template: `
      <div>
        <Calendar v-model="date" :min-date="minDate" :max-date="maxDate" />
        <p class="mt-2 text-xs text-gray-400">Only dates within ±5/+10 days from today are selectable.</p>
      </div>
    `,
  }),
}
