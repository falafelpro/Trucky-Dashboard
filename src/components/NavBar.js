import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import {
  UnsignedSidebarData,
  CompanySidebarData,
  AdminSidebarData,
} from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import authStore from "../stores/authStore";
import { Button } from "react-bootstrap";

function Navbar() {
  let navigate = useNavigate();

  const handleSignOut = (event) => {
    authStore.signout();
    navigate("/");
  };
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  //find away to filter out customer role
  const userSidebarContentbyRole = authStore.user
    ? authStore.user.role === "admin"
      ? AdminSidebarData
      : CompanySidebarData
    : UnsignedSidebarData;
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {userSidebarContentbyRole.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  {item.title === "Log Out" ? (
                    <Button onClick={handleSignOut}>Sign-out</Button>
                  ) : (
                    <Link Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
