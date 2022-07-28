import React from 'react'
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
        <NavLink to='/login'>Login</NavLink>
        <span> | </span>
        <NavLink to='/'>Home</NavLink>
    </div>
  )
}

export default Header