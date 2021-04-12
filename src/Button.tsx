import React from 'react'
import './App.css'

type ButtonType = {
  editMode?: boolean
  title: string
  startValue: number
  maxValue: number
  tempStartValue: number
  tempMaxValue: number
  currentValue: number
  callback: () => void
}

function Button(props: ButtonType) {
  const {editMode, title, startValue, maxValue, tempStartValue, tempMaxValue, currentValue, callback} = props
  const clickHandler = () => {
    callback()
  }
  const disabled = (editMode && title !== 'set')
    || (startValue === currentValue && title === 'reset')
    || (title === 'inc' && currentValue === maxValue)
    || (title === 'set' && tempStartValue < 0 || tempMaxValue <= tempStartValue)
  // || (title === 'set' && !editMode)
  return (
    <button
      className={`btn ${disabled ? 'disabled' : null}`}
      onClick={clickHandler}
      disabled={disabled}
    >
      {title}
    </button>
  )
}

export default Button
