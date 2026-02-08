import type { DeepReadonly, InjectionKey, Ref } from 'vue'

export interface StepDefinition {
  title: string
  description?: string
  optional?: boolean
}

export interface MultiStepFormContext {
  currentStep: DeepReadonly<Ref<number>>
  totalSteps: DeepReadonly<Ref<number>>
  isFirstStep: DeepReadonly<Ref<boolean>>
  isLastStep: DeepReadonly<Ref<boolean>>
  next: () => void
  prev: () => void
  goTo: (step: number) => void
}

export const MULTI_STEP_FORM_KEY: InjectionKey<MultiStepFormContext> = Symbol('multi-step-form')
