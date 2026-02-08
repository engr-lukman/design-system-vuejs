import type { Meta, StoryObj } from '@storybook/vue3'
import TextInput from './TextInput.vue'

const meta: Meta<typeof TextInput> = {
  title: 'UI/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
    required: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof TextInput>

export const Default: Story = {
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    type: 'email',
  },
}

export const WithHint: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    hint: 'Must be 3-20 characters',
  },
}

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    modelValue: 'invalid',
    error: 'Please enter a valid email address',
  },
}

export const Required: Story = {
  args: {
    label: 'Full Name',
    placeholder: 'Enter your name',
    required: true,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    modelValue: 'Cannot edit this',
    disabled: true,
  },
}

export const Small: Story = {
  args: {
    label: 'Small',
    placeholder: 'Small input',
    size: 'sm',
  },
}

export const Large: Story = {
  args: {
    label: 'Large',
    placeholder: 'Large input',
    size: 'lg',
  },
}

export const Password: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    type: 'password',
  },
}
