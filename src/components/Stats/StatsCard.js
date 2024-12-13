import React from "react";
import "../../styles/components/_stats.css";

// Passed data between components using props
function StatsCard({ number, description }) {
  return (
    <div className="stat">
      <h1>{number}</h1>
      <p>{description}</p>
    </div>
  );
}

export default StatsCard;
