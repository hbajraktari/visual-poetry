import React from "react";
import "../styles/components/_mission.css";
import images from "../assets/assets";

function Mission() {
  return (
    <div className="mission-sec">
      <h2>What We Do</h2>
      <div className="mission-container">
        <img src={images.poets} alt="poets" className="ms-imgs" />
        <h1>
          <span className="ms-text">VerseVisions</span>, wants to revolves around
          fostering creativity and connection. We provide a space for poets and
          artists to share their creations, collaborate on projects, and explore
          new ways to express themselves. By featuring diverse styles and
          themes, we ensure there’s something for everyone to discover and
          enjoy."
        </h1>
      </div>
    </div>
  );
}

export default Mission;
