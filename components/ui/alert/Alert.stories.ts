import type { Meta, StoryObj } from '@storybook/vue3'
import Alert from './Alert.vue'

const meta: Meta<typeof Alert> = {
  title: 'UI/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'danger'],
    },
    dismissible: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Alert>

export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Information',
  },
  render: (args) => ({
    components: { Alert },
    setup: () => ({ args }),
    template: '<Alert v-bind="args">This is an informational message.</Alert>',
  }),
}

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Success',
  },
  render: (args) => ({
    components: { Alert },
    setup: () => ({ args }),
    template: '<Alert v-bind="args">Operation completed successfully.</Alert>',
  }),
}

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Warning',
  },
  render: (args) => ({
    components: { Alert },
    setup: () => ({ args }),
    template: '<Alert v-bind="args">Please review the changes before proceeding.</Alert>',
  }),
}

export const Danger: Story = {
  args: {
    variant: 'danger',
    title: 'Error',
  },
  render: (args) => ({
    components: { Alert },
    setup: () => ({ args }),
    template: '<Alert v-bind="args">Something went wrong. Please try again.</Alert>',
  }),
}

export const WithoutTitle: Story = {
  args: {
    variant: 'info',
  },
  render: (args) => ({
    components: { Alert },
    setup: () => ({ args }),
    template: '<Alert v-bind="args">A simple alert without a title.</Alert>',
  }),
}

export const Dismissible: Story = {
  args: {
    variant: 'success',
    title: 'Saved!',
    dismissible: true,
  },
  render: (args) => ({
    components: { Alert },
    setup: () => ({ args }),
    template: '<Alert v-bind="args">Your changes have been saved.</Alert>',
  }),
}
