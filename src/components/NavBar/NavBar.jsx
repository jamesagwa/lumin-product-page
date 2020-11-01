import React from "react";

import { useAppContext } from '../../hooks'
import "./style.css";

export function NavBar() {
  const { showCart } = useAppContext()

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <h1>LUMIN</h1>
        </div>
        <nav className="nav">
          <ul className="nav-list left-nav">
            <li>Shop</li>
            <li>Learn</li>
          </ul>
          <ul className="nav-list right-nav">
            <li>Account</li>
            <li style={{ cursor: 'pointer'}} onClick={showCart}>Cart</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
