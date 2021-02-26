import React from 'react'
import './App.css'

type ButtonType = {
  title: string
  value: number
  callback: () => void
}

function Button(props: ButtonType) {
  const clickHandler = () => {
    props.callback()
  }
  const disabled = (props.title === 'inc' && props.value >= 5)
    || (props.title === 'reset' && props.value === 0)

  return (
    <button
      className={`btn ${disabled ? 'disabled' : null}`}
      onClick={clickHandler}
      disabled={disabled}
    >
      {props.title}
    </button>
  )
}

export default Button
