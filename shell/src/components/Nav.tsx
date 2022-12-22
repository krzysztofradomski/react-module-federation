import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../routes";

export default function Nav() {
  return (
    <nav className="shell-nav">
      <ul>
        {ROUTES.map((route) => (
          <li key={route.path}>
            <NavLink to={route.path}>{route.path}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
