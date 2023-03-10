import React from "react";

export default function Footer({ children }: { children?: React.ReactNode }) {
  return (
    <footer className="layout-footer">
      <p>Footer imported from components/react/prime/footer</p>
      {children}
    </footer>
  );
}
