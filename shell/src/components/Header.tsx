import React from "react";

export default function Header({ children }: { children?: React.ReactNode }) {
  return (
    <header className="layout-header">
      <p>header imported from components/react/prime/header</p>
      {children}
    </header>
  );
}
