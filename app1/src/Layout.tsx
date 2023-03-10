import React from "react";
import { Outlet, Link } from "react-router-dom";
// import Header from "../../shell/src/components/Header";

function Header({ children }: { children?: React.ReactNode }) {
  return (
    <header className="layout-header">
      <p>header imported from components/react/prime/header</p>
      {children}
    </header>
  );
}

export default function Layout() {
  const baseUrl = "/app1";
  return (
    <>
      <Header>
        <nav>
          <ul>
            <li>
              <Link to={baseUrl + "/users"}>Users</Link>
            </li>
            <li>
              <Link to={baseUrl + "/users/add"}>Add user</Link>
            </li>
            <li>
              <Link to={baseUrl + "/nopehaha"}>Broken link example</Link>
            </li>
          </ul>
        </nav>
      </Header>
      <main className="layout-main">
        <Outlet />
      </main>
    </>
  );
}
