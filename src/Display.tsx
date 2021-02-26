import React from 'react'
import './App.css'

type DisplayType = {
  value: number
}

function Display(props: DisplayType) {

  return (
    <div className='display-wrapper'>
      <div className={`display-count ${props.value === 5 ? 'red' : ''}`}>{props.value}</div>
    </div>
  )
}

export default Display
