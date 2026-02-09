import type { Meta, StoryObj } from '@storybook/vue3'
import ContextMenu from './ContextMenu.vue'
import type { ContextMenuItem } from './types'

const menuItems: ContextMenuItem[] = [
  { label: 'Cut', value: 'cut', shortcut: '⌘X' },
  { label: 'Copy', value: 'copy', shortcut: '⌘C' },
  { label: 'Paste', value: 'paste', shortcut: '⌘V' },
  { value: 'sep1', separator: true },
  { label: 'Select All', value: 'select-all', shortcut: '⌘A' },
  { label: 'Find', value: 'find', shortcut: '⌘F' },
  { value: 'sep2', separator: true },
  { label: 'Share', value: 'share', disabled: true },
  { label: 'Delete', value: 'delete', danger: true },
]

const meta: Meta<typeof ContextMenu> = {
  title: 'Overlay/ContextMenu',
  component: ContextMenu,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ContextMenu>

export const Default: Story = {
  args: { items: menuItems },
  render: (args) => ({
    components: { ContextMenu },
    setup: () => ({ args }),
    template: `
      <ContextMenu v-bind="args">
        <div class="flex h-48 w-80 items-center justify-center rounded-lg border-2 border-dashed border-gray-300 text-sm text-gray-500">
          Right-click here
        </div>
      </ContextMenu>
    `,
  }),
}
