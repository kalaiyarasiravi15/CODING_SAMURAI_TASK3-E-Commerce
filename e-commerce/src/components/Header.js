import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">ShopyKura</div>

      <nav className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/whyUs">Why Us</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/checkout" className="cart-btn">🛒 Cart</NavLink>
      </nav>
    </header>
  );
}

export default Header;
