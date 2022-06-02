import React from 'react'
import logo from './images/logo.png'

function Navbar() {
  return (
      <>
          <div style={{ height: "20px", display: "flex", backgroundColor: "#ffff", width:'100%'}}>
            <img src={logo} alt="logo" style={{position: 'absolute', top:"20px", left:'20px'}} />
          </div>
      </>
  )
}

export default Navbar