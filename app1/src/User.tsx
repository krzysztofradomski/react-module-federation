import React, { FormEvent } from "react";

export default function User({
  handleSubmit,
  users,
}: {
  users?: string[];
  handleSubmit?: (event: FormEvent<HTMLFormElement>) => void;
}) {
  const initialValue =
    new URLSearchParams(window.location.search).get("initialValue") || "";
  const slug = window.location.pathname.split("/").pop();
  const addUser = slug === "add";

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
          {slug && users?.includes(slug) ? (
            <>Viewing details for: {slug}</>
          ) : (
            "No user found"
          )}
        </p>
      )}
    </div>
  );
}
