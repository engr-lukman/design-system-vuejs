import type { Meta, StoryObj } from '@storybook/vue3'
import Badge from './Badge.vue'

const meta: Meta<typeof Badge> = {
  title: 'Data Display/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'outline'],
    },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    dot: { control: 'boolean' },
    removable: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {
  render: (args) => ({
    components: { Badge },
    setup: () => ({ args }),
    template: '<Badge v-bind="args">Badge</Badge>',
  }),
}

export const Variants: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div class="flex flex-wrap gap-2">
        <Badge variant="primary">Primary</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="danger">Danger</Badge>
        <Badge variant="info">Info</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>
    `,
  }),
}

export const Outline: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div class="flex flex-wrap gap-2">
        <Badge variant="outline">Default</Badge>
        <Badge variant="outline" dot>With Dot</Badge>
        <Badge variant="outline" removable>Removable</Badge>
      </div>
    `,
  }),
}

export const WithDot: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div class="flex flex-wrap gap-2">
        <Badge variant="success" dot>Online</Badge>
        <Badge variant="warning" dot>Away</Badge>
        <Badge variant="danger" dot>Offline</Badge>
      </div>
    `,
  }),
}

export const Removable: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div class="flex flex-wrap gap-2">
        <Badge variant="primary" removable>Tag 1</Badge>
        <Badge variant="info" removable>Tag 2</Badge>
        <Badge variant="secondary" removable>Tag 3</Badge>
      </div>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div class="flex items-center gap-2">
        <Badge size="sm">Small</Badge>
        <Badge size="md">Medium</Badge>
        <Badge size="lg">Large</Badge>
      </div>
    `,
  }),
}
