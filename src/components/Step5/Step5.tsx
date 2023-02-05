import styles from './step5.module.css'
import iconThankyou from '../../assets/icon-thank-you.svg'

const { container } = styles

function Step5() {
  return (
    <div className={container}>
      <div>
        <img src={iconThankyou} alt='icon-thank-you' width={80} height={80}/>
        <h2 className='stepTitle'>Thank you!</h2>
        <p className='stepSubtitle'>
          Thanks for confirming your subscription! We hope you have fun using
          our plataform. If you ever need support, please fell free to email us
          at support@loremgaming.com
        </p>
      </div>
    </div>
  )
}

export default Step5
