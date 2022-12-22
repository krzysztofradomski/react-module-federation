import React, { useState, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { NavLink } from "react-router-dom";

type BoundaryProps = {
  children?: React.ReactNode;
};

export default function Boundary({ children }: BoundaryProps) {
  return (
    <ErrorBoundary FallbackComponent={FallbackComponent}>
      {children}
    </ErrorBoundary>
  );
}

const FallbackComponent = ({ error, resetErrorBoundary }) => {
  return (
    <div>
      <p>An error occurred: {error.message}</p>
      <button onClick={resetErrorBoundary}>Try again</button>
      <button onClick={resetErrorBoundary}>
        <NavLink to="/">Back to homepage</NavLink>
      </button>
    </div>
  );
};

export const Timer = ({ waitingFor = "unknown" }) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (time === 5) {
    throw new Error("Could not load: " + waitingFor);
  }

  return <div>Loading{[...Array(time)].map((n) => ".")}</div>;
};
