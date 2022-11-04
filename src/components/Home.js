import { React } from "react";
import myImage from "./images/imagetwo.jpg";

const Home = () => {
  return (
    <div className="home">
      <h1
        className="home-h1"
        style={{ textAlign: "center", color: "cornflowerblue", fontWeight: "bold" }}
      >
        Welcome To My GitHub Repositories Page
      </h1>
      <p
        className="home-p"
        style={{ textAlign: "center", color: "black", fontWeight: "bold" }}
      >
        This is a page to showcase my github repositories
      </p>
      <div className="home-pic">
        <img
          className="home-img"
          src={myImage}
          alt="black man using a laptop"
          height="300px"
          width="100%"
          style={{ margin: "0px auto" }}
        />
      </div>
    </div>
  );
};

export default Home;
