import React from 'react'
import './App.css'

type DisplayType = {
  value: number
}

function Display({value}: DisplayType) {

  return (
    <div className='display-wrapper'>
      <div className={`display-count ${value === 5 ? 'red' : ''}`}>{value}</div>
    </div>
  )
}

export default Display
