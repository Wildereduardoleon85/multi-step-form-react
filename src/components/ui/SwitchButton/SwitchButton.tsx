import { ChangeEvent, useEffect, useState } from 'react'
import { generateUUID } from '../../../utils'
import styles from './switchButton.module.css'

type SwitchButtonProps = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  defaultChecked?: boolean
}

const { switchButton, inputSwitch, labelSwitch } = styles

function SwitchButton({ onChange, defaultChecked = false }: SwitchButtonProps) {
  const [id, setId] = useState('')

  useEffect(() => {
    setId(generateUUID())
  }, [])

  return (
    <div className={switchButton}>
      <input
        defaultChecked={defaultChecked}
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
