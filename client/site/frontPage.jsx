import { Link } from "react-router-dom";
import * as React from "react";
import { useLoader } from "../useLoader";

export function FrontPage({userApi}) {
  const { loading, error, data } = useLoader( async() =>
    userApi.returnUser()
  );

  const user = data;

  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    return (
      <div style={{ border: "1px solid red", background: "Pink" }}>
        An error occurred: {error.toString()}
      </div>
    );
  }

  return (
    <div>
      <h2>welcome {user ? user.username : <h2>guest</h2>} </h2>
      <div>
        <Link to={{ pathname: "menu" }}>our menu</Link>
      </div>
    </div>
  );
}
