import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../routes";

// this fucntion removes the trailing slash and asterisk from the path
const cleanUrl = (url: string) => url.replace(/\/\*$/, "");

export default function Nav() {
  return (
    <nav className="layout-nav">
      <ul>
        {ROUTES.map((route) => (
          <li key={route.path}>
            <NavLink to={cleanUrl(route.path)}>{cleanUrl(route.path)}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
