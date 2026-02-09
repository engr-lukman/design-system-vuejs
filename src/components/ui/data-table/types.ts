export interface DataTableColumn {
  key: string
  label: string
  sortable?: boolean
  filterable?: boolean
  align?: 'left' | 'center' | 'right'
  width?: string
}

export type SortDirection = 'asc' | 'desc' | null
