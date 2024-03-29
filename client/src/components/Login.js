import React, { useState } from "react";
import './Login.css'
import { useNavigate } from 'react-router-dom';

function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate= useNavigate()

  function handleSubmit(e) {

    e.preventDefault();
    if (username && password){
      fetch("https://cardealersgunicorn-app-app.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }).then((r) => {
        if (r.ok) {
          r.json().then((user) => setUser(user));
          navigate('/')
        } else{
          <h1>Not able to login</h1>
        }
      });
    } else {
      window.alert("Enter password and username to continue>>>")
    }
   
  }

  return (
    <React.Fragment>
      <form className="form-get-in" onSubmit={handleSubmit}>
        <h1>Login ✔</h1>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login🔏</button>
      </form>
    
    </React.Fragment>
  );
}

export default Login;
