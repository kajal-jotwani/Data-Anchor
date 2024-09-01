import React from 'react';
import './EfficiencyPerformance.css';

const EfficiencyPerformance = () => {
  return (
    <div className="efficiency-container">
      <div className="efficiency-card">
        <img
          src="efficiencyImage.png"
          alt="Efficiency of Scale"
        />
        <div className="efficiency-content">
          <h2>Efficiency of Scale</h2>
          <p>
          Our platform uses advanced analytics to optimize the placement of renewable data centers, improving resource utilization and energy efficiency. Cloud infrastructure can be up to 4.1 times more efficient and reduce carbon footprints by 99%, surpassing traditional setups."
          </p>
        </div>
      </div>
      <div className="efficiency-card">
        <img
          src="performance.png"
          alt="Predicting Performance"
        />
        <div className="efficiency-content">
          <h2>Predicting Performance</h2>
          <p>
          Our app forecasts performance and carbon emissions for data center sites using advanced modeling and real-time weather data. We optimize operations for efficiency and minimal environmental impact, continuously monitoring and adjusting to meet sustainability targets
          </p>
        </div>
      </div>
      <div className="efficiency-card">
        <img
          src="cooling.png"
          alt="Cooling Efficiency"
        />
        <div className="efficiency-content">
          <h2>Cooling Efficiency</h2>
          <p>
          Our project identifies locations with renewable energy sources like rivers and lakes to enhance data center cooling efficiency. We use advanced cooling systems and real-time sensor data to adapt to seasonal changes, ensuring high efficiency and sustainability
          </p>
        </div>
      </div>
      <div className="efficiency-card">
        <img
          src="power.png"
          alt="Power Efficiency"
        />
        <div className="efficiency-content">
          <h2>Power Efficiency</h2>
          <p>
          Our strategy integrates renewable energy sources like solar and wind with advanced storage solutions. We use energy-efficient hardware, cooling systems, and passive solar techniques to reduce power consumption. Real-time energy management optimizes energy use, ensuring sustainable and efficient data centers
          </p>
        </div>
      </div>
    </div>
  );
};

export default EfficiencyPerformance;
