import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
import ThemeEx from "./ThemeEx";
import { useNavigate } from "react-router-dom";

function NavBar({ user, setUser }) {
  const history =useNavigate()
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
        history('/login')
      }
    });
  }

  return (
    <header>
      <div className="main">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/cars">Add car</Link>
        
      </div>
      <ThemeEx />
      <div>
        {user ? (
          <button onClick={handleLogoutClick}>Logout</button>
        ) : (
          <>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
            
          </>
        )}
      </div>
    </header>
  );
}

export default NavBar;
