import Allcars from "./Allcars";
import React  from "react";
import { Link } from "react-router-dom";
function Home({ user }) {
  if (user) {
    return <Allcars />
    
  } else {
    return (
      <React.Fragment>
      <h2 className="heading">LOG IN OR SIGN UP TO CONTINUE WITH US !!</h2>
      <Link className="links" to="/signup">Signup</Link> <br />
      <Link className="links" to="/login">Login</Link> <br />
      <img className="image-login" alt="security" src="https://media.istockphoto.com/id/164090163/photo/security-button-key.jpg?s=2048x2048&w=is&k=20&c=Ysf0idsuJZOO2u2XFL8iAjWU1N4FQJ_rg6OO6ZCzYbs=" />
      
      </React.Fragment>
    )
  }

  
}

export default Home;
