import React, { FormEvent } from "react";

export default function User({
  handleSubmit,
}: {
  handleSubmit?: (event: FormEvent<HTMLFormElement>) => void;
}) {
  const initialValue =
    new URLSearchParams(window.location.search).get("initialValue") || "";
  const deepPath = window.location.pathname.split("/").pop();
  const addUser = deepPath === "add";
  return (
    <div>
      <h2>User</h2>
      {addUser ? (
        <form onSubmit={handleSubmit}>
          <input type="text" defaultValue={initialValue} />
          <button type="submit">Add user</button>
        </form>
      ) : (
        <p>
          {deepPath ? <>Viewing details for: {deepPath}</> : "No user found"}
        </p>
      )}
    </div>
  );
}
