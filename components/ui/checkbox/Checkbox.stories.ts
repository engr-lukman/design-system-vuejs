import type { Meta, StoryObj } from '@storybook/vue3'
import Checkbox from './Checkbox.vue'

const meta: Meta<typeof Checkbox> = {
  title: 'UI/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  args: {
    label: 'Accept terms and conditions',
  },
}

export const Checked: Story = {
  args: {
    label: 'Accept terms and conditions',
    modelValue: true,
  },
}

export const WithError: Story = {
  args: {
    label: 'Accept terms and conditions',
    error: 'You must accept the terms to continue',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Cannot change',
    disabled: true,
  },
}

export const DisabledChecked: Story = {
  args: {
    label: 'Locked selection',
    modelValue: true,
    disabled: true,
  },
}

export const Indeterminate: Story = {
  args: {
    label: 'Select all',
    indeterminate: true,
  },
}
