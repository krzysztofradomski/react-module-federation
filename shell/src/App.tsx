import React, { JSX } from "react";
import modules from "./../modules.json";

import app1Method from "app1/method";

const ModuleMap = {
  null: () => null,
  app1: React.lazy(() => import("app1/index")),
  app2: React.lazy(() => import("app2/index")),
};

if (Object.keys(modules).length !== Object.keys(ModuleMap).length - 1) {
  throw new Error("ModuleMap and modules.json are out of sync");
}

const ComponentsMap = {
  App2Button: React.lazy(() => import("app2/Button")),
};

const App = () => {
  const [module, setModule] = React.useState<JSX.Element | null>(null);
  const Module = ModuleMap[module];

  return (
    <div>
      <h1>shell</h1>
      <button onClick={() => setModule(null)}>no module</button>
      <button onClick={() => setModule("app1")}>app1</button>
      <button onClick={() => setModule("app2")}>app2</button>
      <div>
        <h2>selected module: {module}</h2>
        <React.Suspense fallback="Loading Modules...">
          <Module />
        </React.Suspense>
      </div>
      <div>
        <h2>other module exports:</h2>
        <React.Suspense fallback="Loading Components...">
          <ComponentsMap.App2Button onClick={app1Method} />
        </React.Suspense>
      </div>
    </div>
  );
};

export default App;
