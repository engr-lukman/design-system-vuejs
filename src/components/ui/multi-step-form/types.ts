export interface MultiStepFormStep {
  label: string
  description?: string
}

export type StepStatus = 'completed' | 'current' | 'upcoming'
