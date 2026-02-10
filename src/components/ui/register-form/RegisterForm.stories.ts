import type { Meta, StoryObj } from '@storybook/vue3'
import RegisterForm from './RegisterForm.vue'

const meta: Meta<typeof RegisterForm> = {
  title: 'Form/RegisterForm',
  component: RegisterForm,
  tags: ['autodocs'],
  argTypes: {
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    showLoginLink: { control: 'boolean' },
    nameError: { control: 'text' },
    emailError: { control: 'text' },
    passwordError: { control: 'text' },
    confirmPasswordError: { control: 'text' },
    agreeToTermsError: { control: 'text' },
    generalError: { control: 'text' },
  },
  args: {
    loading: false,
    disabled: false,
    showLoginLink: true,
    nameError: '',
    emailError: '',
    passwordError: '',
    confirmPasswordError: '',
    agreeToTermsError: '',
    generalError: '',
  },
}

export default meta
type Story = StoryObj<typeof RegisterForm>

export const Default: Story = {}

export const WithErrors: Story = {
  args: {
    nameError: 'Name is required',
    emailError: 'Please enter a valid email address',
    passwordError: 'Password must be at least 8 characters',
    confirmPasswordError: 'Passwords do not match',
    agreeToTermsError: 'You must agree to the terms',
  },
}

export const WithGeneralError: Story = {
  args: {
    generalError: 'An account with this email already exists.',
  },
}

export const Loading: Story = {
  args: {
    loading: true,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const WithoutLoginLink: Story = {
  args: {
    showLoginLink: false,
  },
}

export const CustomLabels: Story = {
  args: {
    labels: {
      title: 'Get Started',
      subtitle: 'Join us today — it only takes a minute',
      nameLabel: 'Your Name',
      namePlaceholder: 'Enter your full name',
      emailLabel: 'Email Address',
      emailPlaceholder: 'Enter your email',
      passwordLabel: 'Choose a Password',
      passwordPlaceholder: 'At least 8 characters',
      confirmPasswordLabel: 'Re-enter Password',
      confirmPasswordPlaceholder: 'Type your password again',
      agreeToTermsLabel: 'I accept the privacy policy and terms of service',
      submitLabel: 'Register',
      loginLabel: 'Have an account?',
      loginLinkLabel: 'Log in',
    },
  },
}
