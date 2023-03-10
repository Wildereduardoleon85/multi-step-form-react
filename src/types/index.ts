import { ChangeEvent, Ref, RefObject } from 'react'

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

export type SummarizedAddOns = {
  name: string
  monthlyCost: string
  yearlyCost: string
}

export interface AddOns extends SummarizedAddOns {
  description: string
}

export type Subscription = 'monthly' | 'yearly'

export type SelectedPlan = 'arcade' | 'advanced' | 'pro'

export type Steps = 1 | 2 | 3 | 4 | 5

export type AddOnsCardAttrs = {
  [char: string]: {
    ref: RefObject<HTMLInputElement>
    isActive: boolean
    onCardClick: () => void
    defaultChecked: boolean
  }
}

export interface AddOnsCardProps extends AddOns {
  isActive: boolean
  onCardClick: () => void
  defaultChecked: boolean
}

export interface AddOnsCardInfo extends AddOnsCardProps {
  ref: Ref<HTMLInputElement>
}

export type PersonalInfo = {
  name: string
  email: string
  phone: string
}

export type LocalStorageMultiStepKeys = 'personalInfo' | 'planType' | 'addOns'

export type PlanType = {
  selectedPlan: SelectedPlan
  subscription: Subscription
}

export type StepState = {
  step: Steps
  personalInfo: PersonalInfo
  planType: PlanType
  addOns: {
    isOnLineService: boolean
    isLargerStorage: boolean
    isCustomizableProfile: boolean
  }
}

export type FormInputDefaultAttrs = {
  name: string
  type: string
  placeholder: string
  label: string
}

export interface FormInputDynamicAttrs extends FormInputDefaultAttrs {
  error: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onBlur: () => void
  value: string
}

export type FormAttrsByName = {
  [char: string]: {
    error: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    onBlur: () => void
    value: string
  }
}
