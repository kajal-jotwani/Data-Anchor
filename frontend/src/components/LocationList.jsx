import React from 'react';
import './LocationList.css';

const LocationList = ({ locations }) => {
  if (!locations || locations.length === 0) {
    return <div>No locations available.</div>;
  }

  

  return (
    <div className="location-list">
      <h2>Renewable Energy Locations</h2>
      <ul>
        {locations.map((location) => (
          <li key={location._id}>
            <h3>{location.name}</h3>
            <p>Latitude: {location.latitude}</p>
            <p>Longitude: {location.longitude}</p>
            <p>Climate Conditions: {location.climateConditions}</p>
            <p>Water Supply: {location.waterSupply ? 'Yes' : 'No'}</p>
            <p>Low Carbon Emission: {location.lowCarbonEmission ? 'Yes' : 'No'}</p>
            <p>Other Factors: {location.otherFactors}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationList;
