import type { Meta, StoryObj } from '@storybook/vue3'
import InputOtp from './InputOtp.vue'

const meta: Meta<typeof InputOtp> = {
  title: 'Form/InputOtp',
  component: InputOtp,
  tags: ['autodocs'],
  argTypes: {
    length: { control: { type: 'number', min: 4, max: 8 } },
    disabled: { control: 'boolean' },
    mask: { control: 'boolean' },
    label: { control: 'text' },
    error: { control: 'text' },
    hint: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof InputOtp>

export const Default: Story = {
  args: { length: 6 },
  render: (args) => ({
    components: { InputOtp },
    setup: () => ({ args }),
    template: '<InputOtp v-bind="args" />',
  }),
}

export const WithLabel: Story = {
  args: { length: 6, label: 'Verification code' },
  render: (args) => ({
    components: { InputOtp },
    setup: () => ({ args }),
    template: '<InputOtp v-bind="args" />',
  }),
}

export const FourDigits: Story = {
  args: { length: 4, label: 'PIN' },
  render: (args) => ({
    components: { InputOtp },
    setup: () => ({ args }),
    template: '<InputOtp v-bind="args" />',
  }),
}

export const Masked: Story = {
  args: { length: 6, label: 'Secure code', mask: true },
  render: (args) => ({
    components: { InputOtp },
    setup: () => ({ args }),
    template: '<InputOtp v-bind="args" />',
  }),
}

export const WithHint: Story = {
  args: {
    length: 6,
    label: 'OTP',
    hint: 'Enter the 6-digit code sent to your phone',
  },
  render: (args) => ({
    components: { InputOtp },
    setup: () => ({ args }),
    template: '<InputOtp v-bind="args" />',
  }),
}

export const WithError: Story = {
  args: {
    length: 6,
    label: 'Verification code',
    modelValue: '12345',
    error: 'Invalid verification code',
  },
  render: (args) => ({
    components: { InputOtp },
    setup: () => ({ args }),
    template: '<InputOtp v-bind="args" />',
  }),
}

export const Disabled: Story = {
  args: { length: 6, label: 'OTP', modelValue: '123456', disabled: true },
  render: (args) => ({
    components: { InputOtp },
    setup: () => ({ args }),
    template: '<InputOtp v-bind="args" />',
  }),
}

export const Prefilled: Story = {
  args: { length: 6, label: 'Code', modelValue: '482961' },
  render: (args) => ({
    components: { InputOtp },
    setup: () => ({ args }),
    template: '<InputOtp v-bind="args" />',
  }),
}
