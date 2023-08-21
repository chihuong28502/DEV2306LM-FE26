import React from 'react'


function Header(props) {
  return (
    <header className="bg-black position-relative header-form-login justify-content-between align-items-center header container-fluid row">
      <nav className="header-nav">
      <ul style={{listStyle:'none'}} className="header-nav-list ">
      {props.text}
      </ul>
      </nav>
    </header>
  )
}

export default Header
