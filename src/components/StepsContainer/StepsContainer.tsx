import SideBar from '../SideBar'
import StepContent from '../StepContent'
import styles from './stepsContainer.module.css'

function StepsContainer() {
  return (
    <main>
      <div className={styles.stepsContainer}>
        <SideBar />
        <StepContent />
      </div>
    </main>
  )
}

export default StepsContainer
