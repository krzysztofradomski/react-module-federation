import React from "react";
import { ContentRouter } from "../routes";
import ErrorBoundary from "./ErrorBoundary";

export default function Microfrontends() {
  return (
    <main className="layout-main ">
      <ErrorBoundary>
        <ContentRouter />
      </ErrorBoundary>
    </main>
  );
}
