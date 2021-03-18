import React, { useEffect, useState } from 'react'
import '../App.css'
import Display from '../Display'
import Button from '../Button'
import Settings from '../Settings'
import s from './Counter_2.module.css'

function Counter_2() {
  let [startValue, setStartValue] = useState(0)
  let [maxValue, setMaxValue] = useState(0)
  let [editMode, setEditMode] = useState(false)
  let [errorMax, setErrorMax] = useState(false)
  let [errorStart, setErrorStart] = useState(false)
  
  let error = errorMax || errorStart
  if (!maxValue && !startValue) {
    error = true
  }
  
  useEffect(() => {
    const newStartValue = localStorage.getItem('start-value')
    const newMaxValue = localStorage.getItem('max-value')
    
    if (newStartValue) {
      setStartValue(JSON.parse(newStartValue))
    }
    if (newMaxValue) {
      setMaxValue(JSON.parse(newMaxValue))
    }
  }, [])
  
  const increment = () => {
    setStartValue(++startValue)
  }
  const reset = () => {
    const startValue = localStorage.getItem('start-value')
    if (startValue) {
      setStartValue(+startValue)
    }
  }
  const set = () => {
    if (editMode) {
      localStorage.setItem('start-value', JSON.stringify(startValue))
      localStorage.setItem('max-value', JSON.stringify(maxValue))
      setEditMode(false)
    } else {
      setEditMode(true)
    }
  }
  
  const changeStartValue = (num: number) => {
    if (num >= maxValue || num < 0) {
      setErrorStart(true)
    } else if (num !== startValue) {
      setStartValue(num)
    } else {
      setErrorStart(false)
    }
  }
  
  const changeMaxValue = (num: number) => {
    if (num <= startValue || num < 0) {
      setErrorMax(true)
    } else if (num !== maxValue) {
      setMaxValue(num)
    } else {
      setErrorMax(false)
    }
  }
  
  return (
    <div className={s.container}>
      <div className={s.counter}>
        {editMode
          ?
          <Settings
            errorMax={errorMax}
            errorStart={errorStart}
            startValue={startValue}
            maxValue={maxValue}
            changeMaxValue={changeMaxValue}
            changeStartValue={changeStartValue}
          />
          : <Display
            className={s.displayWrapper}
            startValue={startValue}
            error={error}
            maxValue={maxValue}
            editMode={editMode}
          />
        }
        
        <div className={s.buttonsWrapper}>
          {!editMode ?
            <>
              <Button
                editMode={editMode}
                error={error}
                title={'inc'}
                startValue={startValue}
                maxValue={maxValue}
                callback={increment}
              />
              <Button
                editMode={editMode}
                error={error}
                title={'reset'}
                startValue={startValue}
                maxValue={maxValue}
                callback={reset}
              />
              <Button
                editMode={editMode}
                error={error}
                title={'set'}
                startValue={startValue}
                maxValue={maxValue}
                callback={set}
              />
            </>
            :
            <Button
              editMode={editMode}
              error={error}
              title={'set'}
              startValue={startValue}
              maxValue={maxValue}
              callback={set}
            />
          }
        </div>
      </div>
    </div>
  )
}

export default Counter_2
