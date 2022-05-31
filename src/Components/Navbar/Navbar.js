import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
      <div>
          <nav className="NavbarRoot">
              <div className="logo">
                  <p>MovieUpdater</p>
              </div>

              <div className='navlist'>
                  <ul>
                      <li> <a href="#">Home</a> </li>
                      <li> <a href="#">About</a> </li>
                      <li> <a href="#">Movie </a> </li>
                      <li> <a href="#">Login</a> </li>
                  </ul>
              </div>
          </nav>
    </div>
  )
}

export default Navbar