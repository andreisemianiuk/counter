import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  const [open, setOpen] = useState(false)
  
  const showMenu = () => {
    setOpen(true)
  }
  const hideMenu = () => {
    setOpen(false)
  }
  
  
  return (
    <div className={open ? 'wrapperIsNavOpen' : 'headerWrapper'} onMouseOver={showMenu} onMouseOut={hideMenu}>
      <div className={'nav'}>
        <div className={'icon'}>menu</div>
        <div className={'navBody'}>
          <NavLink className={'link'} activeClassName={'activeLink'} to={'/counter_1'}>counter_1</NavLink>
          <NavLink className={'link'} activeClassName={'activeLink'} to={'/counter_2'}>counter_2</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Header
