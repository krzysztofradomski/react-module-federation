import React, { Fragment, lazy, Suspense } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { Timer } from "./components/ErrorBoundary";
import LandingPage from "./components/LandingPage";
import NoMatch from "./components/NoMatch";

type Component =
  | React.FunctionComponent<any>
  | React.LazyExoticComponent<React.FunctionComponent<any>>;

const ModuleMap: Record<string, Component> = {
  app1: lazy(() => import("app1/App")),
  app2: lazy(() => import("app2/App")),
};

type RouteType = {
  path: string;
  key: string;
  Component: Component;
  name?: string;
  subRoutes?: RouteType[];
};

export const ROUTES: RouteType[] = [
  ...Object.entries(ModuleMap).map(([key]) => {
    return {
      path: key + "/*",
      key,
      Component: ModuleMap[key],
      subRoutes: [],
    };
  }),
];

function LazyPage({ route }: { route: RouteType }) {
  return (
    <Suspense fallback={<Timer waitingFor={route.name || route.path} />}>
      <route.Component />
    </Suspense>
  );
}

function renderRoutes(routes: RouteType[]) {
  return (
    <Fragment>
      {routes.map((route) => (
        <Fragment key={route.key}>
          <Route path={route.path} element={<LazyPage route={route} />} />
          {route.subRoutes && renderRoutes(route.subRoutes)}
        </Fragment>
      ))}
    </Fragment>
  );
}

export const ContentRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}>
        {renderRoutes(ROUTES)}
      </Route>
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};
