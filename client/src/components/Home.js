import Allcars from "./Allcars";
import React  from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Home({ user }) {
  if (user) {
    return <Allcars />
    
  } else {
    return (
      <React.Fragment>
      <h2 className="heading-logout">LOG IN OR SIGN UP TO CONTINUE WITH US !!</h2>
      <Link className="links" to="/signup">Signup</Link> <br />
      <Link className="links" to="/login">Login</Link> <br />
      <img className="image-login" alt="security" src="https://media.istockphoto.com/id/948503822/vector/alarm-clock-screaming-deadline-word-time-limit-vector-illustration-on-a-white-background.jpg?s=2048x2048&w=is&k=20&c=R16qNSZF8E87xHzhAf1RCN8_tTzkP90JpXgQyRmPtPI=" />
      
      </React.Fragment>
    )
  }

  
}

export default Home;
