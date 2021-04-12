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

function COUNTER_1() {
  const startValue = useSelector<IGlobalState, number>(state => state.counter.startValue)
  const maxValue = useSelector<IGlobalState, number>(state => state.counter.maxValue)
  const dispatch = useDispatch()
  
  const [editMode, setEditMode] = useState(false)
  const [currentValue, setCurrentValue] = useState(startValue)
  const [tempStartValue, setStartValue] = useState(startValue)
  const [tempMaxValue, setMaxValue] = useState(maxValue)
  
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
  
  const set = () => {
    setCurrentValue(tempStartValue)
    dispatch(ChangeStartValueAC(tempStartValue))
    dispatch(ChangeMaxValueAC(tempMaxValue))
    setEditMode(false)
  }
  
  const increment = () => {
    if (currentValue < maxValue) {
      setCurrentValue(state => state + 1)
    }
  }
  
  return (
    <div className='container'>
      <div className={'settings'}>
        <Settings
          startValue={tempStartValue}
          maxValue={tempMaxValue}
          setStartValue={setTempStartValue}
          setMaxValue={setTempMaxValue}
        />
        <div className='buttons-wrapper'>
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
        </div>
      </div>
      <div className={'counter'}>
        <Display
          currentValue={currentValue}
          startValue={startValue}
          maxValue={maxValue}
          tempStartValue={tempStartValue}
          tempMaxValue={tempMaxValue}
          editMode={editMode}
        />
        <div className='buttons-wrapper'>
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

export default COUNTER_1