import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Tabs from './Tabs.vue'

const meta: Meta<typeof Tabs> = {
  title: 'Navigation/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['underline', 'pills'] },
    fullWidth: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Tabs>

const sampleTabs = [
  { key: 'overview', label: 'Overview' },
  { key: 'features', label: 'Features' },
  { key: 'pricing', label: 'Pricing' },
]

export const Default: Story = {
  render: () => ({
    components: { Tabs },
    setup() {
      const activeTab = ref('overview')
      return { tabs: sampleTabs, activeTab }
    },
    template: `
      <Tabs :tabs="tabs" v-model="activeTab">
        <template #overview><p class="text-gray-600">Overview content here.</p></template>
        <template #features><p class="text-gray-600">Features content here.</p></template>
        <template #pricing><p class="text-gray-600">Pricing content here.</p></template>
      </Tabs>
    `,
  }),
}

export const Pills: Story = {
  render: () => ({
    components: { Tabs },
    setup() {
      const activeTab = ref('overview')
      return { tabs: sampleTabs, activeTab }
    },
    template: `
      <Tabs :tabs="tabs" v-model="activeTab" variant="pills">
        <template #overview><p class="text-gray-600">Overview content.</p></template>
        <template #features><p class="text-gray-600">Features content.</p></template>
        <template #pricing><p class="text-gray-600">Pricing content.</p></template>
      </Tabs>
    `,
  }),
}

export const FullWidth: Story = {
  render: () => ({
    components: { Tabs },
    setup() {
      const activeTab = ref('overview')
      return { tabs: sampleTabs, activeTab }
    },
    template: `
      <Tabs :tabs="tabs" v-model="activeTab" full-width>
        <template #overview><p class="text-gray-600">Full width tabs.</p></template>
        <template #features><p class="text-gray-600">Features.</p></template>
        <template #pricing><p class="text-gray-600">Pricing.</p></template>
      </Tabs>
    `,
  }),
}

export const WithDisabled: Story = {
  render: () => ({
    components: { Tabs },
    setup() {
      const activeTab = ref('overview')
      const tabs = [
        { key: 'overview', label: 'Overview' },
        { key: 'features', label: 'Features' },
        { key: 'pricing', label: 'Pricing', disabled: true },
      ]
      return { tabs, activeTab }
    },
    template: `
      <Tabs :tabs="tabs" v-model="activeTab">
        <template #overview><p class="text-gray-600">Overview content.</p></template>
        <template #features><p class="text-gray-600">Features content.</p></template>
        <template #pricing><p class="text-gray-600">Pricing content (disabled).</p></template>
      </Tabs>
    `,
  }),
}
