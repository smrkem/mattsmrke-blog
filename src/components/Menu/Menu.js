import React from 'react'
import { NavLink } from "react-router-dom";

const Menu = () => (
  <nav>
    <NavLink to="/" activeClassName="active" >Home</NavLink>
    <NavLink to="/page1" activeClassName="active" >Page 1</NavLink>
    <NavLink to="/page2" activeClassName="active" >Page 2</NavLink>
  </nav>
)

export default Menu
