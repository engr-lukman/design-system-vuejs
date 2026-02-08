import type { Meta, StoryObj } from '@storybook/vue3'
import Avatar from './Avatar.vue'

const meta: Meta<typeof Avatar> = {
  title: 'UI/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    shape: { control: 'select', options: ['circle', 'square'] },
    status: {
      control: 'select',
      options: [undefined, 'online', 'offline', 'away', 'busy'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  args: { name: 'Mohammad Lukman' },
}

export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=3',
    alt: 'User avatar',
  },
}

export const Fallback: Story = {
  render: () => ({
    components: { Avatar },
    template: '<Avatar />',
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { Avatar },
    template: `
      <div class="flex items-center gap-3">
        <Avatar name="ML" size="xs" />
        <Avatar name="ML" size="sm" />
        <Avatar name="ML" size="md" />
        <Avatar name="ML" size="lg" />
        <Avatar name="ML" size="xl" />
      </div>
    `,
  }),
}

export const Square: Story = {
  args: {
    name: 'ML',
    shape: 'square',
    size: 'lg',
  },
}

export const WithStatus: Story = {
  render: () => ({
    components: { Avatar },
    template: `
      <div class="flex items-center gap-4">
        <Avatar name="Online" status="online" size="lg" />
        <Avatar name="AW" status="away" size="lg" />
        <Avatar name="BS" status="busy" size="lg" />
        <Avatar name="OF" status="offline" size="lg" />
      </div>
    `,
  }),
}
