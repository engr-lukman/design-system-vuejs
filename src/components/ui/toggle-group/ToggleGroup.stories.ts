import type { Meta, StoryObj } from '@storybook/vue3'
import ToggleGroup from './ToggleGroup.vue'
import type { ToggleGroupItem } from './types'

const alignItems: ToggleGroupItem[] = [
  { label: 'Left', value: 'left' },
  { label: 'Center', value: 'center' },
  { label: 'Right', value: 'right' },
]

const viewItems: ToggleGroupItem[] = [
  { label: 'Grid', value: 'grid' },
  { label: 'List', value: 'list' },
  { label: 'Board', value: 'board' },
]

const dayItems: ToggleGroupItem[] = [
  { label: 'Mon', value: 'mon' },
  { label: 'Tue', value: 'tue' },
  { label: 'Wed', value: 'wed' },
  { label: 'Thu', value: 'thu' },
  { label: 'Fri', value: 'fri' },
  { label: 'Sat', value: 'sat', disabled: true },
  { label: 'Sun', value: 'sun', disabled: true },
]

const meta: Meta<typeof ToggleGroup> = {
  title: 'Form/ToggleGroup',
  component: ToggleGroup,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['outline', 'solid'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    multiple: { control: 'boolean' },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof ToggleGroup>

export const Default: Story = {
  args: { items: alignItems, modelValue: 'center' },
  render: (args) => ({
    components: { ToggleGroup },
    setup: () => ({ args }),
    template: '<ToggleGroup v-bind="args" />',
  }),
}

export const Solid: Story = {
  args: { items: viewItems, modelValue: 'grid', variant: 'solid' },
  render: (args) => ({
    components: { ToggleGroup },
    setup: () => ({ args }),
    template: '<ToggleGroup v-bind="args" />',
  }),
}

export const Small: Story = {
  args: { items: alignItems, modelValue: 'left', size: 'sm' },
  render: (args) => ({
    components: { ToggleGroup },
    setup: () => ({ args }),
    template: '<ToggleGroup v-bind="args" />',
  }),
}

export const Large: Story = {
  args: { items: alignItems, modelValue: 'right', size: 'lg' },
  render: (args) => ({
    components: { ToggleGroup },
    setup: () => ({ args }),
    template: '<ToggleGroup v-bind="args" />',
  }),
}

export const Multiple: Story = {
  args: { items: dayItems, modelValue: ['mon', 'wed', 'fri'], multiple: true },
  render: (args) => ({
    components: { ToggleGroup },
    setup: () => ({ args }),
    template: '<ToggleGroup v-bind="args" />',
  }),
}

export const MultipleSolid: Story = {
  args: {
    items: dayItems,
    modelValue: ['mon', 'tue'],
    multiple: true,
    variant: 'solid',
  },
  render: (args) => ({
    components: { ToggleGroup },
    setup: () => ({ args }),
    template: '<ToggleGroup v-bind="args" />',
  }),
}

export const FullWidth: Story = {
  args: { items: viewItems, modelValue: 'list', fullWidth: true },
  render: (args) => ({
    components: { ToggleGroup },
    setup: () => ({ args }),
    template: '<ToggleGroup v-bind="args" />',
  }),
}

export const Disabled: Story = {
  args: { items: alignItems, modelValue: 'center', disabled: true },
  render: (args) => ({
    components: { ToggleGroup },
    setup: () => ({ args }),
    template: '<ToggleGroup v-bind="args" />',
  }),
}
