import type { Meta, StoryObj } from '@storybook/vue3'
import Slider from './Slider.vue'

const meta: Meta<typeof Slider> = {
  title: 'Form/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: { type: 'number', min: 0, max: 100, step: 1 } },
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
    showValue: { control: 'boolean' },
    label: { control: 'text' },
    error: { control: 'text' },
    hint: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Slider>

export const Default: Story = {
  args: { modelValue: 50 },
  render: (args) => ({
    components: { Slider },
    setup: () => ({ args }),
    template: '<Slider v-bind="args" />',
  }),
}

export const WithLabel: Story = {
  args: { modelValue: 30, label: 'Volume', showValue: true },
  render: (args) => ({
    components: { Slider },
    setup: () => ({ args }),
    template: '<Slider v-bind="args" />',
  }),
}

export const Small: Story = {
  args: { modelValue: 40, label: 'Small slider', size: 'sm', showValue: true },
  render: (args) => ({
    components: { Slider },
    setup: () => ({ args }),
    template: '<Slider v-bind="args" />',
  }),
}

export const Large: Story = {
  args: { modelValue: 60, label: 'Large slider', size: 'lg', showValue: true },
  render: (args) => ({
    components: { Slider },
    setup: () => ({ args }),
    template: '<Slider v-bind="args" />',
  }),
}

export const CustomRange: Story = {
  args: {
    modelValue: 25,
    min: 0,
    max: 50,
    step: 5,
    label: 'Price',
    showValue: true,
  },
  render: (args) => ({
    components: { Slider },
    setup: () => ({ args }),
    template: '<Slider v-bind="args" />',
  }),
}

export const WithHint: Story = {
  args: {
    modelValue: 70,
    label: 'Brightness',
    showValue: true,
    hint: 'Adjust screen brightness level',
  },
  render: (args) => ({
    components: { Slider },
    setup: () => ({ args }),
    template: '<Slider v-bind="args" />',
  }),
}

export const WithError: Story = {
  args: {
    modelValue: 5,
    label: 'Minimum order',
    showValue: true,
    error: 'Value must be at least 10',
  },
  render: (args) => ({
    components: { Slider },
    setup: () => ({ args }),
    template: '<Slider v-bind="args" />',
  }),
}

export const Disabled: Story = {
  args: { modelValue: 50, label: 'Disabled slider', showValue: true, disabled: true },
  render: (args) => ({
    components: { Slider },
    setup: () => ({ args }),
    template: '<Slider v-bind="args" />',
  }),
}
