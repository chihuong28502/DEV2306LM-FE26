import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

function Catalog() {
  // sử dụng activeClassName
  const activeClassName = ({ isActive }) => {
    return isActive ? "group-item selected" : "group-item";
  };

  //activeStyle
  const activeStyle = ({ isActive }) => {
    return {
      backgroundColor: isActive ? "red" : "blue",
      color: isActive ? "yellow" : "green",
    };
  };
  const navigate = useNavigate();
  return (
    <div className="">
      <ul className="list-group-item">
        <li>
          <NavLink to={"kid"} className={activeClassName} style={activeStyle}>
            Khóa học lập trình cho trẻ em
          </NavLink>
        </li>
        <li>
          <NavLink to={"web"} className={activeClassName} style={activeStyle}>
            Khóa học lập trình WebSite
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"mobile"}
            className={activeClassName}
            style={activeStyle}
          >
            Khóa học lập trình di động
          </NavLink>
        </li>
      </ul>
      <Outlet></Outlet>
      <button className="btn btn-success" onClick={() => navigate("/")}>
        Click Here
      </button>
    </div>
  );
}

export default Catalog;
