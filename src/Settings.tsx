import React, { ChangeEvent, useEffect, useState } from 'react'
import './App.css'

type SettingsType = {
  errorMax: boolean
  errorStart: boolean
  startValue: number
  maxValue: number
  changeStartValue: (num: number) => void
  changeMaxValue: (num: number) => void
}

function Settings(props: SettingsType) {
  let [startValue, setStartValue] = useState(0)
  let [maxValue, setMaxValue] = useState(0)
  
  useEffect(() => {
    let newStartValue = localStorage.getItem('start-value')
    let newMaxValue = localStorage.getItem('max-value')
    if (newStartValue) {
      setStartValue(JSON.parse(newStartValue))
    }
    if (newMaxValue) {
      setMaxValue(JSON.parse(newMaxValue))
    }
  }, [])
  
  const changeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
    const num = +e.currentTarget.value
    setStartValue(num)
    props.changeStartValue(num)
  }
  const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
    const num = +e.currentTarget.value
    setMaxValue(num)
    props.changeMaxValue(num)
  }
  
  return (
    <div className='settings-wrapper'>
      <div className={'settings-input-wrapper'}>
        max value:
        <input
          className={`settings-input ${props.errorMax ? 'error' : ''}`}
          type={'number'}
          value={maxValue}
          onChange={changeMaxValue}
        />
      </div>
      <div className={'settings-input-wrapper'}>
        start value:
        <input
          className={`settings-input ${props.errorStart ? 'error' : ''}`}
          type={'number'}
          value={startValue}
          onChange={changeStartValue}
        />
      </div>
    </div>
  )
}

export default Settings
