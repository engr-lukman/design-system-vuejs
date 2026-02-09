import type { Meta, StoryObj } from '@storybook/vue3'
import Accordion from './Accordion.vue'
import type { AccordionItem } from './types'

const faqItems: AccordionItem[] = [
  {
    value: 'shipping',
    title: 'What are your shipping options?',
    content:
      'We offer standard (5-7 days), express (2-3 days), and overnight shipping. Free shipping on orders over $50.',
  },
  {
    value: 'returns',
    title: 'What is your return policy?',
    content:
      'You can return most items within 30 days of delivery for a full refund. Items must be in original condition.',
  },
  {
    value: 'support',
    title: 'How can I contact customer support?',
    content:
      'You can reach us via email at support@example.com, call us at 1-800-555-0199, or use our live chat feature.',
  },
  {
    value: 'warranty',
    title: 'Is there a warranty?',
    content: 'All products come with a 1-year limited warranty covering manufacturing defects.',
    disabled: true,
  },
]

const meta: Meta<typeof Accordion> = {
  title: 'Overlay/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    multiple: { control: 'boolean' },
    bordered: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Accordion>

export const Default: Story = {
  args: { items: faqItems },
  render: (args) => ({
    components: { Accordion },
    setup: () => ({ args }),
    template: '<div class="w-[480px]"><Accordion v-bind="args" /></div>',
  }),
}

export const Multiple: Story = {
  args: { items: faqItems, multiple: true },
  render: (args) => ({
    components: { Accordion },
    setup: () => ({ args }),
    template: '<div class="w-[480px]"><Accordion v-bind="args" /></div>',
  }),
}

export const Bordered: Story = {
  args: { items: faqItems, bordered: true },
  render: (args) => ({
    components: { Accordion },
    setup: () => ({ args }),
    template: '<div class="w-[480px]"><Accordion v-bind="args" /></div>',
  }),
}
