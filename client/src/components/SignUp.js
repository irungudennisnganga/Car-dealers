import React, { useState } from "react";
import './Signup.css'
import { useNavigate } from 'react-router-dom';

function SignUp({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [email, setEmail] = useState("");
  const navigate =useNavigate()


  function handleSubmit(e) {
    e.preventDefault();
    if (username && password && passwordConfirmation){
      fetch("https://cardealersgunicorn-app-app.onrender.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
          passwordConfirmation,
        }),
      }).then((r) => {
        if (r.ok) {
          r.json().then((user) => setUser(user));
          navigate('/')
        }else{
          <h1>Not able to sign up</h1>
        }
      });
      
    } else {
      window.alert("Fill the information to create an account with us!")
    }
   
  }

  return (
    <React.Fragment>
      <form className="form-get-in" onSubmit={handleSubmit}>
        <h1>Sign Up 🎁</h1>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <label htmlFor="password">Password Confirmation</label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
        <button type="submit">Sign Up 📡</button>
      </form>
      
    </React.Fragment>
  );
}

export default SignUp;
