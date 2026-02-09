export type SelectSize = 'sm' | 'md' | 'lg'

export interface SelectOption {
  label: string
  value: string | number
  disabled?: boolean
}
