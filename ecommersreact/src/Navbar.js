import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" >
   TARGET
  </a>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">
          HOME 
        </Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/cart">
          CART
        </Link>
      </li>
     
      
     
    </ul>
    
  </div>
</nav>


    </div>
  )
}

export default Navbar