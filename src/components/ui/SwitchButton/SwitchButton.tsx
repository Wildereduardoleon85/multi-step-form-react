import { ChangeEvent, useEffect, useState } from 'react'
import { generateUUID } from '../../../utils'
import styles from './switchButton.module.css'

type SwitchButtonProps = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const { switchButton, inputSwitch, labelSwitch } = styles

function SwitchButton({ onChange }: SwitchButtonProps) {
  const [id, setId] = useState('')

  useEffect(() => {
    setId(generateUUID())
  }, [])

  return (
    <div className={switchButton}>
      <input
        type='checkbox'
        id={id}
        className={inputSwitch}
        onChange={onChange}
      />
      <label htmlFor={id} className={labelSwitch}></label>
    </div>
  )
}

export default SwitchButton
