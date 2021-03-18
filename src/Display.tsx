import React from 'react'
import './App.css'

type DisplayType = {
  editMode: boolean
  error: boolean
  startValue: number
  maxValue: number
}

function Display({error, editMode, startValue, maxValue}: DisplayType) {
  return (
    <div className='display-wrapper'>
      {error ? <div className={'display-error'}>Invalid value</div> :
        editMode ? <div className={'display-message'}>Enter set to save changes</div> :
          <div className={`display-count ${startValue === maxValue ? 'red' : ''}`}>{startValue}</div>
      }
    </div>
  )
}

export default Display