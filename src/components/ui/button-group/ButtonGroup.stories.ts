import type { Meta, StoryObj } from '@storybook/vue3'
import ButtonGroup from './ButtonGroup.vue'
import type { ButtonGroupItem } from './types'

const viewItems: ButtonGroupItem[] = [
  { label: 'Day', value: 'day' },
  { label: 'Week', value: 'week' },
  { label: 'Month', value: 'month' },
  { label: 'Year', value: 'year' },
]

const sortItems: ButtonGroupItem[] = [
  { label: 'Newest', value: 'newest' },
  { label: 'Popular', value: 'popular' },
  { label: 'Trending', value: 'trending' },
]

const filterItems: ButtonGroupItem[] = [
  { label: 'All', value: 'all' },
  { label: 'Active', value: 'active' },
  { label: 'Archived', value: 'archived', disabled: true },
]

const meta: Meta<typeof ButtonGroup> = {
  title: 'Form/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof ButtonGroup>

export const Default: Story = {
  args: { items: viewItems, modelValue: 'week' },
  render: (args) => ({
    components: { ButtonGroup },
    setup: () => ({ args }),
    template: '<ButtonGroup v-bind="args" />',
  }),
}

export const Primary: Story = {
  args: { items: sortItems, modelValue: 'popular', variant: 'primary' },
  render: (args) => ({
    components: { ButtonGroup },
    setup: () => ({ args }),
    template: '<ButtonGroup v-bind="args" />',
  }),
}

export const Secondary: Story = {
  args: { items: sortItems, modelValue: 'newest', variant: 'secondary' },
  render: (args) => ({
    components: { ButtonGroup },
    setup: () => ({ args }),
    template: '<ButtonGroup v-bind="args" />',
  }),
}

export const Small: Story = {
  args: { items: viewItems, modelValue: 'day', size: 'sm' },
  render: (args) => ({
    components: { ButtonGroup },
    setup: () => ({ args }),
    template: '<ButtonGroup v-bind="args" />',
  }),
}

export const Large: Story = {
  args: { items: viewItems, modelValue: 'month', size: 'lg' },
  render: (args) => ({
    components: { ButtonGroup },
    setup: () => ({ args }),
    template: '<ButtonGroup v-bind="args" />',
  }),
}

export const WithDisabledItem: Story = {
  args: { items: filterItems, modelValue: 'all' },
  render: (args) => ({
    components: { ButtonGroup },
    setup: () => ({ args }),
    template: '<ButtonGroup v-bind="args" />',
  }),
}

export const FullWidth: Story = {
  args: { items: viewItems, modelValue: 'week', fullWidth: true },
  render: (args) => ({
    components: { ButtonGroup },
    setup: () => ({ args }),
    template: '<ButtonGroup v-bind="args" />',
  }),
}

export const Disabled: Story = {
  args: { items: sortItems, modelValue: 'popular', disabled: true },
  render: (args) => ({
    components: { ButtonGroup },
    setup: () => ({ args }),
    template: '<ButtonGroup v-bind="args" />',
  }),
}
