import styles from './sideBar.module.css'
import { sideBarStepsInfo } from '../../constants'
import { useContext } from 'react'
import { StepContext } from '../../context/StepContext'

const {
  sideBar,
  stepInfoContainer,
  stepDescription,
} = styles

function SideBar() {
  const {
    state: { step },
  } = useContext(StepContext)

  function setActiveClassName(index: number, isCircle: boolean) {
    if (step === index + 1 || (index + 1 === 4 && step === 5)) {
      return isCircle ? 'step-circle active-circle' : 'active-label'
    }
    return isCircle ? 'step-circle' : ''
  }

  return (
    <div className={sideBar}>
      {sideBarStepsInfo.map((stepInfo, index) => (
        <div className={stepInfoContainer} key={stepInfo.id}>
          <div className={setActiveClassName(index, true)}>
            <p className={setActiveClassName(index, false)}>{stepInfo.id}</p>
          </div>
          <div className={stepDescription}>
            <p>{`STEP ${stepInfo.id}`}</p>
            <p>{stepInfo.stepDescription}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SideBar
