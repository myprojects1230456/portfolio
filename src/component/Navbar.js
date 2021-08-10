import { div } from 'prelude-ls'
import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../images/Nature_Logo.png"
import "../App.css";
const Navbar = () => {
    return(
   
        <>
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light ms-auto ">
    <NavLink className="navbar-brand ms-auto" to="/Home">
        <img src={logo} alt="Logo" height="70" width="100"/>
    </NavLink>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto" >
        
        <li className="nav-item active">
          <NavLink className="nav-link" to="/Login">Login </NavLink>
        </li>
       
        <li className="nav-item">
          <NavLink className="nav-link" to="/Signup">Signup</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink className="nav-link" to="/About">About</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink className="nav-link" to="/Calculator">Calculator</NavLink>
          </li>

         
        
     </ul>
     
    </div>
  </nav>  
  
      </>
        )
}
export default Navbar 