import React, { useState, FormEvent } from "react";
import { Routes, Route, BrowserRouter, redirect } from "react-router-dom";
import User from "./User";
import Users from "./Users";
import NoMatch from "./NoMatch";
import Layout from "./Layout";

function App() {
  const [users, setUsers] = useState<string[]>([]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const user = (event.currentTarget.elements[0] as HTMLInputElement).value;
    setUsers((prevState) => [...prevState, user]);
    event.currentTarget.reset();
    if (window.location.search) {
      window.location.search = "";
    }
  };

  if (window.location.pathname.indexOf("/users") === 0) {
    redirect("/users");
  }
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Users users={users} />} />
        <Route path="/users" element={<Users users={users} />} />
        <Route
          path="/users/add"
          element={<User handleSubmit={handleSubmit} />}
        />
        <Route path="/users/*" element={<User />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default window.location.pathname
  ? App
  : () => (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
