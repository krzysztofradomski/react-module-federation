import React from "react";
import { Link } from "react-router-dom";

export default function NoMatch() {
  return (
    <main className="layout-main landing-page">
      <h2>Page not found</h2>
      <p>
        <Link to={window.location.pathname}>Go to the home page</Link>
      </p>
    </main>
  );
}
