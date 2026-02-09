export interface MenubarItem {
  label: string
  value: string
  items?: MenubarDropdownItem[]
}

export interface MenubarDropdownItem {
  label?: string
  value: string
  shortcut?: string
  disabled?: boolean
  separator?: boolean
}
