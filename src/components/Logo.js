import React from "react";
import logoSVG from "../utils/mysvgs/food delivery logo.svg";
import "./Logo.css";
import { NavLink } from "react-router-dom";

function Logo(props) {
  return (
    <div className="logo">
      <div className="logo-image">
        <img src={logoSVG} alt="" />
      </div>
      <p className="small-text">Pizza Drinks Desserts</p>
      <p className="middle-text">We deliver 24/7</p>
      <div className="submenu">
        <NavLink
          to="/about"
          className="submenu-item"
          activeClassName="submenu-item-active"
        >
          <div>About us</div>
        </NavLink>
        <NavLink
          to="/delivery"
          className="submenu-item"
          activeClassName="submenu-item-active"
        >
          <div>How we deliver</div>
        </NavLink>
        <NavLink
          to="/contacts"
          className="submenu-item"
          activeClassName="submenu-item-active"
        >
          <div>Contacts</div>
        </NavLink>
      </div>
      <p className="small-text">068259703</p>
    </div>
  );
}

export default Logo;
