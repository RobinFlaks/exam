import React, {useState} from "react";
import { useNavigate } from "react-router-dom";


function FormInput({value, label, onChangeValue}){
  return(
      <div>
        <label>
          {label}:{" "}
          <input value={value} onChange={(e) => onChangeValue(e.target.value)}/>
        </label>
      </div>
  )
}

export function Register({userApi}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    userApi.registerUser({username, password});

    setUsername("");
    setPassword("");

    navigate("/");
  }

  return (
    <div>
      <h3>register:</h3>
      <form onSubmit={handleSubmit}>
        <FormInput label={"username"} value={username} onChangeValue={setUsername}/>
        <FormInput label={"password"} value={password} onChangeValue={setPassword}/>
        <button>Register</button>
      </form>
    </div>
  );
}
