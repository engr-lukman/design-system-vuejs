import type { Meta, StoryObj } from '@storybook/vue3'
import Textarea from './Textarea.vue'

const meta: Meta<typeof Textarea> = {
  title: 'Form/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    resize: {
      control: 'select',
      options: ['none', 'vertical', 'horizontal', 'both'],
    },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
    required: { control: 'boolean' },
    showCount: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Textarea>

export const Default: Story = {
  args: {
    label: 'Description',
    placeholder: 'Enter a description...',
  },
}

export const WithHint: Story = {
  args: {
    label: 'Bio',
    placeholder: 'Tell us about yourself',
    hint: 'Write a brief bio for your profile',
  },
}

export const WithError: Story = {
  args: {
    label: 'Message',
    modelValue: 'Hi',
    error: 'Message must be at least 10 characters',
  },
}

export const WithCharCount: Story = {
  args: {
    label: 'Tweet',
    placeholder: "What's happening?",
    maxLength: 280,
    showCount: true,
  },
}

export const Required: Story = {
  args: {
    label: 'Feedback',
    placeholder: 'Your feedback...',
    required: true,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Notes',
    modelValue: 'This is read-only content.',
    disabled: true,
  },
}

export const NoResize: Story = {
  args: {
    label: 'Fixed size',
    placeholder: 'Cannot resize this textarea',
    resize: 'none',
  },
}
