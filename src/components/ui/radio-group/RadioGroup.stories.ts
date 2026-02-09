import type { Meta, StoryObj } from '@storybook/vue3'
import RadioGroup from './RadioGroup.vue'

const fruitOptions = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cherry', value: 'cherry' },
]

const meta: Meta<typeof RadioGroup> = {
  title: 'Form/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal'],
    },
    disabled: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof RadioGroup>

export const Default: Story = {
  args: {
    label: 'Favorite Fruit',
    options: fruitOptions,
  },
}

export const Horizontal: Story = {
  args: {
    label: 'Favorite Fruit',
    options: fruitOptions,
    orientation: 'horizontal',
  },
}

export const Preselected: Story = {
  args: {
    label: 'Favorite Fruit',
    options: fruitOptions,
    modelValue: 'banana',
  },
}

export const WithError: Story = {
  args: {
    label: 'Favorite Fruit',
    options: fruitOptions,
    error: 'Please select an option',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Favorite Fruit',
    options: fruitOptions,
    modelValue: 'apple',
    disabled: true,
  },
}

export const WithDisabledOption: Story = {
  args: {
    label: 'Favorite Fruit',
    options: [
      { label: 'Apple', value: 'apple' },
      { label: 'Banana (out of stock)', value: 'banana', disabled: true },
      { label: 'Cherry', value: 'cherry' },
    ],
  },
}
