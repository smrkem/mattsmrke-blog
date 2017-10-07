import React from 'react'
import { NavLink } from "react-router-dom";

const Menu = () => (
  <nav>
    <NavLink to="/" activeClassName="active" >Home</NavLink>
    <NavLink to="/page1" activeClassName="active" >Page 1</NavLink>
    <NavLink to="/page1" activeClassName="active" >Page 1</NavLink>
    <NavLink to="/posts" activeClassName="active" >Posts</NavLink>
    <NavLink to="/posts/" activeClassName="active" >Posts Slash</NavLink>
    <NavLink to="/posts/fds-sdfa-sd" activeClassName="active" >Single Post</NavLink>
  </nav>
)

export default Menu
