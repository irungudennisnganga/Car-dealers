import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import NavBar from "./NavBar";
import Home from "./Home";
import Eachcard from "./Eachcard";
import About from "./About";
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/check_session").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        {user ? (
          <Routes>
            <Route path="/"element={<Home user={user}/>}/>
            <Route path="/cars/:id" element={<Eachcard />} />
            <Route path="/about" element={<About />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/signup" element={<SignUp setUser={setUser} />}/>
              
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
              
            
          </Routes>
        )}
      </main>
    </>
  );
}

export default App;
