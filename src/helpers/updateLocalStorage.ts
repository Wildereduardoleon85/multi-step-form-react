import { LocalStorageMultiStepKeys, PersonalInfo } from '../types'

function setLocalStorageInfo(info: Object) {
  localStorage.setItem('multi-step', JSON.stringify(info))
}

function updateItem(keyItem: LocalStorageMultiStepKeys, item: any) {
  if (localStorage.getItem('multi-step')) {
    const storedInfo = JSON.parse(localStorage.getItem('multi-step') as string)
    const updatedInfo = {
      ...storedInfo,
      [keyItem]: item,
    }
    setLocalStorageInfo(updatedInfo)
    return
  }
  setLocalStorageInfo({ [keyItem]: item })
}

export function getPersonalInfoFromLS() {
  if (localStorage.getItem('multi-step')) {
    return (
      JSON.parse(localStorage.getItem('multi-step') as string).personalInfo ||
      null
    )
  }
  return null
}

export function getPlanTypefoFromLS() {
  if (localStorage.getItem('multi-step')) {
    return (
      JSON.parse(localStorage.getItem('multi-step') as string).planType || null
    )
  }
  return null
}

export function updatePersonalInfoInLS(personalInfo: PersonalInfo): void {
  updateItem('personalInfo', personalInfo)
}

export function updatePlanInLS(planType: any) {
  updateItem('planType', planType)
}
