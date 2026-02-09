import type { Meta, StoryObj } from '@storybook/vue3'
import DatePicker from './DatePicker.vue'

const meta: Meta<typeof DatePicker> = {
  title: 'Form/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  argTypes: {
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
  args: { label: 'Date' },
  render: (args) => ({
    components: { DatePicker },
    setup: () => ({ args }),
    template: '<div class="h-[420px]"><DatePicker v-bind="args" /></div>',
  }),
}

export const WithValue: Story = {
  args: { label: 'Birthday', modelValue: '2000-06-15' },
  render: (args) => ({
    components: { DatePicker },
    setup: () => ({ args }),
    template: '<div class="h-[420px]"><DatePicker v-bind="args" /></div>',
  }),
}

export const Required: Story = {
  args: { label: 'Start date', required: true },
  render: (args) => ({
    components: { DatePicker },
    setup: () => ({ args }),
    template: '<div class="h-[420px]"><DatePicker v-bind="args" /></div>',
  }),
}

export const Small: Story = {
  args: { label: 'Date', size: 'sm' },
  render: (args) => ({
    components: { DatePicker },
    setup: () => ({ args }),
    template: '<div class="h-[420px]"><DatePicker v-bind="args" /></div>',
  }),
}

export const Large: Story = {
  args: { label: 'Date', size: 'lg' },
  render: (args) => ({
    components: { DatePicker },
    setup: () => ({ args }),
    template: '<div class="h-[420px]"><DatePicker v-bind="args" /></div>',
  }),
}

export const WithMinMax: Story = {
  args: {
    label: 'Appointment',
    min: '2026-02-01',
    max: '2026-02-28',
    hint: 'Only February 2026 dates are available',
  },
  render: (args) => ({
    components: { DatePicker },
    setup: () => ({ args }),
    template: '<div class="h-[420px]"><DatePicker v-bind="args" /></div>',
  }),
}

export const WithHint: Story = {
  args: {
    label: 'Departure',
    hint: 'Select your departure date',
  },
  render: (args) => ({
    components: { DatePicker },
    setup: () => ({ args }),
    template: '<div class="h-[420px]"><DatePicker v-bind="args" /></div>',
  }),
}

export const WithError: Story = {
  args: {
    label: 'Due date',
    required: true,
    error: 'Due date is required',
  },
  render: (args) => ({
    components: { DatePicker },
    setup: () => ({ args }),
    template: '<div class="h-[420px]"><DatePicker v-bind="args" /></div>',
  }),
}

export const Disabled: Story = {
  args: {
    label: 'Date',
    modelValue: '2026-01-15',
    disabled: true,
  },
  render: (args) => ({
    components: { DatePicker },
    setup: () => ({ args }),
    template: '<DatePicker v-bind="args" />',
  }),
}
