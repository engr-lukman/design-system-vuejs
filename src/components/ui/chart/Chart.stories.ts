import type { Meta, StoryObj } from '@storybook/vue3'
import Chart from './Chart.vue'
import type { ChartDataPoint } from './types'

const barData: ChartDataPoint[] = [
  { label: 'Jan', value: 120 },
  { label: 'Feb', value: 180 },
  { label: 'Mar', value: 90 },
  { label: 'Apr', value: 250 },
  { label: 'May', value: 200 },
  { label: 'Jun', value: 170 },
]

const donutData: ChartDataPoint[] = [
  { label: 'Desktop', value: 450 },
  { label: 'Mobile', value: 320 },
  { label: 'Tablet', value: 130 },
  { label: 'Other', value: 50 },
]

const meta: Meta<typeof Chart> = {
  title: 'Data Display/Chart',
  component: Chart,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['bar', 'line', 'donut'] },
    height: { control: 'number' },
    showLabels: { control: 'boolean' },
    showValues: { control: 'boolean' },
    title: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Chart>

export const BarChart: Story = {
  args: { data: barData, type: 'bar', title: 'Monthly Revenue' },
  render: (args) => ({
    components: { Chart },
    setup: () => ({ args }),
    template: '<div class="max-w-lg"><Chart v-bind="args" /></div>',
  }),
}

export const LineChart: Story = {
  args: { data: barData, type: 'line', title: 'Monthly Trends' },
  render: (args) => ({
    components: { Chart },
    setup: () => ({ args }),
    template: '<div class="max-w-lg"><Chart v-bind="args" /></div>',
  }),
}

export const DonutChart: Story = {
  args: { data: donutData, type: 'donut', title: 'Device Breakdown' },
  render: (args) => ({
    components: { Chart },
    setup: () => ({ args }),
    template: '<div class="max-w-md"><Chart v-bind="args" /></div>',
  }),
}
