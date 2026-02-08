import type { Meta, StoryObj } from '@storybook/vue3'
import Breadcrumb from './Breadcrumb.vue'

const meta: Meta<typeof Breadcrumb> = {
  title: 'UI/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  argTypes: {
    separator: { control: 'select', options: ['slash', 'chevron'] },
  },
}

export default meta
type Story = StoryObj<typeof Breadcrumb>

export const Default: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Category', href: '/products/category' },
      { label: 'Current Page', active: true },
    ],
  },
}

export const SlashSeparator: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Settings', href: '/settings' },
      { label: 'Profile', active: true },
    ],
    separator: 'slash',
  },
}

export const TwoLevels: Story = {
  args: {
    items: [
      { label: 'Dashboard', href: '/' },
      { label: 'Users', active: true },
    ],
  },
}
