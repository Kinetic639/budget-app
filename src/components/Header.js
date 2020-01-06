import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className='nav-bar'>
      <NavLink activeClassName="active" exact to="/">
        Dashboard
      </NavLink>
      <NavLink to="/create">Create expense</NavLink>
      <NavLink to="/help">Help</NavLink>
    </nav>
  );
}
