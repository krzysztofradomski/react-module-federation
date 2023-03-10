import React from "react";
import Nav from "./Nav";
import Main from "./Microfrontends";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="layout-wrapper">
        <Nav />
        <Main />
      </div>
    </BrowserRouter>
  );
};

export default App;
