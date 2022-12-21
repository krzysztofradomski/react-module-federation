import React from "react";
import { ContentRouter } from "./../routes";

export default function Main() {
  return (
    <main className="shell-main">
      <p>Shell Main</p>
      {/* <ErrorBoundary> */}
      <ContentRouter />
      {/* </ErrorBoundary> */}
    </main>
  );
}
