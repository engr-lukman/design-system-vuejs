export interface NavMenuItem {
  label: string
  href?: string
  active?: boolean
  children?: NavMenuChild[]
}

export interface NavMenuChild {
  label: string
  href: string
  description?: string
}
