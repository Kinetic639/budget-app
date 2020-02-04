import { NavLink } from "react-router-dom";
import React from "react";

const Header = () => {
  return (
    <div>
      <header className="nav-bar">
        <h1>Expensify</h1>
        <NavLink activeClassName="active" exact to="/">
          Dashboard
        </NavLink>
        <NavLink to="/create">Create expense</NavLink>
        <NavLink to="/help">Help</NavLink>
      </header>
    </div>
  );
};

export default Header;
