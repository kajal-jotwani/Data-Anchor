import React, { useState } from 'react';
import './CarbonEmissionCalculator.css';

const CarbonEmissionCalculator = () => {
  const [energyConsumed, setEnergyConsumed] = useState('');
  const [energyType, setEnergyType] = useState('solar');
  const [emission, setEmission] = useState(0);

  const handleCalculate = () => {
    const emissionFactors = {
      solar: 0.05,
      wind: 0.02,
      hydro: 0.01,
      coal: 0.98,
      gas: 0.46,
    };

    const calculatedEmission = (energyConsumed * emissionFactors[energyType]).toFixed(2);
    setEmission(calculatedEmission);
  };

  return (
    <div className="carbon-emission-calculator-wrapper">
      <h1 className="carbon-emission-calculator-heading">Carbon Emission Calculator</h1>
      <p className="carbon-emission-calculator-description">
        This tool helps you estimate the amount of carbon dioxide (CO2) emissions produced based on the energy consumed and the type of energy source. Select the energy type and enter the energy consumed to calculate the total emissions in kilograms of CO2.
      </p>
      <div className="carbon-emission-calculator-container">
        <div className="carbon-emission-calculator-input-group">
          <label htmlFor="energyConsumed">Energy Consumed (kWh):</label>
          <input
            type="number"
            id="energyConsumed"
            value={energyConsumed}
            onChange={(e) => setEnergyConsumed(e.target.value)}
          />
        </div>
        <div className="carbon-emission-calculator-input-group">
          <label htmlFor="energyType">Energy Type:</label>
          <select
            id="energyType"
            value={energyType}
            onChange={(e) => setEnergyType(e.target.value)}
          >
            <option value="solar">Solar</option>
            <option value="wind">Wind</option>
            <option value="hydro">Hydro</option>
            <option value="coal">Coal</option>
            <option value="gas">Natural Gas</option>
          </select>
        </div>
        <button className="carbon-emission-calculator-btn" onClick={handleCalculate}>Calculate Emission</button>
        <div className="carbon-emission-calculator-result">
          <h2>Total Emission: {emission} kg CO2</h2>
        </div>
      </div>
    </div>
  );
};

export default CarbonEmissionCalculator;
