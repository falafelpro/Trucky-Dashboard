import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as IcoMoon from "react-icons/im";
import * as MaterialDesign from "react-icons/md";

export const CompanySidebarData = [
  {
    title: "Home",
    path: "/home",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Map",
    path: "/map",
    icon: <FaIcons.FaMapMarkedAlt />,
    cName: "nav-text",
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <IcoMoon.ImProfile />,
    cName: "nav-text",
  },
  {
    title: "Menu",
    path: "/menu",
    icon: <MaterialDesign.MdRestaurantMenu />,
    cName: "nav-text",
  },
  {
    title: "Log Out",
    path: "/",
    icon: <FaIcons.FaSignOutAlt />,
    cName: "nav-text",
  },
];

export const UnsignedSidebarData = [
  {
    title: "About Us",
    path: "/about",
    icon: <FaIcons.FaInfoCircle />,
    cName: "nav-text",
  },
  {
    title: "Sign-In",
    path: "/signIn",
    icon: <FaIcons.FaSignInAlt />,
    cName: "nav-text",
  },
  {
    title: "Contact Us",
    path: "/contact",
    icon: <FaIcons.FaPhoneSquareAlt />,
    cName: "nav-text",
  },
];

export const AdminSidebarData = [
  {
    title: "Creat Truck Profile",
    path: "/creat-truck",
    icon: <FaIcons.FaTruck />,
    cName: "nav-text",
  },

  {
    title: "Log Out",
    path: "/",
    icon: <FaIcons.FaSignOutAlt />,
    cName: "nav-text",
  },
];
