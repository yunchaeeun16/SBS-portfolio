import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import logo from "./img/logo/logo.png";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo" height="100px" width="100px" />
      </div>
      <div className="gnb">
        <ul>
          <li>
            <p>Shop</p>
            <ul>
              <li>
                <Link to="/shop-new" className="sub-menu">
                  New
                </Link>
              </li>
              <li>
                <Link to="/shop-best" className="sub-menu">
                  Best
                </Link>
              </li>
              <li>
                <Link to="/shop-collab" className="sub-menu">
                  Collaboration
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
