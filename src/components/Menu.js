import React from "react";
import "./Menu.css";
import { NavLink } from "react-router-dom";

function Menu(props) {
  return (
    <div className="menu">
      <NavLink to="/" className="menu-item" activeClassName='menu-item-selected'>
        <div className="menu-item">Home</div>
      </NavLink>
      <NavLink to="/pizzas" className="menu-item" activeClassName='menu-item-selected'>
        <div >Pizzas</div>
      </NavLink>
      <NavLink to="/salads" className="menu-item" activeClassName='menu-item-selected'>
        <div >Salads</div>
      </NavLink>
      <NavLink to="/soups" className="menu-item" activeClassName='menu-item-selected'>
        <div >Soups</div>
      </NavLink>
      <NavLink to="/desserts" className="menu-item" activeClassName='menu-item-selected'>
        <div>Desserts</div>
      </NavLink>
      <NavLink to="/drinks" className="menu-item" activeClassName='menu-item-selected'>
        <div >Drinks</div>
      </NavLink>
    </div>
  );
}

export default Menu;
