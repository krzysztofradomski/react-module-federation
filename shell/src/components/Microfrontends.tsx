import React from "react";
import { ContentRouter } from "../routes";
import ErrorBoundary from "./ErrorBoundary";

export default function Microfrontends() {
  return (
    <>
      <ErrorBoundary>
        <ContentRouter />
      </ErrorBoundary>
    </>
  );
}
