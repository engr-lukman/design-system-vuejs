export interface SidebarItem {
  label: string
  value: string
  icon?: string
  href?: string
  active?: boolean
  children?: SidebarItem[]
  badge?: string | number
}

export interface SidebarSection {
  title?: string
  items: SidebarItem[]
}
