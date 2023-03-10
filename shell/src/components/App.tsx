import React from "react";
import Nav from "./Nav";
import Microfrontends from "./Microfrontends";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="layout-wrapper">
        <Nav />
        <Microfrontends />
      </div>
    </BrowserRouter>
  );
};

export default App;
