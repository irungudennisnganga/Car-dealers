import Allcars from "./Allcars";
function Home({ user }) {
  if (user) {
    return <Allcars />
    
  } else {
    return <h1>Login or Sign Up</h1>;
  }

  // return <dennis />
}

export default Home;
