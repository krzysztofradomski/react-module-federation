import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

export default function LandingPage() {
  const location = useLocation();
  const [renderOutlet, setRenderOutlet] = useState(false);

  useEffect(() => {
    if (location.pathname !== "/") {
      setRenderOutlet(true);
    }
  }, [location.pathname]);

  return renderOutlet ? (
    <Outlet />
  ) : (
    <main className="layout-main landing-page">shell landing page</main>
  );
}
