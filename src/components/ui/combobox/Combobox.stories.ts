import type { Meta, StoryObj } from '@storybook/vue3'
import Combobox from './Combobox.vue'
import type { ComboboxOption } from './types'

const frameworks: ComboboxOption[] = [
  { label: 'Vue', value: 'vue' },
  { label: 'React', value: 'react' },
  { label: 'Angular', value: 'angular' },
  { label: 'Svelte', value: 'svelte' },
  { label: 'Solid', value: 'solid' },
  { label: 'Ember', value: 'ember', disabled: true },
]

const countries: ComboboxOption[] = [
  { label: 'Bangladesh', value: 'bd' },
  { label: 'United States', value: 'us' },
  { label: 'United Kingdom', value: 'uk' },
  { label: 'Canada', value: 'ca' },
  { label: 'Australia', value: 'au' },
  { label: 'Germany', value: 'de' },
  { label: 'France', value: 'fr' },
  { label: 'Japan', value: 'jp' },
  { label: 'India', value: 'in' },
  { label: 'Brazil', value: 'br' },
]

const meta: Meta<typeof Combobox> = {
  title: 'Form/Combobox',
  component: Combobox,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    error: { control: 'text' },
    hint: { control: 'text' },
    emptyMessage: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Combobox>

export const Default: Story = {
  args: { options: frameworks, label: 'Framework', placeholder: 'Select a framework...' },
  render: (args) => ({
    components: { Combobox },
    setup: () => ({ args }),
    template: '<div class="h-80"><Combobox v-bind="args" /></div>',
  }),
}

export const WithSelection: Story = {
  args: {
    options: frameworks,
    label: 'Framework',
    modelValue: 'vue',
  },
  render: (args) => ({
    components: { Combobox },
    setup: () => ({ args }),
    template: '<div class="h-80"><Combobox v-bind="args" /></div>',
  }),
}

export const ManyOptions: Story = {
  args: {
    options: countries,
    label: 'Country',
    placeholder: 'Search countries...',
  },
  render: (args) => ({
    components: { Combobox },
    setup: () => ({ args }),
    template: '<div class="h-96"><Combobox v-bind="args" /></div>',
  }),
}

export const Small: Story = {
  args: { options: frameworks, label: 'Framework', size: 'sm' },
  render: (args) => ({
    components: { Combobox },
    setup: () => ({ args }),
    template: '<div class="h-80"><Combobox v-bind="args" /></div>',
  }),
}

export const Large: Story = {
  args: { options: frameworks, label: 'Framework', size: 'lg' },
  render: (args) => ({
    components: { Combobox },
    setup: () => ({ args }),
    template: '<div class="h-80"><Combobox v-bind="args" /></div>',
  }),
}

export const Required: Story = {
  args: { options: frameworks, label: 'Framework', required: true },
  render: (args) => ({
    components: { Combobox },
    setup: () => ({ args }),
    template: '<div class="h-80"><Combobox v-bind="args" /></div>',
  }),
}

export const WithHint: Story = {
  args: {
    options: frameworks,
    label: 'Framework',
    hint: 'Choose the framework for your project',
  },
  render: (args) => ({
    components: { Combobox },
    setup: () => ({ args }),
    template: '<div class="h-80"><Combobox v-bind="args" /></div>',
  }),
}

export const WithError: Story = {
  args: {
    options: frameworks,
    label: 'Framework',
    required: true,
    error: 'Please select a framework',
  },
  render: (args) => ({
    components: { Combobox },
    setup: () => ({ args }),
    template: '<div class="h-80"><Combobox v-bind="args" /></div>',
  }),
}

export const Disabled: Story = {
  args: {
    options: frameworks,
    label: 'Framework',
    modelValue: 'vue',
    disabled: true,
  },
  render: (args) => ({
    components: { Combobox },
    setup: () => ({ args }),
    template: '<Combobox v-bind="args" />',
  }),
}
