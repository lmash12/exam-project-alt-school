import { React } from "react";
import myImage from "./images/black-tee.jpg";

const Home = () => {
  return (
    <div className="home">
     <div className="homeUi">
     <div className="intro-image">
      <img src={myImage} alt="my face shot" height="300px" width="300px" style={{borderRadius: "50%", shapeOutside: "circle(50%)"}}/>
      </div>
      <div className="intro-p">
        <h1 style={{paddingLeft: "40px", paddingBottom: "20px"}}>Hi, I'm Lesley</h1>
        <h2 style={{paddingLeft: "40px"}}>I love to build Web Apps</h2>
        <p style={{paddingLeft: "40px", fontWeight: "bold", color: "gray"}}>FrontEnd Developer/ ReactJs / VueJs</p>
        <a href="https://github.com/lmash12" target="_blank" rel="noreferrer">
          <button style={{marginLeft: "40px",  border: "none", height: "30px", width: "100px", fontWeight: "500"}}>Follow +</button>
        </a>
        <div className="article">
          <a href="https://medium.com/@lesleymashaya/documenting-my-reactjs-application-a397ef97a3d9" target="_blank" rel="noreferrer">Click</a>
        </div>
      </div>
     </div>
    </div>
  );
};

export default Home;
