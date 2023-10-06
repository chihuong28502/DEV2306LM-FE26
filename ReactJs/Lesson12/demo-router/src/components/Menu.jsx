import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link  className="nav-link" to={"/"}>Trang chủ</Link>
          </li>
          <li className="nav-item">
            <Link  className="nav-link" to={"/About"}>About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link"  to={"/Catalog"}>Catalog</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Menu;
