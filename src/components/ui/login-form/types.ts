export interface LoginFormData {
  email: string
  password: string
  rememberMe: boolean
}

export interface LoginFormLabels {
  title?: string
  subtitle?: string
  emailLabel?: string
  emailPlaceholder?: string
  passwordLabel?: string
  passwordPlaceholder?: string
  rememberMeLabel?: string
  submitLabel?: string
  forgotPasswordLabel?: string
  registerLabel?: string
  registerLinkLabel?: string
}
