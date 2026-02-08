import type { Meta, StoryObj } from '@storybook/vue3'
import Toggle from './Toggle.vue'

const meta: Meta<typeof Toggle> = {
  title: 'UI/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Toggle>

export const Default: Story = {
  args: {
    label: 'Enable notifications',
  },
}

export const On: Story = {
  args: {
    label: 'Notifications enabled',
    modelValue: true,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Cannot toggle',
    disabled: true,
  },
}

export const DisabledOn: Story = {
  args: {
    label: 'Locked on',
    modelValue: true,
    disabled: true,
  },
}

export const Small: Story = {
  args: {
    label: 'Small toggle',
    size: 'sm',
  },
}

export const Large: Story = {
  args: {
    label: 'Large toggle',
    size: 'lg',
  },
}
