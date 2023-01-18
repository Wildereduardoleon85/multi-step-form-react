import { ChangeEvent } from 'react'

export type SideBarStepsInfo = {
  id: number
  stepDescription: string
}

export type Validation = {
  isValid: boolean
  error: string
}

export type UseInput = {
  value: string
  error: string
  isValid: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onBlur: () => void
  reset: () => void
}

export type PlanBadge = {
  planName: string
  altText: string
  prize: {
    monthly: string
    yearly: string
  }
}

export type Subscription = 'monthly' | 'yearly'

export type SelectedPlan = 'arcade' | 'advanced' | 'pro'

export type Steps = 1 | 2 | 3 | 4
