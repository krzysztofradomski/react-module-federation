import React from "react";
import { NavLink as RouterLink } from "react-router-dom";
import { ROUTES } from "../routes";

export default function Nav() {
  return (
    <nav className="shell-nav">
      <ul>
        {ROUTES.map((route) => (
          <li key={route.path}>
            <RouterLink to={route.path}>{route.path}</RouterLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
