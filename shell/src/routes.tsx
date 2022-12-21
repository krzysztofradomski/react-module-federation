import React, { Fragment, lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import modules from "../modules.json";

// import app1Method from "enrico/method";

const ModuleMap = {
  app1: lazy(() => import("app1/index")),
  app2: lazy(() => import("app2/index")),
};

if (Object.keys(modules).length !== Object.keys(ModuleMap).length) {
  throw new Error("Shell routes and modules are out of sync");
}

type RouteType = {
  path: string;
  key: string;
  Component: React.ReactNode;
  subRoutes: RouteType[];
};

export const ROUTES: RouteType[] = [
  {
    path: "/",
    key: "ROOT",
    Component: <p>shell landing page</p>,
    subRoutes: [],
  },
  ...Object.entries(modules).map(([key]) => {
    return {
      path: key,
      key,
      Component: ModuleMap[key],
      subRoutes: [],
    };
  }),
];

function LazyPage({ route }: { route: RouteType }) {
  return (
    <section>
      <Suspense fallback="loading...">{<route.Component />}</Suspense>
    </section>
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
  return <Routes>{renderRoutes(ROUTES)}</Routes>;
};
