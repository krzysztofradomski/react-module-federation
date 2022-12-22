import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="shell-wrapper">
        <Header />
        <Nav />
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
