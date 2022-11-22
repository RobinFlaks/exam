import { useState } from "react";
import { fetchJSON } from "../useLoader";
import { useNavigate } from "react-router-dom";

export function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    await fetchJSON("/api/general/users", {
      method: "post",
      json: { username, password },
    });

    setUsername("");
    setPassword("");

    navigate("/");
  }

  return (
    <div>
      <h3>register:</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            {" "}
            username:{" "}
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            {" "}
            password:{" "}
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <button>Register</button>
      </form>
    </div>
  );
}
