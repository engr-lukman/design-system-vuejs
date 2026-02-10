import type { Meta, StoryObj } from '@storybook/vue3'
import LoginForm from './LoginForm.vue'

const meta: Meta<typeof LoginForm> = {
  title: 'Form/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  argTypes: {
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    showRememberMe: { control: 'boolean' },
    showForgotPassword: { control: 'boolean' },
    showRegisterLink: { control: 'boolean' },
    emailError: { control: 'text' },
    passwordError: { control: 'text' },
    generalError: { control: 'text' },
  },
  args: {
    loading: false,
    disabled: false,
    showRememberMe: true,
    showForgotPassword: true,
    showRegisterLink: true,
    emailError: '',
    passwordError: '',
    generalError: '',
  },
}

export default meta
type Story = StoryObj<typeof LoginForm>

export const Default: Story = {}

export const WithErrors: Story = {
  args: {
    emailError: 'Please enter a valid email address',
    passwordError: 'Password must be at least 8 characters',
  },
}

export const WithGeneralError: Story = {
  args: {
    generalError: 'Invalid email or password. Please try again.',
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

export const Minimal: Story = {
  args: {
    showRememberMe: false,
    showForgotPassword: false,
    showRegisterLink: false,
  },
}

export const CustomLabels: Story = {
  args: {
    labels: {
      title: 'Welcome Back',
      subtitle: 'Log in to continue to your dashboard',
      emailLabel: 'Email Address',
      emailPlaceholder: 'Enter your email',
      passwordLabel: 'Your Password',
      passwordPlaceholder: 'Enter your password',
      rememberMeLabel: 'Keep me logged in',
      submitLabel: 'Log in',
      forgotPasswordLabel: 'Reset password',
      registerLabel: 'New here?',
      registerLinkLabel: 'Create an account',
    },
  },
}
