import { ChangeEvent } from 'react'
import styles from './switchButton.module.css'

type SwitchButtonProps = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const { switchButton, inputSwitch, labelSwitch } = styles

function SwitchButton({ onChange }: SwitchButtonProps) {
  return (
    <div className={switchButton}>
      <input
        type='checkbox'
        id='btn-switch'
        className={inputSwitch}
        onChange={onChange}
      />
      <label htmlFor='btn-switch' className={labelSwitch}></label>
    </div>
  )
}

export default SwitchButton
