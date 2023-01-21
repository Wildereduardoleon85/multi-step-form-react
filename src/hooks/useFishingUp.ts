import { useContext } from 'react'
import { planBadges } from '../constants'
import { StepContext } from '../context/StepContext'
import { AddOnsCardProps, PlanBadge, SummarizedAddOns } from '../types'
import { useAddOns } from './useAddOns'

export function useFishingUp() {
  const {
    state: { planType },
  } = useContext(StepContext)
  const addOns = useAddOns()
  const { selectedPlan, subscription } = planType

  const summarizedAddOns: SummarizedAddOns[] = []
  let selectedPlanPrize: string = ''

  addOns.forEach(
    ({ isActive, name, monthlyCost, yearlyCost }: AddOnsCardProps) => {
      if (isActive) {
        summarizedAddOns.push({ name, monthlyCost, yearlyCost })
      }
    }
  )

  planBadges.forEach((plan: PlanBadge) => {
    if (selectedPlan === plan.planName.toLowerCase()) {
      selectedPlanPrize =
        subscription === 'monthly' ? plan.prize.monthly : plan.prize.yearly
    }
  })

  function getAddOnsSelectedPrizes(): string[] {
    const addOnsSelectedPrizes: string[] = []
    addOns.forEach(({ isActive, monthlyCost, yearlyCost }) => {
      if (isActive) {
        if (subscription === 'monthly') {
          addOnsSelectedPrizes.push(monthlyCost)
        } else {
          addOnsSelectedPrizes.push(yearlyCost)
        }
      }
    })
    return addOnsSelectedPrizes
  }

  function getTotal(): number {
    const addOnsSelectedPrizes = getAddOnsSelectedPrizes()

    const totalPrizes = [...addOnsSelectedPrizes, selectedPlanPrize]
    const parsedTotalPrizes = totalPrizes.map((item) => {
      return Number(item)
    })

    return parsedTotalPrizes.reduce((acc, curr) => acc + curr, 0)
  }

  return {
    summarizedAddOns,
    selectedPlanPrize,
    totalPrize: getTotal(),
  }
}
