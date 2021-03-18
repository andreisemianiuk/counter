import React from 'react'
import './App.css'

type ButtonType = {
  editMode?: boolean
  error?: boolean
  title: string
  startValue: number
  maxValue: number
  callback: () => void
}

function Button({error,editMode, title, startValue, maxValue, callback}: ButtonType) {
  const clickHandler = () => {
    callback()
  }
  const disabled = error || (editMode && error) || (title === 'inc' && startValue >= maxValue)
    || (title === 'reset' && maxValue !== startValue)
  
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
