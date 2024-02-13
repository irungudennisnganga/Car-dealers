import Allcars from "./Allcars";
import React  from "react";
import { Link } from "react-router-dom";
import './Home.css'
import Search from "./Search";

function Home({ user }) {
  if (user) {
    return <>
    <Search/>
    <Allcars/>
    
    </>
    
  } else {
    return (
      <React.Fragment>
      <h2 className="heading-logout">LOG IN OR SIGN UP TO CONTINUE WITH US !!</h2>
      <Link className="links" to="/signup">Signup</Link> 
      <Link className="links" to="/login">Login</Link> 
      <img className="image-login" alt="security" src="https://images.pexels.com/photos/4439425/pexels-photo-4439425.jpeg?auto=compress&cs=tinysrgb&w=600" />
      
      </React.Fragment>
    )
  }

  
}

export default Home;
