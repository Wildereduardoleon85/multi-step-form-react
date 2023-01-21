import styles from './topBar.module.css'
import leftMountainIcon from '../../../assets/left-mountain-icon.svg' 
import rightMountainIcon from '../../../assets/right-mountain-icon.svg' 
import { sideBarStepsInfo } from '../../../constants'
import { useContext } from 'react'
import { StepContext } from '../../../context/StepContext'

const { topBar, circleContainer } = styles

function TopBar() {

  const {state: {step}} = useContext(StepContext)

  function setActiveClassName(index: number, isCircle: boolean) {
    if (step === index + 1 || (index + 1 === 4 && step === 5)) {
      return isCircle ? 'step-circle active-circle' : 'active-label'
    }
    return isCircle ? 'step-circle' : ''
  }

  return (
    <div className={topBar}>
      <img src={leftMountainIcon} alt="left-mountain-icon" />
      <img src={rightMountainIcon} alt="right-mountain-icon" />
      <div className={circleContainer}>
        <div>
          {sideBarStepsInfo.map((stepInfo, index) => (
          <div  key={stepInfo.id}>
            <div className={setActiveClassName(index, true)}>
              <p className={setActiveClassName(index, false)}>{stepInfo.id}</p>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TopBar
