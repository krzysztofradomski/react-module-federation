import React, { useState } from "react";
import Header from "../../shell/src/components/Header";
import Footer from "../../shell/src/components/Footer";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header>
        <p>Customized App2 Header</p>
      </Header>
      <h1>App2: Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Footer>
        <p>App2 Footer content</p>
      </Footer>
    </div>
  );
};

export default App;
