import React, { useState } from "react";
import axios from "../api/api-sever";

function CreateUser() {
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const handleClickUser = async () => {
    let users = { userName: userName, password: pass };
    await axios.post("users", users);
    
  };
  
  return (
    <div>
      <h1>them moi</h1>
      <hr />
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">
          name
        </span>
        <input
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          class="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={userName}
        />
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon2">
          pass
        </span>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="text"
          class="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <button className="btn btn-primary" onClick={handleClickUser}>
        Click me
      </button>
    </div>
  );
}

export default CreateUser;
