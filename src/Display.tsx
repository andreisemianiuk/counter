import React from 'react'
import './App.css'

type DisplayType = {
  className?: string
  editMode: boolean
  currentValue: number
  startValue: number
  maxValue: number
  tempStartValue: number
  tempMaxValue: number
}

function Display(props: DisplayType) {
  
  const {className, tempStartValue, tempMaxValue, editMode, maxValue, currentValue} = props
  const error = tempStartValue < 0 || tempMaxValue <= tempStartValue
  return (
    <div className={className ? className : 'display-wrapper'}>
      {error ? <div className={'display-error'}>Invalid value</div> :
        editMode ? <div className={'display-message'}>Enter set to save changes</div> :
          <div className={`display-count ${currentValue === maxValue ? 'red' : ''}`}>{currentValue}</div>
      }
    </div>
  )
}

export default Display
