import type { Meta, StoryObj } from '@storybook/vue3'
import Typography from './Typography.vue'

const meta: Meta<typeof Typography> = {
  title: 'Data Display/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'p',
        'lead',
        'large',
        'small',
        'muted',
        'code',
        'blockquote',
      ],
    },
    as: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Typography>

export const Heading1: Story = {
  args: { variant: 'h1' },
  render: (args) => ({
    components: { Typography },
    setup: () => ({ args }),
    template: '<Typography v-bind="args">Heading 1</Typography>',
  }),
}

export const Heading2: Story = {
  args: { variant: 'h2' },
  render: (args) => ({
    components: { Typography },
    setup: () => ({ args }),
    template: '<Typography v-bind="args">Heading 2</Typography>',
  }),
}

export const Heading3: Story = {
  args: { variant: 'h3' },
  render: (args) => ({
    components: { Typography },
    setup: () => ({ args }),
    template: '<Typography v-bind="args">Heading 3</Typography>',
  }),
}

export const Heading4: Story = {
  args: { variant: 'h4' },
  render: (args) => ({
    components: { Typography },
    setup: () => ({ args }),
    template: '<Typography v-bind="args">Heading 4</Typography>',
  }),
}

export const Paragraph: Story = {
  args: { variant: 'p' },
  render: (args) => ({
    components: { Typography },
    setup: () => ({ args }),
    template:
      '<Typography v-bind="args">The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.</Typography>',
  }),
}

export const Lead: Story = {
  args: { variant: 'lead' },
  render: (args) => ({
    components: { Typography },
    setup: () => ({ args }),
    template:
      '<Typography v-bind="args">A modal dialog that interrupts the user with important content and expects a response.</Typography>',
  }),
}

export const Large: Story = {
  args: { variant: 'large' },
  render: (args) => ({
    components: { Typography },
    setup: () => ({ args }),
    template: '<Typography v-bind="args">Are you absolutely sure?</Typography>',
  }),
}

export const Small: Story = {
  args: { variant: 'small' },
  render: (args) => ({
    components: { Typography },
    setup: () => ({ args }),
    template: '<Typography v-bind="args">Email address</Typography>',
  }),
}

export const Muted: Story = {
  args: { variant: 'muted' },
  render: (args) => ({
    components: { Typography },
    setup: () => ({ args }),
    template: '<Typography v-bind="args">Enter your email address.</Typography>',
  }),
}

export const Code: Story = {
  args: { variant: 'code' },
  render: (args) => ({
    components: { Typography },
    setup: () => ({ args }),
    template: '<Typography v-bind="args">@radix-ui/vue</Typography>',
  }),
}

export const Blockquote: Story = {
  args: { variant: 'blockquote' },
  render: (args) => ({
    components: { Typography },
    setup: () => ({ args }),
    template:
      '<Typography v-bind="args">"After all," he said, "everyone enjoys a good joke, so it\'s only fair that they should pay for the privilege."</Typography>',
  }),
}

export const AllVariants: Story = {
  render: () => ({
    components: { Typography },
    template: `
      <div class="space-y-4 max-w-lg">
        <Typography variant="h1">Heading 1</Typography>
        <Typography variant="h2">Heading 2</Typography>
        <Typography variant="h3">Heading 3</Typography>
        <Typography variant="h4">Heading 4</Typography>
        <Typography variant="lead">Lead paragraph text</Typography>
        <Typography variant="p">Regular paragraph body text with normal sizing.</Typography>
        <Typography variant="large">Large text</Typography>
        <Typography variant="small">Small text</Typography>
        <Typography variant="muted">Muted text</Typography>
        <Typography variant="code">inline code</Typography>
        <Typography variant="blockquote">A blockquote example</Typography>
      </div>
    `,
  }),
}
