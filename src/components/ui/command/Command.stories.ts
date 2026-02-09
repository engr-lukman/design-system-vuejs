import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Command from './Command.vue'
import type { CommandItem } from './types'

const items: CommandItem[] = [
  { label: 'Calendar', value: 'calendar', group: 'Suggestions', shortcut: '⌘C' },
  { label: 'Search Emoji', value: 'emoji', group: 'Suggestions' },
  { label: 'Calculator', value: 'calculator', group: 'Suggestions', shortcut: '⌘=' },
  { label: 'Profile', value: 'profile', group: 'Settings', shortcut: '⌘P' },
  { label: 'Billing', value: 'billing', group: 'Settings' },
  { label: 'Settings', value: 'settings', group: 'Settings', shortcut: '⌘,' },
]

const meta: Meta<typeof Command> = {
  title: 'Navigation/Command',
  component: Command,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Command>

export const Default: Story = {
  render: () => ({
    components: { Command },
    setup() {
      const open = ref(false)
      return { open, items }
    },
    template: `
      <div>
        <button class="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50" @click="open = true">
          Open Command (⌘K)
        </button>
        <Command v-model="open" :items="items" @select="() => {}" />
      </div>
    `,
  }),
}
