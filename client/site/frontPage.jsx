import { Link } from "react-router-dom";
import * as React from "react";
import { useLoader } from "../useLoader";

export function FrontPage({ userApi }) {
  const { loading, error, data } = useLoader(async () => userApi.returnUser());

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>welcome {data ? data[0].username : "guest"} </h2>
      <div>
        <Link to={{ pathname: "menu" }}>our menu</Link>
      </div>
    </div>
  );
}
