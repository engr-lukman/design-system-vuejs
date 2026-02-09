import type { Meta, StoryObj } from '@storybook/vue3'
import DatePicker from './DatePicker.vue'

const meta: Meta<typeof DatePicker> = {
  title: 'Form/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  argTypes: {
    mode: {
      control: 'select',
      options: ['date', 'date-range', 'month', 'week', 'time', 'datetime'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    error: { control: 'text' },
    hint: { control: 'text' },
    min: { control: 'text' },
    max: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof DatePicker>

export const Default: Story = {
  args: { label: 'Date', mode: 'date' },
}

export const WithValue: Story = {
  args: { label: 'Birthday', mode: 'date', modelValue: '2000-06-15' },
}

export const DateRange: Story = {
  args: {
    label: 'Start date',
    labelEnd: 'End date',
    mode: 'date-range',
  },
}

export const MonthPicker: Story = {
  args: { label: 'Month', mode: 'month' },
}

export const WeekPicker: Story = {
  args: { label: 'Week', mode: 'week' },
}

export const TimePicker: Story = {
  args: { label: 'Time', mode: 'time' },
}

export const DateTimePicker: Story = {
  args: { label: 'Date & Time', mode: 'datetime' },
}

export const WithMinMax: Story = {
  args: {
    label: 'Appointment',
    mode: 'date',
    min: '2026-02-01',
    max: '2026-02-28',
    hint: 'Only February 2026 dates are available',
  },
}

export const Small: Story = {
  args: { label: 'Date', mode: 'date', size: 'sm' },
}

export const Large: Story = {
  args: { label: 'Date', mode: 'date', size: 'lg' },
}

export const Required: Story = {
  args: { label: 'Start date', mode: 'date', required: true },
}

export const WithError: Story = {
  args: {
    label: 'Due date',
    mode: 'date',
    required: true,
    error: 'Due date is required',
  },
}

export const WithHint: Story = {
  args: {
    label: 'Departure',
    mode: 'date',
    hint: 'Select your departure date',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Date',
    mode: 'date',
    modelValue: '2026-01-15',
    disabled: true,
  },
}

export const AllModes: Story = {
  render: () => ({
    components: { DatePicker },
    template: `
      <div class="grid gap-6 sm:grid-cols-2">
        <DatePicker label="Date" mode="date" />
        <DatePicker label="Month" mode="month" />
        <DatePicker label="Week" mode="week" />
        <DatePicker label="Time" mode="time" />
        <DatePicker label="Date & Time" mode="datetime" />
        <div class="sm:col-span-2">
          <DatePicker label="Start date" label-end="End date" mode="date-range" />
        </div>
      </div>
    `,
  }),
}
