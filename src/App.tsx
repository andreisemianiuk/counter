import React, { useState } from 'react'
import './App.css'
import Display from './Display'
import Button from './Button'

function App() {
  let [value, setValue] = useState<number>(0)

  const increment = () => {
    setValue(++value)
  }

  const reset = () => {
    setValue(0)
  }

  return (
    <div className='container'>
      <div className='counter'>
        <Display value={value}/>
        <div className='buttons-wrapper'>
          <Button title={'inc'} value={value} callback={increment}/>
          <Button title={'reset'} value={value} callback={reset}/>
        </div>
      </div>
    </div>
  )
}

export default App
