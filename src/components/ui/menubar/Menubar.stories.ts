import type { Meta, StoryObj } from '@storybook/vue3'
import Menubar from './Menubar.vue'
import type { MenubarItem } from './types'

const items: MenubarItem[] = [
  {
    label: 'File',
    value: 'file',
    items: [
      { label: 'New Tab', value: 'new-tab', shortcut: '⌘T' },
      { label: 'New Window', value: 'new-window', shortcut: '⌘N' },
      { value: 'sep1', separator: true },
      { label: 'Share', value: 'share' },
      { value: 'sep2', separator: true },
      { label: 'Print', value: 'print', shortcut: '⌘P' },
    ],
  },
  {
    label: 'Edit',
    value: 'edit',
    items: [
      { label: 'Undo', value: 'undo', shortcut: '⌘Z' },
      { label: 'Redo', value: 'redo', shortcut: '⇧⌘Z' },
      { value: 'sep', separator: true },
      { label: 'Cut', value: 'cut', shortcut: '⌘X' },
      { label: 'Copy', value: 'copy', shortcut: '⌘C' },
      { label: 'Paste', value: 'paste', shortcut: '⌘V' },
    ],
  },
  {
    label: 'View',
    value: 'view',
    items: [
      { label: 'Zoom In', value: 'zoom-in', shortcut: '⌘+' },
      { label: 'Zoom Out', value: 'zoom-out', shortcut: '⌘-' },
      { value: 'sep', separator: true },
      { label: 'Full Screen', value: 'fullscreen' },
    ],
  },
  {
    label: 'Help',
    value: 'help',
    items: [
      { label: 'Documentation', value: 'docs' },
      { label: 'About', value: 'about' },
    ],
  },
]

const meta: Meta<typeof Menubar> = {
  title: 'Navigation/Menubar',
  component: Menubar,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Menubar>

export const Default: Story = {
  args: { items },
}
