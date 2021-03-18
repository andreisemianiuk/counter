import React from 'react'
import './App.css'
import Routes from './Routes'
import Header from './Header'
import { HashRouter } from 'react-router-dom'

function App() {
  
  return (
    <div className='main-container'>
      <HashRouter>
        <Header/>
        <Routes/>
      </HashRouter>
    </div>
  )
}

export default App
