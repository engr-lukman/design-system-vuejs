export interface RegisterFormData {
  name: string
  email: string
  password: string
  confirmPassword: string
  agreeToTerms: boolean
}

export interface RegisterFormLabels {
  title?: string
  subtitle?: string
  nameLabel?: string
  namePlaceholder?: string
  emailLabel?: string
  emailPlaceholder?: string
  passwordLabel?: string
  passwordPlaceholder?: string
  confirmPasswordLabel?: string
  confirmPasswordPlaceholder?: string
  agreeToTermsLabel?: string
  submitLabel?: string
  loginLabel?: string
  loginLinkLabel?: string
}
