export interface ChartDataPoint {
  label: string
  value: number
  color?: string
}

export type ChartType = 'bar' | 'line' | 'donut'
