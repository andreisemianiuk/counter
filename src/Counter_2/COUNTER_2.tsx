import React, { useState } from 'react'
import '../App.css'
import Display from '../Display'
import Button from '../Button'
import Settings from '../Settings'
import { useDispatch, useSelector } from 'react-redux'
import { IGlobalState } from '../redux/state'
import {
  ChangeMaxValueAC,
  ChangeStartValueAC,
} from '../redux/actions'
import s from './Counter_2.module.css'

function COUNTER_2() {
  const startValue = useSelector<IGlobalState, number>(state => state.counter.startValue)
  const maxValue = useSelector<IGlobalState, number>(state => state.counter.maxValue)
  const dispatch = useDispatch()
  
  const [editMode, setEditMode] = useState(false)
  const [currentValue, setCurrentValue] = useState(startValue)
  const [tempStartValue, setStartValue] = useState(startValue)
  const [tempMaxValue, setMaxValue] = useState(maxValue)
  
  const set = () => {
    if (editMode) {
      dispatch(ChangeStartValueAC(tempStartValue))
      dispatch(ChangeMaxValueAC(tempMaxValue))
      setCurrentValue(tempStartValue)
      setEditMode(false)
    } else {
      setEditMode(true)
    }
  }
  const reset = () => {
    setCurrentValue(startValue)
  }
  const setTempStartValue = (num: number) => {
    setStartValue(num)
    setEditMode(true)
  }
  const setTempMaxValue = (num: number) => {
    setMaxValue(num)
    setEditMode(true)
  }
  const increment = () => {
    if (currentValue < maxValue) {
      setCurrentValue(value => value + 1)
    }
  }
  
  return (
    <div className={s.container}>
      <div className={s.counter}>
        {editMode ?
          <div className={s.settingsWrapper}>
            <Settings
              className={s.settings}
              startValue={tempStartValue}
              maxValue={tempMaxValue}
              setStartValue={setTempStartValue}
              setMaxValue={setTempMaxValue}
            />
          </div>
          : <Display
            currentValue={currentValue}
            startValue={startValue}
            maxValue={maxValue}
            tempStartValue={tempStartValue}
            tempMaxValue={tempMaxValue}
            editMode={editMode}
          />
        }
        <div className={s.buttonsWrapper}>
          <Button
            title={'set'}
            editMode={editMode}
            startValue={startValue}
            tempStartValue={tempStartValue}
            tempMaxValue={tempMaxValue}
            maxValue={maxValue}
            currentValue={currentValue}
            callback={set}
          />
          <Button
            editMode={editMode}
            title={'inc'}
            startValue={startValue}
            maxValue={maxValue}
            tempStartValue={tempStartValue}
            tempMaxValue={tempMaxValue}
            currentValue={currentValue}
            callback={increment}
          />
          <Button
            editMode={editMode}
            title={'reset'}
            startValue={startValue}
            maxValue={maxValue}
            tempStartValue={tempStartValue}
            tempMaxValue={tempMaxValue}
            currentValue={currentValue}
            callback={reset}
          />
        </div>
      </div>
    </div>
  )
}

export default COUNTER_2