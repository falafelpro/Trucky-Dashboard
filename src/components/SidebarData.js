import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as IcoMoon from "react-icons/im";
import * as MaterialDesign from "react-icons/md";

export const SidebarData = [
  {
    title: "Sign-In",
    path: "/signIn",
    icon: <FaIcons.FaSignInAlt />,
    cName: "nav-text",
  },
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
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
    title: "Team",
    path: "/team",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Messages",
    path: "/messages",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];
