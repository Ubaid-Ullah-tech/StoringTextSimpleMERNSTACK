import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <NavLink to='/' className="navbar-brand" >TODOAPP</NavLink>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-3 mb-lg-0">
        <li className="nav-item">
          <NavLink to='/' className="nav-link active" aria-current="page" >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/about' className="nav-link" >About</NavLink>
        </li>
        
      </ul>
     
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
