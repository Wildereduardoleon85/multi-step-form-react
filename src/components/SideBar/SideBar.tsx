import styles from './sideBar.module.css'
import { sideBarStepsInfo } from '../../constants'
import { useContext } from 'react'
import { StepContext } from '../../context/StepContext'

const {
  sideBar,
  stepInfoContainer,
  stepCircle,
  stepDescription,
  active,
  activeLabel,
} = styles

function SideBar() {
  const {
    state: { step },
  } = useContext(StepContext)

  return (
    <div className={sideBar}>
      {sideBarStepsInfo.map((stepInfo, index) => (
        <div className={stepInfoContainer} key={stepInfo.id}>
          <div
            className={
              step === index + 1 ? `${stepCircle} ${active}` : stepCircle
            }
          >
            <p className={`${step === index + 1 ? activeLabel : ''}`}>
              {stepInfo.id}
            </p>
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
