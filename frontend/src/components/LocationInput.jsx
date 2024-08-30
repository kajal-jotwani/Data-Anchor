import React, { useState } from 'react';
import './LocationInput.css';

const LocationInput = ({ onAddLocation }) => {
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location.trim()) {
      onAddLocation(location);
      setLocation('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="location-form">
      <input 
        type="text" 
        value={location} 
        onChange={(e) => setLocation(e.target.value)} 
        placeholder="Enter location name" 
        className="location-input"
      />
      <button type="submit" className="location-button">Add Location</button>
    </form>
  );
};

export default LocationInput;
