import React from 'react'
import './App.css'

type DisplayType = {
  className?: string
  editMode: boolean
  error: boolean
  startValue: number
  maxValue: number
}

function Display({className,error, editMode, startValue, maxValue}: DisplayType) {
  return (
    <div className={className ? className : 'display-wrapper'}>
      {error ? <div className={'display-error'}>Invalid value</div> :
        editMode ? <div className={'display-message'}>Enter set to save changes</div> :
          <div className={`display-count ${startValue === maxValue ? 'red' : ''}`}>{startValue}</div>
      }
    </div>
  )
}

export default Display
