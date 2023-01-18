import styles from './sideBar.module.css'
import { sideBarStepsInfo } from '../../constants'
import { Steps } from '../../types'

type SideBarProps = {
  step: Steps
}

const {
  sideBar,
  stepInfoContainer,
  stepCircle,
  stepDescription,
  activeCircle,
  activeLabel,
} = styles

function SideBar({ step }: SideBarProps) {
  return (
    <div className={sideBar}>
      {sideBarStepsInfo.map((stepInfo, index) => (
        <div className={stepInfoContainer} key={stepInfo.id}>
          <div
            className={`${stepCircle} ${
              step === index + 1 ? activeCircle : ''
            }`}
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
