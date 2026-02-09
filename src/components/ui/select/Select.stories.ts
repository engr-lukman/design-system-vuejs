import type { Meta, StoryObj } from '@storybook/vue3'
import Select from './Select.vue'

const sampleOptions = [
  { label: 'Option One', value: 'one' },
  { label: 'Option Two', value: 'two' },
  { label: 'Option Three', value: 'three' },
  { label: 'Disabled Option', value: 'disabled', disabled: true },
]

const meta: Meta<typeof Select> = {
  title: 'Form/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Select>

export const Default: Story = {
  args: {
    label: 'Choose option',
    options: sampleOptions,
  },
}

export const WithHint: Story = {
  args: {
    label: 'Country',
    options: [
      { label: 'Bangladesh', value: 'bd' },
      { label: 'India', value: 'in' },
      { label: 'United States', value: 'us' },
    ],
    hint: 'Select your country of residence',
  },
}

export const WithError: Story = {
  args: {
    label: 'Category',
    options: sampleOptions,
    error: 'Please select a category',
  },
}

export const Required: Story = {
  args: {
    label: 'Priority',
    options: [
      { label: 'Low', value: 'low' },
      { label: 'Medium', value: 'medium' },
      { label: 'High', value: 'high' },
    ],
    required: true,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled Select',
    options: sampleOptions,
    modelValue: 'one',
    disabled: true,
  },
}

export const Small: Story = {
  args: {
    label: 'Small',
    options: sampleOptions,
    size: 'sm',
  },
}

export const Large: Story = {
  args: {
    label: 'Large',
    options: sampleOptions,
    size: 'lg',
  },
}
