import React from "react";
import { Link } from "react-router-dom";

export default function Users({ users }: { users: string[] }) {
  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user}>
            <Link to={window.location.pathname + "/" + user}>{user}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
