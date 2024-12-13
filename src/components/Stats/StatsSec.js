import React from 'react';
import "../../styles/components/_stats.css";
import StatsCard from "../Stats/StatsCard";
import { statsData } from "../../assets/assets";

function StatsSec() {
  return (
    <div className="stats-sec">
      {statsData.map((stat) => (
        <StatsCard
          key={stat.id}
          number={stat.number}
          description={stat.description}
        />
      ))}
    </div>
  );
}

export default StatsSec;
