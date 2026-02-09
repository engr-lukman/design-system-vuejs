import type { Meta, StoryObj } from '@storybook/vue3'
import NavigationMenu from './NavigationMenu.vue'
import type { NavMenuItem } from './types'

const items: NavMenuItem[] = [
  {
    label: 'Getting Started',
    children: [
      {
        label: 'Introduction',
        href: '/docs',
        description: 'Re-usable components built using Vue 3 and Tailwind CSS.',
      },
      {
        label: 'Installation',
        href: '/docs/install',
        description: 'How to install dependencies and structure your app.',
      },
      {
        label: 'Typography',
        href: '/docs/typography',
        description: 'Styles for headings, paragraphs, lists, and more.',
      },
    ],
  },
  {
    label: 'Components',
    children: [
      {
        label: 'Alert Dialog',
        href: '/components/alert-dialog',
        description: 'A modal dialog that interrupts the user.',
      },
      {
        label: 'Hover Card',
        href: '/components/hover-card',
        description: 'For sighted users to preview content.',
      },
      {
        label: 'Progress',
        href: '/components/progress',
        description: 'Shows an indicator for completion.',
      },
    ],
  },
  { label: 'Documentation', href: '/docs' },
  { label: 'GitHub', href: 'https://github.com' },
]

const meta: Meta<typeof NavigationMenu> = {
  title: 'Navigation/NavigationMenu',
  component: NavigationMenu,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof NavigationMenu>

export const Default: Story = {
  args: { items },
  render: (args) => ({
    components: { NavigationMenu },
    setup: () => ({ args }),
    template: `
      <div class="rounded-lg border border-gray-200 p-4">
        <NavigationMenu v-bind="args" />
      </div>
    `,
  }),
}
