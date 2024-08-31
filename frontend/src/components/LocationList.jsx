
import React from 'react';
import './LocationList.css';

const LocationList = ({ locations }) => {
  if (!locations || locations.length === 0) {
    return <div>No locations available. Try searching.</div>;
  }

  return (
    <div className="location-list">
      <h2>Renewable Energy Locations</h2>
      <ul>
        {locations.map((location, index) => (
          <li key={index}>
            <h3>{location.name}</h3>
            <div className="card">
              <p><span className="label">Latitude:</span> <span className="value">{location.latitude}</span></p>
              <p><span className="label">Longitude:</span> <span className="value">{location.longitude}</span></p>
              <p><span className="label">Climate Conditions:</span> <span className="value">{location.climateConditions}</span></p>
              <p><span className="label">Water Supply:</span> <span className="value">{location.waterSupply ? 'Yes' : 'No'}</span></p>
              <p><span className="label">Low Carbon Emission:</span> <span className="value">{location.lowCarbonEmission ? 'Yes' : 'No'}</span></p>
              <p><span className="label">Other Factors:</span> <span className="value">{location.otherFactors}</span></p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationList;
