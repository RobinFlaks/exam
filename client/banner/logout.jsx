import React from "react";
import { useNavigate } from "react-router-dom";

export function Logout({ userApi }) {
  const navigate = useNavigate();

  function handleSubmit() {
    userApi.logout();
    navigate("/");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button>Logout</button>
      </form>
    </div>
  );
}
