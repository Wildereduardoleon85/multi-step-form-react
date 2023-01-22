import { useMediaQuery } from '../../hooks'
import SideBar from '../ui/SideBar'
import StepContent from '../StepContent'
import TopBar from '../ui/TopBar'
import styles from './stepsContainer.module.css'

function StepsContainer() {
  const { isMobile } = useMediaQuery()
  return (
    <main>
      {isMobile && <TopBar />}
      <div className={styles.stepsContainer}>
        <SideBar />
        <StepContent />
      </div>
    </main>
  )
}

export default StepsContainer
