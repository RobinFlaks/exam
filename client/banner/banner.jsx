import { Link } from "react-router-dom";
import { useLoader } from "../useLoader";
import * as React from "react";

export function Banner({ userApi }) {
  const { loading, error, data } = useLoader(async () => userApi.returnUser());

  if (loading) {
    return <div>Loading...</div>;
  }
  let div;
  if (data) {
    div = (
      <div>
        <Link to={{ pathname: "logout" }}>Logout</Link>
      </div>
    );
  } else {
    div = (
      <div>
        <Link to={{ pathname: "login" }}>Login?</Link> or{" "}
        <Link to={{ pathname: "register" }}>Register?</Link>
      </div>
    );
  }

  return (
    <div>
      <Link to={{ pathname: "" }}>back to front page</Link>
      {div}
    </div>
  );
}
