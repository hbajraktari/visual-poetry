import React from "react";
import "../styles/pages/_home.css";
import images from "../assets/assets";
import "../styles/main.css";
import 'animate.css';
import StatsSec from "../components/Stats/StatsSec";
import AboutSec from "../components/AboutSec";
import VisualPoems from "../components/VisualPoems";
import Mission from "../components/Mission";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

function Home() {
  return (
    <div>
      <div className="hero-sec">
      <div className="hero-s">
        <div className="context">
          <p className="animate__animated animate__fadeInLeft">
            Step into a realm where words and visuals dance together, weaving
            stories that stir the soul.
          </p>
          <h1 className="animate__animated animate__fadeIn">
            " The world speaks in words, but poetry <span className="underline-design">whispers <img src={images.underlineDesign} alt="doodle design"/></span> through
            images. "
          </h1>
          <div className="animate__animated animate__fadeInLeft">
          <button className=" main-btn">GET STARTED</button>
          </div>
        </div>
        <div className="image-container">
        <div className="content">
          <img src={images.swan} alt="visual text swan"/>
        </div>
        </div>
      </div>
    </div>
    <StatsSec />
    <AboutSec />
    <Mission />
    <VisualPoems />
    <Contact />
    <Footer />
    </div>
  );
}

export default Home;
