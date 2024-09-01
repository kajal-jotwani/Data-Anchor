import React, { useState } from 'react';
import './EfficiencyCalculator.css';

const EfficiencyCalculator = () => {
  const [energyConsumed, setEnergyConsumed] = useState('');
  const [dataProcessed, setDataProcessed] = useState('');
  const [efficiency, setEfficiency] = useState(0);

  const handleCalculate = () => {
    const calculatedEfficiency = (dataProcessed / energyConsumed).toFixed(2);
    setEfficiency(calculatedEfficiency);
  };

  return (
    <div className="efficiency-calculator-wrapper">
      <h1 className="efficiency-calculator-title">Data Center Efficiency Calculator</h1>
      <p className="efficiency-calculator-description">
        This tool helps you estimate the efficiency of a data center by calculating the amount of data processed per unit of energy consumed. Enter the total energy consumed and data processed to determine the efficiency in terms of data processed per kilowatt-hour.
      </p>
      <div className="efficiency-calculator-container">
        <div className="efficiency-calculator-input-group">
          <label htmlFor="energyConsumed">Energy Consumed (kWh):</label>
          <input
            type="number"
            id="energyConsumed"
            value={energyConsumed}
            onChange={(e) => setEnergyConsumed(e.target.value)}
          />
        </div>
        <div className="efficiency-calculator-input-group">
          <label htmlFor="dataProcessed">Data Processed (TB):</label>
          <input
            type="number"
            id="dataProcessed"
            value={dataProcessed}
            onChange={(e) => setDataProcessed(e.target.value)}
          />
        </div>
        <button className="efficiency-calculator-btn" onClick={handleCalculate}>Calculate Efficiency</button>
        <div className="efficiency-calculator-result">
          <h2>Efficiency: {efficiency} TB/kWh</h2>
        </div>
      </div>
    </div>
  );
};

export default EfficiencyCalculator;
