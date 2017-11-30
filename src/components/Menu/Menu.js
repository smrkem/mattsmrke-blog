import React from 'react'
import { NavLink } from "react-router-dom"
import './Menu.css'

const Menu = () => (
  <nav id="site-menu">
    <NavLink id="site-brand" to="/" activeClassName="active" >
      Matt Smrke's<br />Blog
    </NavLink>

    <NavLink to="/page1" className="nav-item ms-red" activeClassName="active" >Learning Resources</NavLink>
    <div className="horizontal-separator"></div>
    <NavLink to="/machine-learning-posts" className="nav-item ms-orange" activeClassName="active" >Machine Learning Adventures</NavLink>
    <div className="horizontal-separator"></div>
    <NavLink to="/posts" className="nav-item ms-pink" activeClassName="active" >Statistics 101</NavLink>
    <div className="horizontal-separator"></div>
    <NavLink to="/posts" className="nav-item ms-blue" activeClassName="active" >My Rants</NavLink>
    <div className="horizontal-separator"></div>
    <NavLink to="/posts" className="nav-item ms-green" activeClassName="active" >About Me</NavLink>
  </nav>
)

export default Menu
