import React from 'react'
import './App.css'

type ButtonType = {
  title: string
  value: number
  callback: () => void
}

function Button({title,value,callback}: ButtonType) {
  const clickHandler = () => {
    callback()
  }
  const disabled = (title === 'inc' && value >= 5)
    || (title === 'reset' && value === 0)

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
