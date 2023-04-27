import React, { useState } from "react";
// import Header from "../../shell/src/components/Header";
// import Footer from "../../shell/src/components/Footer";
import "http://localhost:5003/index.js";

function Header({ children }: { children?: React.ReactNode }) {
  return (
    <header className="layout-header">
      <p>header imported from components/react/prime/header</p>
      {children}
    </header>
  );
}

function Footer({ children }: { children?: React.ReactNode }) {
  return (
    <footer className="layout-footer">
      <p>Footer imported from components/react/prime/footer</p>
      {children}
    </footer>
  );
}

const App = () => {
  const [count, setCount] = useState(0);

  const cta = () => {
    window.location.href = "/app1/users/add?initialValue=scoobydoo";
  };

  return (
    <>
      <Header>
        <p>Customized App2 Header</p>
      </Header>
      <main className="layout-main">
        <h1>App2: Counter App</h1>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <hr />
        <button onClick={cta}>CTA to app1 navigation example</button>
        <hr />
        <hello-world></hello-world>
      </main>
      <Footer>
        <p>App2 Footer content</p>
      </Footer>
    </>
  );
};

export default App;
