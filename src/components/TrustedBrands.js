import React from "react";
import "../styles/components/_tb.css";
import { brands } from "../assets/assets";
import "../styles/main.css";

function TrustedBrands() {
    const brandImages = Object.values(brands);
    return (
        <div className="trusted-sec">
          {/* <h1>Inspired by Art, Powered by Trust</h1> */}
          <div className="row-container">
            {brandImages.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Brand ${index + 1}`}
              />
            ))}
          </div>
        </div>
      );
    }

export default TrustedBrands;
